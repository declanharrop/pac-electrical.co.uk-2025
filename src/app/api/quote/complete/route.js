import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { cf_turnstile_response, sessionId } = body;

    // DEBUG 1: Did the token actually arrive?
    console.log('--- DEBUG: START SUBMISSION ---');
    console.log('Session ID:', sessionId);
    console.log('Turnstile Token Exists:', !!cf_turnstile_response);

    // DEBUG 2: Check if Environment Variable is loaded (logs first 4 chars only for safety)
    const secretKey = process.env.TURNSTILE_SECRET_KEY;
    console.log(
      'Secret Key Loaded:',
      secretKey
        ? `Yes (starts with ${secretKey.substring(0, 4)})`
        : 'NO - IT IS UNDEFINED',
    );

    // 1. Verify Turnstile with Cloudflare
    const verifyUrl =
      'https://challenges.cloudflare.com/turnstile/v0/siteverify';
    const verifyResponse = await fetch(verifyUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${secretKey}&response=${cf_turnstile_response}`,
    });

    const verifyData = await verifyResponse.json();

    // DEBUG 3: What did Cloudflare actually say?
    console.log('Cloudflare Response Data:', JSON.stringify(verifyData));

    if (!verifyData.success) {
      console.error(
        'Cloudflare Verification Failed. Error Codes:',
        verifyData['error-codes'],
      );
      return NextResponse.json(
        {
          status: 'error',
          message: 'Security check failed.',
          debugCodes: verifyData['error-codes'], // Sending this back to the frontend temporarily can help too
        },
        { status: 400 },
      );
    }

    // 2. Final Zapier Trigger
    console.log('Verification Success. Sending to Zapier...');
    const zapierResponse = await fetch(process.env.ZAPIER_FINAL_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (zapierResponse.ok) {
      console.log('Zapier Response OK');
      return NextResponse.json({ status: 'success' });
    }
    console.error('Zapier Response Error:', zapierResponse.status);
    return NextResponse.json({ status: 'error' }, { status: 500 });
  } catch (error) {
    console.error('CRITICAL API ERROR:', error);
    return NextResponse.json({ status: 'error' }, { status: 500 });
  }
}
