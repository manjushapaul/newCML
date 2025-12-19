'use client'

import { motion, useReducedMotion } from 'framer-motion'

interface ProjectCardProps {
  title: string
  tagline: string
  tags: string[]
  index: number
  delay?: number
}

export function ProjectCard({ title, tagline, tags, index, delay = 0 }: ProjectCardProps) {
  const shouldReduceMotion = useReducedMotion() ?? false

  // Staggered rotation for stack effect
  const rotation = index === 0 ? -2 : index === 1 ? 1.5 : -1

  return (
    <motion.div
      className="group relative bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#FBE1CC]/50 hover:shadow-xl transition-all duration-300"
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: delay + index * 0.1,
        ease: 'easeOut',
      }}
      style={{
        transform: `rotate(${rotation}deg)`,
        transformOrigin: 'center center',
      }}
      whileHover={shouldReduceMotion ? {} : {
        y: -8,
        rotate: 0,
        transition: { duration: 0.2 },
      }}
    >
      {/* Project Title */}
      <h3 className="font-geist font-bold text-lg text-[#2B2333] mb-2">
        {title}
      </h3>

      {/* Tagline */}
      <p className="text-sm text-[#5C4C5F] mb-4 leading-relaxed">
        {tagline}
      </p>

      {/* Tech Tags */}
      <div className="flex flex-wrap gap-2">
        {tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 text-xs font-medium text-[#A76334] bg-[#FBE1CC]/60 rounded-full border border-[#F4C18D]/40"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Subtle hover indicator */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/0 to-[#FBE1CC]/0 group-hover:from-white/20 group-hover:to-[#FBE1CC]/10 transition-all duration-300 pointer-events-none" />
    </motion.div>
  )
}

