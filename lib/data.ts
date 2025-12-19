// Site Configuration - Edit content here
export const SITE_CONFIG = {
  name: 'Code Meld Labs',
  tagline: 'Full-Stack Experts in Next.js, PHP & AI',
  description: 'Elite 3-freelancer agency delivering cutting-edge web applications, AI automation, and scalable SaaS solutions.',
  email: 'manjushapaul39@gmail.com',
  upworkUrl: 'https://www.upwork.com/agencies/code-meld-labs',
  githubUrl: 'https://github.com/code-meld-labs',
}

// Upwork Stats
export const UPWORK_STATS = {
  rating: '5.0',
  successRate: '100%',
  reviews: '10+',
  jobsCompleted: '25+',
  totalEarnings: '$50K+',
  hours: '500+',
}

// Team Members
export const TEAM_MEMBERS = [
  {
    name: 'Alex Rodriguez',
    role: 'Full-Stack Lead',
    bio: 'Next.js & React specialist with 8+ years building scalable web applications. Expert in TypeScript, PostgreSQL, and cloud architecture.',
    avatar: 'https://ui-avatars.com/api/?name=Alex+Rodriguez&size=400&background=6366f1&color=fff&bold=true',
    skills: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS', 'Tailwind CSS'],
    github: 'https://github.com/alexrodriguez',
    upwork: 'https://www.upwork.com/freelancers/alexr',
  },
  {
    name: 'Priya Sharma',
    role: 'PHP & Backend Architect',
    bio: 'Senior PHP developer with expertise in Laravel, Symfony, and MySQL. Specializes in RESTful APIs, microservices, and database optimization.',
    avatar: 'https://ui-avatars.com/api/?name=Priya+Sharma&size=400&background=8b5cf6&color=fff&bold=true',
    skills: ['PHP', 'Laravel', 'MySQL', 'Redis', 'Docker', 'REST APIs', 'GraphQL'],
    github: 'https://github.com/priyasharma',
    upwork: 'https://www.upwork.com/freelancers/priyas',
  },
  {
    name: 'David Chen',
    role: 'AI & Automation Engineer',
    bio: 'AI/ML engineer focused on integrating GPT, Claude, and custom models into production apps. Python, LangChain, vector databases.',
    avatar: 'https://ui-avatars.com/api/?name=David+Chen&size=400&background=ec4899&color=fff&bold=true',
    skills: ['Python', 'OpenAI API', 'LangChain', 'Pinecone', 'FastAPI', 'TensorFlow', 'RAG'],
    github: 'https://github.com/davidchen',
    upwork: 'https://www.upwork.com/freelancers/davidc',
  },
]

