"use client";

import CustomFooter from "@/components/group/footer";
import Navbar from "@/components/group/navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";
import NotFound from "@/app/not-found";
import { Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export default function Question({ params }) {
  const { toast } = useToast();
  const dataFetchedRef = useRef(false);
  const [user, setUser] = useState({});
  const [errorFetch, setErrorFetch] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [submit, setSubmit] = useState(false);
  const [chat, setChat] = useState("");

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      if (dataFetchedRef.current) return;
      dataFetchedRef.current = true;

      try {
        const res = await fetch(
          `https://nakonapi.rizpedia.com/api/v1/user/?username=${params.username}`,
        );
        const data = await res.json();

        if (res.ok) {
          setUser(data.data);
          console.log("Fetch response:", data);
        } else {
          setErrorFetch(true);
        }
      } catch (error) {
        setErrorFetch(true);
      }
      setIsLoading(false);
    };
    getData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary" />
      </div>
    );
  }

  if (errorFetch) {
    return <NotFound />;
  }

  const showToast = (title, description) => {
    toast({
      title: title,
      description: description,
    });
  };

  const sendQuestion = async (e) => {
    setSubmit(true);
    e.preventDefault();
    if (!chat) {
      showToast("Error", "Please fill the form");
      setSubmit(false);
      return;
    }
    try {
      const res = await fetch("https://nakonapi.rizpedia.com/api/v1/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: chat,
          user_id: user.id,
        }),
      });
      {
        /*const data = await res.json();*/
      }
      if (res.ok) {
        showToast("Success", "Your message has been sent");
      }
    } catch (error) {}
    setChat("");
    setSubmit(false);
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-row justify-between px-[50px] pb-[50px] md:px-[170px] md:pb-[127px] md:py-60 py-40">
        <div className="bg-transparent w-full rounded-lg md:rounded-l-lg  md:px-[97px] md:pb-[73px] flex flex-col justify-between">
          <div className="flex justify-center">
            <Avatar className="w-[100px] h-[100px] flex">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>

          <h3 className="py-[25px] font-bold text-2xl sm:text-4xl text-center md:mb-10">
            Ask to {params.username}
          </h3>
          <form onSubmit={sendQuestion}>
            <textarea
              id="chat"
              rows="10"
              className="block p-2 w-full text-sm rounded-lg  bg-secondary resize-none"
              placeholder="Write down the questions you want to ask"
              value={chat}
              onChange={(e) => setChat(e.target.value)}
            ></textarea>

            <p className="text-sm text-gray-500 mt-2">
              Your question will be submitted anonymously
            </p>

            <Button className="mt-5 flex " type="submit" disabled={submit}>
              {submit ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                "Send Message"
              )}
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
