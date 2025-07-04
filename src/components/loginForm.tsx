import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { login } from "@/lib/actions";

export default function LoginForm() {
  return (
    <form action={login} className="max-w-sm mx-auto mt-10 space-y-4">
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="you@example.com"
          required
        />
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          name="password"
          placeholder="••••••••"
          required
        />
      </div>

      <Button type="submit" className="w-full">
        Log In
      </Button>
    </form>
  );
}
