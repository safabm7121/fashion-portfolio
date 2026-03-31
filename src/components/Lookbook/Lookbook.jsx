import React from 'react'
import { motion } from 'framer-motion'

const lookbookImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&auto=format",
    caption: "The Art of Layering",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&auto=format",
    caption: "Sculptural Silhouettes",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&auto=format",
    caption: "Texture Dialogues",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&auto=format",
    caption: "Monochromatic Stories",
  },
]

const Lookbook = () => {
  return (
    <section className="py-24 bg-secondary overflow-hidden">
      <div className="px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-accent text-sm tracking-[0.3em] uppercase mb-4 block">
            Editorial
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            Lookbook 2024
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A visual narrative exploring the intersection of fashion, art, 
            and contemporary culture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {lookbookImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group overflow-hidden rounded-2xl"
            >
              <img
                src={image.src}
                alt={image.caption}
                className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-white text-xl font-display">{image.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Lookbook