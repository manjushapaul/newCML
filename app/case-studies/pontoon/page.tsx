import { CaseStudyHero } from '@/components/case-study/CaseStudyHero'
import { CaseStudyMeta } from '@/components/case-study/CaseStudyMeta'
import { CaseStudyGallery } from '@/components/case-study/CaseStudyGallery'
import { CaseStudySection } from '@/components/case-study/CaseStudySection'
import { BackToTop } from '@/components/BackToTop'
import { pontoonCaseStudy } from '@/lib/case-studies/pontoon'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pontoon Sports Case Study | Code Meld Labs',
  description: 'A comprehensive e-commerce platform for custom sports apparel, featuring an advanced kit designer and team ordering system.',
  openGraph: {
    title: 'Pontoon Sports Case Study | Code Meld Labs',
    description: 'Custom sports apparel e-commerce platform with advanced kit designer',
    images: ['/images/Pontoon-Custom-Sports-Apparel.png'],
  },
}

export default function PontoonCaseStudyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <CaseStudyHero data={pontoonCaseStudy} />

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
                  <p>{pontoonCaseStudy.overview.client}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Problem</h3>
                  <p>{pontoonCaseStudy.overview.problem}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Goals</h3>
                  <ul className="space-y-2">
                    {pontoonCaseStudy.overview.goals.map((goal, index) => (
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
              <CaseStudyMeta data={pontoonCaseStudy} />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <CaseStudyGallery images={pontoonCaseStudy.gallery} />

      {/* Process & Decisions */}
      <CaseStudySection title="Process & Decisions">
        <div className="space-y-6">
          {pontoonCaseStudy.process.map((step, index) => (
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
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{pontoonCaseStudy.results.title}</h3>
            <ul className="space-y-3">
              {pontoonCaseStudy.results.bullets.map((bullet, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1.5">•</span>
                  <span className="text-gray-600">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">What I Would Do Next</h3>
            <ul className="space-y-3">
              {pontoonCaseStudy.results.nextSteps.map((step, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1.5">•</span>
                  <span className="text-gray-600">{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CaseStudySection>

      {/* Back to Top Button */}
      <BackToTop />
    </div>
  )
}


