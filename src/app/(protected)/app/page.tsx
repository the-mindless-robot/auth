import { prisma } from "@/lib/prisma";

export default async function App() {
  const users = await prisma.users.findMany({});
  console.log("USERS", users);

  return (
    <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      App Stuff and things go here.
    </main>
  );
}
