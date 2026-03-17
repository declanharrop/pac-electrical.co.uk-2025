// src/app/api/quote/partial/route.js
import { NextResponse } from 'next/server';

export async function POST(request) {
  console.log('🟢 API ROUTE HIT: /api/quote/partial');

  try {
    const body = await request.json();
    console.log('📦 DATA RECEIVED FROM FRONTEND:', body);

    if (!body.sessionId || !body.name || !body.phone) {
      console.log('🔴 VALIDATION FAILED: Missing fields');
      return NextResponse.json(
        { status: 'error', message: 'Missing required fields' },
        { status: 400 },
      );
    }

    const zapierPayload = {
      ...body,
      formStage: 'partial_lead',
      timestamp: new Date().toISOString(),
    };

    const ZAPIER_WEBHOOK_URL = process.env.ZAPIER_PARTIAL_WEBHOOK_URL;
    console.log(
      '🔗 ZAPIER URL LOADED:',
      ZAPIER_WEBHOOK_URL ? 'YES' : 'NO (Check .env file)',
    );

    if (!ZAPIER_WEBHOOK_URL) {
      throw new Error(
        'Zapier Webhook URL is not defined in environment variables.',
      );
    }

    console.log('🚀 SENDING TO ZAPIER...');
    const response = await fetch(ZAPIER_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(zapierPayload),
    });

    if (!response.ok) {
      throw new Error(`Zapier responded with status: ${response.status}`);
    }

    console.log('✅ SUCCESSFULLY SENT TO ZAPIER');
    return NextResponse.json({ status: 'success' });
  } catch (error) {
    console.error('🔴 ERROR IN API ROUTE:', error.message);
    return NextResponse.json({ status: 'warning', error: error.message });
  }
}
