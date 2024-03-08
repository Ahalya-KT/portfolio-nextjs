import React from 'react'
import ProjectCard from './ProjectCard'


const projectsData = [
    {
      id: 1,
      title: "OLX-Clone",
      description: "olx-clone build using React Js,Tailwind css",
      image: "/images/pic1.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/Ahalya-KT/OlxClone-react.git",
      previewUrl: "/",
    },
    {
      id: 2,
      title: "Ecommerce-Brand",
      description: "Ecommerce-brand  using React Js,Tailwind css ",
      image: "/images/pic2.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/Ahalya-KT/ecommerce-brands-React.git",
      previewUrl: "/",
    },
    {
      id: 3,
      title: "Portfolio",
      description: "personal Portfolio build using Next js,React js",
      image: "/images/pic3.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/Ahalya-KT/portfolio-nextjs.git",
      previewUrl: "/",
    },
    {
      id: 4,
      title: "Fashion Store",
      description: "Fashion Store build using React Js,Tailwind css",
      image: "/images/pic4.png",
      tag: ["All", "Mobile"],
      gitUrl: "https://github.com/Ahalya-KT/FashionStore-react.git",
      previewUrl: "/",
    },
    {
      id: 5,
      title: "Fundfolio",
      description: "Fundfolio website build using Html,CSS",
      image: "/images/pic5.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/Ahalya-KT/fundfolio.git",
      previewUrl: "/",
    },
    {
      id: 6,
      title: "Explore the world",
      description: "Travel page build using HTML,CSS",
      image: "/images/pic6.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/Ahalya-KT/travelpage.git",
      previewUrl: "/",
    },
  ];

const ProjectSection = () => {
  return (
    <>
    <div>
    <h2 className='text-center text-4xl font-bold text-white mt-7'>My Projects</h2>
    <div>
      <button>All</button>
      <button>Web</button>
    </div>
    <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {projectsData.map((project)=>(
            <ProjectCard
             key={project.id} 
             title={project.title} 
             description={project.description} 
             imgUrl={project.image}
             tags={project}
             gitUrl={project.gitUrl}
             previewUrl={project.previewUrl}
             />
        ))}
        </div>
    </div>
  
    </>
  )
}

export default ProjectSection