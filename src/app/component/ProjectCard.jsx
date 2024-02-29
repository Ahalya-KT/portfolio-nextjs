import React from 'react'

const ProjectCard = ({imgUrl,title,description}) => {
    
  return (
    <div>
        <div className='h-52 md:h-72 rounded-t-xl relative'   style={{ background: `url(${imgUrl})`, backgroundSize: "cover",  }}>

            <div className='overlay absolute top-0 left-0 w-full h-full bg-[#181818]'>

            </div>
        
        </div>

        <div className='text-white  rounded-b-xl bg-[#181818] py-6 px-6'>
            <h5 className='text-xl font-semibold mb-2'>{title}</h5>
            <p className='text-[#ADB7BE]'>{description}</p>
        </div>
       
    </div>
  )
}

export default ProjectCard