"use client";
import React from "react";
import Image from "next/image";
import goldmedal from './assets/goldmedal.png';
import silvermedal from './assets/silvermedal.png';

const Tally = () => {
    const teams = [
        { rank: 1, logo:'/images/logos/nitrkl.png', name: 'NIT RKL', gold: 4, silver: 1 },
        { rank: 2, logo:'/images/logos/nitsur.png', name: 'NIT SURATHKAL', gold: 3, silver: 1 },
        { rank: 3, logo:'', name: 'NIT TRICHY', gold: 2, silver: 1 },
        { rank: 4, logo:'', name: 'BIT', gold: 1, silver: 1 },
        { rank: 5, logo:'', name: 'BIT', gold: 1, silver: 1 },
        { rank: 6, logo:'', name: 'BIT', gold: 1, silver: 1 },
        { rank: 7, logo:'', name: 'BIT', gold: 1, silver: 1 },
        { rank: 8, logo:'', name: 'BIT', gold: 1, silver: 1 }
      ];
    
      return (
        <div className="min-w-full bg-[rgb(24,24,33)]">
        <h1 className="text-center sm:text-4xl md:text-5xl lg:text-6xl text-3xl py-8 font-nidus">MEDAL TABLE</h1>
        <table className="w-3/4 m-auto font-sans sm:text-sm lg:text-base text-xs rounded-[15px] uppercase bg-gradient-to-br from-[rgb(0,31,78)] to-[rgb(0,5,13)]">
          <thead>
            <tr>
              <th className="pl-3 pr-1 py-3 text-centre lg:text-lg font-normal">
                Rank
              </th>
              <th className="pl-4 pr-5 py-3 text-centre lg:text-lg font-normal">
                Name of the team
              </th>
              <th className="px-2 py-3">
                <Image src={goldmedal} width={35} height={35} />
              </th>
              <th className="px-2 py-3">
                <Image src={silvermedal} width={35} height={35} />
              </th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team, index) => (
                <tr key={index} className=
                    {team.rank === 1 ? "text-yellow-400" :
                    (team.rank === 2 ? "text-gray-400" :
                    (team.rank === 3 ? "text-amber-700" : "text-white")
                )}>
                <td className="pl-3 pr-1 py-4 text-center">{team.rank}</td>
                <td className="pl-4 pr-5 py-4 text-white flex">
                  <Image src={team.logo} width={25} height={25} className="mr-2" />
                  {team.name}
                </td>
                <td className="px-4 py-4">{team.gold}</td>
                <td className="px-4 py-4">{team.silver}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      );
};

export default Tally;