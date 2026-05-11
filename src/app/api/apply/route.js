import { NextResponse } from 'next/server';

const CLICKUP_API = 'https://api.clickup.com/api/v2';

export async function POST(request) {
  try {
    const apiToken = process.env.CLICKUP_API_TOKEN;
    const listId = process.env.CLICKUP_LIST_ID;

    if (!apiToken || !listId) {
      console.error('🚨 Missing CLICKUP_API_TOKEN or CLICKUP_LIST_ID');
      return NextResponse.json(
        { status: 'error', message: 'Server configuration error.' },
        { status: 500 },
      );
    }

    let formData;
    try {
      formData = await request.formData();
    } catch {
      return NextResponse.json(
        { status: 'error', message: 'Invalid form data received.' },
        { status: 400 },
      );
    }

    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const position = formData.get('position');
    const cv = formData.get('cv');

    if (!name || !email || !phone || !position) {
      return NextResponse.json(
        { status: 'error', message: 'Missing required fields.' },
        { status: 400 },
      );
    }

    if (!cv || typeof cv === 'string' || !cv.arrayBuffer) {
      return NextResponse.json(
        { status: 'error', message: 'Missing or invalid CV file.' },
        { status: 400 },
      );
    }

    const MAX_FILE_SIZE = 10 * 1024 * 1024;
    if (cv.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { status: 'error', message: 'CV file is too large. Maximum size is 10MB.' },
        { status: 400 },
      );
    }

    // 1. Create the ClickUp task
    const taskPayload = {
      name: `Application: ${position} — ${name}`,
      description: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nPosition: ${position}`,
      status: 'inbox',
    };

    const taskResponse = await fetch(`${CLICKUP_API}/list/${listId}/task`, {
      method: 'POST',
      headers: {
        Authorization: apiToken,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(taskPayload),
    });

    if (!taskResponse.ok) {
      const err = await taskResponse.text();
      console.error('🚨 ClickUp task creation failed:', err);
      return NextResponse.json(
        { status: 'error', message: 'Failed to create ClickUp task.' },
        { status: 502 },
      );
    }

    const task = await taskResponse.json();
    const taskId = task.id;
    console.log(`✅ ClickUp task created: ${taskId}`);

    // 2. Attach the CV to the task
    const bytes = await cv.arrayBuffer();
    const cvFile = new File([bytes], cv.name, { type: cv.type || 'application/octet-stream' });

    const attachmentFormData = new FormData();
    attachmentFormData.append('attachment', cvFile);

    const attachResponse = await fetch(`${CLICKUP_API}/task/${taskId}/attachment`, {
      method: 'POST',
      headers: {
        Authorization: apiToken,
      },
      body: attachmentFormData,
    });

    if (!attachResponse.ok) {
      const err = await attachResponse.text();
      console.error('🚨 ClickUp attachment failed:', err);
    } else {
      console.log('✅ CV attached to ClickUp task.');
    }

    return NextResponse.json({ status: 'success' });
  } catch (error) {
    console.error('🚨 CRITICAL API ERROR (apply):', error);
    return NextResponse.json(
      { status: 'error', message: 'An unexpected internal error occurred.' },
      { status: 500 },
    );
  }
}
