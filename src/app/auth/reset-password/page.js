"use client";

import CustomFooter from "@/components/group/footer";
import Navbar from "@/components/group/navbar";
import { AlertDialog, AlertDialogContent } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useToast } from "@/components/ui/use-toast";

export default function ResetPassword() {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [isResend, setIsResend] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    email: "",
  });

  const showToast = (title, desc) => {
    toast({
      title: title,
      description: desc,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [countdown]);

  const handleResend = async () => {
    if (countdown > 0) return;
    setIsResend(true);
    try {
      const response = await fetch(
        "https://nakonapi.rizpedia.com/api/v1/auth/request-password-reset",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
          }),
        },
      );
      const data = await response.json();
      if (response.ok) {
        showToast("Success", "Resend code success");
        setCountdown(60);
      } else {
        showToast("Error", data.message);
      }
    } catch (error) {
      showToast("Error", data.message);
    }
    setIsResend(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch(
        "https://nakonapi.rizpedia.com/api/v1/auth/request-password-reset",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
          }),
        },
      );
      const data = await response.json();
      if (response.ok) {
        setOpen(true);
      } else {
        showToast("Error", data.message);
      }
    } catch (error) {
      showToast("Request Reset", error.message);
    }
    setIsSubmitting(false);
  };

  const handleVerifyOTP = async () => {
    setIsSubmitting(true);
    try {
      const response = await fetch(
        "https://nakonapi.rizpedia.com/api/v1/auth/verify-otp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
            otp: value,
          }),
        },
      );
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token-reset", data.data.token);
        showToast("Success", "OTP verified successfully");
        setOpen(false);
        router.push(`/auth/reset-password/change`);
      } else {
        showToast("Error", data.message);
      }
    } catch (error) {
      showToast("Error", data.message);
    }
    setIsSubmitting(false);
  };

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen w-full items-center justify-center px-6 py-3 md:px-[100px] xl:px-[250px]">
        <Card className="w-full max-w-md space-y-8 rounded-lg bg-secondary p-8 shadow-lg">
          <div className="flex items-center justify-center lg:p-1">
            <div className=" w-full max-w-md space-y-6">
              <div className="space-y-2 ">
                <h1 className="text-3xl font-bold">Forgot Password</h1>
                <p className="text-gray-500 dark:text-gray-400">
                  Enter your email to reset password
                </p>
              </div>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    placeholder="m@example.com"
                    required
                    type="email"
                    onChange={handleChange}
                    value={formData.email}
                  />
                </div>
                <Button
                  className="w-full"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    "Request Reset"
                  )}
                </Button>
              </form>
            </div>
          </div>
        </Card>
      </div>
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
          <div className="space-y-8">
            <div>
              <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-card-foreground dark:text-card-foreground">
                Verify Email
              </h2>
              <p className="mt-2 text-center text-sm">
                Please enter the verification code sent to your email
              </p>
            </div>
            <div className="space-y-6">
              <div className="space-y-2 flex flex-col justify-center items-center">
                <InputOTP
                  maxLength={6}
                  value={value}
                  onChange={(value) => setValue(value)}
                >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
                <div className="flex justify-center items-center pt-5">
                  <p className="text-sm flex flex-row gap-1 items-center">
                    Missing your verification code?{" "}
                    <span
                      className={`text-primary ${
                        countdown > 0
                          ? "opacity-50 cursor-not-allowed"
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
              </div>
              <div className="flex justify-center">
                <Button
                  className="w-1/2 mb-6"
                  onClick={handleVerifyOTP}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    "Verify"
                  )}
                </Button>
              </div>
            </div>
          </div>
        </AlertDialogContent>
      </AlertDialog>
      <CustomFooter />
    </>
  );
}
