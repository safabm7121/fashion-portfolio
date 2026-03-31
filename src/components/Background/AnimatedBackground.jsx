import React, { useEffect, useRef } from 'react'

const AnimatedBackground = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationId
    let time = 0
    
    // Organic blur-like particles (soft, misty)
    let particles = []
    
    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      
      // Create soft, blurry particles (like flowing mist)
      particles = []
      const particleCount = Math.min(300, Math.floor(window.innerWidth * 0.25))
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 8 + 3, // Larger, softer particles
          opacity: Math.random() * 0.08 + 0.02, // Very subtle
          speedX: (Math.random() - 0.5) * 0.03,
          speedY: (Math.random() - 0.5) * 0.02,
          // Organic wave motion
          waveX: Math.random() * Math.PI * 2,
          waveY: Math.random() * Math.PI * 2,
          waveSpeed: Math.random() * 0.01 + 0.005
        })
      }
    }

    const updateParticles = () => {
      particles.forEach(p => {
        // Organic flowing movement
        p.waveX += p.waveSpeed
        p.waveY += p.waveSpeed * 0.8
        
        const offsetX = Math.sin(p.waveX) * 0.2
        const offsetY = Math.cos(p.waveY) * 0.2
        
        p.x += p.speedX + offsetX
        p.y += p.speedY + offsetY
        
        // Wrap around with soft edge
        if (p.x < -200) p.x = canvas.width + 200
        if (p.x > canvas.width + 200) p.x = -200
        if (p.y < -200) p.y = canvas.height + 200
        if (p.y > canvas.height + 200) p.y = -200
      })
    }

    const draw = () => {
      if (!ctx) return
      
      // Dark background with very slow fade for trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.98)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      // Draw soft, blurry particles (like motion blur)
      particles.forEach(p => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        
        // Create soft gradient for blur effect
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius)
        gradient.addColorStop(0, `rgba(255, 255, 255, ${p.opacity * 1.5})`)
        gradient.addColorStop(1, `rgba(255, 255, 255, 0)`)
        
        ctx.fillStyle = gradient
        ctx.fill()
      })
      
      // Add flowing light trails (soft, organic)
      for (let i = 0; i < 5; i++) {
        const trailX = canvas.width * (0.2 + 0.6 * Math.sin(time * 0.05 + i))
        const trailY = canvas.height * (0.3 + 0.4 * Math.cos(time * 0.04 + i * 2))
        const gradient = ctx.createRadialGradient(trailX, trailY, 0, trailX, trailY, 180)
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0.02)')
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      }
      
      updateParticles()
      time += 0.016
      animationId = requestAnimationFrame(draw)
    }

    resize()
    draw()

    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ 
        opacity: 0.7,
        filter: 'blur(8px) contrast(1.2) brightness(0.85)'
      }}
    />
  )
}

export default AnimatedBackground