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
import { useEffect, useState, useRef } from "react";

function AllMessagePage() {
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const [filter, setFilter] = useState("all");
  const dataFetchedRef = useRef(false);

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    getData();
  }, []);

  async function getData() {
    setLoading(true);
    try {
      const response = await fetch(
        "https://nakonapi.rizpedia.com/api/v1/message",
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Content-Type": "application/json",
          },
        },
      );
      const data = await response.json();
      if (response.ok) {
        setMessages(data.data);
      } else {
        console.log(data);
      }
    } catch (error) {}
    setLoading(false);
  }

  const filteredMessages = messages.filter((message) => {
    if (filter === "all") return true;
    if (filter === "read") return message.read === 1;
    if (filter === "unread") return message.read === 0;
    return true;
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary" />
      </div>
    );
  }

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
          <Select onValueChange={(value) => setFilter(value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="read">Read</SelectItem>
              <SelectItem value="unread">Unread</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3 mt-4">
          {filteredMessages.length > 0 ? (
            <>
              {filteredMessages.map((item, index) => {
                return (
                  <MsgCard
                    key={index}
                    question={`Question #${index + 1}`}
                    date={item.created_at}
                    message={item.content}
                    id={item.id}
                    read={item.read}
                    refreshData={getData}
                  />
                );
              })}
            </>
          ) : (
            <div className="min-h-[100px] pt-10 pb-5 flex flex-col justify-center items-center">
              No messages available
            </div>
          )}
        </div>
      </main>
      <CustomFooter />
    </>
  );
}

export default AllMessagePage;
