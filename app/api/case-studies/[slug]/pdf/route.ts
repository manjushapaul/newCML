import { NextRequest, NextResponse } from 'next/server'
import { renderToBuffer } from '@react-pdf/renderer'
import React from 'react'
import { CaseStudyPDF } from '@/lib/utils/generate-case-study-pdf'
import { nexspotCaseStudy } from '@/lib/case-studies/nexspot'
import { pontoonCaseStudy } from '@/lib/case-studies/pontoon'
import { cryptoCaseStudy } from '@/lib/case-studies/crypto'
import { nexcentCaseStudy } from '@/lib/case-studies/nexcent'
import { psychicozCaseStudy } from '@/lib/case-studies/psychicoz'
import { psychicozMobCaseStudy } from '@/lib/case-studies/psychicoz-mob'
import { peakGroupCaseStudy } from '@/lib/case-studies/peak-group'
import { chatbotCaseStudy } from '@/lib/case-studies/chatbot'
import type { CaseStudyData } from '@/lib/case-studies/nexspot'

// Map of case study slugs to their data
const caseStudyMap: Record<string, CaseStudyData> = {
  nexspot: nexspotCaseStudy,
  pontoon: pontoonCaseStudy,
  crypto: cryptoCaseStudy,
  nexcent: nexcentCaseStudy,
  psychicoz: psychicozCaseStudy,
  'psychicoz-mob': psychicozMobCaseStudy,
  'peak-group': peakGroupCaseStudy,
  chatbot: chatbotCaseStudy,
}

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params
    
    // Get case study data
    const caseStudyData = caseStudyMap[slug]
    
    if (!caseStudyData) {
      return NextResponse.json(
        { error: 'Case study not found' },
        { status: 404 }
      )
    }

    // Generate PDF - render directly
    let pdfBuffer: Buffer
    try {
      // Create the PDF component element directly
      // Ensure we're creating a proper React element
      const pdfElement = React.createElement(CaseStudyPDF, { data: caseStudyData })
      
      // Verify it's a valid React element before rendering
      if (!pdfElement || typeof pdfElement !== 'object' || !pdfElement.$$typeof) {
        throw new Error('Invalid React element created')
      }
      
      // renderToBuffer expects a React element
      pdfBuffer = await renderToBuffer(pdfElement)
    } catch (renderError) {
      console.error('PDF render error:', renderError)
      const errorDetails = renderError instanceof Error ? renderError.message : String(renderError)
      const errorStack = renderError instanceof Error ? renderError.stack : undefined
      console.error('Full error object:', renderError)
      console.error('Error stack:', errorStack)
      throw new Error(`PDF rendering failed: ${errorDetails}`)
    }

    // Return PDF with proper headers
    return new NextResponse(pdfBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${slug}-case-study.pdf"`,
        'Content-Length': pdfBuffer.length.toString(),
        'Cache-Control': 'no-cache, no-store, must-revalidate',
      },
    })
  } catch (error) {
    console.error('PDF generation error:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    const errorStack = error instanceof Error ? error.stack : undefined
    console.error('Error details:', errorMessage)
    console.error('Error stack:', errorStack)
    return NextResponse.json(
      { 
        error: 'Failed to generate PDF', 
        details: errorMessage,
        stack: process.env.NODE_ENV === 'development' ? errorStack : undefined
      },
      { status: 500 }
    )
  }
}
