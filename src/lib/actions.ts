"use server";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export async function login(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: "/app",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin": {
          console.log("Error. Invalid credentials.", error);
          // Handle invalid credentials
          break;
        }
        default: {
          console.log("Error. Could not sign in.", error);
        }
      }
    }

    throw error;
  }
}
