import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    // 1. ENVIRONMENT CHECK
    const zapierUrl = process.env.ZAPIER_BILL_WEBHOOK_URL;
    if (!zapierUrl) {
      console.error(
        '🚨 CRITICAL: Missing ZAPIER_BILL_WEBHOOK_URL in environment variables!',
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

    const file = formData.get('bill');
    const sessionId = formData.get('sessionId');

    // 3. VALIDATE INPUTS & DATA TYPES
    if (!sessionId) {
      console.warn('⚠️ Upload rejected: Missing Session ID');
      return NextResponse.json(
        { status: 'error', message: 'Missing Session ID' },
        { status: 400 },
      );
    }

    // Ensure 'file' actually exists and is a File object
    if (!file || typeof file === 'string' || !file.arrayBuffer) {
      console.warn('⚠️ Upload rejected: Missing or invalid file format');
      return NextResponse.json(
        { status: 'error', message: 'Missing or invalid file.' },
        { status: 400 },
      );
    }

    // 4. ENFORCE FILE SIZE LIMIT (10MB)
    const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB in bytes
    if (file.size > MAX_FILE_SIZE) {
      console.warn(
        `⚠️ Upload rejected: File too large (${(file.size / 1024 / 1024).toFixed(2)} MB)`,
      );
      return NextResponse.json(
        {
          status: 'error',
          message: 'File is too large. Maximum size is 10MB.',
        },
        { status: 400 },
      );
    }

    // 5. THE FIX: Extract raw bytes and reconstruct the file
    // This prevents Next.js from mangling the binary stream in transit
    const bytes = await file.arrayBuffer();
    const pristineBlob = new Blob([bytes], { type: file.type });

    // 6. PREPARE ZAPIER PAYLOAD AS MULTIPART FORMDATA
    const zapierFormData = new FormData();
    zapierFormData.append('sessionId', sessionId);
    zapierFormData.append('fileName', file.name);
    zapierFormData.append('fileType', file.type);

    // Append the newly constructed blob with the original file name
    zapierFormData.append('file', pristineBlob, file.name);

    // 7. SEND DIRECTLY TO ZAPIER
    console.log(
      `⏳ Sending pristine binary file '${file.name}' to Zapier for session ${sessionId}...`,
    );

    const zapierResponse = await fetch(zapierUrl, {
      method: 'POST',
      // DO NOT set 'Content-Type' header; fetch handles the boundary automatically for FormData
      body: zapierFormData,
    });

    if (zapierResponse.ok) {
      console.log('✅ Successfully delivered bill to Zapier!');
      return NextResponse.json({ status: 'success' });
    }

    console.error(
      `🚨 Zapier rejected the file. Status: ${zapierResponse.status} ${zapierResponse.statusText}`,
    );
    return NextResponse.json(
      { status: 'error', message: 'Failed to deliver file to our systems.' },
      { status: 502 },
    );
  } catch (error) {
    // 8. CATCH-ALL FAILSAFE
    console.error('🚨 CRITICAL API ERROR (upload-bill):', error);
    return NextResponse.json(
      { status: 'error', message: 'An unexpected internal error occurred.' },
      { status: 500 },
    );
  }
}
