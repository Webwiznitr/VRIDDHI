import { useState } from "react";
import Link from 'next/link'


export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false




    return (

        <div className="flex items-center justify-around  text-white">
            <Link href="/">
                <img src="https://res.cloudinary.com/dgy8ybeoy/image/upload/v1666185863/Vriddhi_aybee7.png" className="h-12" alt="logo" />
            </Link>
            <nav>
                <section className="MOBILE-MENU flex lg:hidden">
                    <div
                        className="HAMBURGER-ICON space-y-2 z-40"
                        onClick={() => setIsNavOpen(!isNavOpen)} // toggle isNavOpen state on click
                    >
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                    </div>

                    <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                        <div
                            className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
                            onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
                        >
                            <svg
                                className="h-8 w-8 text-gray-600"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="0"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </div>
                        <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px] ">
                            <li className=" border-gray-400 my-8 uppercase ">
                                <Link href="/tournament" className="hover:opacity-90">
                                    TOURNAMENT
                                </Link>
                            </li>
                            <li className=" border-gray-400 my-8 uppercase hover:opacity-90">
                                <Link href="/gallery" className="hover:opacity-90">
                                    GALLERY
                                </Link>
                            </li>
                            <li className=" border-gray-400 my-8 uppercase hover:opacity-90">
                                <Link href="/">ABOUT US</Link>
                            </li>
                            <li className=" border-gray-400 my-8 uppercase">
                                <a href="#ourteam">OUR TEAM</a>
                            </li>
                            <li className=" border-gray-400 my-8 uppercase">
                                <Link href="/contact">CONTACT US</Link>
                            </li>
                            <li className=" border-gray-400 my-8 uppercase">
                                <Link href="/register">REGISTER</Link>
                            </li >
                        </ul >
                    </div >
                </section >

                <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
                    <li className=" border-gray-400 my-8 uppercase hover:opacity-80">
                        <Link href="/tournament">TOURNAMENT</Link>
                    </li>
                    <li className=" border-gray-400 my-8 uppercase hover:opacity-80">
                        <Link href="/gallery" className="hover:opacity-90">
                            GALLERY
                        </Link>          </li >
                    <li className=" border-gray-400 my-8 uppercase hover:opacity-80">
                        <Link href="/">ABOUT US</Link>
                    </li >
                    <li className=" border-gray-400 my-8 uppercase hover:opacity-80">
                        <a href="#ourteam">OUR TEAM</a>
                    </li>
                    <li className=" border-gray-400 my-8 uppercase hover:opacity-80">
                        <Link href="/contact">CONTACT US</Link>
                    </li >

                    <li className=" border-gray-400 my-8 uppercase hover:opacity-80 ">
                        <Link
                            href="/register"
                            className="text-[rgb(209,113,60)] border-[0.5px] rounded-2xl p-2 px-4 border-[rgb(209,113,60)]"
                        >
                            REGISTER

                        </Link>
                    </li >
                </ul >
            </nav >
            <Link href="/" className="hidden lg:block" >
                <img src="https://res.cloudinary.com/dgy8ybeoy/image/upload/v1666185862/SAC_PNG_MERCH_jcr5ha.png" className="h-24" alt="logo" />
            </Link >
            <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: #111a21;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>

        </div >

    );
}