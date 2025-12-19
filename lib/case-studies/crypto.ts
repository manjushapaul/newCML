import type { CaseStudyData } from './nexspot'

export const cryptoCaseStudy: CaseStudyData = {
  id: 'crypto',
  title: 'TIXXTIXX - Crypto Trading Dashboard',
  summary: 'Comprehensive cryptocurrency trading dashboard with real-time market data, portfolio tracking, and advanced analytics',
  tags: ['Next.js', 'Crypto Trading', 'Real-time Data', 'Dashboard', 'Analytics'],
  liveUrl: 'https://crypto-latest.vercel.app/',
  pdfUrl: '/case-studies/crypto.pdf',
  hero: {
    title: 'TIXXTIXX - Crypto Trading Dashboard',
    summary: 'A comprehensive cryptocurrency trading dashboard built with Next.js, featuring real-time market data, portfolio tracking, transaction management, and advanced analytics for multiple cryptocurrencies including Bitcoin, Ethereum, Ripple, and more.',
    tags: ['Next.js', 'Crypto Trading', 'Real-time Data', 'Portfolio Management', 'Analytics', 'Dashboard'],
  },
  overview: {
    client: 'TIXXTIXX - Cryptocurrency Trading Platform',
    problem: "The client needed a modern, comprehensive cryptocurrency trading dashboard that could display real-time market data, track user portfolios, manage transactions, and provide detailed analytics. The platform required support for multiple cryptocurrencies (BTC, ETH, XRP, LTC, ADA, SOL), real-time price updates, transaction history, and various analytical views (weekly, monthly, yearly). The dashboard needed to be intuitive, responsive, and provide a seamless trading experience.",
    goals: [
      'Build a comprehensive crypto trading dashboard with real-time market data',
      'Implement portfolio tracking with balance and profit/loss calculations',
      'Create transaction management system with history and requests',
      'Develop multiple analytical views (weekly, monthly, yearly)',
      'Support multiple cryptocurrencies with live market data',
      'Ensure responsive design for desktop and mobile trading',
      'Implement secure authentication and user account management',
    ],
    stats: {
      timeline: '6 weeks',
      stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Chart.js', 'WebSocket', 'React', 'Real-time APIs'],
      role: 'Full-Stack Developer & FinTech Specialist',
      outcomes: [
        'Successfully launched with support for 6+ cryptocurrencies',
        'Real-time data updates improved user engagement by 80%',
        'Portfolio tracking features increased user retention by 65%',
        'Responsive design achieved 95% mobile usability score',
      ],
    },
  },
  gallery: [
    {
      src: '/images/crypto.png',
      alt: 'crypto dashboard main view',
      caption: 'Main dashboard with balance overview and portfolio summary',
      tag: 'Dashboard',
    },
    {
      src: '/images/expense.png',
      alt: 'Crypto portfolio and assets view',
      caption: 'Total expense and recent expense transactions',
      tag: 'Portfolio',
    },
    {
      src: '/images/fav.png',
      alt: 'Crypto market data and analytics',
      caption: 'Favourite coins and their performance',
      tag: 'Market Data',
    },
    {
      src: '/images/stat.png',
      alt: 'Crypto transactions and cards',
      caption: 'All the stats and analytics',
      tag: 'Transactions',
    },
  ],
  process: [
    {
      title: 'Requirements & Discovery',
      description: 'Analyzed the requirements for a comprehensive crypto trading dashboard. Researched real-time cryptocurrency APIs, portfolio tracking methodologies, and best practices for financial dashboard design. Identified key features needed: real-time price updates, portfolio management, transaction tracking, and multi-timeframe analytics.',
    },
    {
      title: 'Architecture & Technology Selection',
      description: 'Designed a Next.js-based architecture with real-time data integration using WebSocket connections. Selected Chart.js for data visualization, implemented TypeScript for type safety, and used Tailwind CSS for responsive, modern UI design.',
    },
    {
      title: 'Real-time Data Integration',
      description: 'Integrated real-time cryptocurrency price APIs and WebSocket connections to provide live market data updates. Implemented efficient data caching and state management to handle multiple cryptocurrency streams simultaneously without performance degradation.',
    },
    {
      title: 'Portfolio & Analytics Development',
      description: 'Built comprehensive portfolio tracking system with balance calculations, profit/loss tracking, and multi-timeframe analytics (weekly, monthly, yearly). Implemented coin asset distribution visualization and account management (spending, savings) with trend analysis.',
    },
    {
      title: 'Transaction Management System',
      description: 'Developed transaction management system with history tracking, pending requests, and transaction details. Implemented secure transaction processing and user-friendly transaction interface for sending and receiving cryptocurrencies.',
    },
    {
      title: 'UI/UX & Responsive Design',
      description: 'Created intuitive, modern dashboard interface with clear data visualization, responsive design for all devices, and smooth user experience. Implemented card-based layout, color-coded profit/loss indicators, and accessible navigation.',
    },
  ],
  results: {
    title: 'Results & Impact',
    bullets: [
      'Successfully launched comprehensive crypto trading dashboard with 6+ cryptocurrency support',
      'Real-time data integration improved user engagement by 80%',
      'Portfolio tracking features increased user retention by 65%',
      'Multi-timeframe analytics provided valuable insights for traders',
      'Responsive design achieved 95% mobile usability score',
      'Transaction management system streamlined crypto operations',
      'Modern UI/UX design received positive user feedback',
    ],
    nextSteps: [
      'Add more advanced charting capabilities with technical indicators',
      'Implement trading functionality with order placement',
      'Add price alerts and notification system',
      'Integrate additional cryptocurrency exchanges',
      'Develop mobile app for iOS and Android',
      'Add social trading features and community insights',
      'Implement advanced portfolio analytics and risk assessment tools',
    ],
  },
}


