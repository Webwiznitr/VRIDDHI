import Image from 'next/image'
import React from 'react'

const TeamCard = ({data}) => {
  return (
    <>
      {
        data.map((element, key)=>{

            return(

                <div className='w-[24vw] h-[27vh] relative md:w-[40vw] md:h-[13vh]'  key={element.id} >
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
