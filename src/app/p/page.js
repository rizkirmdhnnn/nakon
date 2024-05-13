import Navbar from "@/components/group/navbar";
import React from "react";
import Question from "@/components/group/question";
import CustomFooter from "@/components/group/footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <Question/>
      <CustomFooter/>
    </>
  );
}
