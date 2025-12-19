'use client'

import Image from 'next/image'
import { TEAM_MEMBERS } from '@/lib/constants'

export function ProfileCard() {
  // Get Anjusha Paul's data (first team member)
  const profile = TEAM_MEMBERS[0]

  return (
    <section className="section-container py-16">
      <div className="max-w-md mx-auto px-4">
        <div className="relative rounded-2xl overflow-visible shadow-2xl" style={{ border: '10px solid #E5E7EB' }}>
          {/* Full Card Container with Image Background */}
          <div className="relative w-full h-[500px] sm:h-[550px] md:h-[600px] rounded-2xl overflow-hidden">
            {/* Full Cover Image */}
            <div className="absolute inset-0">
              <Image
                src={profile.image}
                alt={profile.name}
                fill
                className="object-cover object-center"
                priority
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
                <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-1" style={{ 
                  textShadow: '0 2px 8px rgba(0, 0, 0, 0.8), 0 4px 16px rgba(0, 0, 0, 0.6)',
                  filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.9))'
                }}>
                  {profile.name}
                </h3>

                {/* Role */}
                <p className="text-white/90 text-xs sm:text-sm text-center mb-2 sm:mb-3" style={{
                  textShadow: '0 1px 4px rgba(0, 0, 0, 0.8), 0 2px 8px rgba(0, 0, 0, 0.6)'
                }}>
                  {profile.role}
                </p>

                {/* Description/Bio */}
                <p className="text-white text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed text-center px-2" style={{
                  textShadow: '0 1px 4px rgba(0, 0, 0, 0.8), 0 2px 8px rgba(0, 0, 0, 0.6)'
                }}>
                  {profile.bio}
                </p>

                {/* Skills Tags */}
                {profile.skills && profile.skills.length > 0 && (
                  <div className="flex flex-wrap gap-2 justify-center">
                    {profile.skills.map((skill, index) => (
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
      </div>
    </section>
  )
}

