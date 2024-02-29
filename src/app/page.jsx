import Image from 'next/image'
import HeroSection from './component/HeroSection'
import { Container } from 'postcss'
import Navbar from './component/Navbar'
import AboutSection from './component/AboutSection'
import ProjectSection from './component/ProjectSection'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <Navbar/>
    <div className="container mx-auto px-4 py-12 mt-24">
    <HeroSection/>
    <AboutSection/>
    <ProjectSection/>
    </div>
    
    </main>
  )
}
