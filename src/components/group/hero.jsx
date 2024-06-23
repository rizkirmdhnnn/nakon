"use client"
import { Button } from "@/components/ui/button";
import { ArrowRightCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./navbar";

function hero() {

  const user = localStorage.getItem("user");
  return (
    <>
      <Navbar />
      <div className="flex items-center flex-col justify-center pt-[200px] px-6 py-3 md:px-[100px] xl:px-[250px] ">
        <Image src={"/sembereeee.png"} width={600} height={200} />
        <div>
          <h1 className="mt-20 mb-5 text-4xl pt-5 text-primary font-bold font-poppins text-center">
            Curious? Ask Anonymously!
          </h1>

          <p className="text-base sm:text-xl text-center">
            Explore your curiosity with full freedom - ask anonymously, get answers without worry.
          </p>
        </div>
        <Button asChild size="sm" className="mx-auto gap-2 mt-8">
          {user ? (
            <Link href="/dashboard">
              Go to Dashboard
              <ArrowRightCircle className="h-4 w-4" />
            </Link>
          ) : (
            <Link href="/auth/login">
              Try it now
              <ArrowRightCircle className="h-4 w-4" />
            </Link>

          )}

        </Button>
      </div >
    </>
  );
}

export default hero;
