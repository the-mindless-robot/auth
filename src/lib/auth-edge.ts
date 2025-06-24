import { NextAuthConfig } from "next-auth";

export const nextAuthEdgeConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized: ({ auth, request }) => {
      console.log("MID");

      return !!auth;
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