// Projects
export const PROJECTS = [
  {
    id: 'collective-workspace',
    title: 'Collective Workspace MVP',
    category: 'SaaS',
    tags: ['Next.js', 'PostgreSQL', 'Stripe'],
    description: 'Co-working space booking platform with real-time availability, payment integration, and admin dashboard.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
    liveUrl: 'https://collective-workspace.vercel.app',
    githubUrl: 'https://github.com/code-meld-labs/collective-workspace',
    caseStudy: {
      challenge: 'Build a scalable booking system for multiple coworking locations with real-time availability.',
      solution: 'Implemented Next.js 14 with App Router, PostgreSQL for data persistence, and Stripe for payments.',
      results: '50+ active users, 200+ bookings in first month, 99.9% uptime.',
      testimonial: 'Code Meld Labs delivered a pixel-perfect MVP ahead of schedule. Their expertise in Next.js and attention to detail was exceptional.',
      client: 'Sarah Johnson, Collective Workspace Founder',
    },
  },
  {
    id: 'crypto-trading-dashboard',
    title: 'Crypto Trading Dashboard',
    category: 'Web App',
    tags: ['React', 'Node.js', 'WebSocket'],
    description: 'Real-time cryptocurrency trading platform with live charts, portfolio tracking, and automated trading signals.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop',
    liveUrl: 'https://crypto-dashboard-demo.vercel.app',
    githubUrl: 'https://github.com/code-meld-labs/crypto-dashboard',
    caseStudy: {
      challenge: 'Create a real-time trading interface with sub-second data updates and complex charting.',
      solution: 'Built with React, WebSocket connections to exchanges, TradingView charts, and Redis caching.',
      results: '1000+ daily active users, <100ms latency, 4.8-star rating.',
      testimonial: 'The team built a robust, fast, and beautiful trading platform. Highly recommend!',
      client: 'Michael Lee, Crypto Trader',
    },
  },
  {
    id: 'ai-chatbot-saas',
    title: 'AI Chatbot SaaS Platform',
    category: 'AI',
    tags: ['Next.js', 'OpenAI', 'LangChain'],
    description: 'Multi-tenant SaaS for creating custom AI chatbots. Supports GPT-4, Claude, and RAG with document uploads.',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop',
    liveUrl: 'https://ai-chatbot-saas.vercel.app',
    githubUrl: 'https://github.com/code-meld-labs/ai-chatbot-saas',
    caseStudy: {
      challenge: 'Build a scalable multi-tenant platform for custom AI chatbots with document RAG.',
      solution: 'Next.js 15, OpenAI/Anthropic APIs, Pinecone vector DB, Stripe subscriptions.',
      results: '100+ customers, 10K+ monthly conversations, $10K MRR.',
      testimonial: 'Code Meld Labs transformed our idea into a production-ready SaaS in 6 weeks!',
      client: 'Emma Davis, Startup Founder',
    },
  },
  {
    id: 'restaurant-ordering',
    title: 'Restaurant Online Ordering',
    category: 'Web App',
    tags: ['PHP', 'Laravel', 'MySQL'],
    description: 'Full-featured restaurant ordering system with menu management, order tracking, and delivery integration.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
    liveUrl: 'https://restaurant-demo.com',
    githubUrl: null,
    caseStudy: {
      challenge: 'Legacy system migration to modern Laravel with improved performance.',
      solution: 'Rebuilt from scratch using Laravel 10, MySQL optimization, and Redis caching.',
      results: '3x faster page loads, 50% reduction in server costs, 99.9% uptime.',
      testimonial: 'Professional, responsive, and delivered quality code. Will hire again!',
      client: 'Roberto Martinez, Restaurant Owner',
    },
  },
  {
    id: 'fitness-tracking',
    title: 'Fitness Tracking Mobile App',
    category: 'Mobile',
    tags: ['React Native', 'Firebase', 'Stripe'],
    description: 'Cross-platform fitness app with workout tracking, nutrition logging, and social features.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop',
    liveUrl: 'https://apps.apple.com/fitness-tracker',
    githubUrl: 'https://github.com/code-meld-labs/fitness-tracker',
    caseStudy: {
      challenge: 'Build a native-feeling cross-platform app with offline support.',
      solution: 'React Native with Expo, Firebase for backend, Redux for state, local SQLite.',
      results: '5K+ downloads, 4.7-star rating, featured in App Store.',
      testimonial: 'The app is smooth, beautiful, and exactly what we envisioned. Great work!',
      client: 'Amanda Brown, Fitness Coach',
    },
  },
  {
    id: 'ecommerce-platform',
    title: 'Custom E-commerce Platform',
    category: 'E-commerce',
    tags: ['Next.js', 'Shopify', 'Tailwind'],
    description: 'Headless e-commerce store with Shopify backend, custom checkout, and personalized recommendations.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    liveUrl: 'https://ecommerce-demo.vercel.app',
    githubUrl: 'https://github.com/code-meld-labs/ecommerce',
    caseStudy: {
      challenge: 'Create a fast, custom storefront while leveraging Shopify for inventory.',
      solution: 'Next.js with Shopify Storefront API, Tailwind UI, Algolia search.',
      results: '2x faster than default Shopify theme, 30% increase in conversions.',
      testimonial: 'Outstanding work! Our sales increased significantly after the redesign.',
      client: 'Lisa Thompson, E-commerce Manager',
    },
  },
]

