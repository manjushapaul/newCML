'use client'

import { motion } from 'framer-motion'
import { Download, ExternalLink, Loader2 } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { CaseStudyData } from '@/lib/case-studies/nexspot'

interface CaseStudyHeroProps {
  data: CaseStudyData
}

export function CaseStudyHero({ data }: CaseStudyHeroProps) {
  const [isGenerating, setIsGenerating] = useState(false)

  const handleDownloadPDF = async () => {
    try {
      setIsGenerating(true)
      
      // Try client-side generation first (more reliable)
      try {
        const { generatePDFBlob } = await import('@/lib/utils/pdf-client')
        const blob = await generatePDFBlob(data)
        
        // Create download link
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `${data.id}-case-study.pdf`
        document.body.appendChild(a)
        a.click()
        
        // Cleanup
        setTimeout(() => {
          window.URL.revokeObjectURL(url)
          document.body.removeChild(a)
        }, 100)
        return
      } catch (clientError) {
        console.warn('Client-side PDF generation failed, trying server:', clientError)
        // Fallback to server-side generation
      }
      
      // Fallback: Call API route to generate and download PDF
      const response = await fetch(`/api/case-studies/${data.id}/pdf`)
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        const errorMessage = errorData.details || errorData.error || 'Failed to generate PDF'
        console.error('PDF API error:', errorMessage)
        throw new Error(errorMessage)
      }

      // Check if response is actually a PDF
      const contentType = response.headers.get('content-type')
      if (contentType && !contentType.includes('application/pdf')) {
        const errorText = await response.text()
        console.error('Unexpected response:', errorText)
        throw new Error('Server returned non-PDF response')
      }

      // Get the PDF blob
      const blob = await response.blob()
      
      // Verify blob is not empty
      if (blob.size === 0) {
        throw new Error('Generated PDF is empty')
      }
      
      // Create download link
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `${data.id}-case-study.pdf`
      document.body.appendChild(a)
      a.click()
      
      // Cleanup
      setTimeout(() => {
        window.URL.revokeObjectURL(url)
        document.body.removeChild(a)
      }, 100)
    } catch (error) {
      console.error('PDF download error:', error)
      const errorMessage = error instanceof Error ? error.message : 'Failed to download PDF. Please try again.'
      alert(errorMessage)
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <section className="relative bg-white pt-24 sm:pt-32 pb-16 sm:pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6 sm:space-y-8"
        >
          {/* Project Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900"
          >
            {data.hero.title}
          </motion.h1>

          {/* Summary */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            {data.hero.summary}
          </motion.p>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-3"
          >
            {data.hero.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-gray-100 rounded-full border border-gray-200"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <button
              onClick={handleDownloadPDF}
              disabled={isGenerating}
              className="w-full sm:w-auto px-6 py-3 bg-gray-900 text-white rounded-full font-semibold transition-all duration-300 hover:shadow-2xl hover:scale-105 active:scale-95 hover:bg-gray-800 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Generating PDF...
                </>
              ) : (
                <>
                  <Download className="w-5 h-5" />
                  Download Case Study (PDF)
                </>
              )}
            </button>
            {data.liveUrl && (
              <Link
                href={data.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 bg-white/60 hover:bg-white/80 text-gray-900 rounded-full font-semibold backdrop-blur-xl border-2 border-gray-300 transition-all duration-300 hover:shadow-2xl hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
              >
                <ExternalLink className="w-5 h-5" />
                View Live Site
              </Link>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

