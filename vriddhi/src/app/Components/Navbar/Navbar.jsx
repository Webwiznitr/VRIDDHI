import Link from "next/link";
import React from "react";
import "./Navbar.css";
import Image from "next/image";
import vriddhiLogo from "public/Images/vriddhiLogo.svg";
import NITRLogo from "public/Images/NITRLogo.svg";
const navComponents = [
  { title: "TOURNAMENT", id: 1 },
  { title: "GALLERY", id: 2 },
  { title: "ABOUT US", id: 3 },
  { title: "OUR TEAM", id: 4 },
  { title: "CONTACT US", id: 5 },
];

function Navbar() {
  return (
    <nav className="flex justify-around items-center z-10 relative">
      <a href="/">
        <Image
          src={vriddhiLogo}
          alt="vriddhi"
          height={"300"}
          width={"220"}
          className="cursor-pointer"
        />
      </a>
      <div className="flex items-center">
        <div>
          {navComponents.map((navComponent) => (
            <Link
              href={"/"}
              key={navComponent.id}
              className="text-white text-sm font-normal py-6 px-5 inline-flex font-nidus hover:text-blue-800"
            >
              {navComponent.title}
            </Link>
          ))}
        </div>
        <button className="font-nidus text-[#D1713C] text-base px-5 border-[1.257px] border-solid border-[#D1713C] rounded-[18.858px] py-2 hover:text-[#f19665] hover:border-[#f19665]">
          REGISTER
        </button>
      </div>
      <a href="https://www.nitrkl.ac.in/" target="blank">
        <Image
          src={NITRLogo}
          alt="NITR LOGO"
          height={"87"}
          width={"75"}
          className="py-2 cursor-pointer"
        />
      </a>
    </nav>
  );
}

export default Navbar;
