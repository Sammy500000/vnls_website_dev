import { NextResponse } from 'next/server';

const VALID_USERNAME = 'vnls';
const VALID_PASSWORD = 'nutracare@1234';

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
      const response = NextResponse.json({ success: true });
      response.cookies.set('vnls_auth', 'authenticated', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        // Cookie lasts 7 days
        maxAge: 60 * 60 * 24 * 7,
      });
      return response;
    }

    return NextResponse.json(
      { success: false, message: 'Invalid credentials' },
      { status: 401 }
    );
  } catch {
    return NextResponse.json(
      { success: false, message: 'Invalid request' },
      { status: 400 }
    );
  }
}
