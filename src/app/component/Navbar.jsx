"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from './NavLink'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import MenuOverlay from './MenuOverlay';


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
  <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100 px-10'>
    <div className='flex flex-wrap item-center justify-between mx-auto  py-8 pr-2'>
       <Link href= {"/"} className= 'text-lg md:text-xl text-white font-semibold ml-2'>LOGO</Link>
       <div className=' mobile-menu block md:hidden'>
        {
            !navbarOpen ? (
                    <button onClick={()=>setNavOpen(true)} className='flex items-center py-3 px-2 text-slate-200 border rounded bordre-slate-200 hover:text-white hover-border-white'>
                    <GiHamburgerMenu className="h-5 w-5"/>
                    </button>
            ):(
            <button onClick={()=>setNavOpen(false)}  className='flex items-center py-3 px-2 text-slate-200 border rounded border-slate-200 hover:text-white hover-border-white'>
            <IoMdClose className="h-5 w-5" />
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
    {navbarOpen ? <MenuOverlay links={navLinks} /> : null}

  </nav>
  )
}

export default Navbar