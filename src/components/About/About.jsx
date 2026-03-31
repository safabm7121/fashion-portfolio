import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  const stats = [
    { value: "50+", label: "Collections" },
    { value: "15+", label: "Awards" },
    { value: "30+", label: "Publications" },
    { value: "20+", label: "Collaborations" },
  ]

  return (
    <section className="py-24 px-4 md:px-8 lg:px-16 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&auto=format"
              alt="Designer portrait"
              className="rounded-none w-full h-auto grayscale"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/5 rounded-full blur-3xl animate-pulse" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-white/60 text-sm tracking-[0.3em] uppercase mb-4 block border-l-2 border-white/40 pl-4">
              About
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Crafting the Future of Fashion
            </h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              As a designer and developer, I bridge the gap between traditional 
              craftsmanship and digital innovation. Each piece is conceived with 
              meticulous attention to detail, blending avant-garde aesthetics with 
              wearable functionality.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              My work has been featured in Vogue, Harper's Bazaar, and exhibited 
              at Paris Fashion Week. I believe fashion is not just what you wear—it's 
              a statement, a conversation, and an art form that transcends boundaries.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <button className="group relative px-8 py-3 border border-white/40 overflow-hidden interactive">
              <span className="relative z-10 font-medium tracking-wider text-white group-hover:text-black transition-colors duration-500">
                READ FULL STORY
              </span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About