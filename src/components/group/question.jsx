import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";

function Question({ params }) {
  return (
    <>
      <div className="flex flex-row justify-between px-[50px] pb-[50px] md:px-[170px] md:pb-[127px] py-60">
        <div className="bg-transparent w-full rounded-lg md:rounded-l-lg  md:px-[97px] md:pb-[73px] flex flex-col justify-between">
          <div class="flex justify-center">
            <Avatar className="w-[100px] h-[100px] flex">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>

          <h3 className="py-[25px] font-bold text-2xl sm:text-4xl text-center">
            {params.username}
          </h3>
          <p className="font-bold mb-2">Pertanyaan</p>
          <form>
            <textarea
              id="chat"
              rows="10"
              className="block p-2 w-full text-sm text-gray-900  rounded-lg border border-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
              placeholder="Tuliskan Pertanyaan Yang Ingin Kamu Sampaikan"
            ></textarea>

            <p className="text-sm text-gray-500 mt-2">
              Pertanyaanmu akan disampaikan secara anonim
            </p>
            <Button className="mt-5 flex ">Kirim Pertanyaan</Button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Question;
