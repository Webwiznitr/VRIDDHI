import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div id="aboutus">
      <div className=' w-[100%] h-[100%]  bg-[#111A21] relative pb-[20vh] mdy:pt-[10vh] '>
        <Image className='mix-blend-multiply absolute'
            src='/images/About/background.png'
           layout='fill'
            objectFit='cover'
            alt="background"
        />

        <Image className='mix-blend-multiply absolute'
            src='/images/About/bg-2.png'
            layout='fill'
            objectFit='cover'
            alt="background"
        />
        
        <div className='flex justify-center pt-[8vh] text-white' >
          <h1 className='text-center sm:text-4xl md:text-5xl lg:text-6xl text-3xl py-8 font-nidus'>ABOUT US</h1>
        </div>

        

        <div className='ml-[12vw] text-white w-[60vw] mdy:w-[80vw]'>
          
          <div className="mdy:flex mdy:justify-between mdy:py-[3vh]">

            <div className='mb-[4vh] mt-[-5vh]'>

              <Image className=' mt-[15vh] mdy:w-[100vw] '
              src="/images/VRIDDHI.svg"
              width={500}
              height={400}
              alt='vriddhi'/>

              <h1 className='mt-[3vh] text-2xl mdy:text-[5vw]' style={{fontFamily:'Melvins One Regular, sans-serif'}}>SPORTS FEST</h1>    
            </div>

            

              <Image className='z-30  mdx:scale-x-[-1] mdy:w-[30vw] mdy:mt-[-2vh] mdy:mr-[-5vw] mdx:ml-[61vw] mt-[-30vh] mdxx:absolute mdxx:mt-[-21vh]'
              src='/images/About/flip.svg'
              width={230}
              height={170}
              alt='image'
              />

          </div>


          <div className="flex justify-between mt-[5vh] align-middle">
            
            <Image className='mdx:hidden mdy:mt-[-10vh] mdy:ml-[5vw] w-[13vw] '
              src='/images/About/basket.svg'
              width={80}
              height={100}
              alt='basket'
            />

            <h1 className='mdy:mt-7 text-2xl mdy:w-[53vw] mdy:text-end mdy:text-[3.5vw] mdx:mt-[-11.5vw] mdt:mt-[-15vw] mdxx:mt-[-2vw]' style={{fontFamily:'Nidus sans, sans-serif'}}>VRIDDHI IS EAST INDIA&apos;S BIGGEST SPORTS FESTIVAL. A SPORTS GALA OF SORTS, SEVERAL SPORTS ENTHUSIASTS GRACE THE PLATFORM TO PROVE THEIR METTLE WITH THE MOTTO TO IGNITE THE SPORTSMAN IN YOU AND EDUCATE YOU ABOUT THE SPIRIT OF THE GAME.</h1>

          </div>
          
        </div>

        
        <div>
          

        
        </div>


      </div>
    </div>
  )
}

export default About
