import { Button } from "@/components/ui/button";
import { ArrowRightCircle } from "lucide-react";
import Link from "next/link";

function ShareCode() {
  return (
    <>
      <div className="flex items-center flex-col justify-center pt-[200px] px-6 py-3 md:px-[100px] xl:px-[250px] ">
        <div>
          <h1 className="mb-5 text-4xl pt-5 text-primary font-bold font-poppins text-center">
           Kode Terbuka 
          </h1>
          <p className="text-base sm:text-xl text-center">
            Kode ini bersifat terbuka, silahkan gunakan kode ini untuk keperluan yang baik 
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

export default ShareCode;
