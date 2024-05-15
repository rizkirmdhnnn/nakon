import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function NotFound() {
  return (
    <>
      <section >
        <div class="container flex items-center min-h-screen px-6 py-12 flex-col justify-center">
          <Image
            alt="Sign up illustration"
            className="h-full w-[480px] object-cover "
            height={10000}
            src="/sembere.png"
            width={10000}
          />
          <div class="flex flex-col items-center max-w-sm mt-10 mx-auto text-center">
            <h1 class="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
              Halaman Tidak Ditemukan
            </h1>
            <p class="mt-4 text-gray-500 dark:text-gray-400">
              Duh, Halaman Yang Kamu Cari Tidak Ditemukan
            </p>
            <div class="flex items-center mt-6 ">
              <Button
                href="/"
                className=" w-auto px-5 py-2 text-sm  bg-primary rounded-lg shrink-0 "
              >
                Ke Home
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
