// TODO: Create otp expiration time

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
import { useToast } from "@/components/ui/use-toast";

function Page() {
  const { toast } = useToast();
  const [user, setUser] = useState(null);
  const [value, setValue] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);
  const [isResend, setIsResend] = useState(false);
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    } else {
      window.location.href = "/";
    }
  }, []);

  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [countdown]);

  const showToast = (title, desc) => {
    toast({
      title: title,
      description: desc,
    });
  };

  const handleResend = async () => {
    if (countdown > 0) return; // Prevent resend if countdown is active
    setIsResend(true);
    try {
      const response = await fetch(
        "https://nakonapi.rizpedia.com/api/v1/auth/refresh-otp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: user.email.toString(),
          }),
        }
      );
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        showToast("Resend", "Resend code success");
        setCountdown(60); // Start 60-second countdown
      } else {
        showToast("Resend", data.message);
      }
    } catch (error) {
      setError(error.message);
      showToast("Resend", error.message);
    }
    setIsResend(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const dataBody = JSON.stringify({
      otp: value.toString(),
      id: user.id.toString(),
    });

    try {
      const response = await fetch(
        "https://nakonapi.rizpedia.com/api/v1/auth/verify-user",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: dataBody,
        }
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

  // if (isResend) {
  //   return (
  //     <>
  //       <Navbar />
  //       <div className="flex justify-center items-center h-screen">
  //         <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary" />
  //       </div>
  //     </>
  //   );
  // }

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen w-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
        <Card className="w-full max-w-md space-y-8 rounded-lg bg-secondary p-8 shadow-lg ">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-card-foreground dark:text-card-foreground">
              insert your verification code
            </h2>
            <p className="mt-2 text-center text-sm text-card-foreground dark:text-card-foreground">
              please check your email for the verification code
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
            <div className="flex justify-center items-center mt-5">
              <p className="text-sm flex flex-row gap-1 items-center">
                Didnt receive the code?{" "}
                <span
                  className={`text-primary ${
                    countdown > 0
                      ? "opacity-50 cursor-default"
                      : "cursor-pointer"
                  }`}
                  onClick={countdown > 0 ? undefined : handleResend}
                >
                  {isResend ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : countdown > 0 ? (
                    `Resend (${countdown}s)`
                  ) : (
                    "Resend"
                  )}
                </span>
              </p>
            </div>
            <div>
              <Button
                className="w-full mt-5"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  "Verify"
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
                <AlertDialogTitle>Register Success</AlertDialogTitle>
              )}
              <AlertDialogDescription>
                {error || "Verification success, please login to continue"}
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
