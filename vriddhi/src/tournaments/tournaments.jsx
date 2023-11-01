import "./tournaments.css";
import Image from "next/image";
import basketball from "./assets/basketball.png";
import chess from "./assets/chess.png";
import football from "./assets/football.png";
import cricket from "./assets/cricket.png";
import khokho from "./assets/khokho.png";
import tabletennis from "./assets/tabletennis.png";
import volleyball from "./assets/volleyball.png";
import badminton from "./assets/badminton.png";
import centerimg from "./assets/centerimg.png";
import trophy from "./assets/trophymobile.png";
import leftmobile from "./assets/leftmobile.png";
import rightmobile from "./assets/rightmobile.png";
import Tournament from "@/app/Components/Tournament/TournamentPop";
import tournamentRules from "@/tournaments/data/tournamentRules.json";

export default function Footer() {
  return (
    <div className="main">
      <h1 className="heading">TOURNAMENT</h1>
      <Image src={trophy} alt="trophy" className="trophymobile"></Image>
      <div className="content">
        <div className="leftlines">
          <Image
            src={leftmobile}
            alt="left-mobile1"
            className="leftline1"
          ></Image>
          <Image
            src={leftmobile}
            alt="left-mobile2"
            className="leftline2"
          ></Image>
          <Image
            src={leftmobile}
            alt="left-mobile3"
            className="leftline3"
          ></Image>
          <Image
            src={leftmobile}
            alt="left-mobile4"
            className="leftline4"
          ></Image>
        </div>

        <div className="submain">
          <div className="left">
            <Tournament
              className="line1"
              src={basketball}
              tournamentName={"BASKETBALL"}
              rules={tournamentRules.basketball}
            />
            <Tournament
              className="line2"
              src={football}
              tournamentName={"FOOTBALL"}
              rules={tournamentRules.football}
            />
            <Tournament
              className="line3"
              src={cricket}
              tournamentName={"CRICKET"}
              rules={tournamentRules.cricket}
            />
            <Tournament
              className="line4"
              src={volleyball}
              tournamentName={"VOLLEYBALL"}
              rules={tournamentRules.volleyball}
            />
          </div>
          <div className="center">
            <Image src={centerimg} alt=""></Image>
          </div>
          <div className="right">
            <Tournament
              className="line1"
              src={chess}
              tournamentName={"CHESS"}
              rules={tournamentRules.chess}
            />
            <Tournament
              className="line2"
              src={tabletennis}
              tournamentName={"TABLE TENNIS"}
              rules={tournamentRules.tabletennis}
            />
            <Tournament
              className="line3"
              src={khokho}
              tournamentName={"KHO-KHO"}
              rules={tournamentRules.khokho}
            />
            <Tournament
              className="line4"
              src={badminton}
              tournamentName={"BADMINTON"}
              rules={tournamentRules.badminton}
            />
          </div>
        </div>
        <div className="rightlines">
          <Image
            src={rightmobile}
            alt="rightmoblie1"
            className="rightline1"
          ></Image>
          <Image
            src={rightmobile}
            alt="rightmoblie2"
            className="rightline2"
          ></Image>
          <Image
            src={rightmobile}
            alt="rightmoblie3"
            className="rightline3"
          ></Image>
        </div>
      </div>
    </div>
  );
}
