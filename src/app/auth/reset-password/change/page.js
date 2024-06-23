
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
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    name: "balskdfj",
    password_confirmation: "rizkirmdhn",
  });
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  // const handleSubmit = async (e) => {
  //   setIsSubmitting(true);
  //   e.preventDefault();
  //   try {
  //     const response = await fetch(
  //       "https://takonwae-api.rizpedia.com/api/register",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(formData),
  //       }
  //     );
  //     if (response.ok) {
  //       setError(null);
  //     } else {
  //       const data = await response.json();
  //       setError(data.message);
  //     }
  //   } catch (error) {
  //     setError("Terjadi kesalahan. Silakan coba lagi.");
  //   }
  //   setOpen(true);
  //   setIsSubmitting(false);
  // };

  const handleModal = () => {
    setOpen(!open);
  };

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen w-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
        <Card className="w-full max-w-md space-y-8 rounded-lg bg-secondary p-8 shadow-lg">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-card-foreground dark:text-card-foreground">
              Reset Password
            </h2>

          </div>
          {/* <form onSubmit={handleSubmit}> */}
          <div>
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  // value={formData.username}
                  // onChange={handleChange}
                  required
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password-confirm">Confirm Password</Label>
                <Input
                  id="password-confirm"
                  name="password-confirm"
                  // value={formData.email}
                  // onChange={handleChange}
                  required
                  type="text"
                />
              </div>
              <div>
                <Button
                  className="w-full"
                  // type="submit"
                  // disabled={isSubmitting}
                  onClick={handleModal}
                >
                  {isSubmitting ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    "Konfirmasi"
                  )}
                </Button>
              </div>
            </div>
          </div>
          <AlertDialog open={open} onOpenChange={handleModal}>
            <AlertDialogContent>
              <AlertDialogHeader>
                {error ? (
                  <AlertDialogTitle>Error</AlertDialogTitle>
                ) : (
                  <AlertDialogTitle>Succes reset password</AlertDialogTitle>
                )}
                <AlertDialogDescription>
                  {error || "Jangan lupa terus ya sembere"}
                </AlertDialogDescription>
                <AlertDialogFooter>
                  {error ? (
                    <Button variant="outline" onClick={handleModal}>
                      Close
                    </Button>
                  ) : (
                    <Link href={"/dashboard"}>
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