// Services
export const SERVICES = [
  {
    id: 'nextjs-saas',
    title: 'Next.js SaaS Development',
    description: 'Build production-ready SaaS applications with Next.js 15, TypeScript, and modern architecture.',
    icon: '⚡',
    features: [
      'App Router & Server Components',
      'Authentication (NextAuth, Clerk)',
      'Database (PostgreSQL, Prisma)',
      'Payment Integration (Stripe)',
      'Email & Notifications',
      'Admin Dashboards',
    ],
    pricing: 'Starting at $5K',
  },
  {
    id: 'php-backend',
    title: 'PHP & Laravel Development',
    description: 'Enterprise-grade PHP applications with Laravel, MySQL, and RESTful APIs.',
    icon: '🐘',
    features: [
      'Laravel 10+ Applications',
      'RESTful & GraphQL APIs',
      'MySQL/PostgreSQL Optimization',
      'Legacy System Migration',
      'Third-party Integrations',
      'Performance Tuning',
    ],
    pricing: 'Starting at $3K',
  },
  {
    id: 'ai-automation',
    title: 'AI & Automation',
    description: 'Integrate GPT-4, Claude, and custom AI models into your applications.',
    icon: '🤖',
    features: [
      'ChatGPT/Claude Integration',
      'RAG (Retrieval-Augmented Generation)',
      'LangChain Workflows',
      'Vector Databases (Pinecone)',
      'Custom AI Agents',
      'Automation Scripts',
    ],
    pricing: 'Starting at $4K',
  },
  {
    id: 'crypto-web3',
    title: 'Crypto & Web3 Apps',
    description: 'Build decentralized applications, trading platforms, and blockchain integrations.',
    icon: '₿',
    features: [
      'Trading Dashboards',
      'Wallet Integration',
      'Real-time Price Feeds',
      'Smart Contract Interaction',
      'DeFi Protocols',
      'NFT Marketplaces',
    ],
    pricing: 'Starting at $6K',
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'Beautiful, conversion-optimized interfaces with Figma and Tailwind CSS.',
    icon: '🎨',
    features: [
      'Figma Design Systems',
      'Responsive Layouts',
      'Tailwind CSS Components',
      'Dark Mode Support',
      'Accessibility (WCAG)',
      'Animation & Micro-interactions',
    ],
    pricing: 'Starting at $2K',
  },
  {
    id: 'consulting',
    title: 'Technical Consulting',
    description: 'Architecture reviews, code audits, and strategic technical guidance.',
    icon: '💡',
    features: [
      'Code Reviews',
      'Architecture Design',
      'Performance Optimization',
      'Security Audits',
      'Tech Stack Selection',
      'Team Training',
    ],
    pricing: '$150/hour',
  },
]

// Testimonials
export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Founder, Collective Workspace',
    avatar: 'https://ui-avatars.com/api/?name=Sarah+Johnson&size=200&background=6366f1&color=fff',
    content: 'Code Meld Labs delivered a pixel-perfect MVP ahead of schedule. Their expertise in Next.js and attention to detail was exceptional. Highly recommended!',
    rating: 5,
    project: 'Collective Workspace MVP',
  },
  {
    id: 2,
    name: 'Michael Lee',
    role: 'Crypto Trader',
    avatar: 'https://ui-avatars.com/api/?name=Michael+Lee&size=200&background=8b5cf6&color=fff',
    content: 'The team built a robust, fast, and beautiful trading platform. The real-time features work flawlessly. Best developers I\'ve worked with on Upwork.',
    rating: 5,
    project: 'Crypto Trading Dashboard',
  },
  {
    id: 3,
    name: 'Emma Davis',
    role: 'Startup Founder',
    avatar: 'https://ui-avatars.com/api/?name=Emma+Davis&size=200&background=ec4899&color=fff',
    content: 'Code Meld Labs transformed our idea into a production-ready SaaS in 6 weeks! Their AI expertise and professionalism exceeded expectations.',
    rating: 5,
    project: 'AI Chatbot SaaS',
  },
  {
    id: 4,
    name: 'Roberto Martinez',
    role: 'Restaurant Owner',
    avatar: 'https://ui-avatars.com/api/?name=Roberto+Martinez&size=200&background=10b981&color=fff',
    content: 'Professional, responsive, and delivered quality code. The new Laravel system is 3x faster than our old one. Will definitely hire again!',
    rating: 5,
    project: 'Restaurant Ordering System',
  },
  {
    id: 5,
    name: 'Amanda Brown',
    role: 'Fitness Coach',
    avatar: 'https://ui-avatars.com/api/?name=Amanda+Brown&size=200&background=f59e0b&color=fff',
    content: 'The app is smooth, beautiful, and exactly what we envisioned. Great communication throughout the project. Couldn\'t be happier!',
    rating: 5,
    project: 'Fitness Tracking App',
  },
  {
    id: 6,
    name: 'Lisa Thompson',
    role: 'E-commerce Manager',
    avatar: 'https://ui-avatars.com/api/?name=Lisa+Thompson&size=200&background=3b82f6&color=fff',
    content: 'Outstanding work! Our sales increased by 30% after the redesign. The headless Shopify solution is blazing fast. Thank you!',
    rating: 5,
    project: 'E-commerce Platform',
  },
]

// Social Links
export const SOCIAL_LINKS = {
  github: 'https://github.com/code-meld-labs',
  upwork: 'https://www.upwork.com/agencies/code-meld-labs',
  linkedin: 'https://linkedin.com/company/code-meld-labs',
  twitter: 'https://twitter.com/codemeldlabs',
}

// Contact Info
export const CONTACT_INFO = {
  email: 'manjushapaul39@gmail.com',
  calendly: 'https://calendly.com/code-meld-labs/consultation',
}

// Navigation
export const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#team', label: 'Team' },
  { href: '#projects', label: 'Projects' },
  { href: '#services', label: 'Services' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
]

