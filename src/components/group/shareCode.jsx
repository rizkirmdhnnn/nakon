import React from "react";
import { Button } from "@/components/ui/button";

function ShareCode() {
  return (
    <>
      <section id="kode" className="kode py-10">
        <div className="container m-auto">
          <h1 className="text-4xl sm:text-5xl  font-mont font-bold text-center mb-10">Kode Sumber Terbuka</h1>
          <h3 className="text-base sm:text-xl font-mont font-medium text-center text-gray-400 mb-10">Tenang cuy nakon open source kok. kodenya bisa kamu lihat dengan gratis untuk kepentingan pembelajaran </h3>
          <div className="flex justify-center py-4">
            <Button>Get Started</Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default ShareCode;
