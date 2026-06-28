import { ServiceItem, PortfolioItem, TestimonialItem, ProcessStep } from './types.ts';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'web-design',
    title: 'Website Designer',
    description: 'Work with a premier Website Designer to craft beautiful custom layouts, interactive UI/UX wireframes, and conversion-oriented responsive visual designs.',
    iconName: 'Palette',
    benefits: ['Responsive layouts', 'Interactive prototypes', 'High-fidelity wireframes', 'Custom design systems']
  },
  {
    id: 'web-dev',
    title: 'Web Development Services',
    description: 'Get professional Web Development Services from our leading Website Development Company, building blazing-fast, secure, and responsive web applications.',
    iconName: 'CodeXml',
    benefits: ['Clean & modular code', 'Performance optimized', 'High-end security standards', 'Scalable architecture']
  },
  {
    id: 'e-commerce',
    title: 'E-commerce Website Development',
    description: 'Grow your digital retail presence with custom E-commerce Website Development, secure payments, automated inventory, and sub-second catalog speeds.',
    iconName: 'ShoppingBag',
    benefits: ['Secure checkout (Stripe/PayPal)', 'Advanced product filtering', 'Automated sales reports', 'Multi-currency support']
  },
  {
    id: 'mobile-app',
    title: 'Mobile App Development',
    description: 'Our custom Mobile App Development builds responsive, intuitive, and native-feeling iOS & Android mobile software for seamless touch-based operations.',
    iconName: 'Layers',
    benefits: ['Cross-platform scaling', 'Interactive touch flows', 'API & database integration', 'Push notification alerts']
  },
  {
    id: 'seo',
    title: 'SEO Services',
    description: 'Comprehensive SEO Services incorporating local search citations, semantic HTML markup, Google schema mapping, and performance tuning.',
    iconName: 'TrendingUp',
    benefits: ['Keyword taxonomy', 'Core Web Vitals tuning', 'Sitemap & robots configuration', 'Continuous analytics reporting']
  },
  {
    id: 'branding',
    title: 'Digital Marketing Agency',
    description: 'We act as your dedicated Digital Marketing Agency, integrating brand strategy, visual assets, analytics tracking, and social positioning for conversion.',
    iconName: 'Award',
    benefits: ['Custom vector logos', 'Color theory blueprinting', 'Typography pairings', 'Complete digital brand books']
  },
  {
    id: 'ai-solutions',
    title: 'AI Chatbot Solutions',
    description: 'State-of-the-art intelligent virtual assistants trained on your business data to provide 24/7 client onboarding and lead generation.',
    iconName: 'Bot',
    benefits: ['LLM training and fine-tuning', 'Natural language processing', 'API & CRM automation', 'Instant response & leads capture']
  },
  {
    id: 'maintenance',
    title: 'Website Maintenance',
    description: 'Proactive management, daily cloud backups, real-time security patches, and performance optimizations to keep systems flawless.',
    iconName: 'Gauge',
    benefits: ['24/7 server monitoring', 'Regular software updates', 'Instant bug fixing', 'Content update support']
  }
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: 'portfolio-1',
    title: 'ApexRetail Headless E-Commerce Suite',
    category: 'E-Commerce',
    description: 'A custom headless e-commerce store with an ultra-fast dynamic catalog, robust Stripe payment integrations, and direct automated inventory sync.',
    longDescription: 'ApexRetail is a high-volume shopping experience configured to run entirely decoupled from traditional hosting constraints. By re-architecting their checkout funnel with motion-guided step-by-step progress and modular edge-caching configurations, catalog navigation became instant and client friction plummeted.',
    image: 'Headed mockup of Luxe Retail Web application with product filter slideouts',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Express', 'Stripe API', 'Redis'],
    stats: { label: 'Cart Abandonment Drop', value: '-45%' },
    status: 'Completed',
    challenge: 'ApexRetail (owned by Apex Group plc, Retail Sector) suffered from a high shopping cart abandonment rate (68%) triggered by slow product catalog rendering speeds (4.8s page load times) and fragmented payment integrations that periodically dropped connections during peak sales periods.',
    solution: 'We engineered a React-based headless frontend combined with an Express API proxy, integrated global CDN caching for catalog listings, set up Redis-backed inventory sync, and deployed Stripe Checkout with automated payment retry routines.',
    results: [
      'Project Timeline: Delivered fully in 5 weeks',
      'Reduced global page load speed from 4.8s down to a steady 1.1s',
      'Lowered cart abandonment rates from 68% to 23%, boosting net sales revenue by 32%',
      'Safely processed over 50,000 concurrent checkout attempts during holiday sales events without failure'
    ]
  },
  {
    id: 'portfolio-2',
    title: 'FinTrust Global Banking Portal',
    category: 'Fintech / Insurtech',
    description: 'A lightning-fast banking eligibility calculator and customer onboarding suite that processes complex risk and regulatory vectors in under 30 seconds.',
    longDescription: 'FinTrust International required a highly secure, high-performance customer onboarding engine to calculate dynamic credit ratings, parse complex loan qualification questionnaires, and output customized banking tiers instantly.',
    image: 'Minimalist insurtech onboarding interface featuring dynamic calculation components',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Express API', 'D3.js'],
    stats: { label: 'Onboarding Costs', value: '-58%' },
    status: 'Completed',
    challenge: 'FinTrust International\'s legacy retail banking onboarding pipeline took up to 3 business days, requiring extensive human phone call verifications and exhaustive manual risk worksheets, losing dozens of qualified credit card and loan applicants daily.',
    solution: 'We engineered an interactive secure wizard with real-time risk evaluation calculators, customized validation APIs, secure encrypted payload storage, and clean dynamic visual data charts to guide banking candidates.',
    results: [
      'Project Timeline: Developed and deployed in 8 weeks',
      'Successfully pre-qualified 92% of new applicants automatically without manual representative audits',
      'Reduced average onboarding cost overhead by 58% in the first quarter post-launch',
      'Boosted first-time login and digital bank account activations by 210%'
    ]
  },
  {
    id: 'portfolio-3',
    title: 'AeroSync Aviation Logistics & Ground Dispatch',
    category: 'Enterprise Portal',
    description: 'A heavy-equipment coordination, flight dispatch, and ground support portal for airport terminal operations.',
    longDescription: 'AeroSync Aviation ground managers required a unified enterprise terminal system to synchronize active airplane refueling logs, materials dispatch, compliance forms, and safety check procedures across runways.',
    image: 'Enterprise structural workflow manager with interactive schedule timelines',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'IndexedDB', 'Node.js', 'PostgreSQL'],
    stats: { label: 'Ground Idle Delays', value: '-34%' },
    status: 'Completed',
    challenge: 'AeroSync airport operators lacked centralized coordination for runway fueling vehicles and baggage lifters, causing aircraft turnaround delays and high fuel burn rates on terminal aprons.',
    solution: 'We developed an offline-first mobile-responsive progressive web interface incorporating robust local storage synchronization via IndexedDB, custom dispatch scheduling timelines, and high-frequency real-time ground alerts.',
    results: [
      'Project Timeline: Completed and launched in 10 weeks',
      'Reduced aircraft ground idle turnaround delays by 34% across 4 major terminal hubs',
      'Saved an estimated $240,000 per airport terminal per year in operating overhead costs',
      'Achieved a 400% increase in timely ground safety pre-clearance logs compliance'
    ]
  },
  {
    id: 'portfolio-4',
    title: 'HimalayaFresh FMCG Supply Chain Hub',
    category: 'SaaS Platform',
    description: 'A high-velocity transaction and analytical supply coordinator mapping direct supplier-to-retailer distribution channels.',
    longDescription: 'HimalayaFresh (Fast Moving Consumer Goods) requested a high-performance web dashboard capable of plotting real-time supplier stocks, logistics transit, and automated inventory allocation rules with zero buffer latency.',
    image: 'Financial market analysis module displaying multiple color-coded candles and indexes',
    tech: ['React', 'TypeScript', 'WebSockets', 'Web Workers', 'Express', 'Redis'],
    stats: { label: 'Transit Delay Drop', value: '-42%' },
    status: 'Completed',
    challenge: 'FMCG distribution managers faced severe tracking delays in bulk dairy and fresh product shipments, resulting in spoilage and stockouts across hundreds of active retail stores.',
    solution: 'We built a high-speed supply chain telemetry platform that updates inventory levels in real-time over WebSockets, optimizing delivery routes and predicting supplier deficits using integrated scheduling analytics.',
    results: [
      'Project Timeline: Delivered fully in 6 weeks',
      'Reduced transit distribution delays from farm-to-shelf by 42%',
      'Improved inventory shipping accuracy to an unprecedented 99.8% across West Bengal',
      'Boosted direct retail distributor enrollment by 145% in the first 90 days'
    ]
  }
];

