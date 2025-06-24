import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

// next auth config
const config = {
  pages: {
    signIn: "/login",
  },
  providers: [
    Credentials({
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        const user = await prisma.users.findUnique({ where: { email } });
        if (!user || !user.hashed_password) return null;

        const isValid = await bcrypt.compare(password, user.hashed_password);
        return isValid ? user : null;
      },
    }),
  ],
  callbacks: {},
};

// next auth defaults
export const { auth, signIn, signOut } = NextAuth(config);
