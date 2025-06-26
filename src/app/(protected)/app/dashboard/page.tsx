import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }

  console.log("SESSION", session);

  return (
    <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      Dashboard Stuff and things go here.
    </main>
  );
}
