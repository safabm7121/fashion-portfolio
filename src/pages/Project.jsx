import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import projectsData from '../../db.json'

const Project = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [project, setProject] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const foundProject = projectsData.projects.find(p => p.slug === slug)
    if (foundProject) {
      setProject(foundProject)
      setLoading(false)
      window.scrollTo(0, 0)
    } else {
      navigate('/')
    }
  }, [slug, navigate])

  if (loading) {
    return (
      <div className="fixed inset-0 bg-background flex items-center justify-center">
        <div className="text-white/60 animate-pulse text-2xl">LOADING...</div>
      </div>
    )
  }

  return (
    <div className="bg-background min-h-screen">
      {/* Header - responsive padding */}
      <div className="fixed top-0 left-0 right-0 z-50 p-4 md:p-6 bg-black/90 backdrop-blur-sm border-b border-white/20">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-4">
          <Link 
            to="/" 
            className="inline-flex items-center gap-1 md:gap-2 text-white/80 hover:text-white transition-colors group interactive text-sm md:text-base"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            BACK TO HOME
          </Link>
          
          <a 
            href="https://www.voidstonestudio.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white text-xs md:text-sm tracking-wider transition-colors truncate max-w-[120px] md:max-w-none"
          >
            VOIDSTONE.STUDIO
          </a>
        </div>
      </div>

      {/* Project Content - responsive spacing */}
      <div className="pt-20 md:pt-24 pb-12 md:pb-16 px-4 md:px-8">
        
        {/* Hero Image - responsive height */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto mb-8 md:mb-12"
        >
          <img 
            src={project.coverImage} 
            alt={project.title}
            className="w-full h-[40vh] md:h-[60vh] object-cover grayscale"
          />
        </motion.div>

        <div className="max-w-7xl mx-auto">
          {/* Project Header - responsive text sizes */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 md:mb-12"
          >
            <div className="flex flex-wrap gap-3 md:gap-4 items-center mb-3 md:mb-4">
              <span className="text-white/60 text-xs md:text-sm tracking-[0.3em] uppercase border-l-2 border-white/40 pl-3 md:pl-4">
                {project.category}
              </span>
              <span className="text-white/40 text-xs md:text-sm">{project.year}</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-display font-bold mb-4 md:mb-6 break-words">
              {project.title}
            </h1>
            <p className="text-gray-400 text-sm md:text-lg max-w-3xl leading-relaxed">
              {project.fullDescription}
            </p>
          </motion.div>

          {/* Project Details Grid - responsive columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mb-12 md:mb-16">
            <div className="bg-white/5 p-4 md:p-6 border border-white/10">
              <h3 className="text-white/60 text-xs md:text-sm tracking-wider mb-2 md:mb-4">CLIENT</h3>
              <p className="text-white font-bold text-sm md:text-base break-words">{project.client}</p>
            </div>
            <div className="bg-white/5 p-4 md:p-6 border border-white/10">
              <h3 className="text-white/60 text-xs md:text-sm tracking-wider mb-2 md:mb-4">ROLE</h3>
              <p className="text-white font-bold text-sm md:text-base break-words">{project.role}</p>
            </div>
            <div className="bg-white/5 p-4 md:p-6 border border-white/10 sm:col-span-2 md:col-span-1">
              <h3 className="text-white/60 text-xs md:text-sm tracking-wider mb-2 md:mb-4">MATERIALS</h3>
              <p className="text-white text-sm md:text-base break-words">{project.materials.join(' • ')}</p>
            </div>
          </div>

          {/* Gallery - responsive spacing */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-display mb-6 md:mb-8 border-b border-white/20 pb-3 md:pb-4">
              PROJECT GALLERY
            </h2>
            <div className="space-y-8 md:space-y-12">
              {project.gallery.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-3 md:space-y-4"
                >
                  {item.type === 'video' ? (
                    <video 
                      src={item.url}
                      controls
                      className="w-full rounded-none"
                      poster={item.poster}
                    />
                  ) : item.type === 'gif' ? (
                    <img 
                      src={item.url}
                      alt={item.caption}
                      className="w-full"
                    />
                  ) : (
                    <img 
                      src={item.url}
                      alt={item.caption}
                      className="w-full cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={() => window.open(item.url, '_blank')}
                    />
                  )}
                  {item.caption && (
                    <p className="text-gray-500 text-xs md:text-sm text-center tracking-wide">
                      {item.caption}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact CTA - responsive padding */}
          <div className="border-t border-white/20 pt-8 md:pt-12 text-center">
            <h3 className="text-xl md:text-2xl font-display mb-3 md:mb-4">Interested in this project?</h3>
            <p className="text-gray-400 text-sm md:text-base mb-6 md:mb-8">Let's collaborate on your next creative endeavor</p>
            <Link to="/#contact">
              <button className="px-8 md:px-12 py-3 md:py-4 bg-white text-black font-bold hover:bg-white/90 transition-colors interactive text-sm md:text-base">
                INQUIRE ABOUT THIS PROJECT
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project