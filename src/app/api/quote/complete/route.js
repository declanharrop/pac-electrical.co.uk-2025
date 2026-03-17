import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { cf_turnstile_response, sessionId } = body;

    console.log('--- DEBUG: START SUBMISSION ---');
    console.log('Session ID:', sessionId);
    console.log('Turnstile Token Exists:', !!cf_turnstile_response);

    const secretKey = process.env.TURNSTILE_SECRET_KEY;

    // 1. Verify Turnstile with Cloudflare
    const verifyUrl =
      'https://challenges.cloudflare.com/turnstile/v0/siteverify';
    const verifyResponse = await fetch(verifyUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${secretKey}&response=${cf_turnstile_response}`,
    });

    const verifyData = await verifyResponse.json();
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
          debugCodes: verifyData['error-codes'],
        },
        { status: 400 },
      );
    }

    // 2. Final Zapier Trigger
    const zapierResponse = await fetch(process.env.ZAPIER_FINAL_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (zapierResponse.ok) {
      return NextResponse.json({ status: 'success' });
    }
    console.error('Zapier Response Error Status:', zapierResponse.status);
    return NextResponse.json(
      { status: 'error', message: 'Zapier delivery failed.' },
      { status: 500 },
    );
  } catch (error) {
    console.error('CRITICAL API ERROR:', error);
    return NextResponse.json(
      { status: 'error', message: 'Internal Server Error' },
      { status: 500 },
    );
  }
}
