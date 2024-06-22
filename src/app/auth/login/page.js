"use client";

import Navbar from "@/components/group/navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export default function Page() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    setIsSubmitting(true);
    e.preventDefault();
    try {
      const response = await fetch(
        "https://nakonapi.rizpedia.com/api/v1/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      if (response.ok) {
        console.log(data);

        localStorage.setItem("user", JSON.stringify(data.data.user));
        localStorage.setItem("token", data.data.token);

        // redirect to dashboard
        router.push("/dashboard");
        setError(null);
      } else {
        setError(data.message);
        setOpen(true);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
    setIsSubmitting(false);
  };

  const handleCloseAlert = () => {
    setOpen(false);
  };

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen w-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <Card className="w-full max-w-md space-y-8 rounded-lg bg-secondary p-8 shadow-lg">
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
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email address</Label>
              <Input
                autoComplete="email"
                name="email"
                id="email"
                required
                type="email"
                onChange={handleChange}
                value={formData.email}
              />
            </div>
            <div className="space-y-2">
              <div className="flex">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="/auth/reset-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input
                autoComplete="current-password"
                name="password"
                id="password"
                required
                type="password"
                onChange={handleChange}
                value={formData.password}
              />
            </div>
            <div>
              <Button className="w-full" type="submit">
                {isSubmitting ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  "Sign In"
                )}
              </Button>
            </div>
          </form>
        </Card>
        <AlertDialog open={open} onOpenChange={handleCloseAlert}>
          <AlertDialogContent>
            <AlertDialogHeader>
              {error ? (
                <AlertDialogTitle>Error</AlertDialogTitle>
              ) : (
                <AlertDialogTitle>Pendaftaran Berhasil</AlertDialogTitle>
              )}
              <AlertDialogDescription>
                {error || "Silahkan cek email anda untuk proses verifikasi"}
              </AlertDialogDescription>
              <AlertDialogFooter>
                {error ? (
                  <Button variant="outline" onClick={handleCloseAlert}>
                    Close
                  </Button>
                ) : (
                  <Link href={"/auth/verify-otp"}>
                    {" "}
                    <AlertDialogAction>Continue</AlertDialogAction>
                  </Link>
                )}
              </AlertDialogFooter>
            </AlertDialogHeader>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </>
  );
}