export const PROCESS_DATA: ProcessStep[] = [
  {
    step: 1,
    title: 'Consultation',
    description: 'We sit down with you to explore your targets, research competitors, analyze challenges, and map out the vision.',
    duration: 'Week 1',
    details: ['Discover commercial goals', 'Identify target audience', 'Audit existing properties', 'Brainstorm tech stack options']
  },
  {
    step: 2,
    title: 'Planning',
    description: 'We compile a rigorous project specification, timeline framework, site maps, and software structural blueprints.',
    duration: 'Week 1-2',
    details: ['Detailed software requirements spec', 'Information architecture map', 'Budget and milestones timeline', 'Risk mitigation guide']
  },
  {
    step: 3,
    title: 'Design',
    description: 'Our creative team designs custom interactive prototypes, typography systems, color specs, and asset banks.',
    duration: 'Week 2-3',
    details: ['High fidelity Figma layouts', 'Custom visual component styles', 'Interactive user prototypes', 'Continuous feedback alignment']
  },
  {
    step: 4,
    title: 'Development',
    description: 'Our developers write semantic, lightweight, and responsive React/Node.js code following the highest standards.',
    duration: 'Week 3-5',
    details: ['TypeScript-first implementation', 'Mobile responsive styling', 'API routes and databases', 'Fluid client state managers']
  },
  {
    step: 5,
    title: 'Testing',
    description: 'We execute comprehensive unit scripts, responsiveness tests on 15+ devices, speed tuning, and secure data testing.',
    duration: 'Week 5',
    details: ['Cross-browser layout audit', 'Vulnerability and secure shell checks', 'Google Lighthouse scoring optimization', 'User flow sandbox tests']
  },
  {
    step: 6,
    title: 'Launch',
    description: 'We configure optimal production servers (e.g. Cloud Run, Vercel), push schemas, verify redirects, and lift off.',
    duration: 'Week 6',
    details: ['Domain DNS hosting configuration', 'Production schema seeding', 'Cache control & CDN setups', 'Search engines indexing request']
  },
  {
    step: 7,
    title: 'Support',
    description: 'We stand by your side post-launch with 24/7 system health updates, cloud backups, and content updates.',
    duration: 'Ongoing',
    details: ['Regular daily cold backups', 'Security vulnerability patches', 'Performance optimizations', 'Strategic digital updates']
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Anoop Sharma',
    role: 'Founder & CEO',
    company: 'AgroGreen India',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120',
    text: 'WebNest took our direct farm-to-supplier plan and created a stellar platform. Farmer enrollment shot up. Excellent design depth and real engineering commitment!',
    rating: 5
  },
  {
    id: 'test-2',
    name: 'Sarah Jenkins',
    role: 'VP of Product Marketing',
    company: 'PulseSaaS Corp',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120',
    text: 'WebNest is simply outstanding. They turned a convoluted dashboard into an incredibly intuitive UI that clients immediately praised. Our inbound conversion rates have never been better.',
    rating: 5
  },
  {
    id: 'test-3',
    name: 'Vikram Sen',
    role: 'Director of Technology',
    company: 'West Bengal Fintech Hub',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120',
    text: 'WebNest engineered our backend APIs, set up connection pools, and created a mobile checkout that confirms payments under 200ms. Exceptional craftsmanship.',
    rating: 5
  }
];

