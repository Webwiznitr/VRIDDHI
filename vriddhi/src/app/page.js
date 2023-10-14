


import React from 'react';
import Image from "next/image";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Score from "./Components/scorecard/score";
import Contact from "./Components/Contact/page"
import Tournaments from '../tournaments/tournaments'
import About from './components/About'
import Team from './components/Team'
import Gallery from './Components/Gallery/gallery';
export default function Home() {
  return (
    <>
      <Hero/>
      <Tournaments/> 
    <Score/>
    <Gallery/>
    <About/>
      <Team/>
    <Contact/>
    </>
  );


}

