'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { TEAM_MEMBERS } from '@/lib/constants'

// Pastel color palette for bubble backgrounds
const bubbleColors = [
  {
    bg: 'bg-green-100',
    text: 'text-green-800',
    border: 'border-green-200',
  },
  {
    bg: 'bg-yellow-100',
    text: 'text-yellow-800',
    border: 'border-yellow-200',
  },
  {
    bg: 'bg-pink-100',
    text: 'text-pink-800',
    border: 'border-pink-200',
  },
  {
    bg: 'bg-blue-100',
    text: 'text-blue-800',
    border: 'border-blue-200',
  },
  {
    bg: 'bg-purple-100',
    text: 'text-purple-800',
    border: 'border-purple-200',
  },
  {
    bg: 'bg-orange-100',
    text: 'text-orange-800',
    border: 'border-orange-200',
  },
]

export function ProfileBubbleGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const shouldReduceMotion = useReducedMotion() ?? false

  return (
    <section id="about" className="bg-white py-24 sm:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
        >
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-3">
              <span className="text-gray-900">The Code Meld Labs</span>{' '}
              <span className="text-orange-500">support team</span>
            </h2>
          </div>

          {/* Bubble Profile Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {TEAM_MEMBERS.map((member, index) => {
              const colorScheme = bubbleColors[index % bubbleColors.length]
              
              return (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.5,
                    delay: shouldReduceMotion ? 0 : index * 0.1,
                  }}
                  whileHover={shouldReduceMotion ? {} : { y: -4, scale: 1.02 }}
                  className="relative"
                >
                  {/* L-Shaped Organic Blob Pattern - Two Interconnected Shapes */}
                  <div className="relative min-h-[280px] sm:min-h-[320px]">
                    {/* Circular Avatar - Overlapping on left */}
                    <div className="absolute -top-4 left-4 sm:left-6 z-20">
                      <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-white shadow-lg overflow-hidden bg-white">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                          sizes="112px"
                        />
                      </div>
                    </div>

                    {/* Main Horizontal Shape - Contains Content */}
                    <div
                      className={`relative ${colorScheme.bg} ${colorScheme.border} rounded-[32px] p-6 sm:p-8 pt-20 sm:pt-24 shadow-sm hover:shadow-lg transition-all duration-300 border-2`}
                      style={{
                        marginTop: '60px',
                        marginRight: '100px',
                      }}
                    >
                      {/* Role */}
                      <p className="text-sm sm:text-base font-semibold text-gray-700 mb-3">
                        {member.role}
                      </p>

                      {/* Bio */}
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                        {member.bio}
                      </p>

                      {/* Skills Tags */}
                      <div className="flex flex-wrap gap-2">
                        {member.skills.slice(0, 4).map((skill) => (
                          <span
                            key={skill}
                            className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium ${colorScheme.text} ${colorScheme.bg} ${colorScheme.border} border`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Vertical Shape - Contains Name (Connected to top-right) */}
                    <div
                      className={`absolute top-0 right-0 ${colorScheme.bg} ${colorScheme.border} rounded-[32px] px-6 py-4 shadow-sm border-2`}
                      style={{
                        transform: 'translateY(-20px)',
                      }}
                    >
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-medium uppercase tracking-wide text-orange-600 whitespace-nowrap">
                        {member.name.toUpperCase()}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

