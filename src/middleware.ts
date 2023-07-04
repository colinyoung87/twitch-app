import { NextRequest, NextResponse } from 'next/server'
import passport from "passport"
import OAuth2Strategy from 'passport-oauth2';

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}

export function middleware(request: NextRequest) {
  const nextUrl = request.nextUrl.pathname;

  if (nextUrl.startsWith('/auth/twitch/callback')) {
    return NextResponse.redirect(new URL('/', request.url));

  } else if (nextUrl.startsWith('/auth/twitch')) {
    passport.use('twitch', new OAuth2Strategy({
      authorizationURL: 'https://id.twitch.tv/oauth2/authorize',
      tokenURL: 'https://id.twitch.tv/oauth2/token',
      clientID: process.env.TWITCH_CLIENT_ID!,
      clientSecret: process.env.TWITCH_SECRET!,
      callbackURL: process.env.TWITCH_CALLBACK_URL!,
      state: true
    },
    // TODO: improve types
    function(accessToken: string, refreshToken: string, profile: any, done: (a: any, b: any) => void) {
      // TODO: store the access tokens somewhere... serverless api?
      done(null, profile);
    }
  ));

    return passport.authenticate("twitch");
  }

  if (!request.nextUrl.pathname.startsWith('/auth')) {
    return NextResponse.redirect(new URL('/auth', request.url))
  }
}
