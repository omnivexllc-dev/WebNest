import { ServiceItem, PortfolioItem, TestimonialItem, ProcessStep } from './types.ts';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'web-design',
    title: 'Website Design',
    description: 'Bespoke UI/UX design crafted to reflect your unique brand identity, engage visitors, and optimize conversion pathways.',
    iconName: 'Palette',
    benefits: ['Responsive layouts', 'Interactive prototypes', 'High-fidelity wireframes', 'Custom design systems']
  },
  {
    id: 'web-dev',
    title: 'Website Development',
    description: 'Robust, fast-loading, and secure websites developed using modern technologies (React, Next.js, Node.js, and TypeScript).',
    iconName: 'CodeXml',
    benefits: ['Clean & modular code', 'Performance optimized', 'High-end security standards', 'Scalable architecture']
  },
  {
    id: 'e-commerce',
    title: 'E-Commerce Development',
    description: 'Fully integrated online stores that provide smooth checkout flows, secure payment gateways, and intuitive inventory management.',
    iconName: 'ShoppingBag',
    benefits: ['Secure checkout (Stripe/PayPal)', 'Advanced product filtering', 'Automated sales reports', 'Multi-currency support']
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    description: 'User-centric interfaces engineered through user research, interactive wireframing, and rigorous usability testing.',
    iconName: 'Layers',
    benefits: ['Persona mapping', 'Interactive animations', 'Tailored user flows', 'Accessibility audit (WCAG)']
  },
  {
    id: 'seo',
    title: 'SEO Optimization',
    description: 'On-page and off-page optimization strategies to elevate search presence, increase organic traffic, and secure top rankings.',
    iconName: 'TrendingUp',
    benefits: ['Keyword taxonomy', 'Core Web Vitals tuning', 'Sitemap & robots configuration', 'Continuous analytics reporting']
  },
  {
    id: 'branding',
    title: 'Branding & Logo Design',
    description: 'Compelling brand strategy, visual identities, logos, and style guidelines that set your business apart in digital arenas.',
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
    challenge: 'ApexRetail suffered from a high shopping cart abandonment rate (68%) triggered by slow product catalog rendering speeds (4.8s page load times) and fragmented payment integrations that periodically dropped connection during peak sales periods.',
    solution: 'We engineered a React-based headless frontend combined with an Express API proxy, integrated global CDN caching for catalog listings, set up Redis-backed inventory sync, and deployed Stripe Checkout with automated payment retry routines.',
    results: [
      'Reduced global page load speed from 4.8s down to a steady 1.1s',
      'Lowered cart abandonment rates from 68% to 23%, boosting net revenue by 32%',
      'Safely processed over 50,000 concurrent checkout attempts during holiday sales events without failure'
    ]
  },
  {
    id: 'portfolio-2',
    title: 'Vanguard Construction Portal',
    category: 'Enterprise Portal',
    description: 'A heavy-equipment coordination, project scheduling, and digital blueprint compliance suite designed for offline field foremen.',
    longDescription: 'Vanguard Builders required a unified enterprise platform to synchronize raw building logs, active materials dispatch, blueprint file changes, and safety checklists between field construction staff and corporate managers.',
    image: 'Enterprise structural workflow manager with interactive schedule timelines',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'IndexedDB', 'Node.js', 'PostgreSQL'],
    stats: { label: 'Idle Delay Reduction', value: '34%' },
    status: 'Completed',
    challenge: 'Vanguard Builders lacked unified dispatch tracking for their expensive fleet of construction apparatus, resulting in costly operator idle delays, missing material checklists, and manual paper blueprints that quickly became stale.',
    solution: 'We developed an offline-first Progressive Web App (PWA) incorporating local storage sync via IndexedDB, custom dispatch scheduling layouts, and high-performance interactive blueprint viewers with real-time vector annotations.',
    results: [
      'Eliminated 100% of physical paper logging sheets, replacing them with offline-first tablet interfaces',
      'Saved an estimated $120,000 per multi-acre project site by optimizing heavy-equipment dispatching',
      'Increased site safety checklist submission compliance logs by over 400%'
    ]
  },
  {
    id: 'portfolio-3',
    title: 'SwiftInsure Quote Engine',
    category: 'Fintech / Insurtech',
    description: 'A lightning-fast insurance quote estimator that calculates dynamic eligibility criteria, risk factors, and policy estimates in under 30 seconds.',
    longDescription: 'SwiftInsure digital onboarding system processes complicated, regulated questionnaires through dynamic mathematical formula blocks to output customizable coverage tiers with instant pricing.',
    image: 'Minimalist insurtech onboarding interface featuring dynamic calculation components',
    tech: ['React', 'Highcharts', 'Tailwind CSS', 'Zustand', 'Express API'],
    stats: { label: 'Onboarding Duration', value: '< 30s' },
    status: 'Completed',
    challenge: 'Traditional insurance quote qualification at SwiftInsure took up to 3 business days, requiring extensive client phone calls and exhaustive manual risk worksheets, which lost dozens of prospective online conversions daily.',
    solution: 'We engineered an interactive multi-step calculator with customizable, high-speed calculation logic. It parses risk datasets instantly and presents detailed options with rich visual charts illustrating premium benefits.',
    results: [
      'Successfully qualified 92% of users automatically without human agent intervention required',
      'Expanded total weekly premium quote registrations by 210%',
      'Decreased user onboarding costs by 58% in the first three months of operation'
    ]
  },
  {
    id: 'portfolio-4',
    title: 'Zenith Stock Analytics Platform',
    category: 'SaaS Platform',
    description: 'A high-velocity transaction and analytical telemetry dashboard mapping live market ticks, portfolios, and automatic asset alert tracking.',
    longDescription: 'Zenith requested a high-performance web dashboard capable of plotting real-time stock indexes, executing instant portfolio stress tests, and dispatching alert notifications to hundreds of active traders with zero buffer latency.',
    image: 'Financial market analysis module displaying multiple color-coded candles and indexes',
    tech: ['React', 'TypeScript', 'D3.js', 'WebSockets', 'Web Workers', 'Express'],
    stats: { label: 'Chart Render Delay', value: '< 8ms' },
    status: 'Completed',
    challenge: 'Plotting multiple high-frequency stock tickers streams over WebSockets caused severe browser thread blocking and UI freezing on typical laptop displays.',
    solution: 'We designed a custom rendering pipeline offloading intense mathematical analysis to background Web Workers, updating an optimized canvas layer with dynamic virtualized tables to limit repaints.',
    results: [
      'Achieved a super-responsive tick render speed of under 8 milliseconds at 10,000 ticks/sec',
      'Allowed client portfolios mock audits to calculate in under 120ms with Rust-compiled assemblies',
      'Scaled system architecture to easily support up to 15,000 daily concurrent traders'
    ]
  },
  {
    id: 'portfolio-5',
    title: 'LuxeSpace Intelligent Real Estate Portal',
    category: 'Web Application',
    description: 'An immersive digital listing search engine with vector masterplans, structural layout maps, and online agent booking triggers.',
    longDescription: 'LuxeSpace is a premium residential property agency. We designed a gorgeous, typography-led real estate experience enabling high-net-worth buyers to filter available units via interactive maps and schedule private viewings instantly.',
    image: 'Elegant real estate catalog highlighting luxury real-estate with custom maps',
    tech: ['Next.js', 'Tailwind CSS', 'Google Maps API', 'Framer Motion', 'MongoDB'],
    stats: { label: 'Lead Conversions', value: '+54%' },
    status: 'Completed',
    challenge: 'Property searchers felt traditional gallery grids were sterile and unhelpful, lacking real-world geographical perspective and neighborhood context required for premium high-investment purchases.',
    solution: 'We integrated modern, beautifully stylized map overlays tracking local points of interest, nearby educational facilities, and interactive floor plans showing accurate sun exposure angles.',
    results: [
      'Grew scheduled physical site tours by 54% due to immersive map filters',
      'Assisted in selling out a $45M luxury condominium community 2 months ahead of target schedule',
      'Increased average prospective buyer session time on site to over 6 minutes'
    ]
  },
  {
    id: 'portfolio-6',
    title: 'CarePulse Integrated Medical Clinic Suite',
    category: 'Healthcare Solution',
    description: 'A secure, HIPAA-compliant patient dashboard streamlining check-in forms, doctor availability, and online medical history management.',
    longDescription: 'CarePulse required an incredibly simple, accessible patient portal to automate lobby check-ins, medical questionnaires, and direct physician calendar reservations without manual administrative overhead.',
    image: 'Patient dashboard interface displaying upcoming medical checkups and logs',
    tech: ['React', 'Tailwind CSS', 'Calendar Sync API', 'Express', 'NodeMailer', 'Supabase'],
    stats: { label: 'Intake Processing', value: '-80% Time' },
    status: 'Completed',
    challenge: 'Long check-in queues, back-and-forth scheduling phone calls, and manual transcription of messy paper forms resulted in clinician fatigue and elevated data transcription errors.',
    solution: 'We built an ultra-clean, high-contrast, accessible patient dashboard coupled with dynamic intake validations, deep doctor-calendar syncing, and automated SMS reminder streams.',
    results: [
      'Reduced typical lobby patience intake registration times from 20 minutes to under 4 minutes',
      'Lowered appointment cancellations and missed appointments by 67% using automated smart reminders',
      'Saved administrative staff an estimated 22 hours per week in patient check-in duties'
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
    title: 'Modern Designs',
    description: 'We craft beautiful, visually distinctive interfaces that reinforce high brand authority and build trust instantly.',
    icon: 'Sparkles'
  },
  {
    title: 'Mobile Responsive',
    description: 'Our layouts render flawlessly on mobile devices, small tablets, medium notebooks, and high-DPI desktop screens.',
    icon: 'Smartphone'
  },
  {
    title: 'SEO Optimized',
    description: 'We implement semantic index structures, meta tags, and structured schema so Google indexes and ranks you seamlessly.',
    icon: 'Compass'
  },
  {
    title: 'Fast Loading Websites',
    description: 'We keep script payloads light, compress multimedia, use smart preloading, and target 95+ score on core Web Vitals.',
    icon: 'Zap'
  },
  {
    title: 'Dedicated Support',
    description: 'We don\'t disappear after launch. Our administrators support, patch, and scale your tech footprint continuously.',
    icon: 'LifeBuoy'
  },
  {
    title: 'Affordable Pricing',
    description: 'We deliver world-class digital agency engineering tailored to local and global budgets with fully transparent packages.',
    icon: 'DollarSign'
  }
];
