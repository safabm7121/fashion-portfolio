import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import projectsData from '../../db.json'
// No cursor import needed - it's in App.jsx

const Project = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [project, setProject] = useState(null)
  const [loading, setLoading] = useState(true)
  const [selectedImage, setSelectedImage] = useState(null)

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
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 p-6 bg-black/90 backdrop-blur-sm border-b border-white/20">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors group interactive"
          >
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            BACK TO HOME
          </Link>
          
          <a 
            href="https://www.voidstonestudio.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white text-sm tracking-wider transition-colors"
          >
            VOIDSTONE.STUDIO
          </a>
        </div>
      </div>

      {/* Project Content */}
      <div className="pt-24 pb-16 px-4 md:px-8">
        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto mb-12"
        >
          <img 
            src={project.coverImage} 
            alt={project.title}
            className="w-full h-[60vh] object-cover grayscale"
          />
        </motion.div>

        <div className="max-w-7xl mx-auto">
          {/* Project Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex flex-wrap gap-4 items-center mb-4">
              <span className="text-white/60 text-sm tracking-[0.3em] uppercase border-l-2 border-white/40 pl-4">
                {project.category}
              </span>
              <span className="text-white/40 text-sm">{project.year}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              {project.title}
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl leading-relaxed">
              {project.fullDescription}
            </p>
          </motion.div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/5 p-6 border border-white/10">
              <h3 className="text-white/60 text-sm tracking-wider mb-4">CLIENT</h3>
              <p className="text-white font-bold">{project.client}</p>
            </div>
            <div className="bg-white/5 p-6 border border-white/10">
              <h3 className="text-white/60 text-sm tracking-wider mb-4">ROLE</h3>
              <p className="text-white font-bold">{project.role}</p>
            </div>
            <div className="bg-white/5 p-6 border border-white/10">
              <h3 className="text-white/60 text-sm tracking-wider mb-4">MATERIALS</h3>
              <p className="text-white">{project.materials.join(' • ')}</p>
            </div>
          </div>

          {/* Gallery - Behance Style Scrollable */}
          <div className="mb-16">
            <h2 className="text-3xl font-display mb-8 border-b border-white/20 pb-4">
              PROJECT GALLERY
            </h2>
            <div className="space-y-12">
              {project.gallery.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-4"
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
                    <p className="text-gray-500 text-sm text-center tracking-wide">
                      {item.caption}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="border-t border-white/20 pt-12 text-center">
            <h3 className="text-2xl font-display mb-4">Interested in this project?</h3>
            <p className="text-gray-400 mb-8">Let's collaborate on your next creative endeavor</p>
            <Link to="/#contact">
              <button className="px-12 py-4 bg-white text-black font-bold hover:bg-white/90 transition-colors interactive">
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