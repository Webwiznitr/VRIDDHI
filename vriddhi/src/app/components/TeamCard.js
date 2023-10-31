import Image from 'next/image'
import React from 'react'

const TeamCard = ({data}) => {
  return (
    <>
      {
        data.map((element, key)=>{

            return(
<>
                
                <div className='md:w-[23vw] md:h-[60vh] relative w-[40vw] h-[40vh] max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'  key={element.id} >
              <div className='md:h-[50vh] '>
              <img className='md:h-[50vh] md:w-[23vw] w-[40vw] h-[40vh] rounded ' src={element.image}/>
              </div>
               <div className='md:text-2xl sm:text-lg'>{element.name}</div>
               <div className='md:text-xl sm:text-sm'>{element.info}</div>


            </div>
            </>
            )
           
        })}
    </>
  )
}

export default TeamCard
