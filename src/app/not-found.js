"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <>
      <section>
        <div className="container flex items-center min-h-screen px-6 py-12 flex-col justify-center">
          <Image
            alt="Sign up illustration"
            className="h-full w-[480px] object-cover "
            height={10000}
            src="/sembere.png"
            width={10000}
          />
          <div className="flex flex-col items-center max-w-sm mt-10 mx-auto text-center">
            <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
              Page Not Found
            </h1>
            <p className="mt-4 text-gray-500 dark:text-gray-400">
              Whoaa, your page doesnt exist
            </p>
            <div className="flex items-center mt-6 ">
              <Button
                onClick={() =>
                router.push("/")
                }
                className=" w-auto px-5 py-2 text-sm  bg-primary rounded-lg shrink-0 "
              >
                Home
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
