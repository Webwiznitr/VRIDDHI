import React from "react";
import HomeBg from "public/Images/HomeBg.svg";
import Image from "next/image";
import "./Hero.css";
import year from "public/Images/2023.svg";
import HomeMobile from "public/Images/HomepageMobile.svg";
import mobileLower from "public/Images/MobileLower.svg";
import mobileUpper from "public/Images/g480.svg";
import Link from "next/link";

function Hero() {
  return (
    <>
      <main className="box-border relative bg-[#121212] w-[100%] h-screen bg-center bg-no-repeat bg-cover max-w-screen overflow-hidden md:block hidden">
        <Image
          src={HomeBg}
          alt="HomeBg"
          className="w-full object-cover absolute top-0"
        />
        <div className="absolute right-[10%] top-[30%] text-center flex flex-col justify-center items-center">
          <h1 className="font-blanka text-white text-8xl tracking-[0.9rem]">
            VRIDDHI
          </h1>
          <Image src={year} alt="year" className="py-11" />
          <Link href={"/register"}><button className="font-nidus bg-[#EEBD2F] hover:bg-[#ebcb6d] rounded-[39.979px] px-6 py-3 text-3xl text-[#2E2E2E]">
            JOIN US
          </button></Link>
        </div>
      </main>
      {/* Phone View */}
      <main className="w-screen h-screen md:hidden">
        <div className="bg-[#111A21] bg-opacity-[0.35] bg-blend-multiply opacity-90 w-full h-full relative">
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
          <h1 className="font-blanka text-white text-6xl tracking-[0.9rem]">
            VRIDDHI
          </h1>
          <Image src={year} alt="year" className="py-11 w-[30%]" />
          <Link href={"/register"}><button className="font-nidus bg-[#EEBD2F] hover:bg-[#ebcb6d] rounded-[39.979px] px-6 py-3 text-xl text-[#2E2E2E]">
            JOIN US
          </button></Link>
        </div>
      </main>
    </>
  );
}

export default Hero;
