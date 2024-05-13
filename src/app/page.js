import CardFeature from "@/components/group/CardFeature";
import Navbar from "@/components/group/navbar";
import Image from "next/image";
import Hero from "@/components/group/hero";
import Stats from "@/components/group/stats";
import CustomFooter from "@/components/group/footer";
import Feature from "@/components/group/Feature";
import ShareCode from "@/components/group/shareCode";

export default function Home() {
  return (
    <>
     <Navbar/>
     <Hero/>
     <Feature/>
     <Stats/>
     <ShareCode/>
     <CustomFooter/>
    </>
  );
}
