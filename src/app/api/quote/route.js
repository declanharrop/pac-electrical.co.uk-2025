import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    // 1. Parse the incoming JSON data from the client
    const data = await request.json();

    // 2. (Optional) Basic Server-Side Validation
    // It's good practice to ensure required fields exist before sending to Zapier
    if (!data.email || !data.name) {
      return NextResponse.json(
        { status: 'error', message: 'Missing required fields' },
        { status: 400 },
      );
    }

    // 3. Define your secret Zapier Webhook URL
    // In a real production app, you should put this in .env.local (e.g. process.env.ZAPIER_WEBHOOK_URL)
    // For now, we will move it here so it is hidden from the client.
    const ZAPIER_ENDPOINT =
      'https://hooks.zapier.com/hooks/catch/11615843/2z5b76r/';

    // 4. Send the data to Zapier
    const zapierResponse = await fetch(ZAPIER_ENDPOINT, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // 5. Check if Zapier accepted it
    if (!zapierResponse.ok) {
      throw new Error('Failed to send data to Zapier');
    }

    const zapierResult = await zapierResponse.json();

    // 6. Respond back to the Frontend
    return NextResponse.json(
      { status: 'success', data: zapierResult },
      { status: 200 },
    );
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { status: 'error', message: 'Internal Server Error' },
      { status: 500 },
    );
  }
}
