"use client";
import React from 'react'
import { images } from '../../../next.config'
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';



const HeroSection = () => {
  return (
    <section className='h-full'>
      <div className='grid grid-cols-1 sm:grid-cols-12 h-100'>
        <div className='col-span-7 place-self-center text-center sm:text-left'>
          <h1 className='text-white mb-4 text-4xl lg:text-6xl sm:text-xl font-extrabold '>  <span className=" bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
            Hello  I&apos;M,
          </span>
            <br></br>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'React Developer',
                1000, // wait 1s before replacing "Mice" with "Hamsters"


              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />

          </h1>
          <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-base mb-6'> professional who specializes in designing, building, and maintaining software applications.
          </p>
          <div>
            <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white'>Hire Me</button>

            <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white  mt-3'>
              <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download Cv
              </span>
            </button>
          </div>

        </div>

        <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
          <div className='rounded-full bg-[#181818] w-[250px] h-[250px]  lg:w-[400px] lg:h-[400px] relative'>
            <Image src="/images/hero-image.png"
              className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
              alt='hero image'
              width={300}
              height={300}
            />
          </div>

        </div>

      </div>
    </section>
  )
}

export default HeroSection