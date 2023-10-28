"use client";
import React from "react";

const Score = () => {
  const sport_selector = (btn, upcming, completed) => {
    if (typeof document !== "undefined") {
      var list1 = document.getElementsByClassName("pc");
    }
    list1[0].classList.remove("scale-125");
    list1[0].classList.remove("pc");
    document.getElementById(btn).classList.add("scale-125");
    document.getElementById(btn).classList.add("pc");

    let list2 = document.getElementsByClassName("current-up");
    list2[0].classList.add("hidden");
    list2[0].classList.remove("current-up");

    let list3 = document.getElementsByClassName("current-com");
    list3[0].classList.add("hidden");
    list3[0].classList.remove("current-com");

    document.getElementById(upcming).classList.remove("hidden");
    document.getElementById(upcming).classList.add("current-up");

    document.getElementById(completed).classList.remove("hidden");
    document.getElementById(completed).classList.add("current-com");
  };

  const sport_selector_mob = (btn, upcming, completed) => {
    if (typeof document !== "undefined") {
      var list1 = document.getElementsByClassName("mob");
    }
    list1[0].classList.remove("scale-125");
    list1[0].classList.remove("mob");
    document.getElementById(btn).classList.add("scale-125");
    document.getElementById(btn).classList.add("mob");

    let list2 = document.getElementsByClassName("current-up-mob");
    list2[0].classList.add("hidden");
    list2[0].classList.remove("current-up-mob");

    let list3 = document.getElementsByClassName("current-com-mob");
    list3[0].classList.add("hidden");
    list3[0].classList.remove("current-com-mob");

    document.getElementById(upcming).classList.remove("hidden");
    document.getElementById(upcming).classList.add("current-up-mob");

    document.getElementById(completed).classList.remove("hidden");
    document.getElementById(completed).classList.add("current-com-mob");
  };

  return (
    <>
      {/* Mobile View */}
      <div className="bg-[rgb(24,24,33)] w-full sm:hidden">
        <div className="w-full flex justify-center flex-shrink-0">
          <h1 className="text-[24px] font-nidus">SCORE CARD</h1>
        </div>

        <div className="w-full flex justify-evenly col-span-2 items-center text-black mt-2">
          <button
            id="cricket-btn-mob"
            onClick={() => {
              sport_selector_mob(
                `cricket-btn-mob`,
                `cricket-score-upcoming-mob`,
                `cricket-score-completed-mob`
              );
            }}
            type="button"
            className="mob w-[16%] h-[25px] rounded-[12px] bg-[#D8DFE1] text-[10px] my-2 scale-125"
          >
            <div className="p-1 rounded-[25px] bg-[#FFFCFC]">CRICKET</div>
          </button>

          <button
            id="football-btn-mob"
            onClick={() => {
              sport_selector_mob(
                `football-btn-mob`,
                `football-score-upcoming-mob`,
                `football-score-completed-mob`
              );
            }}
            type="button"
            className=" w-[16%] h-[25px] rounded-[12px] bg-[#D8DFE1] text-[10px] my-2"
          >
            <div className="p-1 rounded-[25px] bg-[#FFFCFC]">FOOTBALL</div>
          </button>

          <button
            id="basketball-btn-mob"
            onClick={() => {
              sport_selector_mob(
                `basketball-btn-mob`,
                `basketball-score-upcoming-mob`,
                `basketball-score-completed-mob`
              );
            }}
            type="button"
            className=" w-[16%] h-[25px] rounded-[12px] bg-[#D8DFE1] text-[10px] my-2"
          >
            <div className="p-1 rounded-[25px] bg-[#FFFCFC]">BASKET BALL</div>
          </button>

          <button
            id="khokho-btn-mob"
            onClick={() => {
              sport_selector_mob(
                `khokho-btn-mob`,
                `khokho-score-upcoming-mob`,
                `khokho-score-completed-mob`
              );
            }}
            type="button"
            className=" w-[16%] h-[25px] rounded-[12px] bg-[#D8DFE1] text-[10px] my-2"
          >
            <div className="p-1 rounded-[25px] bg-[#FFFCFC]">KHOKHO</div>
          </button>

          <button
            id="kabbadi-btn-mob"
            onClick={() => {
              sport_selector_mob(
                `kabbadi-btn-mob`,
                `kabbadi-score-upcoming-mob`,
                `kabbadi-score-completed-mob`
              );
            }}
            type="button"
            className="w-[16%] h-[25px] rounded-[12px] bg-[#D8DFE1] text-[10px] my-2"
          >
            <div className="p-1 rounded-[25px] bg-[#FFFCFC]">KABBADI</div>
          </button>
        </div>

        <div className="w-full flex">
          <div className="w-1/2 h-full flex flex-col items-center justify-center">
            <div
              className="w-[60%] h-[24px] bg-[#001A43] rounded-[78px] mt-4 
                            flex justify-center items-center text-[10px]"
            >
              <h1>UPCOMING</h1>
            </div>

            <div
              id="score-card-upcoming"
              className="w-[90%] lg:w-[80%] h-[300px] rounded-[15px] my-4 overflow-y-scroll scrollbar"
            >
              {/* CRICKET */}
              <div id="cricket-score-upcoming-mob" className="current-up-mob">
                <div className="w-full flex items-center flex-col">
                  <div className="w-[90%] mt-4 rounded-[10px] bg-[#F4F4F4] flex flex-col items-center overflow-hidden text-[10px] text-black ">
                    <div className="w-full flex flex-col mb-2">
                      <div className="w-full text-black ml-1">
                        <h2 className="my-2">VRIDDHI-CRICKET</h2>
                      </div>
                      <div className="w-full flex">
                        <div className="w-[58%] h-full flex flex-col items-center">
                          <div className="w-[90%] flex">
                            <div className="w-[30%] h-[18px] bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[70%] flex items-center">
                              <h1 className="ml-1">NIT RKL</h1>
                            </div>
                          </div>
                          <div className="w-full my-1">
                            <h1 className="ml-2 my-[2px]">VS</h1>
                          </div>

                          <div className="w-[90%] flex">
                            <div className="w-[30%] h-[18px] bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[70%] flex items-center">
                              <h1 className="ml-1">NIT SUR</h1>
                            </div>
                          </div>
                        </div>

                        <div className="w-[42%]">
                          <div className="h-full flex flex-col ">
                            <h4 className="text-[6px] mt-1">DATE-23RD SEPT</h4>
                            <h4 className="text-[6px] mt-1">TIME-6.30PM</h4>
                            <h4 className="text-[6px] mt-1">LOCATION STS</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-[90%] mt-4 rounded-[10px] bg-[#F4F4F4] flex flex-col items-center overflow-hidden text-[10px] text-black ">
                    <div className="w-full flex flex-col mb-2">
                      <div className="w-full text-black ml-1">
                        <h2 className="my-2">VRIDDHI-CRICKET</h2>
                      </div>
                      <div className="w-full flex">
                        <div className="w-[58%] h-full flex flex-col items-center">
                          <div className="w-[90%] flex">
                            <div className="w-[30%] h-[18px] bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[70%] flex items-center">
                              <h1 className="ml-1">NIT RKL</h1>
                            </div>
                          </div>
                          <div className="w-full my-1">
                            <h1 className="ml-2 my-[2px]">VS</h1>
                          </div>

                          <div className="w-[90%] flex">
                            <div className="w-[30%] h-[18px] bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[70%] flex items-center">
                              <h1 className="ml-1">NIT SUR</h1>
                            </div>
                          </div>
                        </div>

                        <div className="w-[42%]">
                          <div className="h-full flex flex-col ">
                            <h4 className="text-[6px] mt-1">DATE-23RD SEPT</h4>
                            <h4 className="text-[6px] mt-1">TIME-6.30PM</h4>
                            <h4 className="text-[6px] mt-1">LOCATION STS</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-[90%] mt-4 mb-4 rounded-[10px] bg-[#F4F4F4] flex flex-col items-center overflow-hidden text-[10px] text-black ">
                    <div className="w-full flex flex-col mb-2">
                      <div className="w-full text-black ml-1">
                        <h2 className="my-2">VRIDDHI-CRICKET</h2>
                      </div>
                      <div className="w-full flex">
                        <div className="w-[58%] h-full flex flex-col items-center">
                          <div className="w-[90%] flex">
                            <div className="w-[30%] h-[18px] bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[70%] flex items-center">
                              <h1 className="ml-1">NIT RKL</h1>
                            </div>
                          </div>
                          <div className="w-full my-1">
                            <h1 className="ml-2 my-[2px]">VS</h1>
                          </div>

                          <div className="w-[90%] flex">
                            <div className="w-[30%] h-[18px] bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[70%] flex items-center">
                              <h1 className="ml-1">NIT SUR</h1>
                            </div>
                          </div>
                        </div>

                        <div className="w-[42%]">
                          <div className="h-full flex flex-col ">
                            <h4 className="text-[6px] mt-1">DATE-23RD SEPT</h4>
                            <h4 className="text-[6px] mt-1">TIME-6.30PM</h4>
                            <h4 className="text-[6px] mt-1">LOCATION STS</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* FOOTBALL */}
              <div id="football-score-upcoming-mob" className="hidden">
                <div className="w-full flex items-center flex-col">
                  <div className="w-[90%] mt-4 rounded-[10px] bg-[#F4F4F4] flex flex-col items-center overflow-hidden text-[10px] text-black ">
                    <div className="w-full flex flex-col mb-2">
                      <div className="w-full text-black ml-1">
                        <h2 className="my-2">VRIDDHI-FOOTBALL</h2>
                      </div>
                      <div className="w-full flex">
                        <div className="w-[58%] h-full flex flex-col items-center">
                          <div className="w-[90%] flex">
                            <div className="w-[30%] h-[18px] bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[70%] flex items-center">
                              <h1 className="ml-1">NIT RKL</h1>
                            </div>
                          </div>
                          <div className="w-full my-1">
                            <h1 className="ml-2 my-[2px]">VS</h1>
                          </div>

                          <div className="w-[90%] flex">
                            <div className="w-[30%] h-[18px] bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[70%] flex items-center">
                              <h1 className="ml-1">NIT SUR</h1>
                            </div>
                          </div>
                        </div>

                        <div className="w-[42%]">
                          <div className="h-full flex flex-col ">
                            <h4 className="text-[6px] mt-1">DATE-23RD SEPT</h4>
                            <h4 className="text-[6px] mt-1">TIME-6.30PM</h4>
                            <h4 className="text-[6px] mt-1">LOCATION STS</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-[90%] mt-4 rounded-[10px] bg-[#F4F4F4] flex flex-col items-center overflow-hidden text-[10px] text-black ">
                    <div className="w-full flex flex-col mb-2">
                      <div className="w-full text-black ml-1">
                        <h2 className="my-2">VRIDDHI-FOOTBALL</h2>
                      </div>
                      <div className="w-full flex">
                        <div className="w-[58%] h-full flex flex-col items-center">
                          <div className="w-[90%] flex">
                            <div className="w-[30%] h-[18px] bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[70%] flex items-center">
                              <h1 className="ml-1">NIT RKL</h1>
                            </div>
                          </div>
                          <div className="w-full my-1">
                            <h1 className="ml-2 my-[2px]">VS</h1>
                          </div>

                          <div className="w-[90%] flex">
                            <div className="w-[30%] h-[18px] bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[70%] flex items-center">
                              <h1 className="ml-1">NIT SUR</h1>
                            </div>
                          </div>
                        </div>

                        <div className="w-[42%]">
                          <div className="h-full flex flex-col ">
                            <h4 className="text-[6px] mt-1">DATE-23RD SEPT</h4>
                            <h4 className="text-[6px] mt-1">TIME-6.30PM</h4>
                            <h4 className="text-[6px] mt-1">LOCATION STS</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-[90%] mt-4 mb-4 rounded-[10px] bg-[#F4F4F4] flex flex-col items-center overflow-hidden text-[10px] text-black ">
                    <div className="w-full flex flex-col mb-2">
                      <div className="w-full text-black ml-1">
                        <h2 className="my-2">VRIDDHI-FOOTBALL</h2>
                      </div>
                      <div className="w-full flex">
                        <div className="w-[58%] h-full flex flex-col items-center">
                          <div className="w-[90%] flex">
                            <div className="w-[30%] h-[18px] bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[70%] flex items-center">
                              <h1 className="ml-1">NIT RKL</h1>
                            </div>
                          </div>
                          <div className="w-full my-1">
                            <h1 className="ml-2 my-[2px]">VS</h1>
                          </div>

                          <div className="w-[90%] flex">
                            <div className="w-[30%] h-[18px] bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[70%] flex items-center">
                              <h1 className="ml-1">NIT SUR</h1>
                            </div>
                          </div>
                        </div>

                        <div className="w-[42%]">
                          <div className="h-full flex flex-col ">
                            <h4 className="text-[6px] mt-1">DATE-23RD SEPT</h4>
                            <h4 className="text-[6px] mt-1">TIME-6.30PM</h4>
                            <h4 className="text-[6px] mt-1">LOCATION STS</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* BASKET BALL */}
              <div id="basketball-score-upcoming-mob" className="hidden">
                <div className="w-full flex items-center flex-col">
                  <div className="w-[90%] mt-4 rounded-[10px] bg-[#F4F4F4] flex flex-col items-center overflow-hidden text-[10px] text-black ">
                    <div className="w-full flex flex-col mb-2">
                      <div className="w-full text-black ml-1">
                        <h2 className="my-2">VRIDDHI-BASKET BALL</h2>
                      </div>
                      <div className="w-full flex">
                        <div className="w-[58%] h-full flex flex-col items-center">
                          <div className="w-[90%] flex">
                            <div className="w-[30%] h-[18px] bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[70%] flex items-center">
                              <h1 className="ml-1">NIT RKL</h1>
                            </div>
                          </div>
                          <div className="w-full my-1">
                            <h1 className="ml-2 my-[2px]">VS</h1>
                          </div>

                          <div className="w-[90%] flex">
                            <div className="w-[30%] h-[18px] bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[70%] flex items-center">
                              <h1 className="ml-1">NIT SUR</h1>
                            </div>
                          </div>
                        </div>

                        <div className="w-[42%]">
                          <div className="h-full flex flex-col ">
                            <h4 className="text-[6px] mt-1">DATE-23RD SEPT</h4>
                            <h4 className="text-[6px] mt-1">TIME-6.30PM</h4>
                            <h4 className="text-[6px] mt-1">LOCATION STS</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-[90%] mt-4 rounded-[10px] bg-[#F4F4F4] flex flex-col items-center overflow-hidden text-[10px] text-black ">
                    <div className="w-full flex flex-col mb-2">
                      <div className="w-full text-black ml-1">
                        <h2 className="my-2">VRIDDHI-BASKET BALL</h2>
                      </div>
                      <div className="w-full flex">
                        <div className="w-[58%] h-full flex flex-col items-center">
                          <div className="w-[90%] flex">
                            <div className="w-[30%] h-[18px] bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[70%] flex items-center">
                              <h1 className="ml-1">NIT RKL</h1>
                            </div>
                          </div>
                          <div className="w-full my-1">
                            <h1 className="ml-2 my-[2px]">VS</h1>
                          </div>

                          <div className="w-[90%] flex">
                            <div className="w-[30%] h-[18px] bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[70%] flex items-center">
                              <h1 className="ml-1">NIT SUR</h1>
                            </div>
                          </div>
                        </div>

                        <div className="w-[42%]">
                          <div className="h-full flex flex-col ">
                            <h4 className="text-[6px] mt-1">DATE-23RD SEPT</h4>
                            <h4 className="text-[6px] mt-1">TIME-6.30PM</h4>
                            <h4 className="text-[6px] mt-1">LOCATION STS</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-[90%] mt-4 mb-4 rounded-[10px] bg-[#F4F4F4] flex flex-col items-center overflow-hidden text-[10px] text-black ">
                    <div className="w-full flex flex-col mb-2">
                      <div className="w-full text-black ml-1">
                        <h2 className="my-2">VRIDDHI-BASKET BALL</h2>
                      </div>
                      <div className="w-full flex">
                        <div className="w-[58%] h-full flex flex-col items-center">
                          <div className="w-[90%] flex">
                            <div className="w-[30%] h-[18px] bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[70%] flex items-center">
                              <h1 className="ml-1">NIT RKL</h1>
                            </div>
                          </div>
                          <div className="w-full my-1">
                            <h1 className="ml-2 my-[2px]">VS</h1>
                          </div>

                          <div className="w-[90%] flex">
                            <div className="w-[30%] h-[18px] bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[70%] flex items-center">
                              <h1 className="ml-1">NIT SUR</h1>
                            </div>
                          </div>
                        </div>

                        <div className="w-[42%]">
                          <div className="h-full flex flex-col ">
                            <h4 className="text-[6px] mt-1">DATE-23RD SEPT</h4>
                            <h4 className="text-[6px] mt-1">TIME-6.30PM</h4>
                            <h4 className="text-[6px] mt-1">LOCATION STS</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* KHOKHO */}
              <div id="khokho-score-upcoming-mob" className="hidden">
                <div className="w-full flex items-center flex-col">
                  <div className="w-[90%] mt-4 rounded-[10px] bg-[#F4F4F4] flex flex-col items-center overflow-hidden text-[10px] text-black ">
                    <div className="w-full flex flex-col mb-2">
                      <div className="w-full text-black ml-1">
                        <h2 className="my-2">VRIDDHI-KHOKHO</h2>
                      </div>
                      <div className="w-full flex">
                        <div className="w-[58%] h-full flex flex-col items-center">
                          <div className="w-[90%] flex">
                            <div className="w-[30%] h-[18px] bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[70%] flex items-center">
                              <h1 className="ml-1">NIT RKL</h1>
                            </div>
                          </div>
                          <div className="w-full my-1">
                            <h1 className="ml-2 my-[2px]">VS</h1>
                          </div>

                          <div className="w-[90%] flex">
                            <div className="w-[30%] h-[18px] bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[70%] flex items-center">
                              <h1 className="ml-1">NIT SUR</h1>
                            </div>
                          </div>
                        </div>

                        <div className="w-[42%]">
                          <div className="h-full flex flex-col ">
                            <h4 className="text-[6px] mt-1">DATE-23RD SEPT</h4>
                            <h4 className="text-[6px] mt-1">TIME-6.30PM</h4>
                            <h4 className="text-[6px] mt-1">LOCATION STS</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-[90%] mt-4 rounded-[10px] bg-[#F4F4F4] flex flex-col items-center overflow-hidden text-[10px] text-black ">
                    <div className="w-full flex flex-col mb-2">
                      <div className="w-full text-black ml-1">
                        <h2 className="my-2">VRIDDHI-KHOKHO</h2>
                      </div>
                      <div className="w-full flex">
                        <div className="w-[58%] h-full flex flex-col items-center">
                          <div className="w-[90%] flex">
                            <div className="w-[30%] h-[18px] bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[70%] flex items-center">
                              <h1 className="ml-1">NIT RKL</h1>
                            </div>
                          </div>
                          <div className="w-full my-1">
                            <h1 className="ml-2 my-[2px]">VS</h1>
                          </div>

                          <div className="w-[90%] flex">
                            <div className="w-[30%] h-[18px] bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[70%] flex items-center">
                              <h1 className="ml-1">NIT SUR</h1>
                            </div>
                          </div>
                        </div>

                        <div className="w-[42%]">
                          <div className="h-full flex flex-col ">
                            <h4 className="text-[6px] mt-1">DATE-23RD SEPT</h4>
                            <h4 className="text-[6px] mt-1">TIME-6.30PM</h4>
                            <h4 className="text-[6px] mt-1">LOCATION STS</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-[90%] mt-4 mb-4 rounded-[10px] bg-[#F4F4F4] flex flex-col items-center overflow-hidden text-[10px] text-black ">
                    <div className="w-full flex flex-col mb-2">
                      <div className="w-full text-black ml-1">
                        <h2 className="my-2">VRIDDHI-KHOKHO</h2>
                      </div>
                      <div className="w-full flex">
                        <div className="w-[58%] h-full flex flex-col items-center">
                          <div className="w-[90%] flex">
                            <div className="w-[30%] h-[18px] bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[70%] flex items-center">
                              <h1 className="ml-1">NIT RKL</h1>
                            </div>
                          </div>
                          <div className="w-full my-1">
                            <h1 className="ml-2 my-[2px]">VS</h1>
                          </div>

                          <div className="w-[90%] flex">
                            <div className="w-[30%] h-[18px] bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[70%] flex items-center">
                              <h1 className="ml-1">NIT SUR</h1>
                            </div>
                          </div>
                        </div>

                        <div className="w-[42%]">
                          <div className="h-full flex flex-col ">
                            <h4 className="text-[6px] mt-1">DATE-23RD SEPT</h4>
                            <h4 className="text-[6px] mt-1">TIME-6.30PM</h4>
                            <h4 className="text-[6px] mt-1">LOCATION STS</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* KABBADI */}
              <div id="kabbadi-score-upcoming-mob" className="hidden">
                <div className="w-full flex items-center flex-col">
                  <div className="w-[90%] mt-4 rounded-[10px] bg-[#F4F4F4] flex flex-col items-center overflow-hidden text-[10px] text-black ">
                    <div className="w-full flex flex-col mb-2">
                      <div className="w-full text-black ml-1">
                        <h2 className="my-2">VRIDDHI-KABBADI</h2>
                      </div>
                      <div className="w-full flex">
                        <div className="w-[58%] h-full flex flex-col items-center">
                          <div className="w-[90%] flex">
                            <div className="w-[30%] h-[18px] bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[70%] flex items-center">
                              <h1 className="ml-1">NIT RKL</h1>
                            </div>
                          </div>
                          <div className="w-full my-1">
                            <h1 className="ml-2 my-[2px]">VS</h1>
                          </div>

                          <div className="w-[90%] flex">
                            <div className="w-[30%] h-[18px] bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[70%] flex items-center">
                              <h1 className="ml-1">NIT SUR</h1>
                            </div>
                          </div>
                        </div>

                        <div className="w-[42%]">
                          <div className="h-full flex flex-col ">
                            <h4 className="text-[6px] mt-1">DATE-23RD SEPT</h4>
                            <h4 className="text-[6px] mt-1">TIME-6.30PM</h4>
                            <h4 className="text-[6px] mt-1">LOCATION STS</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-[90%] mt-4 rounded-[10px] bg-[#F4F4F4] flex flex-col items-center overflow-hidden text-[10px] text-black ">
                    <div className="w-full flex flex-col mb-2">
                      <div className="w-full text-black ml-1">
                        <h2 className="my-2">VRIDDHI-KABBADI</h2>
                      </div>
                      <div className="w-full flex">
                        <div className="w-[58%] h-full flex flex-col items-center">
                          <div className="w-[90%] flex">
                            <div className="w-[30%] h-[18px] bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[70%] flex items-center">
                              <h1 className="ml-1">NIT RKL</h1>
                            </div>
                          </div>
                          <div className="w-full my-1">
                            <h1 className="ml-2 my-[2px]">VS</h1>
                          </div>

                          <div className="w-[90%] flex">
                            <div className="w-[30%] h-[18px] bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[70%] flex items-center">
                              <h1 className="ml-1">NIT SUR</h1>
                            </div>
                          </div>
                        </div>

                        <div className="w-[42%]">
                          <div className="h-full flex flex-col ">
                            <h4 className="text-[6px] mt-1">DATE-23RD SEPT</h4>
                            <h4 className="text-[6px] mt-1">TIME-6.30PM</h4>
                            <h4 className="text-[6px] mt-1">LOCATION STS</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-[90%] mt-4 mb-4 rounded-[10px] bg-[#F4F4F4] flex flex-col items-center overflow-hidden text-[10px] text-black ">
                    <div className="w-full flex flex-col mb-2">
                      <div className="w-full text-black ml-1">
                        <h2 className="my-2">VRIDDHI-KABBADI</h2>
                      </div>
                      <div className="w-full flex">
                        <div className="w-[58%] h-full flex flex-col items-center">
                          <div className="w-[90%] flex">
                            <div className="w-[30%] h-[18px] bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[70%] flex items-center">
                              <h1 className="ml-1">NIT RKL</h1>
                            </div>
                          </div>
                          <div className="w-full my-1">
                            <h1 className="ml-2 my-[2px]">VS</h1>
                          </div>

                          <div className="w-[90%] flex">
                            <div className="w-[30%] h-[18px] bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[70%] flex items-center">
                              <h1 className="ml-1">NIT SUR</h1>
                            </div>
                          </div>
                        </div>

                        <div className="w-[42%]">
                          <div className="h-full flex flex-col ">
                            <h4 className="text-[6px] mt-1">DATE-23RD SEPT</h4>
                            <h4 className="text-[6px] mt-1">TIME-6.30PM</h4>
                            <h4 className="text-[6px] mt-1">LOCATION STS</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-1/2 h-full flex flex-col items-center justify-center">
            <div
              className="w-[60%] h-[24px] bg-[#F4A100] rounded-[78px] mt-4 
                            flex justify-center items-center text-[10px]"
            >
              <h1>COMPLETED</h1>
            </div>

            <div
              id="score-card-completed"
              className="w-[90%] lg:w-[80%] h-[300px] rounded-[10px] my-4  overflow-y-scroll scrollbar"
            >
              {/* CRICKET */}
              <div id="cricket-score-completed-mob" className="current-com-mob">
                <div className="w-full flex items-center flex-col">
                  <div className="w-[90%] mt-4 rounded-[10px] bg-[#F4F4F4] flex flex-col items-center overflow-hidden text-[10px] text-black">
                    <div className="w-full flex flex-col">
                      <div className="w-full text-black ml-1">
                        <h2 className="my-2">VRIDDHI-CRICKET</h2>
                      </div>
                      <div className="w-full flex">
                        <div className="w-[58%] h-full flex flex-col items-center">
                          <div className="w-[90%] flex">
                            <div className="w-[30%] h-[18px] bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[70%] flex items-center">
                              <h1 className="ml-1">NIT RKL</h1>
                            </div>
                          </div>
                          <div className="w-full my-1">
                            <h1 className="ml-2 my-[2px]">VS</h1>
                          </div>

                          <div className="w-[90%] flex">
                            <div className="w-[30%] h-[18px] bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[70%] flex items-center">
                              <h1 className="ml-1">NIT SUR</h1>
                            </div>
                          </div>
                        </div>

                        <div className="w-[41%]">
                          <div className="h-full flex items-center">
                            <h1>Completed</h1>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" my-2">NIT RKL WON</div>
                  </div>

                  <div className="w-[90%] mt-4 rounded-[10px] bg-[#F4F4F4] flex flex-col items-center overflow-hidden text-[10px] text-black">
                    <div className="w-full flex flex-col">
                      <div className="w-full text-black ml-1">
                        <h2 className="my-2">VRIDDHI-CRICKET</h2>
                      </div>
                      <div className="w-full flex">
                        <div className="w-[58%] h-full flex flex-col items-center">
                          <div className="w-[90%] flex">
                            <div className="w-[30%] h-[18px] bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[70%] flex items-center">
                              <h1 className="ml-1">NIT RKL</h1>
                            </div>
                          </div>
                          <div className="w-full my-1">
                            <h1 className="ml-2 my-[2px]">VS</h1>
                          </div>

                          <div className="w-[90%] flex">
                            <div className="w-[30%] h-[18px] bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[70%] flex items-center">
                              <h1 className="ml-1">NIT SUR</h1>
                            </div>
                          </div>
                        </div>

                        <div className="w-[41%]">
                          <div className="h-full flex items-center">
                            <h1>Completed</h1>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" my-2">NIT RKL WON</div>
                  </div>

                  <div className="w-[90%] mt-4 mb-4 rounded-[10px] bg-[#F4F4F4] flex flex-col items-center overflow-hidden text-[10px] text-black">
                    <div className="w-full flex flex-col">
                      <div className="w-full text-black ml-1">
                        <h2 className="my-2">VRIDDHI-CRICKET</h2>
                      </div>
                      <div className="w-full flex">
                        <div className="w-[58%] h-full flex flex-col items-center">
                          <div className="w-[90%] flex">
                            <div className="w-[30%] h-[18px] bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[70%] flex items-center">
                              <h1 className="ml-1">NIT RKL</h1>
                            </div>
                          </div>
                          <div className="w-full my-1">
                            <h1 className="ml-2 my-[2px]">VS</h1>
                          </div>

                          <div className="w-[90%] flex">
                            <div className="w-[30%] h-[18px] bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[70%] flex items-center">
                              <h1 className="ml-1">NIT SUR</h1>
                            </div>
                          </div>
                        </div>

                        <div className="w-[41%]">
                          <div className="h-full flex items-center">
                            <h1>Completed</h1>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" my-2">NIT RKL WON</div>
                  </div>
                </div>
              </div>
              {/* FOOTBALL */}
              <div id="football-score-completed-mob" className="hidden">
                <div className="w-full flex items-center flex-col">
                  <div className="w-[90%] mt-4 rounded-[10px] bg-[#F4F4F4] flex flex-col items-center overflow-hidden text-[10px] text-black">
                    <div className="w-full flex flex-col">
                      <div className="w-full text-black ml-1">
                        <h2 className="my-2">VRIDDHI-FOOTBALL</h2>
                      </div>
                      <div className="w-full flex">
                        <div className="w-[58%] h-full flex flex-col items-center">
                          <div className="w-[90%] flex">
                            <div className="w-[30%] h-[18px] bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[70%] flex items-center">
                              <h1 className="ml-1">NIT RKL</h1>
                            </div>
                          </div>
                          <div className="w-full my-1">
                            <h1 className="ml-2 my-[2px]">VS</h1>
                          </div>

                          <div className="w-[90%] flex">
                            <div className="w-[30%] h-[18px] bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[70%] flex items-center">
                              <h1 className="ml-1">NIT SUR</h1>
                            </div>
                          </div>
                        </div>

                        <div className="w-[41%]">
                          <div className="h-full flex items-center">
                            <h1>Completed</h1>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" my-2">NIT RKL WON</div>
                  </div>

                  <div className="w-[90%] mt-4 rounded-[10px] bg-[#F4F4F4] flex flex-col items-center overflow-hidden text-[10px] text-black">
                    <div className="w-full flex flex-col">
                      <div className="w-full text-black ml-1">
                        <h2 className="my-2">VRIDDHI-FOOTBALL</h2>
                      </div>
                      <div className="w-full flex">
                        <div className="w-[58%] h-full flex flex-col items-center">
                          <div className="w-[90%] flex">
                            <div className="w-[30%] h-[18px] bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[70%] flex items-center">
                              <h1 className="ml-1">NIT RKL</h1>
                            </div>
                          </div>
                          <div className="w-full my-1">
                            <h1 className="ml-2 my-[2px]">VS</h1>
                          </div>

                          <div className="w-[90%] flex">
                            <div className="w-[30%] h-[18px] bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[70%] flex items-center">
                              <h1 className="ml-1">NIT SUR</h1>
                            </div>
                          </div>
                        </div>

                        <div className="w-[41%]">
                          <div className="h-full flex items-center">
                            <h1>Completed</h1>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" my-2">NIT RKL WON</div>
                  </div>

                  <div className="w-[90%] mt-4 mb-4 rounded-[10px] bg-[#F4F4F4] flex flex-col items-center overflow-hidden text-[10px] text-black">
                    <div className="w-full flex flex-col">
                      <div className="w-full text-black ml-1">
                        <h2 className="my-2">VRIDDHI-FOOTBALL</h2>
                      </div>
                      <div className="w-full flex">
                        <div className="w-[58%] h-full flex flex-col items-center">
                          <div className="w-[90%] flex">
                            <div className="w-[30%] h-[18px] bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[70%] flex items-center">
                              <h1 className="ml-1">NIT RKL</h1>
                            </div>
                          </div>
                          <div className="w-full my-1">
                            <h1 className="ml-2 my-[2px]">VS</h1>
                          </div>

                          <div className="w-[90%] flex">
                            <div className="w-[30%] h-[18px] bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[70%] flex items-center">
                              <h1 className="ml-1">NIT SUR</h1>
                            </div>
                          </div>
                        </div>

                        <div className="w-[41%]">
                          <div className="h-full flex items-center">
                            <h1>Completed</h1>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" my-2">NIT RKL WON</div>
                  </div>
                </div>
              </div>
              {/* BASKET BALL */}
              <div id="basketball-score-completed-mob" className="hidden">
                <div className="w-full flex items-center flex-col">
                  <div className="w-[90%] mt-4 rounded-[10px] bg-[#F4F4F4] flex flex-col items-center overflow-hidden text-[10px] text-black">
                    <div className="w-full flex flex-col">
                      <div className="w-full text-black ml-1">
                        <h2 className="my-2">VRIDDHI-BASKET BALL</h2>
                      </div>
                      <div className="w-full flex">
                        <div className="w-[58%] h-full flex flex-col items-center">
                          <div className="w-[90%] flex">
                            <div className="w-[30%] h-[18px] bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[70%] flex items-center">
                              <h1 className="ml-1">NIT RKL</h1>
                            </div>
                          </div>
                          <div className="w-full my-1">
                            <h1 className="ml-2 my-[2px]">VS</h1>
                          </div>

                          <div className="w-[90%] flex">
                            <div className="w-[30%] h-[18px] bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[70%] flex items-center">
                              <h1 className="ml-1">NIT SUR</h1>
                            </div>
                          </div>
                        </div>

                        <div className="w-[41%]">
                          <div className="h-full flex items-center">
                            <h1>Completed</h1>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" my-2">NIT RKL WON</div>
                  </div>

                  <div className="w-[90%] mt-4 rounded-[10px] bg-[#F4F4F4] flex flex-col items-center overflow-hidden text-[10px] text-black">
                    <div className="w-full flex flex-col">
                      <div className="w-full text-black ml-1">
                        <h2 className="my-2">VRIDDHI-BASKET BALL</h2>
                      </div>
                      <div className="w-full flex">
                        <div className="w-[58%] h-full flex flex-col items-center">
                          <div className="w-[90%] flex">
                            <div className="w-[30%] h-[18px] bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[70%] flex items-center">
                              <h1 className="ml-1">NIT RKL</h1>
                            </div>
                          </div>
                          <div className="w-full my-1">
                            <h1 className="ml-2 my-[2px]">VS</h1>
                          </div>

                          <div className="w-[90%] flex">
                            <div className="w-[30%] h-[18px] bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[70%] flex items-center">
                              <h1 className="ml-1">NIT SUR</h1>
                            </div>
                          </div>
                        </div>

                        <div className="w-[41%]">
                          <div className="h-full flex items-center">
                            <h1>Completed</h1>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" my-2">NIT RKL WON</div>
                  </div>

                  <div className="w-[90%] mt-4 mb-4 rounded-[10px] bg-[#F4F4F4] flex flex-col items-center overflow-hidden text-[10px] text-black">
                    <div className="w-full flex flex-col">
                      <div className="w-full text-black ml-1">
                        <h2 className="my-2">VRIDDHI-BASKET BALL</h2>
                      </div>
                      <div className="w-full flex">
                        <div className="w-[58%] h-full flex flex-col items-center">
                          <div className="w-[90%] flex">
                            <div className="w-[30%] h-[18px] bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[70%] flex items-center">
                              <h1 className="ml-1">NIT RKL</h1>
                            </div>
                          </div>
                          <div className="w-full my-1">
                            <h1 className="ml-2 my-[2px]">VS</h1>
                          </div>

                          <div className="w-[90%] flex">
                            <div className="w-[30%] h-[18px] bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[70%] flex items-center">
                              <h1 className="ml-1">NIT SUR</h1>
                            </div>
                          </div>
                        </div>

                        <div className="w-[41%]">
                          <div className="h-full flex items-center">
                            <h1>Completed</h1>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" my-2">NIT RKL WON</div>
                  </div>
                </div>
              </div>
              {/* KHOKHO */}
              <div id="khokho-score-completed-mob" className="hidden">
                <div className="w-full flex items-center flex-col">
                  <div className="w-[90%] mt-4 rounded-[10px] bg-[#F4F4F4] flex flex-col items-center overflow-hidden text-[10px] text-black">
                    <div className="w-full flex flex-col">
                      <div className="w-full text-black ml-1">
                        <h2 className="my-2">VRIDDHI-KHOKHO</h2>
                      </div>
                      <div className="w-full flex">
                        <div className="w-[58%] h-full flex flex-col items-center">
                          <div className="w-[90%] flex">
                            <div className="w-[30%] h-[18px] bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[70%] flex items-center">
                              <h1 className="ml-1">NIT RKL</h1>
                            </div>
                          </div>
                          <div className="w-full my-1">
                            <h1 className="ml-2 my-[2px]">VS</h1>
                          </div>

                          <div className="w-[90%] flex">
                            <div className="w-[30%] h-[18px] bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[70%] flex items-center">
                              <h1 className="ml-1">NIT SUR</h1>
                            </div>
                          </div>
                        </div>

                        <div className="w-[41%]">
                          <div className="h-full flex items-center">
                            <h1>Completed</h1>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" my-2">NIT RKL WON</div>
                  </div>

                  <div className="w-[90%] mt-4 rounded-[10px] bg-[#F4F4F4] flex flex-col items-center overflow-hidden text-[10px] text-black">
                    <div className="w-full flex flex-col">
                      <div className="w-full text-black ml-1">
                        <h2 className="my-2">VRIDDHI-KHOKHO</h2>
                      </div>
                      <div className="w-full flex">
                        <div className="w-[58%] h-full flex flex-col items-center">
                          <div className="w-[90%] flex">
                            <div className="w-[30%] h-[18px] bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[70%] flex items-center">
                              <h1 className="ml-1">NIT RKL</h1>
                            </div>
                          </div>
                          <div className="w-full my-1">
                            <h1 className="ml-2 my-[2px]">VS</h1>
                          </div>

                          <div className="w-[90%] flex">
                            <div className="w-[30%] h-[18px] bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[70%] flex items-center">
                              <h1 className="ml-1">NIT SUR</h1>
                            </div>
                          </div>
                        </div>

                        <div className="w-[41%]">
                          <div className="h-full flex items-center">
                            <h1>Completed</h1>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" my-2">NIT RKL WON</div>
                  </div>

                  <div className="w-[90%] mt-4 mb-4 rounded-[10px] bg-[#F4F4F4] flex flex-col items-center overflow-hidden text-[10px] text-black">
                    <div className="w-full flex flex-col">
                      <div className="w-full text-black ml-1">
                        <h2 className="my-2">VRIDDHI-KHOKHO</h2>
                      </div>
                      <div className="w-full flex">
                        <div className="w-[58%] h-full flex flex-col items-center">
                          <div className="w-[90%] flex">
                            <div className="w-[30%] h-[18px] bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[70%] flex items-center">
                              <h1 className="ml-1">NIT RKL</h1>
                            </div>
                          </div>
                          <div className="w-full my-1">
                            <h1 className="ml-2 my-[2px]">VS</h1>
                          </div>

                          <div className="w-[90%] flex">
                            <div className="w-[30%] h-[18px] bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[70%] flex items-center">
                              <h1 className="ml-1">NIT SUR</h1>
                            </div>
                          </div>
                        </div>

                        <div className="w-[41%]">
                          <div className="h-full flex items-center">
                            <h1>Completed</h1>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" my-2">NIT RKL WON</div>
                  </div>
                </div>
              </div>
              {/* KABBADI */}
              <div id="kabbadi-score-completed-mob" className="hidden">
                <div className="w-full flex items-center flex-col">
                  <div className="w-[90%] mt-4 rounded-[10px] bg-[#F4F4F4] flex flex-col items-center overflow-hidden text-[10px] text-black">
                    <div className="w-full flex flex-col">
                      <div className="w-full text-black ml-1">
                        <h2 className="my-2">VRIDDHI-KABBADI</h2>
                      </div>
                      <div className="w-full flex">
                        <div className="w-[58%] h-full flex flex-col items-center">
                          <div className="w-[90%] flex">
                            <div className="w-[30%] h-[18px] bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[70%] flex items-center">
                              <h1 className="ml-1">NIT RKL</h1>
                            </div>
                          </div>
                          <div className="w-full my-1">
                            <h1 className="ml-2 my-[2px]">VS</h1>
                          </div>

                          <div className="w-[90%] flex">
                            <div className="w-[30%] h-[18px] bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[70%] flex items-center">
                              <h1 className="ml-1">NIT SUR</h1>
                            </div>
                          </div>
                        </div>

                        <div className="w-[41%]">
                          <div className="h-full flex items-center">
                            <h1>Completed</h1>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" my-2">NIT RKL WON</div>
                  </div>

                  <div className="w-[90%] mt-4 rounded-[10px] bg-[#F4F4F4] flex flex-col items-center overflow-hidden text-[10px] text-black">
                    <div className="w-full flex flex-col">
                      <div className="w-full text-black ml-1">
                        <h2 className="my-2">VRIDDHI-KABBADI</h2>
                      </div>
                      <div className="w-full flex">
                        <div className="w-[58%] h-full flex flex-col items-center">
                          <div className="w-[90%] flex">
                            <div className="w-[30%] h-[18px] bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[70%] flex items-center">
                              <h1 className="ml-1">NIT RKL</h1>
                            </div>
                          </div>
                          <div className="w-full my-1">
                            <h1 className="ml-2 my-[2px]">VS</h1>
                          </div>

                          <div className="w-[90%] flex">
                            <div className="w-[30%] h-[18px] bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[70%] flex items-center">
                              <h1 className="ml-1">NIT SUR</h1>
                            </div>
                          </div>
                        </div>

                        <div className="w-[41%]">
                          <div className="h-full flex items-center">
                            <h1>Completed</h1>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" my-2">NIT RKL WON</div>
                  </div>

                  <div className="w-[90%] mt-4 mb-4 rounded-[10px] bg-[#F4F4F4] flex flex-col items-center overflow-hidden text-[10px] text-black">
                    <div className="w-full flex flex-col">
                      <div className="w-full text-black ml-1">
                        <h2 className="my-2">VRIDDHI-KABBADI</h2>
                      </div>
                      <div className="w-full flex">
                        <div className="w-[58%] h-full flex flex-col items-center">
                          <div className="w-[90%] flex">
                            <div className="w-[30%] h-[18px] bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[70%] flex items-center">
                              <h1 className="ml-1">NIT RKL</h1>
                            </div>
                          </div>
                          <div className="w-full my-1">
                            <h1 className="ml-2 my-[2px]">VS</h1>
                          </div>

                          <div className="w-[90%] flex">
                            <div className="w-[30%] h-[18px] bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[70%] flex items-center">
                              <h1 className="ml-1">NIT SUR</h1>
                            </div>
                          </div>
                        </div>

                        <div className="w-[41%]">
                          <div className="h-full flex items-center">
                            <h1>Completed</h1>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" my-2">NIT RKL WON</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PC View */}

      <div className="bg-[rgb(24,24,33)] w-full hidden sm:flex flex-col">
        <div className="w-full flex justify-center flex-shrink-0">
          <h1 className="text-[38px] md:text-[48px] lg:text-[56px] xl:text-[70.26px] font-normal font-nidus">
            SCORE CARD
          </h1>
        </div>

        <div className="flex justify-center">
          <div className="w-[80%] grid grid-cols-5 grid-rows-1 mb-16">
            {/* BUTTONS */}

            <div className="w-full flex flex-col items-center text-black mt-28">
              <div className="w-[70%] h-[50px] bg-[#FFFCFC] flex items-center justify-center rounded-[25px] text-[24px] my-2">
                <h1>SPORTS</h1>
              </div>

              <button
                id="cricket-btn"
                onClick={() => {
                  sport_selector(
                    `cricket-btn`,
                    `cricket-score-upcoming`,
                    `cricket-score-completed`
                  );
                }}
                type="button"
                className="pc w-[70%] h-[50px] rounded-[25px] bg-[#D8DFE1] text-[20px] my-2 scale-125"
              >
                <div className="p-1 rounded-[25px] bg-[#FFFCFC]">CRICKET</div>
              </button>

              <button
                id="football-btn"
                onClick={() => {
                  sport_selector(
                    `football-btn`,
                    `football-score-upcoming`,
                    `football-score-completed`
                  );
                }}
                type="button"
                className=" w-[70%] h-[50px] rounded-[25px] bg-[#D8DFE1] text-[20px] my-2"
              >
                <div className="p-1 rounded-[25px] bg-[#FFFCFC]">FOOTBALL</div>
              </button>

              <button
                id="basketball-btn"
                onClick={() => {
                  sport_selector(
                    `basketball-btn`,
                    `basketball-score-upcoming`,
                    `basketball-score-completed`
                  );
                }}
                type="button"
                className=" w-[70%] h-[50px] rounded-[25px] bg-[#D8DFE1] text-[20px] my-2"
              >
                <div className="p-1 rounded-[25px] bg-[#FFFCFC]">
                  BASKET BALL
                </div>
              </button>

              <button
                id="khokho-btn"
                onClick={() => {
                  sport_selector(
                    `khokho-btn`,
                    `khokho-score-upcoming`,
                    `khokho-score-completed`
                  );
                }}
                type="button"
                className=" w-[70%] h-[50px] rounded-[25px] bg-[#D8DFE1] text-[20px] my-2"
              >
                <div className="p-1 rounded-[25px] bg-[#FFFCFC]">KHOKHO</div>
              </button>

              <button
                id="kabbadi-btn"
                onClick={() => {
                  sport_selector(
                    `kabbadi-btn`,
                    `kabbadi-score-upcoming`,
                    `kabbadi-score-completed`
                  );
                }}
                type="button"
                className="w-[70%] h-[50px] rounded-[25px] bg-[#D8DFE1] text-[20px] my-2"
              >
                <div className="p-1 rounded-[25px] bg-[#FFFCFC]">KABBADI</div>
              </button>
            </div>

            {/* UPCOMING SECTION */}
            <div className="w-full h-full col-span-2 flex flex-col items-center justify-center">
              <div
                id="color"
                className="w-[78%] lg:w-[68%] h-[71.016] lg:h-[81.016px] bg-[#001A43] rounded-[78px] mt-11 
                            flex justify-center items-center text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] "
              >
                <h1>UPCOMING</h1>
              </div>

              <div
                id="score-card-upcoming"
                className="w-[90%] lg:w-[80%] h-[500px] rounded-[15px] mt-11 overflow-y-scroll scrollbar"
              >
                {/* CRICKET */}
                <div id="cricket-score-upcoming" className="current-up">
                  <div className="w-full flex items-center flex-col">
                    <div className="w-[75%] h-48 mt-11 rounded-[15px] bg-[#F4F4F4] flex overflow-hidden  text-black">
                      <div className="w-[66.66%] h-full flex flex-col items-center">
                        <div className="w-full text-black text-center">
                          <h2 className="py-4">VRIDDHI-CRICKET</h2>
                        </div>
                        <div className="w-[90%] h-[20%] flex">
                          <div className="w-[20%] h-full bg-black">
                            <img src="/" alt=" " />
                          </div>
                          <div className="w-[80%] flex items-center">
                            <h1 className="ml-4">NIT RKL</h1>
                          </div>
                        </div>
                        <div className="w-full my-1">
                          <h1 className="ml-4">VS</h1>
                        </div>

                        <div className="w-[90%] h-[20%] flex">
                          <div className="w-[20%] h-full bg-black">
                            <img src="/" alt=" " />
                          </div>
                          <div className="w-[80%] flex items-center">
                            <h1 className="ml-4">NIT SUR</h1>
                          </div>
                        </div>
                      </div>

                      <div className="w-[33.34%] h-full">
                        <div className=" mt-8">
                          <h4 className="text-[10px] mt-1">DATE-23RD SEPT</h4>
                          <h4 className="text-[10px] mt-1">TIME-6.30PM</h4>
                          <h4 className="text-[10px] mt-1">LOCATION STS</h4>
                        </div>
                      </div>
                    </div>

                    <div className="w-[75%] h-48 mt-11 rounded-[15px] bg-[#F4F4F4] flex overflow-hidden  text-black">
                      <div className="w-[66.66%] h-full flex flex-col items-center">
                        <div className="w-full text-black text-center">
                          <h2 className="py-4">VRIDDHI-CRICKET</h2>
                        </div>
                        <div className="w-[90%] h-[20%] flex">
                          <div className="w-[20%] h-full bg-black">
                            <img src="/" alt=" " />
                          </div>
                          <div className="w-[80%] flex items-center">
                            <h1 className="ml-4">NIT RKL</h1>
                          </div>
                        </div>
                        <div className="w-full my-1">
                          <h1 className="ml-4">VS</h1>
                        </div>

                        <div className="w-[90%] h-[20%] flex">
                          <div className="w-[20%] h-full bg-black">
                            <img src="/" alt=" " />
                          </div>
                          <div className="w-[80%] flex items-center">
                            <h1 className="ml-4">NIT SUR</h1>
                          </div>
                        </div>
                      </div>

                      <div className="w-[33.34%] h-full">
                        <div className=" mt-8">
                          <h4 className="text-[10px] mt-1">DATE-23RD SEPT</h4>
                          <h4 className="text-[10px] mt-1">TIME-6.30PM</h4>
                          <h4 className="text-[10px] mt-1">LOCATION STS</h4>
                        </div>
                      </div>
                    </div>

                    <div className="w-[75%] h-48 mt-11 rounded-[15px] bg-[#F4F4F4] flex overflow-hidden  text-black">
                      <div className="w-[66.66%] h-full flex flex-col items-center">
                        <div className="w-full text-black text-center">
                          <h2 className="py-4">VRIDDHI-CRICKET</h2>
                        </div>
                        <div className="w-[90%] h-[20%] flex">
                          <div className="w-[20%] h-full bg-black">
                            <img src="/" alt=" " />
                          </div>
                          <div className="w-[80%] flex items-center">
                            <h1 className="ml-4">NIT RKL</h1>
                          </div>
                        </div>
                        <div className="w-full my-1">
                          <h1 className="ml-4">VS</h1>
                        </div>

                        <div className="w-[90%] h-[20%] flex">
                          <div className="w-[20%] h-full bg-black">
                            <img src="/" alt=" " />
                          </div>
                          <div className="w-[80%] flex items-center">
                            <h1 className="ml-4">NIT SUR</h1>
                          </div>
                        </div>
                      </div>

                      <div className="w-[33.34%] h-full">
                        <div className=" mt-8">
                          <h4 className="text-[10px] mt-1">DATE-23RD SEPT</h4>
                          <h4 className="text-[10px] mt-1">TIME-6.30PM</h4>
                          <h4 className="text-[10px] mt-1">LOCATION STS</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FOOTBALL */}
                <div id="football-score-upcoming" className="hidden">
                  <div className="w-full flex items-center flex-col">
                    <div className="w-[75%] h-48 mt-11 rounded-[15px] bg-[#F4F4F4] flex overflow-hidden  text-black">
                      <div className="w-[66.66%] h-full flex flex-col items-center">
                        <div className="w-full text-black text-center">
                          <h2 className="py-4">VRIDDHI-FOOTBALL</h2>
                        </div>
                        <div className="w-[90%] h-[20%] flex">
                          <div className="w-[20%] h-full bg-black">
                            <img src="/" alt=" " />
                          </div>
                          <div className="w-[80%] flex items-center">
                            <h1 className="ml-4">NIT RKL</h1>
                          </div>
                        </div>
                        <div className="w-full my-1">
                          <h1 className="ml-4">VS</h1>
                        </div>

                        <div className="w-[90%] h-[20%] flex">
                          <div className="w-[20%] h-full bg-black">
                            <img src="/" alt=" " />
                          </div>
                          <div className="w-[80%] flex items-center">
                            <h1 className="ml-4">NIT SUR</h1>
                          </div>
                        </div>
                      </div>

                      <div className="w-[33.34%] h-full">
                        <div className=" mt-8">
                          <h4 className="text-[10px] mt-1">DATE-23RD SEPT</h4>
                          <h4 className="text-[10px] mt-1">TIME-6.30PM</h4>
                          <h4 className="text-[10px] mt-1">LOCATION STS</h4>
                        </div>
                      </div>
                    </div>

                    <div className="w-[75%] h-48 mt-11 rounded-[15px] bg-[#F4F4F4] flex overflow-hidden  text-black">
                      <div className="w-[66.66%] h-full flex flex-col items-center">
                        <div className="w-full text-black text-center">
                          <h2 className="py-4">VRIDDHI-FOOTBALL</h2>
                        </div>
                        <div className="w-[90%] h-[20%] flex">
                          <div className="w-[20%] h-full bg-black">
                            <img src="/" alt=" " />
                          </div>
                          <div className="w-[80%] flex items-center">
                            <h1 className="ml-4">NIT RKL</h1>
                          </div>
                        </div>
                        <div className="w-full my-1">
                          <h1 className="ml-4">VS</h1>
                        </div>

                        <div className="w-[90%] h-[20%] flex">
                          <div className="w-[20%] h-full bg-black">
                            <img src="/" alt=" " />
                          </div>
                          <div className="w-[80%] flex items-center">
                            <h1 className="ml-4">NIT SUR</h1>
                          </div>
                        </div>
                      </div>

                      <div className="w-[33.34%] h-full">
                        <div className=" mt-8">
                          <h4 className="text-[10px] mt-1">DATE-23RD SEPT</h4>
                          <h4 className="text-[10px] mt-1">TIME-6.30PM</h4>
                          <h4 className="text-[10px] mt-1">LOCATION STS</h4>
                        </div>
                      </div>
                    </div>

                    <div className="w-[75%] h-48 mt-11 rounded-[15px] bg-[#F4F4F4] flex overflow-hidden  text-black">
                      <div className="w-[66.66%] h-full flex flex-col items-center">
                        <div className="w-full text-black text-center">
                          <h2 className="py-4">VRIDDHI-FOOTBALL</h2>
                        </div>
                        <div className="w-[90%] h-[20%] flex">
                          <div className="w-[20%] h-full bg-black">
                            <img src="/" alt=" " />
                          </div>
                          <div className="w-[80%] flex items-center">
                            <h1 className="ml-4">NIT RKL</h1>
                          </div>
                        </div>
                        <div className="w-full my-1">
                          <h1 className="ml-4">VS</h1>
                        </div>

                        <div className="w-[90%] h-[20%] flex">
                          <div className="w-[20%] h-full bg-black">
                            <img src="/" alt=" " />
                          </div>
                          <div className="w-[80%] flex items-center">
                            <h1 className="ml-4">NIT SUR</h1>
                          </div>
                        </div>
                      </div>

                      <div className="w-[33.34%] h-full">
                        <div className=" mt-8">
                          <h4 className="text-[10px] mt-1">DATE-23RD SEPT</h4>
                          <h4 className="text-[10px] mt-1">TIME-6.30PM</h4>
                          <h4 className="text-[10px] mt-1">LOCATION STS</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* BASKET BALL */}
                <div id="basketball-score-upcoming" className="hidden">
                  <div className="w-full flex items-center flex-col">
                    <div className="w-[75%] h-48 mt-11 rounded-[15px] bg-[#F4F4F4] flex overflow-hidden  text-black">
                      <div className="w-[66.66%] h-full flex flex-col items-center">
                        <div className="w-full text-black text-center">
                          <h2 className="py-4">VRIDDHI-BASKET BALL</h2>
                        </div>
                        <div className="w-[90%] h-[20%] flex">
                          <div className="w-[20%] h-full bg-black">
                            <img src="/" alt=" " />
                          </div>
                          <div className="w-[80%] flex items-center">
                            <h1 className="ml-4">NIT RKL</h1>
                          </div>
                        </div>
                        <div className="w-full my-1">
                          <h1 className="ml-4">VS</h1>
                        </div>

                        <div className="w-[90%] h-[20%] flex">
                          <div className="w-[20%] h-full bg-black">
                            <img src="/" alt=" " />
                          </div>
                          <div className="w-[80%] flex items-center">
                            <h1 className="ml-4">NIT SUR</h1>
                          </div>
                        </div>
                      </div>

                      <div className="w-[33.34%] h-full">
                        <div className=" mt-8">
                          <h4 className="text-[10px] mt-1">DATE-23RD SEPT</h4>
                          <h4 className="text-[10px] mt-1">TIME-6.30PM</h4>
                          <h4 className="text-[10px] mt-1">LOCATION STS</h4>
                        </div>
                      </div>
                    </div>

                    <div className="w-[75%] h-48 mt-11 rounded-[15px] bg-[#F4F4F4] flex overflow-hidden  text-black">
                      <div className="w-[66.66%] h-full flex flex-col items-center">
                        <div className="w-full text-black text-center">
                          <h2 className="py-4">VRIDDHI-BASKET BALL</h2>
                        </div>
                        <div className="w-[90%] h-[20%] flex">
                          <div className="w-[20%] h-full bg-black">
                            <img src="/" alt=" " />
                          </div>
                          <div className="w-[80%] flex items-center">
                            <h1 className="ml-4">NIT RKL</h1>
                          </div>
                        </div>
                        <div className="w-full my-1">
                          <h1 className="ml-4">VS</h1>
                        </div>

                        <div className="w-[90%] h-[20%] flex">
                          <div className="w-[20%] h-full bg-black">
                            <img src="/" alt=" " />
                          </div>
                          <div className="w-[80%] flex items-center">
                            <h1 className="ml-4">NIT SUR</h1>
                          </div>
                        </div>
                      </div>

                      <div className="w-[33.34%] h-full">
                        <div className=" mt-8">
                          <h4 className="text-[10px] mt-1">DATE-23RD SEPT</h4>
                          <h4 className="text-[10px] mt-1">TIME-6.30PM</h4>
                          <h4 className="text-[10px] mt-1">LOCATION STS</h4>
                        </div>
                      </div>
                    </div>

                    <div className="w-[75%] h-48 mt-11 rounded-[15px] bg-[#F4F4F4] flex overflow-hidden  text-black">
                      <div className="w-[66.66%] h-full flex flex-col items-center">
                        <div className="w-full text-black text-center">
                          <h2 className="py-4">VRIDDHI-BASKET BALL</h2>
                        </div>
                        <div className="w-[90%] h-[20%] flex">
                          <div className="w-[20%] h-full bg-black">
                            <img src="/" alt=" " />
                          </div>
                          <div className="w-[80%] flex items-center">
                            <h1 className="ml-4">NIT RKL</h1>
                          </div>
                        </div>
                        <div className="w-full my-1">
                          <h1 className="ml-4">VS</h1>
                        </div>

                        <div className="w-[90%] h-[20%] flex">
                          <div className="w-[20%] h-full bg-black">
                            <img src="/" alt=" " />
                          </div>
                          <div className="w-[80%] flex items-center">
                            <h1 className="ml-4">NIT SUR</h1>
                          </div>
                        </div>
                      </div>

                      <div className="w-[33.34%] h-full">
                        <div className=" mt-8">
                          <h4 className="text-[10px] mt-1">DATE-23RD SEPT</h4>
                          <h4 className="text-[10px] mt-1">TIME-6.30PM</h4>
                          <h4 className="text-[10px] mt-1">LOCATION STS</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* KHOKHO */}
                <div id="khokho-score-upcoming" className="hidden">
                  <div className="w-full flex items-center flex-col">
                    <div className="w-[75%] h-48 mt-11 rounded-[15px] bg-[#F4F4F4] flex overflow-hidden  text-black">
                      <div className="w-[66.66%] h-full flex flex-col items-center">
                        <div className="w-full text-black text-center">
                          <h2 className="py-4">VRIDDHI-KHOKHO</h2>
                        </div>
                        <div className="w-[90%] h-[20%] flex">
                          <div className="w-[20%] h-full bg-black">
                            <img src="/" alt=" " />
                          </div>
                          <div className="w-[80%] flex items-center">
                            <h1 className="ml-4">NIT RKL</h1>
                          </div>
                        </div>
                        <div className="w-full my-1">
                          <h1 className="ml-4">VS</h1>
                        </div>

                        <div className="w-[90%] h-[20%] flex">
                          <div className="w-[20%] h-full bg-black">
                            <img src="/" alt=" " />
                          </div>
                          <div className="w-[80%] flex items-center">
                            <h1 className="ml-4">NIT SUR</h1>
                          </div>
                        </div>
                      </div>

                      <div className="w-[33.34%] h-full">
                        <div className=" mt-8">
                          <h4 className="text-[10px] mt-1">DATE-23RD SEPT</h4>
                          <h4 className="text-[10px] mt-1">TIME-6.30PM</h4>
                          <h4 className="text-[10px] mt-1">LOCATION STS</h4>
                        </div>
                      </div>
                    </div>

                    <div className="w-[75%] h-48 mt-11 rounded-[15px] bg-[#F4F4F4] flex overflow-hidden  text-black">
                      <div className="w-[66.66%] h-full flex flex-col items-center">
                        <div className="w-full text-black text-center">
                          <h2 className="py-4">VRIDDHI-KHOKHO</h2>
                        </div>
                        <div className="w-[90%] h-[20%] flex">
                          <div className="w-[20%] h-full bg-black">
                            <img src="/" alt=" " />
                          </div>
                          <div className="w-[80%] flex items-center">
                            <h1 className="ml-4">NIT RKL</h1>
                          </div>
                        </div>
                        <div className="w-full my-1">
                          <h1 className="ml-4">VS</h1>
                        </div>

                        <div className="w-[90%] h-[20%] flex">
                          <div className="w-[20%] h-full bg-black">
                            <img src="/" alt=" " />
                          </div>
                          <div className="w-[80%] flex items-center">
                            <h1 className="ml-4">NIT SUR</h1>
                          </div>
                        </div>
                      </div>

                      <div className="w-[33.34%] h-full">
                        <div className=" mt-8">
                          <h4 className="text-[10px] mt-1">DATE-23RD SEPT</h4>
                          <h4 className="text-[10px] mt-1">TIME-6.30PM</h4>
                          <h4 className="text-[10px] mt-1">LOCATION STS</h4>
                        </div>
                      </div>
                    </div>

                    <div className="w-[75%] h-48 mt-11 rounded-[15px] bg-[#F4F4F4] flex overflow-hidden  text-black">
                      <div className="w-[66.66%] h-full flex flex-col items-center">
                        <div className="w-full text-black text-center">
                          <h2 className="py-4">VRIDDHI-KHOKHO</h2>
                        </div>
                        <div className="w-[90%] h-[20%] flex">
                          <div className="w-[20%] h-full bg-black">
                            <img src="/" alt=" " />
                          </div>
                          <div className="w-[80%] flex items-center">
                            <h1 className="ml-4">NIT RKL</h1>
                          </div>
                        </div>
                        <div className="w-full my-1">
                          <h1 className="ml-4">VS</h1>
                        </div>

                        <div className="w-[90%] h-[20%] flex">
                          <div className="w-[20%] h-full bg-black">
                            <img src="/" alt=" " />
                          </div>
                          <div className="w-[80%] flex items-center">
                            <h1 className="ml-4">NIT SUR</h1>
                          </div>
                        </div>
                      </div>

                      <div className="w-[33.34%] h-full">
                        <div className=" mt-8">
                          <h4 className="text-[10px] mt-1">DATE-23RD SEPT</h4>
                          <h4 className="text-[10px] mt-1">TIME-6.30PM</h4>
                          <h4 className="text-[10px] mt-1">LOCATION STS</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* KABBADI */}
                <div id="kabbadi-score-upcoming" className="hidden">
                  <div className="w-full flex items-center flex-col">
                    <div className="w-[75%] h-48 mt-11 rounded-[15px] bg-[#F4F4F4] flex overflow-hidden  text-black">
                      <div className="w-[66.66%] h-full flex flex-col items-center">
                        <div className="w-full text-black text-center">
                          <h2 className="py-4">VRIDDHI-KABBADI</h2>
                        </div>
                        <div className="w-[90%] h-[20%] flex">
                          <div className="w-[20%] h-full bg-black">
                            <img src="/" alt=" " />
                          </div>
                          <div className="w-[80%] flex items-center">
                            <h1 className="ml-4">NIT RKL</h1>
                          </div>
                        </div>
                        <div className="w-full my-1">
                          <h1 className="ml-4">VS</h1>
                        </div>

                        <div className="w-[90%] h-[20%] flex">
                          <div className="w-[20%] h-full bg-black">
                            <img src="/" alt=" " />
                          </div>
                          <div className="w-[80%] flex items-center">
                            <h1 className="ml-4">NIT SUR</h1>
                          </div>
                        </div>
                      </div>

                      <div className="w-[33.34%] h-full">
                        <div className=" mt-8">
                          <h4 className="text-[10px] mt-1">DATE-23RD SEPT</h4>
                          <h4 className="text-[10px] mt-1">TIME-6.30PM</h4>
                          <h4 className="text-[10px] mt-1">LOCATION STS</h4>
                        </div>
                      </div>
                    </div>

                    <div className="w-[75%] h-48 mt-11 rounded-[15px] bg-[#F4F4F4] flex overflow-hidden  text-black">
                      <div className="w-[66.66%] h-full flex flex-col items-center">
                        <div className="w-full text-black text-center">
                          <h2 className="py-4">VRIDDHI-KABBADI</h2>
                        </div>
                        <div className="w-[90%] h-[20%] flex">
                          <div className="w-[20%] h-full bg-black">
                            <img src="/" alt=" " />
                          </div>
                          <div className="w-[80%] flex items-center">
                            <h1 className="ml-4">NIT RKL</h1>
                          </div>
                        </div>
                        <div className="w-full my-1">
                          <h1 className="ml-4">VS</h1>
                        </div>

                        <div className="w-[90%] h-[20%] flex">
                          <div className="w-[20%] h-full bg-black">
                            <img src="/" alt=" " />
                          </div>
                          <div className="w-[80%] flex items-center">
                            <h1 className="ml-4">NIT SUR</h1>
                          </div>
                        </div>
                      </div>

                      <div className="w-[33.34%] h-full">
                        <div className=" mt-8">
                          <h4 className="text-[10px] mt-1">DATE-23RD SEPT</h4>
                          <h4 className="text-[10px] mt-1">TIME-6.30PM</h4>
                          <h4 className="text-[10px] mt-1">LOCATION STS</h4>
                        </div>
                      </div>
                    </div>

                    <div className="w-[75%] h-48 mt-11 rounded-[15px] bg-[#F4F4F4] flex overflow-hidden  text-black">
                      <div className="w-[66.66%] h-full flex flex-col items-center">
                        <div className="w-full text-black text-center">
                          <h2 className="py-4">VRIDDHI-KABBADI</h2>
                        </div>
                        <div className="w-[90%] h-[20%] flex">
                          <div className="w-[20%] h-full bg-black">
                            <img src="/" alt=" " />
                          </div>
                          <div className="w-[80%] flex items-center">
                            <h1 className="ml-4">NIT RKL</h1>
                          </div>
                        </div>
                        <div className="w-full my-1">
                          <h1 className="ml-4">VS</h1>
                        </div>

                        <div className="w-[90%] h-[20%] flex">
                          <div className="w-[20%] h-full bg-black">
                            <img src="/" alt=" " />
                          </div>
                          <div className="w-[80%] flex items-center">
                            <h1 className="ml-4">NIT SUR</h1>
                          </div>
                        </div>
                      </div>

                      <div className="w-[33.34%] h-full">
                        <div className=" mt-8">
                          <h4 className="text-[10px] mt-1">DATE-23RD SEPT</h4>
                          <h4 className="text-[10px] mt-1">TIME-6.30PM</h4>
                          <h4 className="text-[10px] mt-1">LOCATION STS</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* COMPLETED SECTION */}

            <div className="w-full h-full col-span-2 flex flex-col items-center justify-center">
              <div
                id="color"
                className="w-[78%] lg:w-[68%] h-[71.016] lg:h-[81.016px] bg-[#F4A100] rounded-[78px] mt-11 
                            flex justify-center items-center text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px]"
              >
                <h1>COMPLETED</h1>
              </div>

              <div
                id="score-card-completed"
                className="w-[90%] lg:w-[80%] h-[500px] rounded-[15px] mt-11 overflow-y-scroll scrollbar"
              >
                {/* CRICKET */}
                <div id="cricket-score-completed" className="current-com">
                  <div className="w-full flex items-center flex-col">
                    <div className="w-[75%] h-52 mt-11 rounded-[15px] bg-[#F4F4F4] flex flex-col items-center overflow-hidden  text-black">
                      <div className="w-full h-full flex">
                        <div className="w-[66.66%] h-full flex flex-col items-center">
                          <div className="w-full text-black text-center">
                            <h2 className="py-4">VRIDDHI-CRICKET</h2>
                          </div>
                          <div className="w-[90%] h-[20%] flex">
                            <div className="w-[20%] h-full bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[80%] flex items-center">
                              <h1 className="ml-4">NIT RKL</h1>
                            </div>
                          </div>
                          <div className="w-full my-1">
                            <h1 className="ml-4">VS</h1>
                          </div>

                          <div className="w-[90%] h-[20%] flex">
                            <div className="w-[20%] h-full bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[80%] flex items-center">
                              <h1 className="ml-4">NIT SUR</h1>
                            </div>
                          </div>
                        </div>

                        <div className="w-[33.34%]">
                          <div className="h-full flex items-center mx-auto">
                            <h1>Completed</h1>
                          </div>
                        </div>
                      </div>
                      <div className="text-[12px] mb-2">NIT RKL WON</div>
                    </div>

                    <div className="w-[75%] h-52 mt-11 rounded-[15px] bg-[#F4F4F4] flex flex-col items-center overflow-hidden  text-black">
                      <div className="w-full h-full flex">
                        <div className="w-[66.66%] h-full flex flex-col items-center">
                          <div className="w-full text-black text-center">
                            <h2 className="py-4">VRIDDHI-CRICKET</h2>
                          </div>
                          <div className="w-[90%] h-[20%] flex">
                            <div className="w-[20%] h-full bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[80%] flex items-center">
                              <h1 className="ml-4">NIT RKL</h1>
                            </div>
                          </div>
                          <div className="w-full my-1">
                            <h1 className="ml-4">VS</h1>
                          </div>

                          <div className="w-[90%] h-[20%] flex">
                            <div className="w-[20%] h-full bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[80%] flex items-center">
                              <h1 className="ml-4">NIT SUR</h1>
                            </div>
                          </div>
                        </div>

                        <div className="w-[33.34%]">
                          <div className="h-full flex items-center mx-auto">
                            <h1>Completed</h1>
                          </div>
                        </div>
                      </div>
                      <div className="text-[12px] mb-2">NIT RKL WON</div>
                    </div>

                    <div
                      className={`w-[75%] h-52 mt-11 rounded-[15px] bg-[#F4F4F4] flex flex-col items-center overflow-hidden  text-black `}
                    >
                      <div className="w-full h-full flex">
                        <div className="w-[66.66%] h-full flex flex-col items-center">
                          <div className="w-full text-black text-center">
                            <h2 className="py-4">VRIDDHI-CRICKET</h2>
                          </div>
                          <div className="w-[90%] h-[20%] flex">
                            <div className="w-[20%] h-full bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[80%] flex items-center">
                              <h1 className="ml-4">NIT RKL</h1>
                            </div>
                          </div>
                          <div className="w-full my-1">
                            <h1 className="ml-4">VS</h1>
                          </div>

                          <div className="w-[90%] h-[20%] flex">
                            <div className="w-[20%] h-full bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[80%] flex items-center">
                              <h1 className="ml-4">NIT SUR</h1>
                            </div>
                          </div>
                        </div>

                        <div className="w-[33.34%]">
                          <div className="h-full flex items-center mx-auto">
                            <h1>Completed</h1>
                          </div>
                        </div>
                      </div>
                      <div className="text-[12px] mb-2">NIT RKL WON</div>
                    </div>
                  </div>
                </div>
                {/* FOOTBALL */}
                <div id="football-score-completed" className="hidden">
                  <div className="w-full flex items-center flex-col">
                    <div className="w-[75%] h-52 mt-11 rounded-[15px] bg-[#F4F4F4] flex flex-col items-center overflow-hidden  text-black">
                      <div className="w-full h-full flex">
                        <div className="w-[66.66%] h-full flex flex-col items-center">
                          <div className="w-full text-black text-center">
                            <h2 className="py-4">VRIDDHI-FOOTBALL</h2>
                          </div>
                          <div className="w-[90%] h-[20%] flex">
                            <div className="w-[20%] h-full bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[80%] flex items-center">
                              <h1 className="ml-4">NIT RKL</h1>
                            </div>
                          </div>
                          <div className="w-full my-1">
                            <h1 className="ml-4">VS</h1>
                          </div>

                          <div className="w-[90%] h-[20%] flex">
                            <div className="w-[20%] h-full bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[80%] flex items-center">
                              <h1 className="ml-4">NIT SUR</h1>
                            </div>
                          </div>
                        </div>

                        <div className="w-[33.34%]">
                          <div className="h-full flex items-center mx-auto">
                            <h1>Completed</h1>
                          </div>
                        </div>
                      </div>
                      <div className="text-[12px] mb-2">NIT RKL WON</div>
                    </div>

                    <div className="w-[75%] h-52 mt-11 rounded-[15px] bg-[#F4F4F4] flex flex-col items-center overflow-hidden  text-black">
                      <div className="w-full h-full flex">
                        <div className="w-[66.66%] h-full flex flex-col items-center">
                          <div className="w-full text-black text-center">
                            <h2 className="py-4">VRIDDHI-FOOTBALL</h2>
                          </div>
                          <div className="w-[90%] h-[20%] flex">
                            <div className="w-[20%] h-full bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[80%] flex items-center">
                              <h1 className="ml-4">NIT RKL</h1>
                            </div>
                          </div>
                          <div className="w-full my-1">
                            <h1 className="ml-4">VS</h1>
                          </div>

                          <div className="w-[90%] h-[20%] flex">
                            <div className="w-[20%] h-full bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[80%] flex items-center">
                              <h1 className="ml-4">NIT SUR</h1>
                            </div>
                          </div>
                        </div>

                        <div className="w-[33.34%]">
                          <div className="h-full flex items-center mx-auto">
                            <h1>Completed</h1>
                          </div>
                        </div>
                      </div>
                      <div className="text-[12px] mb-2">NIT RKL WON</div>
                    </div>

                    <div className="w-[75%] h-52 mt-11 rounded-[15px] bg-[#F4F4F4] flex flex-col items-center overflow-hidden  text-black">
                      <div className="w-full h-full flex">
                        <div className="w-[66.66%] h-full flex flex-col items-center">
                          <div className="w-full text-black text-center">
                            <h2 className="py-4">VRIDDHI-FOOTBALL</h2>
                          </div>
                          <div className="w-[90%] h-[20%] flex">
                            <div className="w-[20%] h-full bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[80%] flex items-center">
                              <h1 className="ml-4">NIT RKL</h1>
                            </div>
                          </div>
                          <div className="w-full my-1">
                            <h1 className="ml-4">VS</h1>
                          </div>

                          <div className="w-[90%] h-[20%] flex">
                            <div className="w-[20%] h-full bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[80%] flex items-center">
                              <h1 className="ml-4">NIT SUR</h1>
                            </div>
                          </div>
                        </div>

                        <div className="w-[33.34%]">
                          <div className="h-full flex items-center mx-auto">
                            <h1>Completed</h1>
                          </div>
                        </div>
                      </div>
                      <div className="text-[12px] mb-2">NIT RKL WON</div>
                    </div>
                  </div>
                </div>
                {/* BASKET BALL */}
                <div id="basketball-score-completed" className="hidden">
                  <div className="w-full flex items-center flex-col">
                    <div className="w-[75%] h-52 mt-11 rounded-[15px] bg-[#F4F4F4] flex flex-col items-center overflow-hidden  text-black">
                      <div className="w-full h-full flex">
                        <div className="w-[66.66%] h-full flex flex-col items-center">
                          <div className="w-full text-black text-center">
                            <h2 className="py-4">VRIDDHI-BASKET BALL</h2>
                          </div>
                          <div className="w-[90%] h-[20%] flex">
                            <div className="w-[20%] h-full bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[80%] flex items-center">
                              <h1 className="ml-4">NIT RKL</h1>
                            </div>
                          </div>
                          <div className="w-full my-1">
                            <h1 className="ml-4">VS</h1>
                          </div>

                          <div className="w-[90%] h-[20%] flex">
                            <div className="w-[20%] h-full bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[80%] flex items-center">
                              <h1 className="ml-4">NIT SUR</h1>
                            </div>
                          </div>
                        </div>

                        <div className="w-[33.34%]">
                          <div className="h-full flex items-center mx-auto">
                            <h1>Completed</h1>
                          </div>
                        </div>
                      </div>
                      <div className="text-[12px] mb-2">NIT RKL WON</div>
                    </div>

                    <div className="w-[75%] h-52 mt-11 rounded-[15px] bg-[#F4F4F4] flex flex-col items-center overflow-hidden  text-black">
                      <div className="w-full h-full flex">
                        <div className="w-[66.66%] h-full flex flex-col items-center">
                          <div className="w-full text-black text-center">
                            <h2 className="py-4">VRIDDHI-BASKET BALL</h2>
                          </div>
                          <div className="w-[90%] h-[20%] flex">
                            <div className="w-[20%] h-full bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[80%] flex items-center">
                              <h1 className="ml-4">NIT RKL</h1>
                            </div>
                          </div>
                          <div className="w-full my-1">
                            <h1 className="ml-4">VS</h1>
                          </div>

                          <div className="w-[90%] h-[20%] flex">
                            <div className="w-[20%] h-full bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[80%] flex items-center">
                              <h1 className="ml-4">NIT SUR</h1>
                            </div>
                          </div>
                        </div>

                        <div className="w-[33.34%]">
                          <div className="h-full flex items-center mx-auto">
                            <h1>Completed</h1>
                          </div>
                        </div>
                      </div>
                      <div className="text-[12px] mb-2">NIT RKL WON</div>
                    </div>

                    <div className="w-[75%] h-52 mt-11 rounded-[15px] bg-[#F4F4F4] flex flex-col items-center overflow-hidden  text-black">
                      <div className="w-full h-full flex">
                        <div className="w-[66.66%] h-full flex flex-col items-center">
                          <div className="w-full text-black text-center">
                            <h2 className="py-4">VRIDDHI-BASKET BALL</h2>
                          </div>
                          <div className="w-[90%] h-[20%] flex">
                            <div className="w-[20%] h-full bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[80%] flex items-center">
                              <h1 className="ml-4">NIT RKL</h1>
                            </div>
                          </div>
                          <div className="w-full my-1">
                            <h1 className="ml-4">VS</h1>
                          </div>

                          <div className="w-[90%] h-[20%] flex">
                            <div className="w-[20%] h-full bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[80%] flex items-center">
                              <h1 className="ml-4">NIT SUR</h1>
                            </div>
                          </div>
                        </div>

                        <div className="w-[33.34%]">
                          <div className="h-full flex items-center mx-auto">
                            <h1>Completed</h1>
                          </div>
                        </div>
                      </div>
                      <div className="text-[12px] mb-2">NIT RKL WON</div>
                    </div>
                  </div>
                </div>
                {/* KHOKHO */}
                <div id="khokho-score-completed" className="hidden">
                  <div className="w-full flex items-center flex-col">
                    <div className="w-[75%] h-52 mt-11 rounded-[15px] bg-[#F4F4F4] flex flex-col items-center overflow-hidden  text-black">
                      <div className="w-full h-full flex">
                        <div className="w-[66.66%] h-full flex flex-col items-center">
                          <div className="w-full text-black text-center">
                            <h2 className="py-4">VRIDDHI-KHOKHO</h2>
                          </div>
                          <div className="w-[90%] h-[20%] flex">
                            <div className="w-[20%] h-full bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[80%] flex items-center">
                              <h1 className="ml-4">NIT RKL</h1>
                            </div>
                          </div>
                          <div className="w-full my-1">
                            <h1 className="ml-4">VS</h1>
                          </div>

                          <div className="w-[90%] h-[20%] flex">
                            <div className="w-[20%] h-full bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[80%] flex items-center">
                              <h1 className="ml-4">NIT SUR</h1>
                            </div>
                          </div>
                        </div>

                        <div className="w-[33.34%]">
                          <div className="h-full flex items-center mx-auto">
                            <h1>Completed</h1>
                          </div>
                        </div>
                      </div>
                      <div className="text-[12px] mb-2">NIT RKL WON</div>
                    </div>

                    <div className="w-[75%] h-52 mt-11 rounded-[15px] bg-[#F4F4F4] flex flex-col items-center overflow-hidden  text-black">
                      <div className="w-full h-full flex">
                        <div className="w-[66.66%] h-full flex flex-col items-center">
                          <div className="w-full text-black text-center">
                            <h2 className="py-4">VRIDDHI-KHOKHO</h2>
                          </div>
                          <div className="w-[90%] h-[20%] flex">
                            <div className="w-[20%] h-full bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[80%] flex items-center">
                              <h1 className="ml-4">NIT RKL</h1>
                            </div>
                          </div>
                          <div className="w-full my-1">
                            <h1 className="ml-4">VS</h1>
                          </div>

                          <div className="w-[90%] h-[20%] flex">
                            <div className="w-[20%] h-full bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[80%] flex items-center">
                              <h1 className="ml-4">NIT SUR</h1>
                            </div>
                          </div>
                        </div>

                        <div className="w-[33.34%]">
                          <div className="h-full flex items-center mx-auto">
                            <h1>Completed</h1>
                          </div>
                        </div>
                      </div>
                      <div className="text-[12px] mb-2">NIT RKL WON</div>
                    </div>

                    <div className="w-[75%] h-52 mt-11 rounded-[15px] bg-[#F4F4F4] flex flex-col items-center overflow-hidden  text-black">
                      <div className="w-full h-full flex">
                        <div className="w-[66.66%] h-full flex flex-col items-center">
                          <div className="w-full text-black text-center">
                            <h2 className="py-4">VRIDDHI-KHOKHO</h2>
                          </div>
                          <div className="w-[90%] h-[20%] flex">
                            <div className="w-[20%] h-full bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[80%] flex items-center">
                              <h1 className="ml-4">NIT RKL</h1>
                            </div>
                          </div>
                          <div className="w-full my-1">
                            <h1 className="ml-4">VS</h1>
                          </div>

                          <div className="w-[90%] h-[20%] flex">
                            <div className="w-[20%] h-full bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[80%] flex items-center">
                              <h1 className="ml-4">NIT SUR</h1>
                            </div>
                          </div>
                        </div>

                        <div className="w-[33.34%]">
                          <div className="h-full flex items-center mx-auto">
                            <h1>Completed</h1>
                          </div>
                        </div>
                      </div>
                      <div className="text-[12px] mb-2">NIT RKL WON</div>
                    </div>
                  </div>
                </div>
                {/* KABBADI */}
                <div id="kabbadi-score-completed" className="hidden">
                  <div className="w-full flex items-center flex-col">
                    <div className="w-[75%] h-52 mt-11 rounded-[15px] bg-[#F4F4F4] flex flex-col items-center overflow-hidden  text-black">
                      <div className="w-full h-full flex">
                        <div className="w-[66.66%] h-full flex flex-col items-center">
                          <div className="w-full text-black text-center">
                            <h2 className="py-4">VRIDDHI-KABBADI</h2>
                          </div>
                          <div className="w-[90%] h-[20%] flex">
                            <div className="w-[20%] h-full bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[80%] flex items-center">
                              <h1 className="ml-4">NIT RKL</h1>
                            </div>
                          </div>
                          <div className="w-full my-1">
                            <h1 className="ml-4">VS</h1>
                          </div>

                          <div className="w-[90%] h-[20%] flex">
                            <div className="w-[20%] h-full bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[80%] flex items-center">
                              <h1 className="ml-4">NIT SUR</h1>
                            </div>
                          </div>
                        </div>

                        <div className="w-[33.34%]">
                          <div className="h-full flex items-center mx-auto">
                            <h1>Completed</h1>
                          </div>
                        </div>
                      </div>
                      <div className="text-[12px] mb-2">NIT RKL WON</div>
                    </div>

                    <div className="w-[75%] h-52 mt-11 rounded-[15px] bg-[#F4F4F4] flex flex-col items-center overflow-hidden  text-black">
                      <div className="w-full h-full flex">
                        <div className="w-[66.66%] h-full flex flex-col items-center">
                          <div className="w-full text-black text-center">
                            <h2 className="py-4">VRIDDHI-KABBADI</h2>
                          </div>
                          <div className="w-[90%] h-[20%] flex">
                            <div className="w-[20%] h-full bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[80%] flex items-center">
                              <h1 className="ml-4">NIT RKL</h1>
                            </div>
                          </div>
                          <div className="w-full my-1">
                            <h1 className="ml-4">VS</h1>
                          </div>

                          <div className="w-[90%] h-[20%] flex">
                            <div className="w-[20%] h-full bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[80%] flex items-center">
                              <h1 className="ml-4">NIT SUR</h1>
                            </div>
                          </div>
                        </div>

                        <div className="w-[33.34%]">
                          <div className="h-full flex items-center mx-auto">
                            <h1>Completed</h1>
                          </div>
                        </div>
                      </div>
                      <div className="text-[12px] mb-2">NIT RKL WON</div>
                    </div>

                    <div className="w-[75%] h-52 mt-11 rounded-[15px] bg-[#F4F4F4] flex flex-col items-center overflow-hidden  text-black">
                      <div className="w-full h-full flex">
                        <div className="w-[66.66%] h-full flex flex-col items-center">
                          <div className="w-full text-black text-center">
                            <h2 className="py-4">VRIDDHI-KABBADI</h2>
                          </div>
                          <div className="w-[90%] h-[20%] flex">
                            <div className="w-[20%] h-full bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[80%] flex items-center">
                              <h1 className="ml-4">NIT RKL</h1>
                            </div>
                          </div>
                          <div className="w-full my-1">
                            <h1 className="ml-4">VS</h1>
                          </div>

                          <div className="w-[90%] h-[20%] flex">
                            <div className="w-[20%] h-full bg-black">
                              <img src="/" alt=" " />
                            </div>
                            <div className="w-[80%] flex items-center">
                              <h1 className="ml-4">NIT SUR</h1>
                            </div>
                          </div>
                        </div>

                        <div className="w-[33.34%]">
                          <div className="h-full flex items-center mx-auto">
                            <h1>Completed</h1>
                          </div>
                        </div>
                      </div>
                      <div className="text-[12px] mb-2">NIT RKL WON</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Score;
