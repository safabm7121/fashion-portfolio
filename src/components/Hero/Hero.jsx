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

  const scrollingText = "✦ FASHION DESIGNER ✦ FULL STACK DEVELOPER ✦ COSTUME DESIGNER ✦ JEWELRY DESIGNER ✦ "

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Soft motion background */}
      <AnimatedBackground />
      
      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40 z-5" />
      
      {/* Main content - Adjusted positioning */}
      <div className="relative z-10 h-full flex items-center px-6 md:px-12 lg:px-20" style={{ paddingTop: '5vh', paddingBottom: '5vh' }}>
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Left column: Name & Title */}
            <motion.div 
              className="lg:col-span-6 space-y-4 text-center lg:text-left"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants}>
                <div className="overflow-hidden">
                  <span className="text-white/50 text-xs tracking-[0.3em] uppercase font-mono inline-block">
                    Fashion Designer / Full Stack Developer
                  </span>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="space-y-1">
                <div className="overflow-hidden">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[0.85] tracking-tight">
                    SAFA
                  </h1>
                </div>
                <div className="overflow-hidden">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[0.85] tracking-tight text-white/95">
                    BEN MILED
                  </h1>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="max-w-xl pt-2 mx-auto lg:mx-0">
                <p className="text-gray-300 text-xs md:text-sm leading-relaxed border-l-2 border-white/30 pl-4">
                  ESMOD-trained designer specializing in womenswear, menswear, and costume design. 
                  Blending avant-garde aesthetics with technical craftsmanship.
                </p>
              </motion.div>
              
              {/* Buttons */}
              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-3"
              >
                <motion.button 
                  onClick={scrollToProjects}
                  variants={itemVariants}
                  className="group relative px-5 py-2 border-2 border-white/60 overflow-hidden interactive bg-transparent text-xs"
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
                  className="group relative px-5 py-2 border-2 border-white/30 overflow-hidden interactive bg-transparent text-xs"
                >
                  <span className="relative z-10 font-medium tracking-wider text-white/90 group-hover:text-black transition-colors duration-500">
                    VOIDSTONE STUDIO
                  </span>
                  <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right column: GIF */}
            <motion.div 
              className="lg:col-span-6 flex justify-center items-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative w-full max-w-xs md:max-w-sm">
                <img 
                  src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXJkMHAyd3U4em02OWZqN3o0YzFicjdwazgyZzYxeDg1ejUwYjlhdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Q3kkMWLhrCPjhbjscB/giphy.gif"
                  alt="Fashion animation"
                  className="w-full h-auto rounded-lg opacity-80 hover:opacity-100 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-white/5 blur-xl rounded-full -z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Animated scrolling text bar - Moved UP slightly */}
      <div className="absolute bottom-16 left-0 right-0 overflow-hidden whitespace-nowrap z-20">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear", repeatType: "loop" }}
          className="inline-block"
        >
          <span className="text-white/40 text-[9px] tracking-[0.2em] uppercase font-mono">
            {scrollingText.repeat(3)}
          </span>
        </motion.div>
      </div>

      {/* Fluid Scroll Indicator - Moved DOWN */}
      <motion.div 
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 4, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", repeatType: "loop" }}
      >
        <div className="flex flex-col items-center gap-1">
          <span className="text-white/40 text-[8px] tracking-[0.2em] uppercase font-mono">
            SCROLL
          </span>
          <div className="w-px h-6 bg-white/40" />
        </div>
      </motion.div>

      {/* Credit - At very bottom */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 text-center whitespace-nowrap">
        <p className="text-white/20 text-[7px] tracking-wider font-mono">
          PORTFOLIO CRAFTED BY SAFA BEN MILED
        </p>
      </div>
    </section>
  )
}

export default Hero