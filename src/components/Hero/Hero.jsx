import React from 'react'
import { motion } from 'framer-motion'

const Hero = ({ scrollToProjects }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  }

  return (
    <section className="relative h-screen w-full overflow-hidden bg-background">
      {/* Animated Scan Line */}
      <motion.div 
        className="absolute inset-0 pointer-events-none z-20"
        animate={{ y: ['-100%', '100%'] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      >
        <div className="h-px w-full bg-white/20 shadow-[0_0_10px_rgba(255,255,255,0.2)]" />
      </motion.div>
      
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-white/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.div variants={itemVariants}>
            <span className="text-white/60 text-sm tracking-[0.3em] uppercase mb-4 block border-l-2 border-white/40 pl-4 mx-auto w-fit">
              FASHION DESIGNER
            </span>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold mb-6">
              <span className="text-gradient-white">SAFA</span>
              <br />
              <span className="text-white">BEN MILED</span>
            </h1>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
              ESMOD-trained designer specializing in womenswear, menswear, and costume design.
              Blending avant-garde aesthetics with technical craftsmanship.
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToProjects}
              className="group relative px-8 py-4 border-2 border-white/60 overflow-hidden interactive bg-transparent"
            >
              <span className="relative z-10 font-medium tracking-wider text-white group-hover:text-black transition-colors duration-500">
                EXPLORE PROJECTS
              </span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </button>
            
            <a 
              href="https://www.voidstonestudio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 border-2 border-white/20 overflow-hidden interactive bg-transparent"
            >
              <span className="relative z-10 font-medium tracking-wider text-white/80 group-hover:text-black transition-colors duration-500">
                VOIDSTONE STUDIO
              </span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-px h-16 bg-white/30" />
        <div className="w-px h-4 bg-white absolute bottom-0 left-0" />
      </motion.div>
    </section>
  )
}

export default Hero