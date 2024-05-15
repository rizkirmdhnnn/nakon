import CardFeature from "@/components/group/cardFeature";

function Feature() {
  return (
    <div className="px-6 py-3  md:px-[100px]  xl:px-[250px] mt-[200px]">
      <div className="flex flex-col justify-center text-center items-center">
        <div className="my-10">
          <h1 className="font-bold text-4xl mb-5 text-primary">
            Fitur
          </h1>
          <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400 items">
            Berbagai fitur yang bisa didapatkan dari platform wakonwae
          </p>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-3 md:grid-rows-2">
        <CardFeature
          title={"Gratis Tanpa Iklan"}
          description={"Bisa digunakan secara gratis tanpa gangguan iklan."}
        />
        <CardFeature
          title={"Mudah Dibagikan"}
          description={
            "Kamu bisa membagikan laman publik dan pertanyaan kepada siapa saja yang diinginkan dengan cepat"
          }
        />
        <CardFeature
          title={"Kontrol Penuh"}
          description={
            "Kamu bisa menentukan apakah sebuah pertanyaan bisa dilihat orang lain atau tidak, bisa memilih untuk tidak dilihat di laman eksplor, bisa menghapus akun seutuhnya"
          }
        />
        <CardFeature
          title={"Baca dan Buang"}
          description={
            "Tidak perlu lama-lama menyimpan pertanyaan, setelah dibaca kami akan menghapus data pertanyaan kamu seutuhnya"
          }
        />
        <CardFeature
          title={"Otentikasi Mudah"}
          description={"Cukup isi data diri dan sudah bisa dipakai"}
        />
        <CardFeature
          title={"Kode Sumber Terbuka"}
          description={
            "Penasaran bagaimana cara kerjanya? Langsung saja cek apa yang dilakukan di balik layar dengan melihat langsung kode sumbernya"
          }
        />
      </div>
    </div>
  );
}

export default Feature;
