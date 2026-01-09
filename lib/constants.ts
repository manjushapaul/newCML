// Editable content for the website

export const SITE_CONFIG = {
  name: 'Code Meld Labs',
  tagline: 'Full-Stack Experts in Next.js, PHP & AI',
  email: 'manjushapaul39@gmail.com',
  upwork: {
    rating: '5.0',
    successRate: '100%',
    reviews: '10+',
    jobsCompleted: '15+',
  },
  social: {
    upwork: 'https://www.upwork.com/freelancers/~01a17527bca125e5b5?mp_source=share',
    linkedin: 'https://www.linkedin.com/company/code-meld-labs',
  },
}

export const TEAM_MEMBERS = [
  {
    name: 'Manjusha Paul',
    role: 'Full-Stack Developer',
    image: '/images/profiles.jpg',
    skills: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    bio: 'Expert in modern web development with a focus on performance and user experience.',
  },
  {
    name: 'Jaison James',
    role: 'AI/ML Engineer',
    image: '/images/jaison.JPG',
    skills: ['Python', 'TensorFlow', 'OpenAI APIs', 'LangChain'],
    bio: 'Building intelligent automation solutions and AI-powered SaaS applications.',
  },
]

export const PROJECTS = [
  {
    id: 1,
    title: 'NexSpot Landing Page',
    category: 'Next.js',
    description: 'Modern landing page design for coworking space with elegant UI and smooth animations.',
    image: '/images/home.png',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://collective-workspace.vercel.app',
    featured: true,
  },
  {
    id: 2,
    title: 'Crypto Trading Dashboard',
    category: 'Next.js',
    description: 'Landing page design for cryptocurrency trading platform with modern UI.',
    image: '/images/home-cy.png',
    tags: ['Next.js', 'Chart.js', 'WebSocket', 'TailwindCSS'],
    liveUrl: 'https://crypto-latest.vercel.app/',
    featured: true,
  },
  {
    id: 4,
    title: 'Pontoon Custom Sports Apparel',
    category: 'PHP',
    description: 'Landing page design for e-commerce platform with product showcase.',
    image: '/images/P4.png',
    tags: ['Laravel', 'Vue.js', 'MySQL', 'Redis'],
    liveUrl: 'https://pontoonsports.com/',
    featured: false,
  },
  {
    id: 5,
    title: 'Nexcent Landing Page',
    category: 'AI',
    description: 'Landing page design for automation platform with clean and professional layout.',
    image: '/images/Hero-section.png',
    tags: ['Python', 'FastAPI', 'Celery', 'React'],
    liveUrl: 'https://nexcent-wine-eight.vercel.app/',
    featured: false,
  },
  {
    id: 6,
    title: 'PsychicOz Mobile Application',
    category: 'React Native',
    description: 'Comprehensive cross-platform mobile application connecting users with psychic readers for spiritual consultations.',
    image: '/images/s1.png',
    tags: ['React Native', 'TypeScript', 'Pusher', 'Twilio', 'OpenTok', 'Real-time Chat'],
    liveUrl: 'https://psychicoz.com/',
    featured: false,
  },
  {
    id: 7,
    title: 'Psychicoz',
    category: 'Next.js',
    description: 'Comprehensive online psychic reading platform with multi-channel communication and advanced filtering.',
    image: '/images/homepsy.png',
    tags: ['Next.js', 'TypeScript', 'Real-time Chat', 'Video Calling', 'E-commerce'],
    liveUrl: 'https://psychicoz.com/',
    featured: false,
  },
  {
    id: 8,
    title: 'Peak Group - Job Management System',
    category: 'Next.js',
    description: 'Comprehensive job management and cost tracking system for Peak Plumbing and Gas with centralized platform for managing commercial, civil, and residential jobs.',
    image: '/images/pk1.png',
    tags: ['Next.js 15', 'React 19', 'TypeScript', 'PHP', 'MySQL', 'Job Management'],
    liveUrl: 'https://peakplumbingandgas.com.au',
    featured: false,
  },
  {
    id: 3,
    title: 'AI Chatbot Landing Page',
    category: 'AI',
    description: 'Landing page design for AI chatbot SaaS platform with modern aesthetics.',
    image: '/images/ai1.png',
    tags: ['Next.js', 'OpenAI', 'LangChain', 'Redis'],
    liveUrl: 'https://ai-chatbot-saas.vercel.app',
    featured: true,
  },
]

export const SERVICES = [
  {
    icon: '⚡',
    title: 'Next.js & React Development',
    description: 'Modern, performant web applications with the latest React and Next.js features.',
    features: ['App Router', 'Server Components', 'Static Generation', 'API Routes'],
  },
  {
    icon: '🔧',
    title: 'PHP & Laravel Development',
    description: 'Robust backend systems and legacy application modernization.',
    features: ['REST APIs', 'Database Design', 'Legacy Migration', 'Performance Optimization'],
  },
  {
    icon: '🤖',
    title: 'AI Automation & Integration',
    description: 'Intelligent solutions powered by cutting-edge AI and machine learning.',
    features: ['OpenAI Integration', 'Custom AI Agents', 'Process Automation', 'NLP Solutions'],
  },
  {
    icon: '💎',
    title: 'SaaS Development',
    description: 'Complete SaaS platforms from MVP to production with subscription management.',
    features: ['Multi-tenancy', 'Payment Integration', 'Authentication', 'Admin Dashboards'],
  },
  {
    icon: '🎨',
    title: 'UI/UX Design & Implementation',
    description: 'Beautiful, responsive interfaces with modern design principles.',
    features: ['Tailwind CSS', 'Responsive Design', 'Accessibility', 'Animation'],
  },
  {
    icon: '📱',
    title: 'Crypto & Web3 Applications',
    description: 'Blockchain integrations and cryptocurrency trading platforms.',
    features: ['Web3.js/Ethers.js', 'Smart Contracts', 'Wallet Integration', 'DeFi Protocols'],
  },
]

export const TESTIMONIALS = [
  {
    name: 'Anton',
    // role: 'CEO, TechStart Inc',
    content: 'I can always count on Jaison, he is very reliable. Thank you!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
  },
  {
    name: 'Nick',
    // role: 'Founder, CryptoTrader Pro',
    content: 'Nice working with Jaison, he did the job well. I will hire him again',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
  },
  {
    name: 'Peter',
    // role: 'Product Manager, AI Solutions',
    content: 'Jaison did a good job helping us develop the Shopify part of a new app we were developing. The project was completed successfully and we plan to call on him for any updates.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop',
  },
  {
    name: 'Peter',
    // role: 'CTO, HealthTech Solutions',
    content: ' Started a new project in an environment we where not familiar with so we had to leave a lot of the decision making in the hands of Jaison and we are quite pleased with the results. Will definitely hire again.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
  },
  {
    name: 'Anton',
    // role: 'CTO, HealthTech Solutions',
    content: 'The freelancer was excellent to work with. Given the time difference he still made sure that we had some overlapping time every day to discuss things as needed. He follows instructions well and offers constructive suggestions to improve the project. He is backed by a great team so he does not get overwhelmed like we\'ve seen with other programmers. Will hire him again.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
  },
]
