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

        <h1 className='text-white md:text-[70px] pt-[13vh] text-[35px]' style={{fontFamily:'Nidus sans, sans-serif'}}>OUR TEAM</h1>




        <div className='grid md:grid-cols-3 grid-row-auto md:gap-x-[1vw] md:gap-y-[5vh] w-[100%] place-items-center px-[5vw]  py-[10vh] text-center grid-cols-2 gap-y-[10vh] gap-x-[0.5vw] '>
        <TeamCard data ={TeamData}/>

        </div>


        </div>

        


        
      
    </div>
  )
}

export default Team