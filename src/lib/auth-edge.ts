import { NextAuthConfig } from "next-auth";
import { NextResponse } from "next/server";

export const nextAuthEdgeConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized: ({ auth, request }) => {
      const isProtected = request.nextUrl.pathname.startsWith("/app");

      if (isProtected && !auth) {
        return false;
      }
      if (request.nextUrl.pathname === "/login" && auth) {
        return NextResponse.redirect(new URL("/app", request.nextUrl.origin));
      }
      if (request.nextUrl.pathname === "/register" && auth) {
        return NextResponse.redirect(new URL("/app", request.nextUrl.origin));
      }
      if (!isProtected) {
        return true;
      }
      if (isProtected && auth) {
        return true;
      }

      return false;

      // return !!auth;
    },
    jwt: async ({ token, user, trigger }) => {
      console.log("JWT CALLBACK", { token, user, trigger });
      return token;
    },
    session: ({ session, token }) => {
      console.log("SESSION CALLBACK", { session, token });

      return session;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
