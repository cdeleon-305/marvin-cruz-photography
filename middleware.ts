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
  const showError = password && password !== process.env.SITE_PASSWORD;

  if (password === process.env.SITE_PASSWORD) {
    const response = NextResponse.next();
    response.cookies.set('site-auth', password, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60, // 1 hour
    });
    return response;
  }

  // Redirect to access denied page or show simple auth
  return new NextResponse(
    `
    <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Access Required</title>
        <style>
          * { box-sizing: border-box; }
          body {
            font-family: system-ui, -apple-system, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
            background: #111;
            color: white;
            padding: 1rem;
          }
          .container {
            text-align: center;
            max-width: 400px;
            width: 100%;
            padding: 2rem;
          }
          h1 {
            margin-bottom: 1rem;
            font-size: clamp(1.5rem, 5vw, 2rem);
          }
          p {
            color: #999;
            margin-bottom: 2rem;
            font-size: clamp(0.875rem, 3vw, 1rem);
          }
          .input-wrapper {
            position: relative;
            margin-bottom: 1rem;
          }
          input {
            width: 100%;
            padding: 0.75rem 3rem 0.75rem 0.75rem;
            font-size: 1rem;
            border: 1px solid #333;
            border-radius: 0.5rem;
            background: #222;
            color: white;
          }
          input:focus {
            outline: none;
            border-color: #0070f3;
          }
          .toggle-password {
            position: absolute;
            right: 0.75rem;
            top: 50%;
            transform: translateY(-50%);
            background: none;
            border: none;
            color: #999;
            cursor: pointer;
            padding: 0.5rem;
            font-size: 0.875rem;
            width: auto;
          }
          .toggle-password:hover { color: white; }
          button[type="submit"] {
            width: 100%;
            padding: 0.75rem;
            font-size: 1rem;
            background: #0070f3;
            color: white;
            border: none;
            border-radius: 0.5rem;
            cursor: pointer;
            transition: background 0.2s;
          }
          button[type="submit"]:hover { background: #0051cc; }
          .error {
            background: rgba(239, 68, 68, 0.1);
            border: 1px solid rgba(239, 68, 68, 0.3);
            color: #ef4444;
            padding: 0.75rem;
            border-radius: 0.5rem;
            margin-bottom: 1rem;
            font-size: 0.875rem;
          }
          .shake {
            animation: shake 0.5s;
          }
          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-10px); }
            75% { transform: translateX(10px); }
          }
          @media (max-width: 480px) {
            .container { padding: 1.5rem; }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Access Required</h1>
          <p>Please enter the password to continue.</p>
          ${showError ? '<div class="error shake">❌ Incorrect password. Please try again.</div>' : ''}
          <form method="GET">
            <div class="input-wrapper">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter password"
                required
              />
              <button
                type="button"
                class="toggle-password"
                onclick="togglePassword()"
              >
                Show
              </button>
            </div>
            <button type="submit">Access Site</button>
          </form>
        </div>
        <script>
          function togglePassword() {
            const input = document.getElementById('password');
            const button = event.target;
            if (input.type === 'password') {
              input.type = 'text';
              button.textContent = 'Hide';
            } else {
              input.type = 'password';
              button.textContent = 'Show';
            }
          }
        </script>
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
