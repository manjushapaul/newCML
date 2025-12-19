'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import { SERVICES } from '@/lib/constants'
import { Check } from 'lucide-react'

interface WideServiceCardProps {
  service: {
    icon: string
    title: string
    description: string
    features: string[]
  }
  index: number
  isInView: boolean
  shouldReduceMotion: boolean
}

function WideServiceCard({ service, index, isInView, shouldReduceMotion }: WideServiceCardProps) {
  const serviceCategory: Record<string, string> = {
    'Next.js & React Development': 'Web apps',
    'PHP & Laravel Development': 'Backend',
    'AI Automation & Integration': 'Automation',
    'SaaS Development': 'Platforms',
    'UI/UX Design & Implementation': 'Design',
    'Crypto & Web3 Applications': 'Web3',
  }

  const serviceFooter: Record<string, string> = {
    'Next.js & React Development': 'Ideal for SaaS & dashboards',
    'PHP & Laravel Development': 'Ideal for enterprise backends',
    'AI Automation & Integration': 'Perfect for intelligent workflows',
    'SaaS Development': 'Ideal for MVPs',
    'UI/UX Design & Implementation': 'Best for modern interfaces',
    'Crypto & Web3 Applications': 'Perfect for blockchain projects',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
      transition={{ duration: 0.6, delay: shouldReduceMotion ? 0 : index * 0.1 }}
      className="group relative"
    >
      <div className="relative max-w-3xl rounded-3xl border border-slate-200/70 bg-white/80 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:scale-[1.01] hover:border-primary/40 hover:bg-white transition-all duration-300 p-8 md:p-10 overflow-hidden">
        {/* Subtle diagonal gradient pattern */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none opacity-50 group-hover:opacity-70 transition-opacity duration-300" />

        {/* Top Row */}
        <div className="flex items-start justify-between mb-6 relative z-10">
          {/* Left: Index Badge + Category Label */}
          <div className="flex flex-col gap-2">
            <span className="rounded-full bg-slate-900 text-white text-xs font-medium px-3 py-1 tracking-[0.18em] uppercase w-fit">
              {String(index + 1).padStart(2, '0')}
            </span>
            {serviceCategory[service.title] && (
              <span className="text-xs text-slate-500 font-medium">
                {serviceCategory[service.title]}
              </span>
            )}
          </div>

          {/* Right: Circular Icon Badge */}
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary/10 to-primary/40 flex items-center justify-center text-primary text-lg group-hover:shadow-[0_0_25px_rgba(15,23,42,0.25)] transition-shadow duration-300">
            {service.icon}
          </div>
        </div>

        {/* Middle: Title + Description */}
        <div className="mb-6 relative z-10">
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 mb-2">
            {service.title}
          </h3>
          <p className="mt-2 text-sm md:text-base text-slate-600 max-w-xl">
            {service.description}
          </p>
        </div>

        {/* Bottom: Features in Two-Column Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 relative z-10">
          {service.features.map((feature) => (
            <div key={feature} className="flex items-start gap-2 text-sm text-slate-600">
              <Check className="w-4 h-4 text-slate-700 flex-shrink-0 mt-0.5" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* Optional Footer Line */}
        {serviceFooter[service.title] && (
          <div className="pt-4 border-t border-slate-100 relative z-10">
            <div className="flex justify-end">
              <span className="text-xs text-slate-500 font-medium">
                {serviceFooter[service.title]}
              </span>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const shouldReduceMotion = useReducedMotion() ?? false

  return (
    <section id="services" className="relative bg-white" ref={ref}>
      <div className="flex flex-col lg:flex-row">
        {/* Fixed Left Side - Heading & Subtitle */}
        <div className="lg:sticky lg:top-0 lg:h-screen lg:w-1/2 flex items-center justify-center lg:justify-start bg-white z-10">
          <div className="w-full max-w-lg lg:max-w-none px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 py-16 lg:py-0">
            <motion.div
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: shouldReduceMotion ? 0 : -30 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 lg:mb-8 leading-tight text-gray-900">
                Our Services
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-xl leading-relaxed">
                Comprehensive development solutions tailored to your business needs
              </p>
            </motion.div>
          </div>
        </div>

        {/* Scrollable Right Side - Services Content */}
        <div className="lg:w-1/2">
          <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-16 lg:py-24">
            {/* Vertical Stack of Wide Service Cards */}
            <div className="space-y-6 sm:space-y-8">
              {SERVICES.map((service, index) => (
                <WideServiceCard
                  key={service.title}
                  service={service}
                  index={index}
                  isInView={isInView}
                  shouldReduceMotion={shouldReduceMotion}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
