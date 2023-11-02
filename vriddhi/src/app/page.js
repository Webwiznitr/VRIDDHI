import React from "react";
import Hero from "./Components/Hero/Hero";
import Score from "./Components/scorecard/score";
import Tally from "./Components/Tally/tally";
import Contact from "./Components/Contact/page";
import Tournaments from "../tournaments/tournaments";
import About from "./components/About";
import Team from "./components/Team";
import Gallery from "./Components/Gallery/gallery";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Tournaments />
      <Score />
      <Tally />
      <Gallery />
      <About />
      <Team />
      <Contact />
    </div>
  );
}
