import React, { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import Hero from '../components/Hero/Hero'
import ProjectsGrid from '../components/Projects/ProjectsGrid'
import ExperienceSection from '../components/Experience/ExperienceSection'
import Contact from '../components/Contact/Contact'

function Home() {
  const projectsRef = useRef(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects')
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <main>
        <Hero scrollToProjects={scrollToProjects} />
        {/* Projects Section */}
        <div id="projects" ref={projectsRef}>
          <ProjectsGrid />
        </div>
        {/* Experience Section (contains Who I Am) */}
        <div id="experience">
          <ExperienceSection />
        </div>
        
        
        
        {/* Contact Section */}
        <div id="contact">
          <Contact />
        </div>
      </main>
    </>
  )
}

export default Home