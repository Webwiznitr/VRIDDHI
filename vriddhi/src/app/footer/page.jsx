import React from "react";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <>
      <footer className="bg-[#0D1318]  text-white  grid md:grid-cols-5 grid-cols-reverse   ">
        <div className="flex flex-col md:order-1 order-5 justify-start gap-4 items-start md:ml-5 p-7 md:p-0 ">
          <h1 className="text-xl mt-7 uppercase">About</h1>
          <span>
            Vriddhi 2022 intends to feature major Sports tournaments such as
            Football, Cricket, Badminton, and much more.
          </span>
          <span className="font-bold ">Subham Gourav Biswal: 9337067360</span>
          <div className="flex items-start justify-start w-full gap-3">
            <Link href="https://www.linkedin.com/company/vriddhi-iit-ism-dhanbad/">
              <img src="/email-ext.svg" alt="" />
            </Link>
            <Link href="https://www.facebook.com/vriddhi.iitism/">
              <img src="/facebook.svg" alt="" />
            </Link>
            <Link href="https://www.instagram.com/vriddhi.iitism/">
              <img src="/instagram.svg" alt="" />
            </Link>
            <Link href="" >
              <img src="/twitter.svg" alt="" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col md:order-2 order-4  items-start md:ml-9 gap-4 justify-start p-7 md:p-0">
          <h1 className="text-xl mt-7 uppercase ">Qucik Links</h1>
          <div>
            <ul>
              {QucikLinks.map((item, index) => {
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
        <div className="flex justify-center p-7 md:p-9 md:order-4  order-2">
          <img src={"/map.jpg"} alt="" className="rounded-lg" />
        </div>
        <div className="flex justify-center p-7 md:order-5 order-1  ">
          <img src={"/all_logo.png"} alt="" className="rounded-lg" />
        </div>
      </footer>
    </>
  );
};

export default Footer;

export const QucikLinks = [
  {
    id: 1,
    name: "About Us",
    link: "/about",
  },
  {
    id: 2,
    name: "Tournaments",
    link: "/tournaments",
  },
  {
    id: 3,
    name: "Register",
    link: "/register",
  },
  {
    id: 4,
    name: "Contact Us",
    link: "/contact",
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
