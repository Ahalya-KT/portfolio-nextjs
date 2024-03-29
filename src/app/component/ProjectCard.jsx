import React from 'react'
import Image from 'next/image';
// import { IoEye } from "react-icons/io5";
import { HiCodeBracket } from "react-icons/hi2";
import { IoEye } from "react-icons/io5";
import Link from 'next/link';

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {

  return (
    <div className='pt-16'>
      <div className='h-52 md:h-72 rounded-t-xl relative group' style={{ background: `url(${imgUrl})`, backgroundSize: "cover", }}>

        <div className='overlay flex items-center justify-center absolute gap-3 top-0 left-0  w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 '>

          <Link href={gitUrl} className='h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white'>
            <HiCodeBracket className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>

          <Link href={previewUrl} className='h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white'>
            <IoEye className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>

        </div>

      </div>
      <div className='text-white mt-2 rounded-b-xl py-6 px-6'>
        {/* <Image src={imgUrl} alt={title} width={600} height={300} /> */}
        <h5 className='text-xl font-semibold mb-2'>{title}</h5>
        <p className='text-[#ADB7BE]'>{description}</p>

      </div>



    </div>
  )
}

export default ProjectCard