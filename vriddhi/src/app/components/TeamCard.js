import Image from 'next/image'
import React from 'react'

const TeamCard = ({data}) => {
  return (
    <>
      {
        data.map((element, key)=>{

            return(

                <div className='md:w-[24vw] md:h-[27vh] relative w-[40vw] h-[13vh]'  key={element.id} >
                <Image className='rounded-[6px]'
                src={element.image}
                layout='fill'
                objectFit='cover'
                alt='img'
                />
            </div>
            )
           
        })}
    </>
  )
}

export default TeamCard
