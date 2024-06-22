"use client";

import Navbar from "@/components/group/navbar";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

function RegisterPage() {
    const [formData, setFormData] = useState({
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
    });
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
        "https://nakonapi.rizpedia.com/api/v1/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );
      const data = await response.json();
      if (response.ok) {
        // save data to localstorage
        localStorage.setItem("user", JSON.stringify(data.data.user));
        setError(null);
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError("Terjadi kesalahan. Silakan coba lagi.");
    }
    setOpen(true);
    setIsSubmitting(false);
  };

  const handleCloseAlert = () => {
    setOpen(false);
  };

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen w-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
        <Card className="w-full max-w-md space-y-8 rounded-lg bg-secondary p-8 shadow-lg">
          <div>
            <h2 className="mt-1 md:mt-6 text-center text-3xl font-bold tracking-tight text-card-foreground dark:text-card-foreground">
              Create an account
            </h2>
            <p className="mt-1 md:mt-2 text-center text-sm text-card-foreground dark:text-card-foreground">
              Or
              <Link
                className="font-medium text-primary hover:text-primary dark:text-primary dark:hover:text-primary pl-1"
                href="/auth/login"
              >
                Sign in to your account
              </Link>
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="space-y-2 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First name</Label>
                  <Input
                    id="firstname"
                    name="firstname"
                    required
                    type="text"
                    value={formData.firstname}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last name</Label>
                  <Input
                    id="lastname"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    required
                    type="text"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email address</Label>
                <Input
                  autoComplete="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  type="email"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  autoComplete="current-password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  type="password"
                />
              </div>
              <div>
                <Button
                  className="w-full mt-2"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    "Register"
                  )}
                </Button>
              </div>
            </div>
          </form>
          <AlertDialog open={open} onOpenChange={handleCloseAlert}>
            <AlertDialogContent>
              <AlertDialogHeader>
                {error ? (
                  <AlertDialogTitle>Error</AlertDialogTitle>
                ) : (
                  <AlertDialogTitle>Register Success</AlertDialogTitle>
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
        </Card>
      </div>
    </>
  );
}

export default RegisterPage;
