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
                <li>Node.js</li>
                <li>Node.js</li>
                <li>Node.js</li>
                <li>Node.js</li>
                <li>Node.js</li>
            </ul>
        )
    },

    {
        title:"Education",
        id:"education",
        content:(
            <ul className='list-disc pl-2'>
                <li>BSC computer Science</li>
                <li>Higher secondary</li>
               
            </ul>
        )
    },
    {
        title:"cerifications",
        id:"cerifications",
        content:(
            <ul className='list-disc pl-2'>
                <li>Inership in MEARN stack</li>
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

          <Image src="/images/about-image.png" width={500} height={500}/>  
          <div className='mt-4 md:mt-4 text-left flex-flex-col h-full'>
            <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
            <p className='text-base lg:text-lg' >I am a Junior React Developer with a passion for creating interactive and responsive web application. I have Experience with React,javascript,Tailwind CSS, Chakara UI,HTML,CSS and Git.Iam always looking to expand my knowledge and skill set. Iam excited to work with others to create amazing application.</p>
            <div className='flex flex-row mt-8 justify-start'>
            <TabButton
                        selectTab={() => handleTabChange("skills")}
                        active={tab === "skills"}
                        >
                        skills
                        </TabButton>

                        <TabButton
                        selectTab={() => handleTabChange("education")}
                        active={tab === "education"}
                        >
                        Education
                        </TabButton>

                        <TabButton
                        selectTab={() => handleTabChange("cerifications")}
                        active={tab === "cerifications"}
                        >
                        Certifications
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