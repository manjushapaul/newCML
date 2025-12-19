export interface CaseStudyImage {
  src: string
  alt: string
  caption?: string
  tag?: string
}

export interface CaseStudyData {
  id: string
  title: string
  summary: string
  tags: string[]
  liveUrl?: string
  pdfUrl?: string
  hero: {
    title: string
    summary: string
    tags: string[]
  }
  overview: {
    client: string
    problem: string
    goals: string[]
    stats: {
      timeline: string
      stack: string[]
      role: string
      outcomes: string[]
    }
  }
  gallery: CaseStudyImage[]
  process: {
    title: string
    description: string
  }[]
  results: {
    title: string
    bullets: string[]
    nextSteps: string[]
  }
  features?: string[]
}

export const nexspotCaseStudy: CaseStudyData = {
  id: 'nexspot',
  title: 'NexSpot',
  summary: 'Modern coworking space landing page with elegant UI and smooth animations',
  tags: ['Next.js', 'TypeScript', 'Coworking', 'SaaS-ready architecture'],
  liveUrl: 'https://www.nexspot.in/',
  pdfUrl: '/case-studies/nexspot.pdf',
  hero: {
    title: 'NexSpot',
    summary: 'A modern coworking space platform built with Next.js, featuring elegant UI design and smooth animations for an exceptional user experience.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Coworking', 'SaaS'],
  },
  overview: {
    client: 'NexSpot - Coworking Space Platform',
    problem: "The client needed a modern, conversion-focused landing page for their coworking space platform. The previous design lacked visual appeal, had poor mobile responsiveness, and didn't effectively communicate the value proposition to potential customers.",
    goals: [
      'Create a visually stunning landing page that reflects the modern coworking culture',
      'Improve mobile responsiveness and user experience across all devices',
      'Implement smooth animations and micro-interactions to enhance engagement',
      'Build a scalable architecture that can support future features and growth',
      'Optimize for performance and SEO to improve search rankings',
    ],
    stats: {
      timeline: '4 weeks',
      stack: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Next.js Image Optimization'],
      role: 'Full-Stack Developer & UI/UX Designer',
      outcomes: [
        '40% increase in page load speed',
        'Improved mobile conversion rate',
        'Enhanced user engagement metrics',
        'SEO-optimized structure',
      ],
    },
  },
  gallery: [
    {
      src: '/images/nexspot.png',
      alt: 'NexSpot landing page hero section',
      caption: 'Hero section with compelling value proposition',
      tag: 'Landing',
    },
    {
      src: '/images/aboutco.png',
      alt: 'NexSpot About section',
      caption: 'About section with clear tier structure',
      tag: 'About',
    },
    {
      src: '/images/mobileco.png',
      alt: 'NexSpot mobile view',
      caption: 'Fully responsive mobile experience',
      tag: 'Mobile',
    },
    {
      src: '/images/contactus.png',
      alt: 'NexSpot contact us section',
      caption: 'Features showcase with smooth animations',
      tag: 'Contact Us',
    },
  ],
  process: [
    {
      title: 'Research & Discovery',
      description: 'Conducted user research and competitive analysis to understand the coworking space market. Identified key pain points and user expectations for modern workspace platforms.',
    },
    {
      title: 'Architecture Planning',
      description: 'Designed a scalable Next.js architecture using App Router, TypeScript for type safety, and a component-based structure for maintainability and future feature expansion.',
    },
    {
      title: 'UI Design',
      description: 'Created a modern, clean design system with careful attention to typography, spacing, and color. Focused on creating an elegant aesthetic that reflects the professional yet welcoming nature of coworking spaces.',
    },
    {
      title: 'Development',
      description: 'Built the application using Next.js 15 with TypeScript, implementing smooth animations with Framer Motion, responsive design with Tailwind CSS, and optimized images for performance.',
    },
    {
      title: 'Launch & Optimization',
      description: 'Deployed to production with performance optimizations, SEO enhancements, and analytics integration. Monitored user feedback and made iterative improvements based on real-world usage.',
    },
  ],
  results: {
    title: 'Results & Impact',
    bullets: [
      '40% improvement in page load speed compared to previous version',
      'Enhanced mobile user experience with fully responsive design',
      'Improved SEO rankings through optimized structure and metadata',
      'Increased user engagement with smooth animations and micro-interactions',
      'Scalable architecture ready for future feature additions',
    ],
    nextSteps: [
      'Add booking system integration for direct workspace reservations',
      'Implement user dashboard for members to manage their workspace bookings',
      'Add analytics dashboard for workspace administrators',
      'Expand to include virtual tour functionality with 360° views',
      'Integrate payment processing for seamless subscription management',
    ],
  },
}
