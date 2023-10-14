import React from "react";
import HomeBg from "public/Images/HomeBg.svg";
import Image from "next/image";
import "./Hero.css";
import year from "public/Images/2023.svg";
import HomeMobile from "public/Images/HomepageMobile.svg";
import mobileLower from "public/Images/MobileLower.svg";
import mobileUpper from "public/Images/g480.svg";

function Hero() {
  return (
    <>
      <main className="box-border relative bg-[#121212] w-[100%] h-screen bg-center bg-no-repeat bg-cover max-w-screen overflow-hidden md:block hidden">
        <Image
          src={HomeBg}
          alt="HomeBg"
          className="w-full object-cover absolute top-0"
        />
        <div className="absolute right-[7%] lg:right-[10%] top-[20%] lg:top-[30%] text-center flex flex-col justify-center items-center">
          <h1 className="font-blanka text-white text-7xl lg:text-8xl tracking-[0.9rem]">
            VRIDDHI
          </h1>
          <Image src={year} alt="year" className="py-8 lg:py-11" />
          <button className="font-nidus bg-[#EEBD2F] hover:bg-[#ebcb6d] rounded-[39.979px] px-6 py-3 text-2xl lg:text-3xl text-[#2E2E2E]">
            JOIN US
          </button>
        </div>
      </main>
      {/* Phone View */}
      <main className="w-screen h-screen md:hidden">
        <div className="bg-[#111A21] bg-blend-multiply w-full h-full relative">
          <Image
            src={HomeMobile}
            alt="HomeMobile"
            fill="true"
            className="w-screen h-=full object-cover"
          />
        </div>
        <Image
          src={mobileUpper}
          alt="UpperBg"
          height={"200"}
          width={"350"}
          className="absolute top-0"
        />
        <Image
          src={mobileLower}
          alt="UpperBg"
          height={"200"}
          width={"350"}
          className="absolute bottom-0 right-0"
        />
        <div className="absolute text-center flex flex-col justify-center items-center top-[45%] w-full m-auto">
          <h1 className="font-blanka text-white text-7xl tracking-[0.9rem]">
            VRIDDHI
          </h1>
          <Image src={year} alt="year" className="py-8 w-[30%]" />
          <button className="font-nidus bg-[#EEBD2F] hover:bg-[#ebcb6d] rounded-[39.979px] px-6 py-3 text-xl text-[#2E2E2E]">
            JOIN US
          </button>
        </div>
      </main>
    </>
  );
}

export default Hero;
