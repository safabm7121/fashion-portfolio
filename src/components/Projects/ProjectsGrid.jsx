import React from 'react'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import projectsData from '../../../db.json'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

const ProjectsGrid = () => {
  const projects = projectsData.projects

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-background"> {/* Removed relative z-20 */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-white/60 text-xs md:text-sm tracking-[0.3em] uppercase mb-3 md:mb-4 block border-l-2 border-white/40 pl-3 md:pl-4 mx-auto w-fit">
            Featured Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-4 md:mb-6">
            Projects
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto px-4">
            A selection of my work spanning couture commissions, theatrical costumes,
            and commercial collections. Each project tells a unique story.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsGrid