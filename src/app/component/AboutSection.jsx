"use client"
import React, { useState, useTransition } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA=[
    {
        title:"skills",
        id:"skills",
        content:(
            <ul className='list-disc pl-2'>
                <li>React</li>
                <li>Next js</li>
                <li>Taliwind CSS</li>
                <li>Java Script</li>
                <li>CSS</li>
                <li>HTML</li>
            </ul>
        )
    },

    {
        title:"Education",
        id:"education",
        content:(
            <ul className='list-disc pl-2'>
                <li>BSC COMPUTER SCIENCE</li>
                <p className='text-[#ADB7BE]'>Little Flower Insitute of social science and health</p>
                <p className='text-[#ADB7BE]'>2020-2023</p>
                 
                <li>HIGHER SECONDARY</li>
                <p className='text-[#ADB7BE]'>Kunnmangalam Higher Secondary School</p>
                <p className='text-[#ADB7BE]'>2018-2020</p>
              
               
            </ul>
        )
    },
    {
        title:"Experience",
        id:"Experience",
        content:(
            <ul className='list-disc pl-2'>
                <li>JUNIOR REACT DEVELOPER</li>
                <p className='text-[#ADB7BE]'>Arab Industries private Limited</p>

                <li>INTERNSHIP IN MEARN STACK</li>
                <p  className='text-[#ADB7BE]'>Luminar Technolab</p>
            </ul>
        )

    }
    
]

const AboutSection = () => {
    const[tab,setTab]=useState("skills");
    const[ispending,startTransition]=useTransition();

    const handleTabChange=((id)=>{
        startTransition(()=>{
            setTab(id)
        })
    })
  return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 item-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>

          <Image src="/images/about-image.png" width={400} height={500}/>  
          <div className='mt-4 md:mt-4 text-left flex-flex-col h-full'>
            <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
            <p className='text-base lg:text-lg text-[#ADB7BE]' >I am a Junior React Developer with a passion for creating interactive and responsive web application. I have Experience with React,javascript,Tailwind CSS, Chakara UI,HTML,CSS and Git.Iam always looking to expand my knowledge and skill set. Iam excited to work with others to create amazing application.</p>
            <div className='flex flex-row mt-8 justify-start'>
            <TabButton
                        selectTab={() => handleTabChange("skills")}
                        active={tab === "skills"}
                        >
                        Skills
                        </TabButton>

                        <TabButton
                        selectTab={() => handleTabChange("education")}
                        active={tab === "education"}
                        >
                        Education
                        </TabButton>

                        <TabButton
                        selectTab={() => handleTabChange("Experience")}
                        active={tab === "Experience"}
                        >
                        Experience
                        </TabButton>
            </div>
            <div className='mt-8'>
                {TAB_DATA.find((t)=>t.id === tab).content}
            </div> 
            </div>    
        </div>
    </section>
  )
}

export default AboutSection