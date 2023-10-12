
import Image from "next/image";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Score from "@/components/scorecard/page";

export default function Home() {
  return (
    <>
      <Hero />
    <Score/>
    </>
  );

}
