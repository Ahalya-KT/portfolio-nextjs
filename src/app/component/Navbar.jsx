"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from './NavLink'
import { Bars3Icon, XmarkIcon } from "@heroicons/react";



const navLinks=[
    {
        title:"About",
        path:"#about"

    },
    {
        title:"Projects",
        path:"#Projects"

    },{
        title:"Contacts",
        path:"#contacts"

    }

]

const Navbar = () => {
    const[navbarOpen,setNavOpen]=useState(false)
  return (
  <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90'>
    <div className='flex flex-wrap item-center justify-between mx-auto    py-8'>
       <Link href= {"/"} className= 'text-lg md:text-2xl text-white font-semibold'>LOGO</Link>
       <div className=' mobile-menu block md:hidden'>
        {
            navbarOpen ? (
                    <button className='flex items-center py-3 px-2 text-slate-200 border rounded bordre-slate-200 hover:text-white hover-border-white'>
                    <Bars3Icon className="h-5 w-5"/>
                    </button>
            ):(
            <button className='flex items-center py-3 px-2 text-slate-200 border rounded border-slate-200 hover:text-white hover-border-white'>
            <XmarkIcon className="h-5 w-5"/>
            </button>
      
            )
        }




  
       </div>

       <div className='menu hidden md:block md:w-auto id="navbar'>
        <ul className='flex p-4 md:p-0 sm:flex-row md:space-x-8 mt-0'>
           {
            navLinks.map((link,index)=>(
                <li key={index}>
                   <NavLink href={link.path} title={link.title} />
                </li>
            ))
           }
        </ul>

       </div>
    </div>
  </nav>
  )
}

export default Navbar