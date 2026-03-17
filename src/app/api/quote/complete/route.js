import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      cf_turnstile_response,
      sessionId,
      addressLine1,
      addressLine2,
      county,
      postcode,
      coordinates,
      elecUsage,
      homeSize,
      heardFrom,
      details,
    } = body;

    // 1. Verify Turnstile with Cloudflare
    const verifyUrl =
      'https://challenges.cloudflare.com/turnstile/v0/siteverify';
    const verifyResponse = await fetch(verifyUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${process.env.TURNSTILE_SECRET_KEY}&response=${cf_turnstile_response}`,
    });

    const verifyData = await verifyResponse.json();

    if (!verifyData.success) {
      return NextResponse.json(
        { status: 'error', message: 'Security check failed.' },
        { status: 400 },
      );
    }

    const zapierResponse = await fetch(process.env.ZAPIER_FINAL_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (zapierResponse.ok) {
      return NextResponse.json({ status: 'success' });
    }
    return NextResponse.json({ status: 'error' }, { status: 500 });
  } catch (error) {
    console.error('Final submission error:', error);
    return NextResponse.json({ status: 'error' }, { status: 500 });
  }
}
