'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { SITE_CONFIG } from '@/lib/constants'
import { ParticleBackground } from './ParticleBackground'

export function HeroAntigravityStyle() {
  const shouldReduceMotion = useReducedMotion() ?? false

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Particle Background */}
      <ParticleBackground
        config={{
          speed: 1.5,
          density: 500,
          color: '#4A90E2',
          spread: 0.8,
          size: 2.6,
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <motion.div
          className="flex flex-col items-center text-center space-y-8 sm:space-y-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8, ease: 'easeOut' }}
        >
          {/* Logo/Wordmark */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.2 }}
          >
            <h2 className="font-geist text-lg sm:text-xl font-semibold text-gray-600 tracking-wide">
              Code Meld Labs
            </h2>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="font-geist text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-gray-900 leading-[1.1] max-w-4xl"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: shouldReduceMotion ? 0 : 0.3 }}
          >
            Building future-ready digital products
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: shouldReduceMotion ? 0 : 0.4 }}
          >
            Helping startups and brands ship fast with modern tech stacks, AI integration, and scalable architecture.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: shouldReduceMotion ? 0 : 0.5 }}
          >
            {/* Primary CTA - Dark Pill */}
            <button
              onClick={() => scrollToSection('projects')}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gray-900 px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-white shadow-lg hover:bg-gray-800 hover:shadow-xl transition-all duration-200 w-full sm:w-auto sm:min-w-[200px]"
            >
              View Studio Work
              <svg
                className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

