import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const Experience = () => {
  const [expandedId, setExpandedId] = useState(null)

  const experiences = [
    {
      id: 1,
      title: "Founder & Creative Director",
      company: "Voidstone Studio (INORPI-registered)",
      period: "2024 – Present",
      location: "Tunis, Tunisia",
      description: "Independent fashion brand specializing in avant-garde, alternative, and gothic aesthetics. Full creative direction from concept to production. Currently developing an e-commerce platform using microservice architecture.",
      responsibilities: [
        "Creative direction for all collections and brand identity",
        "Design and development of avant-garde fashion pieces",
        "E-commerce platform development using microservice architecture",
        "Brand strategy and market positioning",
        "Supplier and manufacturer relationship management"
      ],
      achievements: [
        "Successfully launched 5 collections",
        "Built brand presence across social media (10k+ followers)",
        "Developed custom e-commerce platform from scratch"
      ],
      images: [
        "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800",
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800",
        "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800"
      ],
      skills: ["Creative Direction", "Brand Strategy", "Full Stack Dev", "Collection Development"]
    },
    {
      id: 2,
      title: "Creative Designer",
      company: "Ofla Turki",
      period: "Jan 2024 – Jun 2024",
      location: "Tunis, Tunisia",
      description: "Led end-to-end development of multiple top-selling collections. Oversaw design process from concept to final production, managing cross-functional teams and supplier relationships.",
      responsibilities: [
        "Led design team for seasonal collections",
        "Managed supplier relationships and production timelines",
        "Created technical specifications and production sheets",
        "Quality control and final product approval"
      ],
      achievements: [
        "Increased collection sales by 40%",
        "Reduced production costs by 25%",
        "Successfully launched 3 best-selling collections"
      ],
      images: [
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800",
        "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800"
      ],
      skills: ["Team Leadership", "Production Management", "Technical Design", "Quality Control"]
    },
    {
      id: 3,
      title: "Illustrator & Concept Designer",
      company: "La Flamme",
      period: "Aug 2024 – Feb 2025",
      location: "Remote",
      description: "Created concept illustrations and developed visual identity for brand collections. Collaborated on marketing materials, lookbooks, and brand storytelling.",
      responsibilities: [
        "Created original concept illustrations for collections",
        "Developed brand visual identity guidelines",
        "Designed marketing materials and lookbooks",
        "Collaborated with marketing team on brand storytelling"
      ],
      achievements: [
        "Created illustrations for 4 successful campaigns",
        "Brand recognition increased by 60%",
        "Featured in industry publications"
      ],
      images: [
        "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=800",
        "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800"
      ],
      skills: ["Illustration", "Brand Identity", "Adobe Creative Suite", "Concept Development"]
    },
    {
      id: 4,
      title: "Freelance Costume Designer",
      company: "Various Projects",
      period: "2025 – Present",
      location: "Tunis, Tunisia",
      description: "Custom costume design for theatrical productions, drag performances, and private commissions. First Prize winner - National Drag Competition.",
      responsibilities: [
        "Custom costume design for diverse clients",
        "Theatrical and performance wear creation",
        "Fabric sourcing and material selection",
        "Fittings and alterations"
      ],
      achievements: [
        "First Prize winner - National Drag Competition",
        "Designed costumes for 15+ performances",
        "Featured in local theater productions"
      ],
      images: [
        "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800",
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800"
      ],
      skills: ["Costume Design", "Pattern Making", "Fabric Sourcing", "Performance Wear"]
    }
  ]

  return (
    <div className="min-h-screen bg-black pt-24 pb-16 px-4 md:px-8">
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
          
          <h1 className="text-white text-sm md:text-base tracking-wider">EXPERIENCE</h1>
          
          <a 
            href="https://www.voidstonestudio.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white text-xs md:text-sm tracking-wider transition-colors"
          >
            VOIDSTONE.STUDIO
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto">
        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 text-white">
            Professional Journey
          </h1>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
            A deep dive into my professional experience, achievements, and creative projects
          </p>
        </motion.div>

        {/* Experience List */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-lg overflow-hidden"
            >
              {/* Header */}
              <div 
                className="p-6 cursor-pointer hover:bg-white/10 transition-colors"
                onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
              >
                <div className="flex flex-wrap justify-between items-start gap-4">
                  <div className="flex-1">
                    <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
                      {exp.title}
                    </h2>
                    <p className="text-white/60 text-sm md:text-base">{exp.company}</p>
                    <div className="flex flex-wrap gap-4 mt-2">
                      <span className="text-white/40 text-xs">{exp.period}</span>
                      <span className="text-white/40 text-xs">{exp.location}</span>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedId === exp.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </div>
              </div>

              {/* Expanded Content */}
              <AnimatePresence>
                {expandedId === exp.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 border-t border-white/10">
                      {/* Images Grid */}
                      {exp.images && exp.images.length > 0 && (
                        <div className="mb-6">
                          <h3 className="text-white font-bold mb-3">Gallery</h3>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {exp.images.map((img, idx) => (
                              <img 
                                key={idx}
                                src={img}
                                alt={`${exp.title} ${idx + 1}`}
                                className="w-full h-32 object-cover rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
                                onClick={() => window.open(img, '_blank')}
                              />
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Description */}
                      <div className="mb-6">
                        <h3 className="text-white font-bold mb-2">Overview</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{exp.description}</p>
                      </div>

                      {/* Responsibilities */}
                      <div className="mb-6">
                        <h3 className="text-white font-bold mb-2">Key Responsibilities</h3>
                        <ul className="list-disc list-inside space-y-1">
                          {exp.responsibilities.map((resp, idx) => (
                            <li key={idx} className="text-gray-400 text-sm">{resp}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h3 className="text-white font-bold mb-2">Key Achievements</h3>
                        <ul className="list-disc list-inside space-y-1">
                          {exp.achievements.map((ach, idx) => (
                            <li key={idx} className="text-gray-400 text-sm">{ach}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Skills */}
                      <div>
                        <h3 className="text-white font-bold mb-2">Skills Applied</h3>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, idx) => (
                            <span key={idx} className="px-3 py-1 bg-white/10 border border-white/20 text-white/80 text-xs rounded-full">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

     
      </div>
    </div>
  )
}

export default Experience