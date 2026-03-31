import React from 'react'
import { motion } from 'framer-motion'
import CollectionItem from './CollectionItem'
import { collections } from '../../data/collections'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

const CollectionGrid = () => {
  return (
    <section className="py-24 px-4 md:px-8 lg:px-16 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent text-sm tracking-[0.3em] uppercase mb-4 block">
            Featured Works
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            Latest Collections
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Each collection tells a unique story through innovative design, 
            premium materials, and meticulous craftsmanship.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {collections.map((collection) => (
            <CollectionItem key={collection.id} collection={collection} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default CollectionGrid