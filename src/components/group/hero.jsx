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
            Ini jargonnya nanti
          </h1>
          <p className="text-base sm:text-xl text-center">
            Kalo orang cupu make platform ini biasanya buat ngungkapin perasaan
            si, semoga kalian tidak
          </p>
        </div>
        <Button asChild size="sm" className="mx-auto gap-1 mt-8">
          <Link href="/auth/login">
            View All
            <ArrowRightCircle className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </>
  );
}

export default hero;
