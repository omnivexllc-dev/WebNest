export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  benefits: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  tech: string[];
  stats: { label: string; value: string };
  status: 'Completed' | 'In Progress';
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  text: string;
  rating: number;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  duration: string;
  details: string[];
}

export interface Inquiry {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  whatsapp?: boolean;
  service: string;
  budget?: string;
  message: string;
  createdAt?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  createdAt: string;
}
