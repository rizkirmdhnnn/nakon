"use client";

import * as React from "react";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

import Navbar from "@/components/group/navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogFooter,
  AlertDialogHeader,
} from "@/components/ui/alert-dialog";
import Link from "next/link";

//get user data from local storage
function Page() {
  const [user, setUser] = useState(null);
  const [value, setValue] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    } else {
      window.location.href = "/";
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const dataBody = JSON.stringify({
      otp: value.toString(),
      id: user.id.toString(),
    });
    try {
      const response = await fetch(
        "http://178.128.126.251:8000/api/v1/auth/verify-user",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: dataBody,
        },
      );
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        setOpen(true);
        setError(null);
      } else {
        setOpen(true);
        setError(data.message);
      }
    } catch (error) {
      setError(data.message);
    }
    setIsSubmitting(false); // Reset state isSubmitting
  };

  const handleCloseAlert = () => {
    setOpen(false);
  };

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen w-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
        <Card className="w-full max-w-md space-y-8 rounded-lg bg-secondary p-8 shadow-lg ">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-card-foreground dark:text-card-foreground">
              Masukan Kode Verifikasi
            </h2>
            <p className="mt-2 text-center text-sm text-card-foreground dark:text-card-foreground">
              Cek email untuk mendapatkan kode
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="space-y-2 flex flex-col justify-center items-center">
              <InputOTP
                maxLength={6}
                value={value}
                onChange={(value) => setValue(value)}
              >
                <InputOTPGroup className="">
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>
            <div>
              <Button
                className="w-full mt-10"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  "Verifikasi"
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
                {error || "Verfikasi email berhasil, silahkan login."}
              </AlertDialogDescription>
              <AlertDialogFooter>
                {error ? (
                  <Button variant="outline" onClick={handleCloseAlert}>
                    Close
                  </Button>
                ) : (
                  <Link href={"/auth/login"}>
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

export default Page;
