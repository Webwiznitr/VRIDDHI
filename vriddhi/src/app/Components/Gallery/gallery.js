import Image from "next/image";
import "../Gallery/gallery.css"
import photo1 from "../../../../public/images/Gallery/sports1.jpg";
import photo2 from "../../../../public/images/Gallery/sports2.jpg";
import photo3 from "../../../../public/images/Gallery/sports3.jpg";
import photo4 from "../../../../public/images/Gallery/sports4.jpg";
import photo5 from "../../../../public/images/Gallery/sports5.jpg";
import photo6 from "../../../../public/images/Gallery/sports6.jpg";
import photo7 from "../../../../public/images/Gallery/sports7.jpg";
import photo8 from "../../../../public/images/Gallery/sports8.jpg";
import photo9 from "../../../../public/images/Gallery/sports9.jpg";
import photo10 from "../../../../public/images/Gallery/sports10.jpg";

export default function Gallery() {
    return (
        <div id="container" className="  w-full background-color  relative z-10 ">
            <div id="head"
                className="font-nidus first-letter:gallery-top-modified gallery-top flex w-[29rem] h-[7rem] mx-auto flex-col justify-center text-[24px] font-size font-size-1  flex-shrink-0 text-white text-center font-nidus-sans text-4xl font-normal leading-10 uppercase color ">
                <div className="text-center sm:text-4xl md:text-5xl lg:text-6xl text-3xl py-8 font-nidus">Gallery</div></div>
            <div id="main" className="w-[92%] mx-auto flex flex-col items-center justify-center h-[38rem] z-20 relative">
                <div id="top" className="w-full  h-[12.6875rem] up-675 up-375 up-452  flex-shrink-0 linear z-40 relative" ></div>
                <div id="chat-container" className="w-full  mt-[-9rem] z-30 relative  mb-[-11rem] height overflow-y-auto custom-scroll-pulse sc-bg ">
                    <div id="center" className="flex flex-col items-center justify-center">
                        <div id="rectangles" className="grid grid-cols-3  gap-20 g1 g2 g3 g4 g5 ">

                            <div id="c1" className="grid grid-cols-1 gap-6 ">
                                <div className=" w-[17rem] h-[16rem] size-1075-1-3 size-885-1-3 size-675-1-3  size-555-1-3  flex-shrink-0 bg1"><Image src={photo1} layout='fit' objectFit="contain" className="h-[100%] w-[100%]" /></div>
                                <div className=" w-[17rem] h-[16rem] size-1075-1-3 size-885-1-3 size-675-1-3 size-555-1-3 flex-shrink-0 bg1 "><Image src={photo4} layout='fit' objectFit="contain" className="h-[100%] w-[100%]" /></div>
                                <div className=" w-[17rem] h-[16rem] size-1075-1-3 size-885-1-3 size-675-1-3 size-555-1-3 flex-shrink-0 bg1 "><Image src={photo7} layout='fit' objectFit="contain" className="h-[100%] w-[100%]" /></div>
                                <div className=" w-[17rem] h-[16rem] size-1075-1-3 size-885-1-3 size-675-1-3 size-555-1-3 flex-shrink-0 bg1 "><Image src={photo10} layout='fit' objectFit="contain" className="h-[100%] w-[100%]" /></div>
                                {/* <div className=" w-[17rem] h-[16rem] size-1075-1-3 size-885-1-3 size-675-1-3 size-555-1-3 flex-shrink-0 bg1 "><Image src={photo2} layout='fit' objectFit="contain" className="h-[100%] w-[100%]" /></div>
                                <div className=" w-[17rem] h-[16rem] size-1075-1-3 size-885-1-3 size-675-1-3 size-555-1-3 flex-shrink-0 bg1 "><Image src={photo3} layout='fit' objectFit="contain" className="h-[100%] w-[100%]" /></div> */}
                            </div>
                            <div id="c2" className="grid grid-cols-1 mt-[3rem] gap-[1px] g-675-2 g-452-2 g-375-2 ">
                                <div className=" w-[17rem] h-[10rem] size-1075-2 size-885-2 size-675-2 size-555-2 flex-shrink-0 bg1 "><Image src={photo2} layout='fit' objectFit="contain" className="h-[100%] w-[100%]" /></div>
                                <div className=" w-[17rem] h-[10rem] size-1075-2 size-885-2 size-675-2 size-555-2 flex-shrink-0 bg1 "><Image src={photo5} layout='fit' objectFit="contain" className="h-[100%] w-[100%]" /></div>
                                <div className=" w-[17rem] h-[10rem] size-1075-2 size-885-2 size-675-2 size-555-2 flex-shrink-0 bg1 "><Image src={photo8} layout='fit' objectFit="contain" className="h-[100%] w-[100%]" /></div>
                                {/* <div className=" w-[17rem] h-[10rem] size-1075-2 size-885-2 size-675-2 size-555-2 flex-shrink-0 bg1 "><Image src={photo4} layout='fit' objectFit="contain" className="h-[100%] w-[100%]" /></div>
                                <div className=" w-[17rem] h-[10rem] size-1075-2 size-885-2 size-675-2 size-555-2 flex-shrink-0 bg1 "><Image src={photo1} layout='fit' objectFit="contain" className="h-[100%] w-[100%]" /></div>
                                <div className=" w-[17rem] h-[10rem] size-1075-2 size-885-2 size-675-2 size-555-2 flex-shrink-0 bg1 "><Image src={photo4} layout='fit' objectFit="contain" className="h-[100%] w-[100%]" /></div> */}
                            </div>
                            <div id="c3" className="grid grid-cols-1 gap-6  ">
                                <div className=" w-[17rem] h-[16rem] size-1075-1-3 size-885-1-3 size-675-1-3 size-555-1-3 flex-shrink-0 bg1 "><Image src={photo3} layout='fit' objectFit="contain" className="h-[100%] w-[100%]" /></div>
                                <div className=" w-[17rem] h-[16rem] size-1075-1-3 size-885-1-3 size-675-1-3 size-555-1-3 flex-shrink-0 bg1 "><Image src={photo6} layout='fit' objectFit="contain" className="h-[100%] w-[100%]" /></div>
                                <div className=" w-[17rem] h-[16rem] size-1075-1-3 size-885-1-3 size-675-1-3 size-555-1-3 flex-shrink-0 bg1 "><Image src={photo9} layout='fit' objectFit="contain" className="h-[100%] w-[100%]" /></div>
                                {/* <div className=" w-[17rem] h-[16rem] size-1075-1-3 size-885-1-3 size-675-1-3 size-555-1-3 flex-shrink-0 bg1 "><Image src={photo6} layout='fit' objectFit="contain" className="h-[100%] w-[100%]" /></div>
                                <div className=" w-[17rem] h-[16rem] size-1075-1-3 size-885-1-3 size-675-1-3 size-555-1-3 flex-shrink-0 bg1 "><Image src={photo5} layout='fit' objectFit="contain" className="h-[100%] w-[100%]" /></div>
                                 <div className=" w-[17rem] h-[16rem] size-1075-1-3 size-885-1-3 size-675-1-3 size-555-1-3 flex-shrink-0 bg1 "><Image src={photo6} layout='fit' objectFit="contain" className="h-[100%] w-[100%]" /></div> */}

                            </div>
                        </div>
                    </div>
                </div>
                <div id="bottom" className="w-full  h-[12.6875rem]  flex-shrink-0 tc z-30 relative" ></div>

            </div>
        </div>
    )
}
