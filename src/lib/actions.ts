"use server";

import { signIn } from "@/auth";

export async function login(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    return { error: "Email and password are required." };
  }

  console.log("Logging in with", { email, password });

  await signIn("credentials", {
    email,
    password,
  });
}
