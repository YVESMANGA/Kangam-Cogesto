import Image from "next/image";
import Hero from "@/components/Hero";
import About from "@/components/About";
import StatsBar from "@/components/StatsBar";
import Services from "@/components/Service";
import Members from "@/components/Members";
import Temoignages from "@/components/Temoignages";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <StatsBar />
      <Services />
      <Members />
      <Temoignages />
    </div>
  );
}
