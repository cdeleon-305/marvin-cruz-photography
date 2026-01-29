import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Skip auth check for API routes and static files
  if (
    request.nextUrl.pathname.startsWith('/api') ||
    request.nextUrl.pathname.startsWith('/_next') ||
    request.nextUrl.pathname.startsWith('/images')
  ) {
    return NextResponse.next();
  }

  // Check for auth cookie
  const authCookie = request.cookies.get('site-auth');

  if (authCookie?.value === process.env.SITE_PASSWORD) {
    return NextResponse.next();
  }

  // Check for password in URL params (for initial access)
  const password = request.nextUrl.searchParams.get('password');

  if (password === process.env.SITE_PASSWORD) {
    const response = NextResponse.next();
    response.cookies.set('site-auth', password, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });
    return response;
  }

  // Redirect to access denied page or show simple auth
  return new NextResponse(
    `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Access Required</title>
        <style>
          body {
            font-family: system-ui, -apple-system, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
            background: #111;
            color: white;
          }
          .container {
            text-align: center;
            max-width: 400px;
            padding: 2rem;
          }
          h1 { margin-bottom: 1rem; }
          p { color: #999; margin-bottom: 2rem; }
          input {
            width: 100%;
            padding: 0.75rem;
            font-size: 1rem;
            border: 1px solid #333;
            border-radius: 0.5rem;
            background: #222;
            color: white;
            margin-bottom: 1rem;
          }
          button {
            width: 100%;
            padding: 0.75rem;
            font-size: 1rem;
            background: #0070f3;
            color: white;
            border: none;
            border-radius: 0.5rem;
            cursor: pointer;
          }
          button:hover { background: #0051cc; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>🔒 Private Site</h1>
          <p>This site is currently private. Enter the password to continue.</p>
          <form method="GET">
            <input type="password" name="password" placeholder="Enter password" required />
            <button type="submit">Access Site</button>
          </form>
        </div>
      </body>
    </html>
    `,
    {
      status: 401,
      headers: {
        'Content-Type': 'text/html',
      },
    }
  );
}

export const config = {
  matcher: '/((?!_next/static|_next/image|favicon.ico).*)',
};
