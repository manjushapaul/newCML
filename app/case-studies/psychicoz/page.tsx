import { CaseStudyHero } from '@/components/case-study/CaseStudyHero'
import { CaseStudyMeta } from '@/components/case-study/CaseStudyMeta'
import { CaseStudyGallery } from '@/components/case-study/CaseStudyGallery'
import { CaseStudySection } from '@/components/case-study/CaseStudySection'
import { BackToTop } from '@/components/BackToTop'
import { psychicozCaseStudy } from '@/lib/case-studies/psychicoz'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PsychicOz Online Psychic Reading Platform Case Study | Code Meld Labs',
  description: 'Comprehensive online psychic reading platform with multi-channel communication, advanced filtering, and customer management system.',
  openGraph: {
    title: 'PsychicOz Online Psychic Reading Platform Case Study | Code Meld Labs',
    description: 'Multi-channel psychic reading platform with real-time chat, video calling, and advanced filtering',
    images: ['/images/psy.png'],
  },
}

export default function PsychicozCaseStudyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <CaseStudyHero data={psychicozCaseStudy} />

      {/* Overview Section */}
      <section className="section-container bg-gray-50 max-w-full">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left: Narrative */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Project Overview</h2>
              <div className="space-y-4 text-gray-600">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Client</h3>
                  <p>{psychicozCaseStudy.overview.client}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Problem</h3>
                  <p>{psychicozCaseStudy.overview.problem}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Goals</h3>
                  <ul className="space-y-2">
                    {psychicozCaseStudy.overview.goals.map((goal, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-gray-400 mt-1.5">•</span>
                        <span>{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right: Stats Card */}
            <div className="lg:col-span-1">
              <CaseStudyMeta data={psychicozCaseStudy} />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <CaseStudyGallery images={psychicozCaseStudy.gallery} />

      {/* Features Section */}
      {psychicozCaseStudy.features && (
        <CaseStudySection title="Features" className="bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {psychicozCaseStudy.features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg border border-gray-200 shadow-sm p-4 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                      ✓
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{feature}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CaseStudySection>
      )}

      {/* Process & Decisions */}
      <CaseStudySection title="Process & Decisions">
        <div className="space-y-6">
          {psychicozCaseStudy.process.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CaseStudySection>

      {/* Results & Learnings */}
      <CaseStudySection title="Results & Learnings" className="bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">{psychicozCaseStudy.results.title}</h3>
          <ul className="space-y-3">
            {psychicozCaseStudy.results.bullets.map((bullet, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-gray-400 mt-1.5">•</span>
                <span className="text-gray-600">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </CaseStudySection>

      {/* Back to Top Button */}
      <BackToTop />
    </div>
  )
}

