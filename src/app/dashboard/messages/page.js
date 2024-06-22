"use client";
import CustomFooter from "@/components/group/footer";
import MsgCard from "@/components/group/msgcard";
import Navbar from "@/components/group/navbar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
function page() {
  return (
    <>
      <Navbar />
      <main className="p-5 md:px-[100px] xl:px-[250px]  pt-[100px] min-h-screen">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">All Messages</h1>
            <p className="text-base md:leading-10 leading-[20px]">
              See all messages from curious people
            </p>
          </div>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="dibaca">Seen</SelectItem>
              <SelectItem value="belumdibaca">Unread</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3 mt-4">
          <MsgCard
            question={"Pertanyaan #1"}
            date={"12 oktober 2024"}
            message={
              "hallo ini merupakan contoh pesan yang nantinya akan dikirim. ini  whanya pesan dummy saja ya"
            }
            id={"1"}
          />

          <MsgCard
            question={"Pertanyaan #2"}
            date={"12 oktober 2024"}
            message={
              "hallo ini merupakan contoh pesan yang nantinya akan dikirim. ini  whanya pesan dummy saja ya"
            }
            id={"2"}
          />

          <MsgCard
            question={"Pertanyaan #3"}
            date={"12 oktober 2024"}
            message={
              "hallo ini merupakan contoh pesan yang nantinya akan dikirim. ini  whanya pesan dummy saja ya"
            }
            id={"3"}
          />

          <MsgCard
            question={"Pertanyaan #4"}
            date={"12 oktober 2024"}
            message={
              "hallo ini merupakan contoh pesan yang nantinya akan dikirim. ini  whanya pesan dummy saja ya"
            }
            id={"4"}
          />

          <MsgCard
            question={"Pertanyaan #5"}
            date={"12 oktober 2024"}
            message={
              "hallo ini merupakan contoh pesan yang nantinya akan dikirim. ini  whanya pesan dummy saja ya"
            }
            id={"5"}
          />

          <MsgCard
            question={"Pertanyaan #6"}
            date={"12 oktober 2024"}
            message={
              "hallo ini merupakan contoh pesan yang nantinya akan dikirim. ini  whanya pesan dummy saja ya"
            }
            id={"6"}
          />
        </div>
      </main>
      <CustomFooter />
    </>
  );
}

export default page;