export const WHY_CHOOSE_US_DATA = [
  {
    title: 'Website Designer Excellence',
    description: 'Work with a top-rated Website Designer to create bespoke, pixel-perfect user interfaces that build high brand authority and establish trust instantly.',
    icon: 'Sparkles'
  },
  {
    title: 'Mobile App Development',
    description: 'From native-grade Mobile App Development to responsive liquid web views, we build secure, touch-optimized software for all smartphones and tablets.',
    icon: 'Smartphone'
  },
  {
    title: 'SEO Services & Strategy',
    description: 'Our expert on-page and off-page SEO Services implement semantic HTML, local schemas, XML sitemaps, and robots.txt rules so Google ranks you prominently.',
    icon: 'Compass'
  },
  {
    title: 'Web Development Services',
    description: 'Our fast Web Development Services from a leading Website Development Company utilize React and code-splitting to ensure Google PageSpeed scores above 90.',
    icon: 'Zap'
  },
  {
    title: 'E-commerce Website Development',
    description: 'Comprehensive E-commerce Website Development support including secure payment gateways, database scale audits, and ongoing backend optimizations.',
    icon: 'LifeBuoy'
  },
  {
    title: 'Digital Marketing Agency',
    description: 'As a full-stack Digital Marketing Agency, we offer flexible, result-driven conversion strategies tailored for maximum return on investment.',
    icon: 'DollarSign'
  }
];
