import React from "react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import Navbar from "./navbar";
import { Button } from "@/components/ui/button";

function hero() {
  return (
    <>
      <Navbar />
      <div className="flex items-center flex-col justify-center pt-[200px]">
        <Image src={"/sembereeee.png"} width={600} height={200} />
        <div className="justify-center space-y-4">
          <div className="">
            <h1 className="my-20 text-4xl pt-5 text-primary font-bold font-poppins text-center">Takonwae - Tempat bertanya tanpa takut ketahuan siapa kamu</h1>
            <p className="text-base sm:text-xl  font-poppins text-center">Kalo orang cupu make platform ini biasanya buat ngungkapin perasaan si, semoga kalian tidak</p>
          </div>
        </div>
      </div>
      <div class="h-[50px]"></div>
      <div class="flex justify-center px-[50px] pt-[50px]">
        <div className="flex justify-start py-4">
          <Button>Get Started</Button>
        </div>
      </div>
    </>
  );
}

export default hero;
