import React from 'react'
import { motion } from 'framer-motion'
import AnimatedBackground from '../Background/AnimatedBackground'

const Hero = ({ scrollToProjects }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  }

  // Animated text like Cassidy Routh's scrolling playful text
  const scrollingText = "✦ FASHION DESIGNER ✦ FULL STACK DEVELOPER ✦ COSTUME DESIGNER ✦ JEWELRY DESIGNER ✦ "

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Soft motion background */}
      <AnimatedBackground />
      
      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40 z-5" />
      
      {/* Main content - FULLY VISIBLE */}
      <div className="relative z-10 h-full flex items-center px-6 md:px-12 lg:px-20">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left column: Name & Title */}
            <motion.div 
              className="lg:col-span-7 space-y-5"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants}>
                <div className="overflow-hidden">
                  <span className="text-white/50 text-sm tracking-[0.3em] uppercase font-mono inline-block">
                    Fashion Designer
                  </span>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="space-y-1">
                <div className="overflow-hidden">
                  <h1 className="text-7xl md:text-8xl lg:text-9xl font-display font-bold leading-[0.85] tracking-tight">
                    SAFA
                  </h1>
                </div>
                <div className="overflow-hidden">
                  <h1 className="text-7xl md:text-8xl lg:text-9xl font-display font-bold leading-[0.85] tracking-tight text-white/95">
                    BEN MILED
                  </h1>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="max-w-xl pt-3">
                <p className="text-gray-300 text-base md:text-lg leading-relaxed border-l-2 border-white/30 pl-5">
                  ESMOD-trained designer specializing in womenswear, menswear, and costume design. 
                  Blending avant-garde aesthetics with technical craftsmanship.
                </p>
              </motion.div>
            </motion.div>

            {/* Right column: Action buttons */}
            <motion.div 
              className="lg:col-span-5 flex flex-col items-start lg:items-end space-y-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.button 
                onClick={scrollToProjects}
                variants={itemVariants}
                className="group relative px-8 py-3 border-2 border-white/60 overflow-hidden interactive bg-transparent"
              >
                <span className="relative z-10 font-medium tracking-wider text-white group-hover:text-black transition-colors duration-500">
                  EXPLORE PROJECTS
                </span>
                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.button>
              
              <motion.a 
                href="https://www.voidstonestudio.com"
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                className="group relative px-8 py-3 border-2 border-white/30 overflow-hidden interactive bg-transparent"
              >
                <span className="relative z-10 font-medium tracking-wider text-white/90 group-hover:text-black transition-colors duration-500">
                  VOIDSTONE STUDIO
                </span>
                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Animated scrolling text bar (like Cassidy Routh's playful text) */}
      <div className="absolute bottom-20 left-0 right-0 overflow-hidden whitespace-nowrap z-20">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="inline-block"
        >
          <span className="text-white/30 text-xs tracking-[0.2em] uppercase font-mono">
            {scrollingText.repeat(3)}
          </span>
        </motion.div>
      </div>

      {/* Static Scroll Indicator (NO MOVEMENT) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-1">
          <span className="text-white/30 text-[9px] tracking-[0.2em] uppercase font-mono">
            SCROLL
          </span>
          <div className="w-px h-8 bg-white/30" />
        </div>
      </div>
    </section>
  )
}

export default Hero