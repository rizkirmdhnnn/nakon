"use client";

import CustomFooter from "@/components/group/footer";
import Navbar from "@/components/group/navbar";
import { AlertDialog, AlertDialogContent } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export default function ResetPassword() {
  const [value, setValue] = useState("");
  const [open, setOpen] = React.useState(false);
  const [openstatus, setOpenStatus] = React.useState(false);

  const handleButtonClick = () => {
    setOpen(!open);
  };

  const handleButtonClickStatus = () => {
    setOpen(!open);
    setOpenStatus(!openstatus);
  };

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen w-full items-center justify-center px-6 py-3 md:px-[100px] xl:px-[250px]">
        <Card>
          <div className="grid w-full md:min-h-[600px]  xl:grid-cols-2 bg-secondary ">
            <div className="hidden bg-secondary rounded-sm xl:block">
              <Image
                alt="Hero Illustration"
                className="h-full w-full p-10 object-cover rounded-l-sm shadow-xl xl:"
                height={600}
                src="/p.png"
                style={{
                  aspectRatio: "800/600",
                  objectFit: "cover",
                }}
                width={800}
              />
            </div>
            <div className="flex items-center justify-center p-6 lg:p-10">
              <div className=" w-full max-w-md space-y-6">
                <div className="space-y-2 ">
                  <h1 className="text-3xl font-bold">Lupa Password</h1>
                  <p className="text-gray-500 dark:text-gray-400">
                    Masukan email yang terdaftar untuk mereset password
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      placeholder="m@example.com"
                      required
                      type="email"
                    />
                  </div>
                  <Button
                    className="w-full"
                    type="search"
                    onClick={handleButtonClick}
                  >
                    Selanjutnya
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogContent>
              <div className="w-full max-w-md space-y-8 p-8 shadow-lg ">
                <div>
                  <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-card-foreground dark:text-card-foreground">
                    Verifikasi Email
                  </h2>
                  <p className="mt-2 text-center text-sm text-card-foreground dark:text-card-foreground">
                    Silahkan masukan 6 digit kode yang baru saja dikirim ke
                    email
                  </p>
                </div>
                <div action="#" className="space-y-6 " method="POST">
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
                  <div className="flex justify-center">
                    <Button
                      className="w-1/2 mt-7"
                      onClick={handleButtonClickStatus}
                    >
                      Verifikasi
                    </Button>
                  </div>
                </div>
              </div>
            </AlertDialogContent>
          </AlertDialog>

          <AlertDialog open={openstatus} onOpenChange={setOpenStatus}>
            <AlertDialogContent>
              <div className="w-full max-w-md space-y-8 p-8">
                <div>
                  <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-card-foreground dark:text-card-foreground">
                    Berhasil
                  </h2>
                  <p className="mt-2 text-center text-sm text-card-foreground dark:text-card-foreground">
                    Kode yang anda masukan benar
                  </p>
                  <div action="#" className="space-y-6 mt-10" method="POST">
                    <Check size={48} className="w-full" />
                    <div className="flex justify-center">
                      <Button className="w-1/2 mt-7">
                        <Link href={"./reset-password/change"}>
                          Selanjutnya
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </AlertDialogContent>
          </AlertDialog>
        </Card>
      </div>

      <CustomFooter />
    </>
  );
}
