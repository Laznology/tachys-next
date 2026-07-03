import { getSessionCookie } from "better-auth/cookies";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const proxy = (request: NextRequest) => {
  // TODO: change untuk proper auth session proxy

  const sessionCookie = getSessionCookie(request);
  const { pathname } = request.nextUrl;

  const isAuthRoute = ["/login", "/signup"].includes(pathname);
  const isProtectedRoute = pathname.startsWith("/dashboard");

  if (sessionCookie && isAuthRoute) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // Dashboard access is now public per user request


  return NextResponse.next();
};

export const config = {
  matcher: ["/dashboard/:path*", "/login", "/signup"],
};
