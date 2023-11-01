import Image from 'next/image'
import React from 'react'

const TeamCard = ({data}) => {
  return (
    <>
      {
        data.map((element, key)=>{

            return(
<>
                
              <div className='md:w-[17vw] md:h-[17vw] relative w-[40vw] h-[40vw] mb-4 max-w-sm bg-white border border-gray-200 rounded-[400px] shadow dark:bg-gray-800 dark:border-gray-700'  key={element.id} >
              <div className='md:h-[50vh] '>
              <img className='md:h-[17vw] md:w-[17vw] w-[40vw] h-[40vw] rounded-[400px]' src={element.image} alt=''/>
              </div>
               <div className='md:text-2xl md:mt-[-17vh] md:w-[30vw] md:ml-[-6.2vw] sm:text-lg text-white font-bold'>{element.name}</div>
               <div className='md:text-xl sm:text-sm text-white'>{element.info}</div>


            </div>
            </>
            )
           
        })}
    </>
  )
}

export default TeamCard
