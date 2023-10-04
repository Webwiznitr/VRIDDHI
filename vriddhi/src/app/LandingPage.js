"use client"
import { useState, useEffect } from "react";
import Image from 'next/image'; // Import Image component from Next.js
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";


// Assume Navbar and Footer components are imported here

const LandingPage = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer); // Cleanup the timer on unmount
    }, []);

    return (
        <>
            {loading ? (
                <div className="w-screen h-screen flex justify-center items-center bg-[#172027]">
                    <Image
                        src="https://res.cloudinary.com/dgy8ybeoy/image/upload/v1666186569/0_U2RiSXJx8U9K4thZ_vsmfww.gif"
                        alt="loader"
                        width={100}
                        height={100}
                    />
                </div>
            ) : (
                <>
                    <div className="bg-[#111a21] min-h-screen h-[100%] text-white flex flex-col content-evenly">
                        <Navbar /> {/* Assuming Navbar component is imported */}
                        <div className="flex justify-around landing">
                            <div className="w-1/2 text flex flex-col p-1 lg:pl-2 lg:w-3/5 mt-20 mb-40 md:ml-3">
                                <div className="text-2xl lg:text-4x sports">Sports Fest</div>
                                <div className="text-4xl lg:text-6xl sports lg:mt-2">
                                    VRIDDHI'2023
                                </div>
                                <div className="text-md lg:text-xl sports lg:mt-4">
                                    Vriddhi is East India's biggest sports festival. A sports gala of
                                    sorts, several sports enthusiasts grace the platform to prove
                                    their mettle with the motto to ignite the sportsman in you and
                                    educate you about the spirit of the game.
                                </div>
                            </div>
                            <div className="w-1/2 img bg-gradient-to-r from-cyan-[rgb(26,26,50)] to-[rgb(26,33,83)] rounded-100 backdrop-opacity-5 h-[80vh] ">
                                <Image
                                    src="https://res.cloudinary.com/dcbco6i8s/image/upload/v1664966819/IMG_20221003_211203_621_beutqw.png"
                                    alt="background"
                                    width={400}
                                    height={500}
                                />
                            </div>
                        </div>
                    </div>
                    <Gallery />
                    <Footer />
                </>
            )}
        </>
    );
};

export default LandingPage;
