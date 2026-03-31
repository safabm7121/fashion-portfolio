import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
}

const CollectionItem = ({ collection }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link to={`/project/${collection.slug}`}>
      <motion.div
        variants={itemVariants}
        className="group relative cursor-pointer interactive"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden aspect-[3/4]">
          <motion.img
            src={collection.image}
            alt={collection.title}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            animate={{
              scale: isHovered ? 1.08 : 1,
            }}
            transition={{ duration: 0.6, ease: [0.2, 0.65, 0.3, 0.9] }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{
              y: isHovered ? 0 : 50,
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.4 }}
            className="absolute bottom-0 left-0 right-0 p-6 text-white"
          >
            <span className="text-white/60 text-xs tracking-wider uppercase border-l-2 border-white/40 pl-2">
              {collection.category}
            </span>
            <h3 className="text-xl font-bold mt-2 font-display">{collection.title}</h3>
            <p className="text-sm text-gray-400 mt-1 line-clamp-2">{collection.description}</p>
            <span className="inline-block mt-3 text-xs text-white/60">{collection.year}</span>
          </motion.div>
        </div>
      </motion.div>
    </Link>
  )
}

export default CollectionItem