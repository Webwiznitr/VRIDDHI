

import React from 'react';
import Image from "next/image";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Score from "./Components/scorecard/page";
import Contact from "./Components/contact/page"

export default function Home() {
  return (
    <>
      <Hero />
    <Score/>
    <Contact/>
    </>
  );

}
