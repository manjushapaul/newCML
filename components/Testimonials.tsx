'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { TESTIMONIALS } from '@/lib/constants'

// Function to extract initials from a name
function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/)
  if (parts.length === 1) {
    return parts[0].substring(0, 2).toUpperCase()
  }
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

export function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [current, setCurrent] = useState(0)

  const next = () => {
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  }

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(next, 8000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="testimonials" className="section-container bg-white" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear what our clients say about working with us
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Testimonial Cards */}
          <div className="relative h-[600px] sm:h-[450px] md:h-[400px] lg:h-[350px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
              <div className="bg-white/90 backdrop-blur-xl rounded-2xl border border-gray-200 p-2 sm:p-4 md:p-6 h-full flex flex-col items-center justify-center text-center mx-4 sm:mx-0">
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(TESTIMONIALS[current].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 max-w-5xl px-4">
                    &quot;{TESTIMONIALS[current].content}&quot;
                  </blockquote>

                  {/* Author */}
                  <div className="flex flex-col items-center gap-4">
                    {/* Coin-like circular avatar with initials */}
                    <div className="relative w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg text-gray-900 transition-all duration-300 hover:-translate-y-0.5 cursor-default bg-gradient-to-br from-[#D0D0D0] via-[#B8B8B8] to-[#A8A8A8] border-2 border-gray-500 shadow-[0_4px_8px_rgba(0,0,0,0.2),0_2px_4px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.4)] hover:shadow-[0_6px_12px_rgba(168,168,168,0.5),0_4px_8px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.4)]">
                      <span className="relative z-10">
                        {getInitials(TESTIMONIALS[current].name)}
                      </span>
                    </div>
                    <div>
                      <div className="font-bold text-lg">{TESTIMONIALS[current].name}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 md:-translate-x-12 p-2 sm:p-3 rounded-full bg-white/90 backdrop-blur-xl shadow-2xl hover:bg-white border border-gray-200 transition-all duration-300 hover:scale-110 z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-slate-900" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 md:translate-x-12 p-2 sm:p-3 rounded-full bg-white/90 backdrop-blur-xl shadow-2xl hover:bg-white border border-gray-200 transition-all duration-300 hover:scale-110 z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-slate-900" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === current
                    ? 'bg-slate-900 w-8'
                    : 'bg-gray-300 hover:bg-gray-400 w-3'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
