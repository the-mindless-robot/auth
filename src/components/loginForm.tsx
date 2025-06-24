import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function LoginForm() {
  return (
    <form className="max-w-sm mx-auto mt-10 space-y-4">
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
