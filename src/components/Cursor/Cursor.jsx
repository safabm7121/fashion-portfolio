import React, { useEffect, useState, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const Cursor = () => {
  const [trail, setTrail] = useState([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 })
  const [centerPosition, setCenterPosition] = useState({ x: 0, y: 0 })
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)
  const cursorXSpring = useSpring(cursorX, { damping: 20, stiffness: 400 })
  const cursorYSpring = useSpring(cursorY, { damping: 20, stiffness: 400 })
  
  // Words for text trail
  const trailWords = ["✦", "VIEW", "CLICK", "DRAG", "SCROLL", "ENTER", "EXPLORE", "FASHION", "DESIGN", "✦"]
  
  // Get center position on mount and resize
  useEffect(() => {
    const updateCenter = () => {
      setCenterPosition({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2
      })
    }
    updateCenter()
    window.addEventListener('resize', updateCenter)
    return () => window.removeEventListener('resize', updateCenter)
  }, [])
  
  useEffect(() => {
    let lastTime = 0
    const interval = 60
    
    const moveCursor = (e) => {
      const now = Date.now()
      const mouseX = e.clientX
      const mouseY = e.clientY
      
      cursorX.set(mouseX)
      cursorY.set(mouseY)
      setMousePosition({ x: mouseX, y: mouseY })
      
      // Calculate eye movement - eyes follow cursor direction relative to center
      const dx = (mouseX - centerPosition.x) / 50
      const dy = (mouseY - centerPosition.y) / 50
      const eyeX = Math.max(-15, Math.min(15, dx))
      const eyeY = Math.max(-12, Math.min(12, dy))
      setEyePosition({ x: eyeX, y: eyeY })
      
      // Add trail particle at intervals
      if (now - lastTime > interval) {
        const randomWord = trailWords[Math.floor(Math.random() * trailWords.length)]
        setTrail(prev => [...prev.slice(-25), { 
          x: mouseX, 
          y: mouseY, 
          word: randomWord,
          id: now,
          opacity: 0.9
        }])
        lastTime = now
      }
    }
    
    window.addEventListener('mousemove', moveCursor)
    
    return () => {
      window.removeEventListener('mousemove', moveCursor)
    }
  }, [centerPosition, cursorX, cursorY])
  
  // Animate trail particles
  useEffect(() => {
    const interval = setInterval(() => {
      setTrail(prev => prev.map(p => ({ ...p, opacity: p.opacity - 0.04 })).filter(p => p.opacity > 0))
    }, 40)
    
    return () => clearInterval(interval)
  }, [])
  
  return (
    <>
      {/* Text Trail - stays on top */}
      {trail.map((point) => (
        <motion.div
          key={point.id}
          className="fixed pointer-events-none z-50 hidden md:block"
          style={{
            left: point.x,
            top: point.y,
            opacity: point.opacity,
            transform: 'translate(-50%, -50%)',
            whiteSpace: 'nowrap'
          }}
          initial={{ scale: 0.7, y: 0 }}
          animate={{ scale: 1, y: -15 }}
          transition={{ duration: 0.15 }}
        >
          <span className="text-white/70 text-[9px] tracking-wider font-mono">
            {point.word}
          </span>
        </motion.div>
      ))}
      
      {/* Fixed Eyes - z-10 so they appear OVER hero (which has lower z-index) but UNDER cards (which have higher z-index) */}
      <div 
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block pointer-events-none"
        style={{ pointerEvents: 'none' }}
      >
        <div className="relative w-20 h-20">
          {/* Face/Eye Background - subtle circle */}
          <div className="absolute inset-0 border border-white/20 rounded-full backdrop-blur-sm" />
          
          {/* Left Eye */}
          <div className="absolute top-1/3 left-1/4 w-5 h-5">
            <div className="w-full h-full bg-white/90 rounded-full" />
            <div 
              className="absolute w-2.5 h-2.5 bg-black rounded-full transition-all duration-150"
              style={{ 
                transform: `translate(${eyePosition.x}px, ${eyePosition.y}px)`,
                top: '5px',
                left: '5px'
              }}
            />
          </div>
          
          {/* Right Eye */}
          <div className="absolute top-1/3 right-1/4 w-5 h-5">
            <div className="w-full h-full bg-white/90 rounded-full" />
            <div 
              className="absolute w-2.5 h-2.5 bg-black rounded-full transition-all duration-150"
              style={{ 
                transform: `translate(${eyePosition.x}px, ${eyePosition.y}px)`,
                top: '5px',
                left: '5px'
              }}
            />
          </div>
          
          {/* Subtle mouth accent */}
          <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-4 h-1">
            <div className="w-full h-full border-b border-white/20 rounded-full" />
          </div>
        </div>
      </div>
      
      {/* Tiny precision dot for cursor - NO BOUNCE, follows instantly */}
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 pointer-events-none z-50 bg-white/60 rounded-full hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      />
    </>
  )
}

export default Cursor