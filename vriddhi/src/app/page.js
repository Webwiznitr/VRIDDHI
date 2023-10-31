"use client";
import React, { useState } from "react";
import Hero from "./Components/Hero/Hero";
import Score from "./Components/scorecard/score";
import Tally from "./Components/Tally/tally";
import Contact from "./Components/Contact/page";
import Tournaments from "../tournaments/tournaments";
import About from "./components/About";
import Team from "./components/Team";
import Gallery from "./Components/Gallery/gallery";

export default function Home() {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 3000);
  return (
    <>
      {loading ? (
        <>
          <div className="w-screen h-screen flex justify-center items-center bg-[#172027]">
            <img
              alt="loader"
              className="h-fit w-fit"
              src="https://res.cloudinary.com/dgy8ybeoy/image/upload/v1666186569/0_U2RiSXJx8U9K4thZ_vsmfww.gif"
            />
          </div>
        </>
      ) : (
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
      )}
    </>
  );
}
