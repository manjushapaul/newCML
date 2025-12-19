'use client'

import React from 'react'
import { pdf } from '@react-pdf/renderer'
import { CaseStudyPDF } from './generate-case-study-pdf'
import type { CaseStudyData } from '@/lib/case-studies/nexspot'

export async function generatePDFBlob(data: CaseStudyData): Promise<Blob> {
  try {
    // Create React element
    const doc = React.createElement(CaseStudyPDF, { data })
    
    // Verify it's a valid React element and cast to proper type
    if (!React.isValidElement(doc)) {
      throw new Error('Invalid React element created')
    }
    
    // Generate PDF blob - cast to ReactElement for pdf() function
    const asPdf = pdf(doc as React.ReactElement)
    const blob = await asPdf.toBlob()
    return blob
  } catch (error) {
    console.error('Client-side PDF generation error:', error)
    throw error
  }
}

