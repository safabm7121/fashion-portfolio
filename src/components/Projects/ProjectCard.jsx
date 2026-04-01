import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
}

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  // Check if mobile
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

  return (
    <Link to={`/project/${project.slug}`}>
      <motion.div
        ref={ref}
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="group relative cursor-pointer interactive block"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden aspect-[3/4]">
          <motion.img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            animate={{
              scale: isHovered ? 1.08 : 1,
            }}
            transition={{ duration: 0.6, ease: [0.2, 0.65, 0.3, 0.9] }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Title overlay - appears on hover (desktop) OR when in view (mobile) */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ 
              y: (isMobile && isInView) ? 0 : (isHovered ? 0 : 50),
              opacity: (isMobile && isInView) ? 1 : (isHovered ? 1 : 0)
            }}
            transition={{ duration: 0.4 }}
            className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white"
          >
            <span className="text-white/60 text-[10px] md:text-xs tracking-wider uppercase border-l-2 border-white/40 pl-2">
              {project.category}
            </span>
            <h3 className="text-base md:text-xl font-bold mt-1 md:mt-2 font-display break-words">
              {project.title}
            </h3>
            <p className="text-xs md:text-sm text-gray-400 mt-1 line-clamp-2 hidden md:block">
              {project.description}
            </p>
            <span className="inline-block mt-2 md:mt-3 text-[10px] md:text-xs text-white/60">
              {project.year}
            </span>
          </motion.div>
        </div>
      </motion.div>
    </Link>
  )
}

export default ProjectCard