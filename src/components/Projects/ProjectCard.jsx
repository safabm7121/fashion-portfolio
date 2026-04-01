import React, { useState, useRef, useEffect } from 'react'
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
  const [isActive, setIsActive] = useState(false) // Changed from isHovered
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.5 }) // once: false so it triggers when scrolling in AND out

  // Check if mobile
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

  // Update active state based on scroll position on mobile
  useEffect(() => {
    if (isMobile) {
      setIsActive(isInView)
    }
  }, [isInView, isMobile])

  return (
    <Link to={`/project/${project.slug}`}>
      <motion.div
        ref={ref}
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="group relative cursor-pointer interactive block"
        onMouseEnter={() => !isMobile && setIsActive(true)}
        onMouseLeave={() => !isMobile && setIsActive(false)}
      >
        <div className="relative overflow-hidden aspect-[3/4]">
          <motion.img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover transition-all duration-700"
            animate={{
              scale: isActive ? 1.08 : 1,
              filter: isActive ? 'grayscale(0%)' : 'grayscale(100%)',
            }}
            transition={{ duration: 0.6, ease: [0.2, 0.65, 0.3, 0.9] }}
          />
          
          {/* Gradient overlay - appears when active */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: isActive ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          />
          
          {/* Title overlay - slides up when active */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ 
              y: isActive ? 0 : 50,
              opacity: isActive ? 1 : 0
            }}
            transition={{ duration: 0.4 }}
            className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white z-10"
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