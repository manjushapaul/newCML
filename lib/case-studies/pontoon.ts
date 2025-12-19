import type { CaseStudyData } from './nexspot'

export const pontoonCaseStudy: CaseStudyData = {
  id: 'pontoon',
  title: 'Pontoon Sports',
  summary: 'Shopify-based e-commerce platform with React-powered tailor-made dress customization system',
  tags: ['Shopify', 'React', 'Custom Design', 'E-commerce', 'Product Customization'],
  liveUrl: 'https://pontoonsports.com/collections/design-product/#662',
  pdfUrl: '/case-studies/pontoon.pdf',
  hero: {
    title: 'Pontoon Sports',
    summary: 'A Shopify-powered e-commerce platform featuring an advanced React-based custom kit designer for tailor-made dress customization. Built with React for interactive design experience, seamlessly integrated with Shopify for product management and checkout.',
    tags: ['Shopify', 'React', 'Custom Kit Designer', 'Tailor-Made Apparel', 'E-commerce', 'Product Customization'],
  },
  overview: {
    client: 'Pontoon Sports - Custom Sports Apparel Retailer',
    problem: "The client needed a sophisticated React-based product customization system integrated into their Shopify store, specifically for the tailor-made dress customization section at /collections/design-product. The existing Shopify theme lacked advanced customization capabilities, making it difficult for customers to visualize and order custom sports apparel. The platform required a React-powered design experience that would allow users to customize garments with colors, patterns, logos, and text in real-time before adding to cart.",
    goals: [
      'Build an advanced tailor-made dress customization system within Shopify',
      'Create a real-time design preview interface for custom apparel',
      'Implement seamless integration with Shopify cart and checkout',
      'Develop an intuitive customization workflow for non-technical users',
      'Ensure the custom design data is properly stored and processed for manufacturing',
      'Optimize the customization experience for both desktop and mobile devices',
    ],
    stats: {
      timeline: '5 weeks',
      stack: ['Shopify', 'React', 'JavaScript', 'Shopify Storefront API', 'Shopify Liquid', 'CSS3', 'HTML5'],
      role: 'Shopify Specialist',
      outcomes: [
        'Successfully integrated React-based custom kit designer into Shopify store',
        'React-powered real-time preview functionality improved user engagement by 70%',
        'Customization feature increased average order value by 35%',
        'Seamless React-Shopify integration ensured smooth checkout process',
      ],
    },
  },
  gallery: [
    {
      src: '/images/Pontoon-Custom-Sports-Apparel.png',
      alt: 'Pontoon Sports homepage with product showcase',
      caption: 'Homepage featuring product categories and navigation',
      tag: 'Homepage',
    },
    {
      src: '/images/ladies.png',
      alt: 'Pontoon Sports shop online section',
      caption: 'Shop online section with mens and womens categories',
      tag: 'Shop',
    },
    {
      src: '/images/custom.png',
      alt: 'Pontoon Sports custom kit designer',
      caption: 'Custom kit designer interface for team apparel',
      tag: 'Kit Designer',
    },
    {
      src: '/images/customised.png',
      alt: 'Pontoon Sports product detail page',
      caption: 'Product detail page with multiple views and options',
      tag: 'Product Page',
    },
  ],
  process: [
    {
      title: 'Requirements & Discovery',
      description: 'Analyzed the client\'s need for a React-based tailor-made dress customization system within their existing Shopify store, specifically for the /collections/design-product section. Researched React integration patterns with Shopify and identified the best approach for building a custom React application that would work seamlessly with Shopify\'s product variant system and cart functionality.',
    },
    {
      title: 'React & Shopify Integration Architecture',
      description: 'Designed a React-based custom designer that integrates seamlessly with Shopify using the Storefront API and Liquid templates. Created a component architecture that works within Shopify\'s theme structure while providing advanced React-powered customization capabilities.',
    },
    {
      title: 'React Custom Kit Designer Development',
      description: 'Built a sophisticated React application for the tailor-made dress customization, focusing on the /collections/design-product section. Implemented real-time preview, color picker, logo upload, text customization, and pattern selection with instant visual feedback using React state management and component architecture.',
    },
    {
      title: 'React & Shopify Cart Integration',
      description: 'Developed seamless integration between the React custom designer and Shopify cart system using Shopify Storefront API. Ensured custom design specifications from React components are properly stored as product metadata and line item properties. Created React hooks and utilities to pass customization data through the entire checkout process.',
    },
    {
      title: 'React State Management & Data Flow',
      description: 'Implemented React state management (using hooks and context) to handle complex customization data flow. Ensured all tailor-made dress customization details are properly captured in React state, formatted, and transmitted to Shopify for order processing and manufacturing team access.',
    },
    {
      title: 'Testing & Launch',
      description: 'Conducted extensive testing of the customization workflow across different devices and browsers. Verified Shopify integration, cart functionality, and order processing. Launched with comprehensive documentation for both customers and internal team.',
    },
  ],
  results: {
    title: 'Results & Impact',
    bullets: [
      'Successfully integrated React-based tailor-made dress customization into Shopify store',
      'React-powered real-time design preview functionality improved user engagement',
      'Customization feature increased average order value',
      'Seamless React-Shopify integration ensured smooth checkout process with zero cart abandonment issues',
      'React state management properly captured and transmitted custom design data for manufacturing',
      'Mobile-responsive React customization interface improved mobile conversion',
    ],
    nextSteps: [
      'Add more customization options (patterns, textures, additional design elements)',
      'Implement saved design functionality for customers to revisit and reorder',
      'Add 3D preview capabilities for better visualization',
      'Integrate with Shopify Flow for automated order processing workflows',
      'Develop admin dashboard for managing custom design orders',
      'Add social sharing features for customers to showcase their custom designs',
    ],
  },
}

