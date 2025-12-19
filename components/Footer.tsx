'use client'

import { Github, Linkedin, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { SITE_CONFIG } from '@/lib/constants'

export function Footer() {
  const currentYear = new Date().getFullYear()
  const pathname = usePathname()
  const router = useRouter()

  const handleQuickLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    
    // Check if we're on the home page
    if (pathname === '/') {
      // On home page - just scroll to the section
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // Not on home page - navigate to home page with hash
      router.push(`/${href}`)
      // Scroll after navigation completes
      setTimeout(() => {
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        } else {
          // If element not found, try again after a bit more delay
          setTimeout(() => {
            const retryElement = document.querySelector(href)
            if (retryElement) {
              retryElement.scrollIntoView({ behavior: 'smooth' })
            }
          }, 200)
        }
      }, 300)
    }
  }

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Image
                src="/images/cmllogo.svg"
                alt={SITE_CONFIG.name}
                width={210}
                height={78}
                className="h-14 w-[200px]"
              />
            </div>
            <p className="text-gray-600 text-sm">
              {SITE_CONFIG.tagline}
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href={SITE_CONFIG.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-slate-900 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={SITE_CONFIG.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-slate-900 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={SITE_CONFIG.social.upwork}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-slate-900 transition-colors"
                aria-label="Upwork"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="#team" 
                  onClick={(e) => handleQuickLinkClick(e, '#team')}
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  Team
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  onClick={(e) => handleQuickLinkClick(e, '#projects')}
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => handleQuickLinkClick(e, '#services')}
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => handleQuickLinkClick(e, '#contact')}
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-gray-600 text-sm mb-2">
              Ready to start your project?
            </p>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="text-slate-900 hover:text-slate-700 transition-colors text-sm font-medium"
            >
              {SITE_CONFIG.email}
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>&copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
