"use client";

import * as React from "react";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/group/navbar";

function page() {
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
          <form action="#" className="space-y-6 " method="POST">
            <InputOTPControlled />
            <div>
              <Button className="w-full mt-7" type="submit">
                Verifikasi
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

export function InputOTPControlled() {
  const [value, setValue] = React.useState("");

  return (
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
      {/* <div className=" text-sm">
        {value === "" ? (
          <>Enter your one-time password.</>
        ) : (
          <>You entered: {value}</>
        )}
      </div> */}
    </div>
  );
}

export default page;
