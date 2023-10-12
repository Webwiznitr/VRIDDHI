import React from "react";
import HomeBg from "public/Images/HomeBg.svg";
import Image from "next/image";
import "./Hero.css";
import year from "public/Images/2023.svg";

function Hero() {
  return (
    <>
      <Image
        src={HomeBg}
        alt="HomeBg"
        className="absolute top-0 w-screen object-cover"
      />
      <div className="absolute right-32 top-52 text-center flex flex-col justify-center items-center">
        <h1 className="font-blanka text-white text-8xl tracking-[0.9rem]">
          VRIDDHI
        </h1>
        <Image src={year} alt="year" className="py-11" />
        <button className="font-nidus bg-[#EEBD2F] hover:bg-[#ebcb6d] rounded-[39.979px] px-6 py-3 text-3xl text-[#2E2E2E]">
          JOIN US
        </button>
      </div>
    </>
  );
}

export default Hero;
