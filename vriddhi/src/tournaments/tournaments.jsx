import './tournaments.css'
import Image from "next/image";
import basketball from'./assets/basketball.png'
import chess from'./assets/chess.png'
import football from'./assets/football.png'
import cricket from'./assets/cricket.png'
import khokho from'./assets/khokho.png'
import tabletennis from'./assets/tabletennis.png'
import volleyball from'./assets/volleyball.png'
import badminton from'./assets/badminton.png'
import centerimg from './assets/centerimg.png'
import trophy from './assets/trophymobile.png'
import leftmobile from './assets/leftmobile.png'
import rightmobile from './assets/rightmobile.png'

export default function Footer() {
  return (
   <div className="main">
    <h1 className="heading">TOURNAMENT</h1>
    <Image src={trophy} className="trophymobile"></Image>
    <div className='leftlines'>
        <Image src={leftmobile} className='leftline1'></Image>
        <Image src={leftmobile} className='leftline2'></Image>
        <Image src={leftmobile} className='leftline3'></Image>
        <Image src={leftmobile} className='leftline4'></Image>
      </div>
      
    <div className="submain">
      
    <div className="left">
      <div className="section line1">
        <h3 className="sportname">BASKETBALL</h3>
        <div className="card">
        <Image src={basketball}></Image>
        </div>
      </div>
      <div className="section line2">
        <h3 className="sportname">FOOTBALL</h3>
        <div className="card">
        <Image src={football}></Image>
        </div>
      </div>
      <div className="section line3">
        <h3 className="sportname">CRICKET</h3>
        <div className="card">
        <Image src={cricket}></Image>
        </div>
      </div>
      <div className="section line4">
        <h3 className="sportname">VOLLEYBALL</h3>
        <div className="card">
        <Image src={volleyball}></Image>
        </div>
      </div>
      
    </div>
    <div className="center">
      <Image src={centerimg}></Image>
    </div>
    <div className="right">
      <div className="section line1">
        <h3 className="sportname">CHESS</h3>
        <div className="card">
        <Image src={chess}></Image>
      </div>
     </div>
     <div className="section line2">
        <h3 className="sportname">TABLE TENNIS</h3>
        <div className="card">
        <Image src={tabletennis}></Image>
      </div>
     </div>
     <div className="section line3">
        <h3 className="sportname">KHO KHO</h3>
        <div className="card">
        <Image src={khokho}></Image>
      </div>
     </div>
     <div className="section line4">
        <h3 className="sportname">BADMINTON</h3>
        <div className="card">
        <Image src={badminton}></Image>
      </div>
     </div>
    </div>
   
    </div>
    <div className="rightlines">
        <Image src={rightmobile} className='rightline1'></Image>
        <Image src={rightmobile} className='rightline2'></Image>
        <Image src={rightmobile} className='rightline3'></Image>
      </div>
    </div>
  );
}
