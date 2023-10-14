"use client";
import React from "react";
import { useState } from "react";
import { scoreDataUpcoming, scoreDataCompleted } from "./scorecardData";



const Score = () => {


  const [cricketBtnState,setCricketBtn] = useState('scale-125');
  const [footballBtnState,setFootballBtn] = useState('');
  const [basketballBtnState,setBasketballBtn] = useState('');
  const [khokhoBtnState,setKhokhoBtn] = useState('');
  const [kabbadiBtnState,setKabbadiBtn] = useState('');

  const [upcomingSport,setUpcomingSport] = useState(
    scoreDataUpcoming.filter((item)=>{
      if(item.title == 'VRDDHI CRICKET'){
        return true;
      }else{
        return false;
      }
    })
  )

  const changeUpcomingSport = (sportName) =>{
    setUpcomingSport(
      scoreDataUpcoming.filter((item)=>{
        if(item.title == sportName){
          return true;
        }else{
          return false;
        }
      })
    )
  }

  const [completedSport,setCompletedSport] = useState(
    scoreDataCompleted.filter((item)=>{
      if(item.title == 'VRDDHI CRICKET'){
        return true;
      }else{
        return false;
      }
    })
  )

  const changeCompletedSport = (sportName) =>{
    setCompletedSport(
      scoreDataCompleted.filter((item)=>{
        if(item.title == sportName){
          return true;
        }else{
          return false;
        }
      })
    )
  }

  

  
  
  return (
    <>
      {/* Mobile View */}
      <div className={`bg-[rgb(24,24,33)] w-full sm:hidden`}>
        <div className={`w-full flex justify-center flex-shrink-0`}>
          <h1 className={`text-[24px]`}>SCORE CARD</h1>
        </div>

        <div className={`w-full flex justify-evenly col-span-2 items-center text-black mt-2`}>
          <button
            id="cricket-btn-mob"
            onClick={() => {
                if(cricketBtnState == ''){
                  setCricketBtn('scale-125')
                }if(footballBtnState == 'scale-125'){
                  setFootballBtn('')
                }if(basketballBtnState == 'scale-125'){
                  setBasketballBtn('')
                }if(khokhoBtnState == 'scale-125'){
                  setKhokhoBtn('')
                }if(kabbadiBtnState == 'scale-125'){
                  setKabbadiBtn('')
                }
                changeCompletedSport('VRDDHI CRICKET');
                changeUpcomingSport('VRDDHI CRICKET');
            }}
            type="button"
            className={`mob w-[16%] h-[25px] rounded-[12px] bg-[#D8DFE1] text-[10px] my-2 ${cricketBtnState}`}
          >
            CRICKET
          </button>

          <button
            id="football-btn-mob"
            onClick={() => {
              if(footballBtnState == ''){
                setFootballBtn('scale-125')
              }if(cricketBtnState == 'scale-125'){
                setCricketBtn('')
              }if(basketballBtnState == 'scale-125'){
                setBasketballBtn('')
              }if(khokhoBtnState == 'scale-125'){
                setKhokhoBtn('')
              }if(kabbadiBtnState == 'scale-125'){
                setKabbadiBtn('')
              }
              changeCompletedSport('VRIDDHI FOOTBALL');
              changeUpcomingSport('VRIDDHI FOOTBALL');
            }}
            type="button"
            className={` w-[16%] h-[25px] rounded-[12px] bg-[#D8DFE1] text-[10px] my-2 ${footballBtnState}`}
          >
            FOOTBALL
          </button>

          <button
            id="basketball-btn-mob"
            onClick={() => {
              if(basketballBtnState == ''){
                setBasketballBtn('scale-125')
              }if(cricketBtnState == 'scale-125'){
                setCricketBtn('')
              }if(footballBtnState == 'scale-125'){
                setFootballBtn('')
              }if(khokhoBtnState == 'scale-125'){
                setKhokhoBtn('')
              }if(kabbadiBtnState == 'scale-125'){
                setKabbadiBtn('')
              }
              changeCompletedSport('VRIDDHI BASKETBALL');
              changeUpcomingSport('VRIDDHI BASKETBALL');
            }}
            type="button"
            className={` w-[16%] h-[25px] rounded-[12px] bg-[#D8DFE1] text-[10px] my-2 ${basketballBtnState}`}
          >
            BASKET BALL
          </button>

          <button
            id="khokho-btn-mob"
            onClick={() => {
              if(khokhoBtnState == ''){
                setKhokhoBtn('scale-125')
              }if(cricketBtnState == 'scale-125'){
                setCricketBtn('')
              }if(footballBtnState == 'scale-125'){
                setFootballBtn('')
              }if(basketballBtnState == 'scale-125'){
                setBasketballBtn('')
              }if(kabbadiBtnState == 'scale-125'){
                setKabbadiBtn('')
              }
              changeCompletedSport('VRIDDHI KHOKHO');
              changeUpcomingSport('VRIDDHI KHOKHO');
            }}
            type="button"
            className={` w-[16%] h-[25px] rounded-[12px] bg-[#D8DFE1] text-[10px] my-2 ${khokhoBtnState}`}
          >
            KHOKHO
          </button>

          <button
            id="kabbadi-btn-mob"
            onClick={() => {
              if(kabbadiBtnState == ''){
                setKabbadiBtn('scale-125')
              }if(cricketBtnState == 'scale-125'){
                setCricketBtn('')
              }if(footballBtnState == 'scale-125'){
                setFootballBtn('')
              }if(basketballBtnState == 'scale-125'){
                setBasketballBtn('')
              }if(khokhoBtnState == 'scale-125'){
                setKhokhoBtn('')
              }
              changeCompletedSport('VRIDDHI KABBADI');
              changeUpcomingSport('VRIDDHI KABBADI');
            }}
            type="button"
            className={`w-[16%] h-[25px] rounded-[12px] bg-[#D8DFE1] text-[10px] my-2 ${kabbadiBtnState}`}
          >
            KABBADI
          </button>
        </div>

        <div className={`w-full flex`}>
          <div className={`w-1/2 h-full flex flex-col items-center justify-center`}>
            <div
              className={`w-[60%] h-[24px] bg-[#001A43] rounded-[78px] mt-4 flex justify-center items-center text-[10px]`}>
              <h1>UPCOMING</h1>
            </div>

            <div
              id="score-card-upcoming"
              className={`w-[90%] lg:w-[80%] h-[300px] rounded-[15px] my-4 overflow-y-scroll scrollbar`}>
              {/* CRICKET */}

              <div id="cricket-score-upcoming-mob" className={`current-up-mob`}>
                <div className={`w-full flex items-center flex-col`}>
                  {
                    upcomingSport.map((data)=>{
                      return(
                        <div className={`w-[90%] mt-4 rounded-[10px] bg-[#F4F4F4] flex flex-col items-center overflow-hidden text-[10px] text-black `}>
                        <div className={`w-full flex flex-col mb-2`}>
                          <div className={`w-full text-black ml-1`}>
                            <h2 className={`my-2`}>{data.title}</h2>
                          </div>
                          <div className={`w-full flex`}>
                            <div className={`w-[58%] h-full flex flex-col items-center`}>
                              <div className={`w-[90%] flex`}>
                                <div className={`w-[30%] h-[18px] bg-black`}>
                                  <Image src={data.logo_1} alt=" " width={100} height={100} />
                                </div>
                                <div className={`w-[70%] flex items-center`}>
                                  <h1 className={`ml-1`}>{data.team_1}</h1>
                                </div>
                              </div>
                              <div className={`w-full my-1`}>
                                <h1 className={`ml-2 my-[2px]`}>VS</h1>
                              </div>

                              <div className={`w-[90%] flex`}>
                                <div className={`w-[30%] h-[18px] bg-black`}>
                                  <Image src={data.logo_2} alt=" " width={100} height={100} />
                                </div>
                                <div className={`w-[70%] flex items-center`}>
                                  <h1 className={`ml-1`}>{data.team_2}</h1>
                                </div>
                              </div>
                            </div>

                            <div className={`w-[42%]`}>
                              <div className={`h-full flex flex-col `}>
                                <h4 className={`text-[6px] mt-1`}>{data.date}</h4>
                                <h4 className={`text-[6px] mt-1`}>{data.time}</h4>
                                <h4 className={`text-[6px] mt-1`}>{data.location}</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      )
                      
                    })
                  }
                  
                </div>
              </div>

            </div>
          </div>

          <div className={`w-1/2 h-full flex flex-col items-center justify-center`}>
            <div
              className={`w-[60%] h-[24px] bg-[#F4A100] rounded-[78px] mt-4 flex justify-center items-center text-[10px]`}>
              <h1>COMPLETED</h1>
            </div>

            <div
              id="score-card-completed"
              className={`w-[90%] lg:w-[80%] h-[300px] rounded-[10px] my-4  overflow-y-scroll scrollbar`}>
              {/* CRICKET */}
              <div id="cricket-score-completed-mob" className={`current-com-mob`}>
                <div className={`w-full flex items-center flex-col`}>
                  {
                    completedSport.map((data)=>{
                      return(
                        <div className={`w-[90%] mt-4 rounded-[10px] bg-[#F4F4F4] flex flex-col items-center overflow-hidden text-[10px] text-black`}>
                          <div className={`w-full flex flex-col`}>
                            <div className={`w-full text-black ml-1`}>
                              <h2 className={`my-2`}>{data.title}</h2>
                            </div>
                            <div className={`w-full flex`}>
                              <div className={`w-[58%] h-full flex flex-col items-center`}>
                                <div className={`w-[90%] flex`}>
                                  <div className={`w-[30%] h-[18px] bg-black`}>
                                    <Image src={data.logo_1} alt=" " width={100} height={100} />
                                  </div>
                                  <div className={`w-[70%] flex items-center`}>
                                    <h1 className={`ml-1`}>{data.team_1}</h1>
                                  </div>
                                </div>
                                <div className={`w-full my-1`}>
                                  <h1 className={`ml-2 my-[2px]`}>VS</h1>
                                </div>

                                <div className={`w-[90%] flex`}>
                                  <div className={`w-[30%] h-[18px] bg-black`}>
                                    <Image src={data.logo_2} alt=" " width={100} height={100} />
                                  </div>
                                  <div className={`w-[70%] flex items-center`}>
                                    <h1 className={`ml-1`}>{data.team_2}</h1>
                                  </div>
                                </div>
                              </div>

                              <div className={`w-[41%]`}>
                                <div className={`h-full flex items-center`}>
                                  <h1>Completed</h1>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={`my-2`}>{data.won} WON</div>
                        </div>
                      )
                    })
                  }
                  
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>

      {/* PC View */}

      <div className={`bg-[rgb(24,24,33)] w-full hidden sm:flex flex-col`}>
        <div className={`w-full flex justify-center flex-shrink-0`}>
          <h1 className={`text-[38px] md:text-[48px] lg:text-[56px] xl:text-[70.26px] font-normal`}>
            SCORE CARD
          </h1>
        </div>

        <div className={`flex justify-center`}>
          <div className={`w-[80%] grid grid-cols-5 grid-rows-1 mb-16`}>
            {/* BUTTONS */}

            <div className={`w-full flex flex-col items-center text-black mt-28`}>
              <div className={`w-[70%] h-[50px] bg-[#FFFCFC] flex items-center justify-center rounded-[25px] text-[24px] my-2 `}>
                <h1>SPORTS</h1>
              </div>

              <button
                id="cricket-btn"
                onClick={() => {
                  if(cricketBtnState == ''){
                    setCricketBtn('scale-125')
                  }if(footballBtnState == 'scale-125'){
                    setFootballBtn('')
                  }if(basketballBtnState == 'scale-125'){
                    setBasketballBtn('')
                  }if(khokhoBtnState == 'scale-125'){
                    setKhokhoBtn('')
                  }if(kabbadiBtnState == 'scale-125'){
                    setKabbadiBtn('')
                  }
                  changeCompletedSport('VRDDHI CRICKET');
                  changeUpcomingSport('VRDDHI CRICKET');
                }}
                type="button"
                className={`pc w-[70%] h-[50px] rounded-[25px] bg-[#D8DFE1] text-[20px] my-2 ${cricketBtnState}`}
              >
                CRICKET
              </button>

              <button
                id="football-btn"
                onClick={() => {
                  if(footballBtnState == ''){
                    setFootballBtn('scale-125')
                  }if(cricketBtnState == 'scale-125'){
                    setCricketBtn('')
                  }if(basketballBtnState == 'scale-125'){
                    setBasketballBtn('')
                  }if(khokhoBtnState == 'scale-125'){
                    setKhokhoBtn('')
                  }if(kabbadiBtnState == 'scale-125'){
                    setKabbadiBtn('')
                  }
                  changeCompletedSport('VRIDDHI FOOTBALL');
                  changeUpcomingSport('VRIDDHI FOOTBALL');
                }}
                type="button"
                className={` w-[70%] h-[50px] rounded-[25px] bg-[#D8DFE1] text-[20px] my-2 ${footballBtnState}`}
              >
                FOOTBALL
              </button>

              <button
                id="basketball-btn"
                onClick={() => {
                  if(basketballBtnState == ''){
                    setBasketballBtn('scale-125')
                  }if(cricketBtnState == 'scale-125'){
                    setCricketBtn('')
                  }if(footballBtnState == 'scale-125'){
                    setFootballBtn('')
                  }if(khokhoBtnState == 'scale-125'){
                    setKhokhoBtn('')
                  }if(kabbadiBtnState == 'scale-125'){
                    setKabbadiBtn('')
                  }
                  changeCompletedSport('VRIDDHI BASKETBALL');
                  changeUpcomingSport('VRIDDHI BASKETBALL');
                }}
                type="button"
                className={` w-[70%] h-[50px] rounded-[25px] bg-[#D8DFE1] text-[20px] my-2 ${basketballBtnState}`}
              >
                BASKET BALL
              </button>

              <button
                id="khokho-btn"
                onClick={() => {
                  if(khokhoBtnState == ''){
                    setKhokhoBtn('scale-125')
                  }if(cricketBtnState == 'scale-125'){
                    setCricketBtn('')
                  }if(footballBtnState == 'scale-125'){
                    setFootballBtn('')
                  }if(basketballBtnState == 'scale-125'){
                    setBasketballBtn('')
                  }if(kabbadiBtnState == 'scale-125'){
                    setKabbadiBtn('')
                  }
                  changeCompletedSport('VRIDDHI KHOKHO');
                  changeUpcomingSport('VRIDDHI KHOKHO');
                }}
                type="button"
                className={` w-[70%] h-[50px] rounded-[25px] bg-[#D8DFE1] text-[20px] my-2 ${khokhoBtnState}`}
              >
                KHOKHO
              </button>

              <button
                id="kabbadi-btn"
                onClick={() => {
                  if(kabbadiBtnState == ''){
                    setKabbadiBtn('scale-125')
                  }if(cricketBtnState == 'scale-125'){
                    setCricketBtn('')
                  }if(footballBtnState == 'scale-125'){
                    setFootballBtn('')
                  }if(basketballBtnState == 'scale-125'){
                    setBasketballBtn('')
                  }if(khokhoBtnState == 'scale-125'){
                    setKhokhoBtn('')
                  }
                  changeCompletedSport('VRIDDHI KABBADI');
                  changeUpcomingSport('VRIDDHI KABBADI');
                }}
                type="button"
                className={`w-[70%] h-[50px] rounded-[25px] bg-[#D8DFE1] text-[20px] my-2 ${kabbadiBtnState}`}
              >
                KABBADI
              </button>
            </div>


            {/* UPCOMING SECTION */}
            <div className={`w-full h-full col-span-2 flex flex-col items-center justify-center`}>
              <div
                id="color"
                className={`w-[78%] lg:w-[68%] h-[71.016] lg:h-[81.016px] bg-[#001A43] rounded-[78px] mt-11 flex justify-center items-center text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] `}>
                <h1>UPCOMING</h1>
              </div>

              <div
                id="score-card-upcoming"
                className={`w-[90%] lg:w-[80%] h-[500px] rounded-[15px] mt-11 overflow-y-scroll scrollbar`}>
                
                {/* UPCOMING SPORTS */}

                    <div id="cricket-score-upcoming" className={`current-up`}>
                      {
                        upcomingSport.map((data)=>(
                          <div className={`w-full flex items-center flex-col`}>
                            <div className={`w-[75%] h-48 mt-11 rounded-[15px] bg-[#F4F4F4] flex overflow-hidden  text-black`}>
                              <div className={`w-[66.66%] h-full flex flex-col items-center`}>
                                <div className={`w-full text-black text-center`}>
                                  <h2 className={`py-4`}>{data.title}</h2>
                                </div>
                                <div className={`w-[90%] h-[20%] flex`}>
                                  <div className={`w-[20%] h-full bg-black`}>
                                    <Image src={data.logo_1} alt=" " width={100} height={100} />
                                  </div>
                                  <div className={`w-[80%] flex items-center`}>
                                    <h1 className={`ml-4`}>{data.team_1}</h1>
                                  </div>
                                </div>
                                <div className={`w-full my-1`}>
                                  <h1 className={`ml-4`}>VS</h1>
                                </div>

                                <div className={`w-[90%] h-[20%] flex`}>
                                  <div className={`w-[20%] h-full bg-black`}>
                                    <Image src={data.logo_2} alt=" " width={100} height={100} />
                                  </div>
                                  <div className={`w-[80%] flex items-center`}>
                                    <h1 className={`ml-4`}>{data.team_2}</h1>
                                  </div>
                                </div>
                              </div>

                              <div className={`w-[33.34%] h-full`}>
                                <div className={` mt-8`}>
                                  <h4 className={`text-[10px] mt-1`}>DATE-{data.date}</h4>
                                  <h4 className={`text-[10px] mt-1`}>TIME-{data.time}</h4>
                                  <h4 className={`text-[10px] mt-1`}>LOCATION {data.location}</h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))
                      }
                    </div>
              </div>
            </div>

            {/* COMPLETED SECTION */}

            <div className={`w-full h-full col-span-2 flex flex-col items-center justify-center`}>
              <div
                id="color"
                className={`w-[78%] lg:w-[68%] h-[71.016] lg:h-[81.016px] bg-[#F4A100] rounded-[78px] mt-11 flex justify-center items-center text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px]`}>
                <h1>COMPLETED</h1>
              </div>

              <div
                id="score-card-completed"
                className={`w-[90%] lg:w-[80%] h-[500px] rounded-[15px] mt-11 overflow-y-scroll scrollbar`}>
                {/* COMPLETED SPORT */}

                <div id="cricket-score-completed" className={`current-com`}>
                  <div className={`w-full flex items-center flex-col`}>
                    {
                      completedSport.map((data)=>{
                        return(
                          <div className={`w-[75%] h-52 mt-11 rounded-[15px] bg-[#F4F4F4] flex flex-col items-center overflow-hidden  text-black`}>
                            <div className={`w-full h-full flex`}>
                              <div className={`w-[66.66%] h-full flex flex-col items-center`}>
                                <div className={`w-full text-black text-center`}>
                                  <h2 className={`py-4`}>{data.title}</h2>
                                </div>
                                <div className={`w-[90%] h-[20%] flex`}>
                                  <div className={`w-[20%] h-full bg-black`}>
                                    <Image src={data.logo_1} alt=" " width={100} height={100} />
                                  </div>
                                  <div className={`w-[80%] flex items-center`}>
                                    <h1 className={`ml-4`}>{data.team_1}</h1>
                                  </div>
                                </div>
                                <div className={`w-full my-1`}>
                                  <h1 className={`ml-4`}>VS</h1>
                                </div>

                                <div className={`w-[90%] h-[20%] flex`}>
                                  <div className={`w-[20%] h-full bg-black`}>
                                    <Image src={data.logo_2} alt=" " width={100} height={100} />
                                  </div>
                                  <div className={`w-[80%] flex items-center`}>
                                    <h1 className={`ml-4`}>{data.team_2}</h1>
                                  </div>
                                </div>
                              </div>

                              <div className={`w-[33.34%]`}>
                                <div className={`h-full flex items-center mx-auto`}>
                                  <h1>Completed</h1>
                                </div>
                              </div>
                            </div>
                            <div className={`text-[12px] mb-2`}>{data.won} WON</div>
                          </div>
                        );
                      })
                    }
                    
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
