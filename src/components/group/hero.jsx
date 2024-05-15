import { Button } from "@/components/ui/button";
import { ArrowRightCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./navbar";

function hero() {
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
            Jelajahi Rasa Penasaranmu dengan Kebebasan Penuh - Tanya Secara
            Anonim, Dapatkan Jawaban Tanpa Rasa Khawatir.
          </p>
        </div>
        <Button asChild size="sm" className="mx-auto gap-2 mt-8">
          <Link href="/auth/login">
            Cobain
            <ArrowRightCircle className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </>
  );
}

export default hero;
