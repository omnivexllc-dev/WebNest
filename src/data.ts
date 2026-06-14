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
    title: 'Pulse Analytics',
    category: 'SaaS Platform',
    description: 'A cutting-edge visual dashboard helping modern enterprises visualize high-velocity streaming sales and advertising metrics.',
    longDescription: 'Pulse Analytics is an enterprise-grade web application equipped with interactive maps, customized metric charts, and downloadable CSV summaries. We designed a clean dark theme utilizing premium typography and micro-animations to highlight real-time streaming pipelines.',
    image: 'SaaS Analytics Platform Dashboard featuring interactive multi-series area charts',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts', 'Express'],
    stats: { label: 'Inbound Growth', value: '+340%' },
    status: 'Completed'
  },
  {
    id: 'portfolio-2',
    title: 'Fintech DexPay Logo',
    category: 'E-commerce / Fintech',
    description: 'An optimized mobile-first checkout gateway integrating multiple payment providers with sub-millisecond payment confirmation.',
    longDescription: 'DexPay represents high craftsmanship in transactional design. By redesigning their checkout funnel with motion-guided step-by-step progress and integrated regional payment solutions, checkout friction plummeted.',
    image: 'Fintech Payment Gateway interface on mobile and tablet devices',
    tech: ['Next.js', 'Tailwind', 'Stripe API', 'Zustand', 'PostgreSQL'],
    stats: { label: 'Conversion Lift', value: '+42.5%' },
    status: 'Completed'
  },
  {
    id: 'portfolio-3',
    title: 'AgroGreen Marketplace',
    category: 'E-Commerce',
    description: 'A sustainable digital marketplace enabling local farmers to list organic produce and sell directly to metro grocery suppliers.',
    longDescription: 'AgroGreen supports India\'s organic farmers. Featuring geolocation-cached maps of nearby storage nodes, real-time demand charts, and localized WhatsApp message notifications for dispatching goods.',
    image: 'Eco-friendly organic produce digital marketplace with high-density grid listing',
    tech: ['React v19', 'Framer Motion', 'Node.js', 'Google Maps API'],
    stats: { label: 'Farmer Earnings', value: '+28%' },
    status: 'Completed'
  },
  {
    id: 'portfolio-4',
    title: 'VeloAI Virtual Assistant',
    category: 'AI Solution',
    description: 'Integrates real-time custom large language models to automate legal document triage and customer service inquiries.',
    longDescription: 'We designed the Web SDK widget and main dashboard for VeloAI. This client onboarding system uses streaming vector grounding to answer highly regulated questions instantly.',
    image: 'Minimalist enterprise conversational chat interface with dynamic graphs',
    tech: ['Gemini API', 'TypeScript', 'Vite', 'Express', 'Tailwind CSS'],
    stats: { label: 'Automation rate', value: '88%' },
    status: 'Completed'
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
