import { NextAuthConfig } from "next-auth";

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
        return Response.redirect(new URL("/app", request.nextUrl.origin));
      }
      if (request.nextUrl.pathname === "/register" && auth) {
        return Response.redirect(new URL("/app", request.nextUrl.origin));
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
    //  jwt: async ({ token, user, trigger }) => {
    //    if (user) {
    //      // on sign in
    //      token.userId = user.id;
    //      token.email = user.email!;

    //    }

    //    return token;
    //  },
    //  session: ({ session, token }) => {
    //    session.user.id = token.userId;

    //    return session;
    //  },
  },
  providers: [],
} satisfies NextAuthConfig;
