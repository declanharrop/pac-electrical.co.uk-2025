import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    // 1. ENVIRONMENT CHECK
    const zapierUrl = process.env.ZAPIER_EV_SURVEY_WEBHOOK_URL;
    if (!zapierUrl) {
      console.error(
        '🚨 CRITICAL: Missing ZAPIER_EV_SURVEY_WEBHOOK_URL in environment variables!',
      );
      return NextResponse.json(
        { status: 'error', message: 'Server configuration error.' },
        { status: 500 },
      );
    }

    // 2. SAFELY PARSE THE REQUEST
    let formData;
    try {
      formData = await request.formData();
    } catch (parseError) {
      console.error('🚨 Failed to parse form data:', parseError);
      return NextResponse.json(
        { status: 'error', message: 'Invalid form data received.' },
        { status: 400 },
      );
    }

    const sessionId = formData.get('sessionId');

    if (!sessionId) {
      console.warn('⚠️ Upload rejected: Missing Session ID');
      return NextResponse.json(
        { status: 'error', message: 'Missing Session ID' },
        { status: 400 },
      );
    }

    // 3. PREPARE THE OUTGOING ZAPIER PAYLOAD
    const zapierFormData = new FormData();
    zapierFormData.append('sessionId', sessionId);

    // We define the keys exactly as they were appended in the React component
    const photoKeys = ['meter', 'consumerUnit', 'cable1', 'cable2', 'cable3'];

    // 4. PROCESS EACH PHOTO & PREVENT CORRUPTION
    for (const key of photoKeys) {
      const file = formData.get(key);

      // Validate that the file exists and is actually a File object
      if (!file || typeof file === 'string' || !file.arrayBuffer) {
        console.warn(`⚠️ Upload rejected: Missing or invalid file for ${key}`);
        return NextResponse.json(
          { status: 'error', message: `Missing required photo: ${key}.` },
          { status: 400 },
        );
      }

      // The Fix: Extract raw bytes and reconstruct the file as a pristine Blob
      // This prevents Next.js from mangling the binary stream in transit
      const bytes = await file.arrayBuffer();
      const pristineBlob = new Blob([bytes], { type: file.type });

      // Append the clean blob to our Zapier payload using the original filename
      zapierFormData.append(key, pristineBlob, file.name);
    }

    // 5. SEND TO ZAPIER
    console.log(
      `⏳ Sending 5 EV survey photos to Zapier for session ${sessionId}...`,
    );

    const zapierResponse = await fetch(zapierUrl, {
      method: 'POST',
      // We rely on fetch to auto-generate the correct multipart boundary headers
      body: zapierFormData,
    });

    if (zapierResponse.ok) {
      console.log('✅ Successfully delivered EV survey to Zapier!');
      return NextResponse.json({ status: 'success' });
    }

    console.error(
      `🚨 Zapier rejected the survey payload. Status: ${zapierResponse.status} ${zapierResponse.statusText}`,
    );
    return NextResponse.json(
      { status: 'error', message: 'Failed to deliver files to our systems.' },
      { status: 502 },
    );
  } catch (error) {
    // 6. CATCH-ALL FAILSAFE
    console.error('🚨 CRITICAL API ERROR (upload-ev-survey):', error);
    return NextResponse.json(
      { status: 'error', message: 'An unexpected internal error occurred.' },
      { status: 500 },
    );
  }
}
