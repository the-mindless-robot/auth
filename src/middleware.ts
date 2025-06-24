import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.AUTH_SECRET });

  const isProtected = req.nextUrl.pathname.startsWith("/app");

  if (!token && isProtected) {
    const loginUrl = new URL("/login", req.url);
    return NextResponse.redirect(loginUrl);
  }

  // const isLoginPage = req.nextUrl.pathname.startsWith("/login");
  // if (token && isLoginPage) {
  //   const appUrl = new URL("/app/dashboard", req.url);
  //   return NextResponse.redirect(appUrl);
  // }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
