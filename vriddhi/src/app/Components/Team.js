import React from 'react'
import Image from 'next/image'
import TeamCard from './TeamCard'
import TeamData from '../Data/TeamData'

const Team = () => {
  return (
    <div>
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

        <h1 className='text-white text-[35px] pt-[13vh] mdx:text-[6vw]' style={{fontFamily:'Nidus sans, sans-serif'}}>OUR TEAM</h1>




        <div className='grid grid-cols-3 grid-row-auto gap-x-[1vw] gap-y-[5vh] w-[100%] place-items-center px-[5vw]  py-[10vh] text-center mdx:grid-cols-2 mdx:gap-y-[10vh] mdx:gap-x-[0.5vw] '>
        <TeamCard data ={TeamData}/>

        </div>


        </div>

        


        
      
    </div>
  )
}

export default Team