import CustomFooter from "@/components/group/footer";
import Navbar from "@/components/group/navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function Home({ params }) {
  return (
    <>
      <Navbar />
      <div className="flex flex-row justify-between px-[50px] pb-[50px] md:px-[170px] md:pb-[127px] py-60">
        <div className="bg-transparent w-full rounded-lg md:rounded-l-lg  md:px-[97px] md:pb-[73px] flex flex-col justify-between">
          <div class="flex justify-center">
            <Avatar className="w-[100px] h-[100px] flex">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>

          <h3 className="py-[25px] font-bold text-2xl sm:text-4xl text-center">
            Tanyakan kepada {params.username}
          </h3>
          <p className="font-bold mb-2">Pertanyaan</p>
          <form>
            <textarea
              id="chat"
              rows="10"
              className="block p-2 w-full text-sm rounded-lg  bg-secondary"
              placeholder="Tuliskan Pertanyaan Yang Ingin Kamu Sampaikan"
            ></textarea>

            <p className="text-sm text-gray-500 mt-2">
              Pertanyaanmu akan disampaikan secara anonim
            </p>
            <Button className="mt-5 flex ">Kirim Pertanyaan</Button>
          </form>
        </div>
      </div>

      <CustomFooter />
    </>
  );
}
