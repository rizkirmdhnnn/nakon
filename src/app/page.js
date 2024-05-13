import Feature from "@/components/group/Feature";
import CustomFooter from "@/components/group/footer";
import Hero from "@/components/group/hero";
import Navbar from "@/components/group/navbar";
import ShareCode from "@/components/group/shareCode";
import Stats from "@/components/group/stats";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Feature />
      <Stats />
      <ShareCode />
      <CustomFooter />
    </>
  );
}
