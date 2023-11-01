<<<<<<< HEAD
import React from "react";
import Image from "next/image";


const page = () => {
  return (
    <section id="contactus" className="min-h-screen bg-black flex flex-col text-white justify-center items-center overflow-hidden ">
      <h1 className="text-center sm:text-4xl md:text-5xl lg:text-6xl text-3xl py-8 font-nidus ">Contact US</h1>
      <div
        className="flex flex-col md:flex-row justify-center  items-center gap-11
    md:gap-32"
      >
        <div className="   ">
          <Image
            src={"/map.jpg"}
            alt="Picture of the author"
            width={500}
            height={100}
            className="rounded-xl md:h-[20rem] h-auto w-[15rem] md:w-auto  "
          />
        </div>
        <div className="flex flex-col gap-9 md:w-1/4 w-[15rem] ">
          {ContactData.map((item) => {
            return (
              <div key={item.id} className="flex md:justify-start flex-col md:flex-row md:text-/start justify-center text-center items-center gap-6 md:items-center">
                <a href={item.mail} target="_blank" className="">
                  <Image
                    src={item.logo}
                    alt="logo"
                    width={1}
                    height={1}
                    className="w-[42px] h-[31px] "
                  />
                </a>
                <div className="flex justify-center ">
                  <span className="text-white w-56 md:w-auto">{item.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-10">
   
      </div>
    </section>
  );
};

export default page;
const ContactData = [
  {
    id: 1,
    name: "National Insitute of Technology Rourkela, Jindal Colony, Udit Nagar, Rourkela, Odisha 769001",
    logo: "/location.svg",
  },
  {
    id: 2,
    name: "nitr.vriddhi@gmail.com",
    logo: "/email.svg",
    mail: "mailto:nitr.vriddhi@gmail.com",
  },
  {
    id: 2,
    name: "Uday Kumar:- 7381357996",
    logo: "/call.svg",
    mail: "tel:7381357996",
  },
];
=======
import React from "react";
import Image from "next/image";


const page = () => {
  return (
    <section id="contactus" className="min-h-screen bg-black flex flex-col text-white justify-center items-center overflow-hidden ">
      <h1 className="text-center sm:text-4xl md:text-5xl lg:text-6xl text-3xl py-8 font-nidus ">Contact US</h1>
      <div
        className="flex flex-col md:flex-row justify-center  items-center gap-11
    md:gap-32"
      >
        <a href="https://www.google.com/maps/place/National+Institute+of+Technology,+Rourkela/@22.253051,84.8983625,17z/data=!3m1!4b1!4m6!3m5!1s0x3a201f72bbd561c3:0xab5c70e76a7b5a!8m2!3d22.253051!4d84.9009428!16zL20vMGNnM2xr?entry=ttu"><div className="   ">
          <Image
            src={"/map.jpg"}
            alt="Picture of the author"
            width={500}
            height={100}
            className="rounded-xl md:h-[20rem] h-auto w-[15rem] md:w-auto  "
          />
        </div></a>
        <div className="flex flex-col gap-9 md:w-1/4 w-[15rem] ">
          {ContactData.map((item) => {
            return (
              <div key={item.id} className="flex md:justify-start flex-col md:flex-row md:text-/start justify-center text-center items-center gap-6 md:items-center">
                <a href={item.mail} target="_blank" className="">
                  <Image
                    src={item.logo}
                    alt="logo"
                    width={1}
                    height={1}
                    className="w-[42px] h-[31px] "
                  />
                </a>
                <div className="flex justify-center ">
                  <span className="text-white w-56 md:w-auto">{item.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-10">
   
      </div>
    </section>
  );
};

export default page;
const ContactData = [
  {
    id: 1,
    name: "National Insitute of Technology Rourkela, Jindal Colony, Udit Nagar, Rourkela, Odisha 769001",
    logo: "/location.svg",
  },
  {
    id: 2,
    name: "nitr.vriddhi@gmail.com",
    logo: "/email.svg",
    mail: "mailto:nitr.vriddhi@gmail.com",
  },
  {
    id: 2,
    name: "Uday Kumar:- 7381357996",
    logo: "/call.svg",
    mail: "tel:7381357996",
  },
];
>>>>>>> 4b9a4be0f3a55d0a0ce9f16c2c84450618f8dd01
