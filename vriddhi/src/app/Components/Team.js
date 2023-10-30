import React from 'react'
import Image from 'next/image'
import TeamCard from './TeamCard'
import TeamData from '../Data/TeamData'

const Team = () => {
  return (
    <div id='ourteam'>
        <div className=' w-[100%] h-[100%]  bg-[#111A21] text-center relative'>
        <Image className='mix-blend-multiply relative'
        src='/images/Team/bg-3.png'
        layout='fill'
        objectFit='cover'
        alt='bg'/>

        <Image className='mix-blend-multiply relative'
            src='/images/Team/bg-4.png'
            layout='fill'
            objectFit='cover'
            alt="background"
        />

        <h1 className='text-center sm:text-4xl md:text-5xl lg:text-6xl text-3xl py-8 font-nidus' >OUR TEAM</h1>




        <div className='grid md:grid-cols-3 grid-row-auto md:gap-x-[1vw] md:gap-y-[5vh] w-[100%] place-items-center px-[5vw]  py-[10vh] text-center grid-cols-2 gap-y-[10vh] gap-x-[0.5vw] '>
        <TeamCard data ={TeamData}/>

        </div>


        </div>

        


        
      
    </div>
  )
}

export default Team