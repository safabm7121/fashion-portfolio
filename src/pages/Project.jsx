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

  // Function to determine file type from URL
  const getFileType = (url) => {
    if (!url) return 'unknown'
    const extension = url.split('.').pop()?.toLowerCase()
    
    if (['jpg', 'jpeg', 'png', 'webp', 'avif', 'gif', 'svg'].includes(extension)) {
      return 'image'
    }
    if (['mp4', 'webm', 'mov', 'avi', 'mkv'].includes(extension)) {
      return 'video'
    }
    if (['glb', 'gltf', 'obj', 'fbx', 'usdz', 'stl', '3ds', 'dae'].includes(extension)) {
      return 'model3d'
    }
    if (['mp3', 'wav', 'ogg', 'm4a'].includes(extension)) {
      return 'audio'
    }
    if (['pdf'].includes(extension)) {
      return 'pdf'
    }
    return 'unknown'
  }

  const renderGalleryItem = (item, index) => {
    const isAnyVideo = item.url && (
      item.url.includes('.mp4') ||
      item.url.includes('.webm') ||
      item.url.includes('.mov') ||
      item.url.includes('.avi') ||
      item.url.includes('youtube.com') ||
      item.url.includes('youtu.be') ||
      item.url.includes('vimeo.com') ||
      item.url.includes('drive.google.com') ||
      item.url.includes('dropbox.com') ||
      item.url.includes('cloudinary.com') ||
      item.url.includes('screenpal.com') ||
      item.url.includes('streamable.com') ||
      (item.type === 'video')
    );
    
    if (isAnyVideo) {
      const isDirectVideo = item.url.match(/\.(mp4|webm|mov|avi)(\?|$)/i);
      
      return (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: Math.min(index * 0.1, 0.5) }}
          className="space-y-3 md:space-y-4"
        >
          <div className="relative z-0">
            {isDirectVideo ? (
              <video 
                src={item.url}
                controls
                className="w-full rounded-lg"
                poster={item.poster}
              />
            ) : (
              <iframe
                src={item.url}
                className="w-full aspect-video rounded-lg"
                allowFullScreen
                title={item.caption || 'Video'}
              />
            )}
          </div>
          {item.caption && (
            <p className="text-gray-500 text-xs md:text-sm text-center tracking-wide mt-3">
              {item.caption}
            </p>
          )}
        </motion.div>
      );
    }
    
    const fileType = getFileType(item.url)
    
    switch (fileType) {
      case 'image':
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: Math.min(index * 0.1, 0.5) }}
            className="space-y-3 md:space-y-4"
          >
            <div className="relative z-0">
              <img 
                src={item.url}
                alt={item.caption}
                className="w-full h-auto object-cover cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => window.open(item.url, '_blank')}
              />
            </div>
            {item.caption && (
              <p className="text-gray-500 text-xs md:text-sm text-center tracking-wide relative z-10">
                {item.caption}
              </p>
            )}
          </motion.div>
        )
        
      case 'model3d':
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: Math.min(index * 0.1, 0.5) }}
            className="space-y-3 md:space-y-4"
          >
            <div className="relative z-0 bg-black/40 rounded-lg p-8 text-center border border-white/10">
              <div className="mb-4">
                <svg className="w-16 h-16 mx-auto text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <p className="text-white/60 text-sm mb-4">3D Model Available</p>
              <a 
                href={item.url}
                download
                className="inline-block px-6 py-2 border border-white/40 hover:border-white/80 hover:bg-white/10 transition-all duration-300 text-sm"
              >
                Download 3D Model ({item.url.split('.').pop()?.toUpperCase()})
              </a>
            </div>
            {item.caption && (
              <p className="text-gray-500 text-xs md:text-sm text-center tracking-wide">
                {item.caption}
              </p>
            )}
          </motion.div>
        )
        
      default:
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: Math.min(index * 0.1, 0.5) }}
            className="space-y-3 md:space-y-4"
          >
            <div className="relative z-0 bg-black/40 rounded-lg p-8 text-center">
              <a 
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>Download File: {item.url.split('/').pop()}</span>
              </a>
            </div>
            {item.caption && (
              <p className="text-gray-500 text-xs md:text-sm text-center tracking-wide">
                {item.caption}
              </p>
            )}
          </motion.div>
        )
    }
  }

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
      <div className="fixed top-0 left-0 right-0 z-40 p-4 md:p-6 bg-black/90 backdrop-blur-sm border-b border-white/20">
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

      {/* Project Content */}
      <div className="pt-20 md:pt-24 pb-12 md:pb-16 px-4 md:px-8">
        
        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto mb-8 md:mb-12 relative z-0"
        >
          <img 
            src={project.coverImage} 
            alt={project.title}
            className="w-full h-[40vh] md:h-[60vh] object-cover grayscale"
          />
        </motion.div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Project Header */}
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
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-display font-bold mb-4 md:mb-6 break-words text-white">
              {project.title}
            </h1>
            <p className="text-gray-400 text-sm md:text-lg max-w-3xl leading-relaxed">
              {project.fullDescription}
            </p>
          </motion.div>

          {/* Project Details Grid */}
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

          {/* Project Gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl font-display mb-6 md:mb-8 border-b border-white/20 pb-3 md:pb-4 relative z-10 text-white">
                PROJECT GALLERY
              </h2>
              <div className="space-y-8 md:space-y-12">
                {project.gallery.map((item, index) => renderGalleryItem(item, index))}
              </div>
            </div>
          )}

          {/* Behind the Scenes */}
          {project.behindTheScenes && (
            <div className="mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl font-display mb-6 md:mb-8 border-b border-white/20 pb-3 md:pb-4 relative z-10 text-white">
                BEHIND THE SCENES
              </h2>
              
              {project.behindTheScenes.video && (
                <div className="mb-8 md:mb-12">
                  <div className="relative z-0">
                    <video 
                      src={project.behindTheScenes.video.url}
                      controls
                      className="w-full rounded-lg"
                      poster={project.behindTheScenes.video.poster}
                    />
                  </div>
                  {project.behindTheScenes.video.caption && (
                    <p className="text-gray-500 text-xs md:text-sm text-center tracking-wide mt-3">
                      {project.behindTheScenes.video.caption}
                    </p>
                  )}
                </div>
              )}
              
              {project.behindTheScenes.images && project.behindTheScenes.images.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                  {project.behindTheScenes.images.map((image, idx) => {
                    const fileType = getFileType(image.url)
                    return (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                        className="space-y-2"
                      >
                        <div className="relative z-0 overflow-hidden rounded-lg bg-black/20">
                          {fileType === 'video' ? (
                            <video 
                              src={image.url}
                              controls
                              className="w-full h-auto"
                            />
                          ) : fileType === 'model3d' ? (
                            <div className="p-4 text-center">
                              <p className="text-white/60 text-xs">3D Model</p>
                              <a href={image.url} download className="text-white/40 text-xs mt-2 inline-block">Download</a>
                            </div>
                          ) : (
                            <img 
                              src={image.url}
                              alt={image.caption}
                              className="w-full h-auto object-cover cursor-pointer hover:scale-105 transition-transform duration-500"
                              onClick={() => window.open(image.url, '_blank')}
                            />
                          )}
                        </div>
                        {image.caption && (
                          <p className="text-gray-500 text-xs text-center tracking-wide">
                            {image.caption}
                          </p>
                        )}
                      </motion.div>
                    )
                  })}
                </div>
              )}
            </div>
          )}

          {/* Contact CTA */}
          <div className="border-t border-white/20 pt-8 md:pt-12 text-center relative z-10">
            <h3 className="text-xl md:text-2xl font-display mb-3 md:mb-4 text-white">Interested in this project?</h3>
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