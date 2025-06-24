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
        console.log("AUTH CREDENTIALS", credentials);
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        const user = await prisma.users.findUnique({ where: { email } });

        console.log("AUTH USER", user);
        if (!user || !user.hashed_password) return null;

        const isValid = await bcrypt.compare(password, user.hashed_password);
        return isValid ? user : null;
      },
    }),
  ],
};

// next auth defaults
export const { auth, signIn, signOut } = NextAuth(config);
