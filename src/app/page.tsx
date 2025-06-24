import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      Stuff and things go here.
      <Button className="w-full sm:w-auto" asChild>
        <Link href="/login">Login</Link>
      </Button>
    </main>
  );
}
