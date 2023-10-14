"use client";
import Link from "next/link";
import React, { useState } from "react";
import "./Navbar.css";
import Image from "next/image";
import vriddhiLogo from "public/Images/vriddhiLogo.svg";
import NITRLogo from "public/Images/NITRLogo.svg";
import Hamburger from "hamburger-react";
const navComponents = [
  { title: "TOURNAMENT", id: 1 },
  { title: "GALLERY", id: 2 },
  { title: "ABOUT US", id: 3 },
  { title: "OUR TEAM", id: 4 },
  { title: "CONTACT US", id: 5 },
];

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <nav className="md:flex justify-between items-center z-20 fixed w-full h-auto top-0">
        <div className="flex justify-between items-center">
          <a href="/">
            <Image
              src={vriddhiLogo}
              alt="vriddhi"
              height={"200"}
              width={"200"}
              className="cursor-pointer px-2"
            />
          </a>
          <span className="md:hidden relative px-4">
            <Hamburger
              toggled={navbar}
              toggle={() => setNavbar((navbar) => !navbar)}
              duration={0.5}
            />
          </span>
        </div>
        <ul
          className={`${navbar ? "block" : "hidden"} md:flex md:items-center`}
        >
          {navComponents.map((navComponent) => (
            <li key={navComponent.id}>
              <Link
                onClick={() => setNavbar((navbar) => !navbar)}
                href={"/"}
                className="text-white text-sm font-normal py-6 px-5 font-nidus hover:text-blue-800"
              >
                {navComponent.title}
              </Link>
            </li>
          ))}
<Link href={"/register"}>
          <button
            className={`font-nidus text-[#D1713C] text-sm md:text-base mx-2 md:mx-0 px-3 md:px-5 border-[1.257px] border-solid border-[#D1713C] rounded-[18.858px] py-1 my-1 mb-2 md:my-0 md:py-2 hover:text-[#f19665] hover:border-[#f19665] ${
              navbar ? "block" : "hidden"
            } md:flex`}
          >
            REGISTER
          </button></Link>
        </ul>
        <a href="https://www.nitrkl.ac.in/" target="blank">
          <Image
            src={NITRLogo}
            alt="NITR LOGO"
            height={"87"}
            width={"75"}
            className="py-2 cursor-pointer hidden md:block"
          />
        </a>
      </nav>
    </>

  );
}

export default Navbar;
