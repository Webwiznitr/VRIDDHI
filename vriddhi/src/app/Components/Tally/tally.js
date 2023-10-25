"use client";
import React from "react";
import Image from "next/image";
import goldmedal from './assets/goldmedal.png';
import silvermedal from './assets/silvermedal.png';

const Tally = () => {
    const teams = [
        { rank: 1, logo:'', name: 'NIT RKL', gold: 4, silver: 1 },
        { rank: 2, logo:'', name: 'NIT SURATHKAL', gold: 3, silver: 1 },
        { rank: 3, logo:'', name: 'NIT TRICHY', gold: 2, silver: 1 },
        { rank: 4, logo:'', name: 'BIT', gold: 1, silver: 1 },
        { rank: 5, logo:'', name: 'BIT', gold: 1, silver: 1 },
        { rank: 6, logo:'', name: 'BIT', gold: 1, silver: 1 },
        { rank: 7, logo:'', name: 'BIT', gold: 1, silver: 1 },
        { rank: 8, logo:'', name: 'BIT', gold: 1, silver: 1 }
      ];
    
      return (
        <div className="min-w-full">
        <div className="text-center">MEDAL TABLE</div>
        <table className="w-3/4 m-auto rounded-[15px] bg-gradient-to-br from-[rgb(0,31,78)] to [rgb(0,25,63)]">
          <thead>
            <tr>
              <th className="px-3 py-3 text-centre">
                Rank
              </th>
              <th className="px-6 py-3 text-centre">
                Team Name
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
                <td className="px-3 py-4 text-center uppercase">{team.rank}</td>
                <td className="px-6 py-4 text-white">{team.name}</td>
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