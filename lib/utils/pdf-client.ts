'use client'

import React from 'react'
import { pdf } from '@react-pdf/renderer'
import { CaseStudyPDF } from './generate-case-study-pdf'
import type { CaseStudyData } from '@/lib/case-studies/nexspot'

export async function generatePDFBlob(data: CaseStudyData): Promise<Blob> {
  try {
    // Create React element
    const doc = React.createElement(CaseStudyPDF, { data })
    
    // Generate PDF blob
    const asPdf = pdf(doc)
    const blob = await asPdf.toBlob()
    return blob
  } catch (error) {
    console.error('Client-side PDF generation error:', error)
    throw error
  }
}

