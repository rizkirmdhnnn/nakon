import React from "react";

function Stats() {
  return (
    <>
      <div className="pt-[10px]">
        <h3 className="my-20 text-4xl pt-28 font-bold font-poppins text-center ">Statistik</h3>
      </div>
      <div className="mx-24 mb-60 border border-gray-700 dark:border-gray-600x rounded-lg md:p-[100px] " id="stats" role="tabpanel" aria-labelledby="stats-tab">
        <dl className="grid md:grid-cols-3 lg:grid-cols-3 gap-10 max-w-screen-xl grid-cols-1 p-4 mx-auto text-gray-900  dark:text-white">
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl font-extrabold text-gray-500 dark:text-gray-400 ">73M+</dt>
            <dd className="text-gray-500 dark:text-gray-400">Pengunjung</dd>
          </div>
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl font-extrabold text-gray-500 dark:text-gray-400">10M+</dt>
            <dd className="text-gray-500 dark:text-gray-400">Pertanyaan</dd>
          </div>
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl font-extrabold text-gray-500 dark:text-gray-400">10M+</dt>
            <dd className="text-gray-500 dark:text-gray-400">Akun</dd>
          </div>
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl font-extrabold text-gray-500 dark:text-gray-400">1B+</dt>
            <dd className="text-gray-500 dark:text-gray-400">Kontributor</dd>
          </div>
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl font-extrabold text-gray-500 dark:text-gray-400">90+</dt>
            <dd className="text-gray-500 dark:text-gray-400">Sponsor</dd>
          </div>
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl font-extrabold text-gray-500 dark:text-gray-400">4M+</dt>
            <dd className="text-gray-500 dark:text-gray-400">Organisasi</dd>
          </div>
        </dl>
      </div>
    </>
  );
}

export default Stats;
