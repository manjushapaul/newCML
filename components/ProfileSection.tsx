'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Github } from 'lucide-react'
import { TEAM_MEMBERS } from '@/lib/constants'

interface SocialLink {
  platform: 'github' | 'linkedin' | 'twitter'
  url: string
}

interface ProfileCardProps {
  name: string
  role: string
  image: string
  description: string
  skills?: string[]
  socialLinks: SocialLink[]
  index: number
  isInView: boolean
  shouldReduceMotion: boolean
}

function ProfileCard({ name, role, image, description, skills, socialLinks, index, isInView, shouldReduceMotion }: ProfileCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.6,
        delay: shouldReduceMotion ? 0 : index * 0.15,
      }}
      className="relative w-full max-w-md"
    >
      <div className="relative rounded-2xl overflow-visible shadow-2xl" style={{ border: '10px solid #E5E7EB' }}>
        {/* Full Card Container with Image Background */}
        <div className="relative w-full h-[500px] sm:h-[550px] md:h-[600px] overflow-hidden">
          {/* Full Cover Image */}
          <div className="absolute inset-0">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover object-center"
              sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          {/* Liquid Glass Morphism Bottom Section (60% from bottom) */}
          <div 
            className="absolute bottom-0 left-0 right-0 z-20"
            style={{ 
              height: '60%',
              backdropFilter: 'blur(24px) saturate(180%)',
              WebkitBackdropFilter: 'blur(24px) saturate(180%)',
              maskImage: 'linear-gradient(to top, black 0%, black 70%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to top, black 0%, black 70%, transparent 100%)',
            }}
          >
            {/* Dark overlay for better text contrast */}
            <div 
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to top, rgba(0, 0, 0, 0.98) 0%, rgba(0, 0, 0, 0.92) 20%, rgba(0, 0, 0, 0.8) 40%, rgba(0, 0, 0, 0.5) 60%, rgba(0, 0, 0, 0.2) 80%, rgba(0, 0, 0, 0.05) 95%, transparent 100%)',
              }}
            />
            
            {/* Content Container */}
            <div className="relative z-10 p-4 sm:p-6 pt-4 h-full flex flex-col justify-end items-center">
              {/* Name */}
              <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-1" style={index === 0 ? {} : { 
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.8), 0 4px 16px rgba(0, 0, 0, 0.6)',
                filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.9))'
              }}>
                {name}
              </h3>

              {/* Role */}
              <p className="text-white/90 text-xs sm:text-sm text-center mb-2 sm:mb-3" style={{
                textShadow: '0 1px 4px rgba(0, 0, 0, 0.8), 0 2px 8px rgba(0, 0, 0, 0.6)'
              }}>
                {role}
              </p>

              {/* Description/Bio */}
              <p className="text-white text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed text-center px-2" style={{
                textShadow: '0 1px 4px rgba(0, 0, 0, 0.8), 0 2px 8px rgba(0, 0, 0, 0.6)'
              }}>
                {description}
              </p>

              {/* Skills Tags */}
              {skills && skills.length > 0 && (
                <div className="flex flex-wrap gap-2 justify-center">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 text-xs font-medium text-gray-900 bg-gray-100 rounded-full"
                      style={{
                        textShadow: 'none',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function ProfileSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const shouldReduceMotion = useReducedMotion() ?? false

  // Map team members to profile data with social links (only use existing data)
  const profiles = TEAM_MEMBERS.map((member) => ({
    name: member.name,
    role: member.role,
    image: member.image,
    description: member.bio,
    skills: member.skills,
    socialLinks: [
      { platform: 'github' as const, url: member.github },
    ],
  }))

  return (
    <section id="team" className="relative py-16 sm:py-24 overflow-hidden" ref={ref}>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
        >
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-black mb-4 drop-shadow-lg px-4">
              Meet the team behind Code Meld Labs
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-black/90 max-w-2xl mx-auto drop-shadow-md px-4">
              Passionate developers and designers working together to build exceptional digital experiences.
            </p>
          </div>

          {/* Profile Cards Grid */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-10 px-4 sm:px-0">
            {profiles.map((profile, index) => (
              <ProfileCard
                key={profile.name}
                {...profile}
                index={index}
                isInView={isInView}
                shouldReduceMotion={shouldReduceMotion}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
