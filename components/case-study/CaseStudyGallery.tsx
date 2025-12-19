'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { CaseStudyImage } from '@/lib/case-studies/nexspot'

interface CaseStudyGalleryProps {
  images: CaseStudyImage[]
}

export function CaseStudyGallery({ images }: CaseStudyGalleryProps) {
  return (
    <section className="section-container bg-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Screens & Gallery</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Visual showcase of the project across different sections and devices
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-gray-100 rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 mb-4 sm:mb-6 break-inside-avoid"
            >
              <div className="relative w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {image.tag && (
                  <div className="absolute top-3 right-3 px-2.5 py-1 bg-white/90 backdrop-blur-sm rounded-md z-10">
                    <span className="text-xs font-medium text-gray-700">{image.tag}</span>
                  </div>
                )}
              </div>
              {image.caption && (
                <div className="p-4 bg-white">
                  <p className="text-sm text-gray-600">{image.caption}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

