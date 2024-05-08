import Navbar from "@/components/group/navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

function page() {
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen w-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
        <Card className="w-full max-w-md space-y-8 rounded-lg bg-secondary p-8 shadow-lg ">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-card-foreground dark:text-card-foreground">
              Sign In Account
            </h2>
            <p className="mt-2 text-center text-sm text-card-foreground dark:text-card-foreground">
              Or
              <Link
                className="font-medium text-primary hover:text-primary dark:text-primary dark:hover:text-primary pl-1"
                href="/auth/register"
              >
                Create account
              </Link>
            </p>
          </div>
          <form action="#" className="space-y-6" method="POST">
            <div className="space-y-2">
              <Label htmlFor="email">Email address</Label>
              <Input autoComplete="email" id="email" required type="email" />
            </div>
            <div className="space-y-2">
              <div className="flex">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="#"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>

              <Input
                autoComplete="current-password"
                id="password"
                required
                type="password"
              />
            </div>
            <div>
              <Button className="w-full" type="submit">
                Login
              </Button>
            </div>
          </form>
        </Card>
        {/* <div className="relative hidden h-full w-full max-w-md items-center justify-center lg:flex">
        <Image
          alt="Sign up illustration"
          className="h-full w-full object-cover"
          height={10000}
          src="/Rectangle 5.png"
          width={10000}
        />
      </div> */}
      </div>
    </>
  );
}

export default page;
