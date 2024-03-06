import React from 'react'
import ProjectCard from './ProjectCard'


const projectsData = [
    {
      id: 1,
      title: "React Portfolio Website",
      description: "Project 1 description",
      image: "/images/1.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 2,
      title: "Potography Portfolio Website",
      description: "Project 2 description",
      image: "/images/2.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 3,
      title: "E-commerce Application",
      description: "Project 3 description",
      image: "/images/3.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 4,
      title: "Food Ordering Application",
      description: "Project 4 description",
      image: "/images/4.png",
      tag: ["All", "Mobile"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 5,
      title: "React Firebase Template",
      description: "Authentication and CRUD operations",
      image: "/images/5.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 6,
      title: "Full-stack Roadmap",
      description: "Project 5 description",
      image: "/images/6.png",
      tag: ["All", "Web"],
      gitUrl: "/",
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