<<<<<<< HEAD
import React from "react";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <>
      <footer className="bg-[#0D1318]  h-/[50rem] text-white  grid md:grid-cols-5 grid-cols-reverse  overflow-hidden ">
        <div className="flex flex-col md:order-1 order-5 justify-start gap-4 items-start md:ml-5 p-7 md:p-0 ">
          <h1 className="text-xl mt-7 uppercase">About</h1>
          <span>
            Vriddhi 2023 intends to feature major Sports tournaments such as
            Football, Cricket, Badminton, and much more.
          </span>
          <a href="mailto:uday07512@gmail.com" className="font-bold ">
            Uday Kumar:- 9337067360
          </a>
          <a href="mailto:saheelmohapatra100@gmail.com" className="font-bold ">
            Saheel Mohapatra:-9692899851
          </a>
          <div className="flex items-start justify-start w-full gap-3">
            <Link href="https://www.linkedin.com/company/vriddhi-iit-ism-dhanbad/">
              <img src="/email-ext.svg" alt="" />
            </Link>
            <Link href="https://www.facebook.com/vriddhi.iitism/">
              <img src="/facebook.svg" alt="" />
            </Link>
            <Link
              target="_blank"
              href="https://www.instagram.com/vriddhi.nitr/"
            >
              <img src="/instagram.svg" alt="" />
            </Link>
            <Link href="">
              <img src="/twitter.svg" alt="" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col md:order-2 order-4  items-start md:ml-9 gap-4 justify-start p-7 md:p-0">
          <h1 className="text-xl mt-7 uppercase ">Quick Links</h1>
          <div>
            <ul>
              {QuickLinks.map((item, index) => {
                return (
                  <li key={index}>
                    <Link href={item.link}>
                      <>{item.name}</>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:order-3 order-3 items-start gap-4  justify-start p-7 md:p-0">
          <h1 className="text-xl mt-7 uppercase font-Blanka">Support</h1>
          <div>
            <ul>
              {support.map((item, index) => {
                return (
                  <li key={index}>
                    <Link href={item.link}>
                      <>{item.name}</>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="flex justify-center p-7 md:h-[17rem] md:w-[20rem] md:p-9 md:order-4  order-2">
          <img src={"/map.jpg"} alt="" className="rounded-lg" />
        </div>
        <div className="flex justify-center p-7 md:h-auto md:w-[20rem] md:order-5 order-1 md:pr-16 ">
          <img src={"/all_logo.png"} alt="" className="rounded-lg" />
        </div>
      </footer>
      <div className="bg-[#0D1318] pb-6 p-2 text-center"><a href="https://teamwebwiz.dev">Powered by Team Webwiz💜</a></div>
    </>
  );
};

export default Footer;

export const QuickLinks = [
  {
    id: 1,
    name: "About Us",
    link: "#aboutus",
  },{
    id: 2,
    name: "Tournaments",
    link: "#tournaments",
  },
  {
    id: 3,
    name: "Register",
    link: "/register",
  },
  {
    id: 4,
    name: "Contact Us",
    link: "#contactus",
  },
];
export const support = [
  {
    id: 1,
    name: "Privacy Policy",
    link: "/PrivacyPolicy",
  },
  {
    id: 2,
    name: "Terms & Conditions",
    link: "/terms",
  },
  {
    id: 3,
    name: "Legality",
    link: "/legality",
  },
];
=======
import React from "react";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <>
      <footer className=" bg-[#0D1318] w-full h-/[50rem] text-white  grid md:grid-cols-4 grid-cols-reverse  overflow-hidden ">
        <div className="flex flex-col md:order-1 order-5 justify-start gap-4 items-start md:ml-5 p-7 md:p-0 ">
          <h1 className="text-xl mt-7 uppercase">About</h1>
          <span>
            Vriddhi 2023 intends to feature major Sports tournaments such as
            Football, Cricket, Badminton, and much more.
          </span>
          <a href="tel:7381357996" className="font-bold ">
            Uday Kumar:- 7381357996
          </a>
          <a href="tel:9692899851" className="font-bold ">
            Saheel Mohapatra:-9692899851
          </a>
          <div className="flex items-start justify-start w-full gap-3">
            <Link href="https://www.linkedin.com/company/vriddhi-nitr/">
              <img className="h-5 w-5 opacity-40" src="/link.png" alt="" />
            </Link>
            <Link href="https://www.facebook.com/nitrkl.vriddhi/">
              <img src="/facebook.svg" alt="" />
            </Link>
            <Link
              target="_blank"
              href="https://www.instagram.com/vriddhi.nitr/"
            >
              <img src="/instagram.svg" alt="" />
            </Link>
            <Link href="">
              <img src="/twitter.svg" alt="" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col md:order-2 order-4  items-start md:ml-9 gap-4 justify-start p-7 md:p-0">
          <h1 className="text-xl mt-7 uppercase ">Quick Links</h1>
          <div>
            <ul>
              {QuickLinks.map((item, index) => {
                return (
                  <li key={index}>
                    <Link href={item.link}>
                      <>{item.name}</>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        
        <div className="flex justify-center p-7 md:h-[17rem] md:w-[20rem] md:p-9 md:order-4  order-2">
          <a href="https://www.google.com/maps/place/National+Institute+of+Technology,+Rourkela,+National+Institute+of+Technology,+Sector+1,+Rourkela,+Odisha/@21.2441377,84.0242089,8z/data=!4m5!3m4!1s0x3a201f72bbd561c3:0xab5c70e76a7b5a!8m2!3d22.253051!4d84.9009428?entry=ttu"><img src={"/map.jpg"} alt="" className="rounded-lg" /></a>
        </div>
        <div className="flex float-right justify-center p-7 md:h-auto md:w-[20rem] md:order-5 order-1 md:pr-16 ">
          <img src={"/all_logo.png"} alt="" className="rounded-lg" />
        </div>
      </footer>
      <div className="bg-[#0D1318] pb-6 p-2 text-center"><a href="https://teamwebwiz.dev">Powered by Team Webwiz💜</a></div>
    </>
  );
};

export default Footer;

export const QuickLinks = [
  {
    id: 1,
    name: "About Us",
    link: "https://www.vriddhi.co/#aboutus",
  },{
    id: 2,
    name: "Tournaments",
    link: "https://www.vriddhi.co/#tournament",
  },
  {
    id: 3,
    name: "Register",
    link: "/register",
  },
  {
    id: 4,
    name: "Contact Us",
    link: "https://www.vriddhi.co/#contactus",
  },
];
export const support = [
  {
    id: 1,
    name: "Privacy Policy",
    link: "/PrivacyPolicy",
  },
  {
    id: 2,
    name: "Terms & Conditions",
    link: "/terms",
  },
  {
    id: 3,
    name: "Legality",
    link: "/legality",
  },
];
>>>>>>> 4b9a4be0f3a55d0a0ce9f16c2c84450618f8dd01
