import express from 'express';
import path from 'path';
import fs from 'fs';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Ensure the data directory exists to store local leads
const DATA_DIR = path.join(process.cwd(), 'data');
const DATA_FILE = path.join(DATA_DIR, 'inquiries.json');

try {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify([], null, 2));
  }
} catch (err) {
  console.error('Failed to initialize local JSON inquiries storage:', err);
}

// Lazy initialization of Gemini API client
let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      throw new Error('GEMINI_API_KEY environment variable is required');
    }
    aiClient = new GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return aiClient;
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  // JSON Body parser
  app.use(express.json());

  // API Route: Test health status
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', time: new Date() });
  });

  // API Route: Submit new contact inquiry lead
  app.post('/api/inquiry', async (req, res) => {
    try {
      const { name, email, phone, whatsapp, service, budget, message } = req.body;

      if (!name || !email || !message) {
        return res.status(400).json({ error: 'Name, email, and message are required' });
      }

      const newInquiry = {
        id: `inq-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
        name,
        email,
        phone: phone || '',
        whatsapp: !!whatsapp,
        service: service || 'Website Design',
        budget: budget || 'Not Specified',
        message,
        createdAt: new Date().toISOString(),
      };

      // Read existing inquiries, push, and write back
      let inquiries = [];
      try {
        if (fs.existsSync(DATA_FILE)) {
          const raw = fs.readFileSync(DATA_FILE, 'utf-8');
          inquiries = JSON.parse(raw);
        }
      } catch (readErr) {
        console.error('Error reading inquiries database. resetting:', readErr);
      }

      inquiries.push(newInquiry);
      fs.writeFileSync(DATA_FILE, JSON.stringify(inquiries, null, 2));

      console.log(`Successfully registered contact inquiry from ${name} (${email})`);
      return res.json({ success: true, inquiry: newInquiry });
    } catch (error: any) {
      console.error('Failed to submit contact inquiry:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  // API Route: Gemini Intelligent Consultation Bot
  app.post('/api/gemini/chat', async (req, res) => {
    try {
      const { message, history } = req.body;

      if (!message) {
        return res.status(400).json({ error: 'Message content is required' });
      }

      let ai;
      try {
        ai = getGeminiClient();
      } catch (apiKeyErr: any) {
        return res.status(500).json({
          error: 'Consultation Chatbot initialized, but API is pending configurations. Open Settings secret block.',
          text: 'Hi, I am NestBot! I am initialized, but our server-side API Key is pending registration in Settings > Secrets. You can still email us at heena6917@gmail.com or call us directly!'
        });
      }

      // Format conversation history into valid content blocks for Gemini chat
      const chatHistory = (history || []).map((h: any) => ({
        role: h.role, // 'user' or 'model'
        parts: [{ text: h.text }]
      }));

      const systemPrompt = `You are NestBot, a highly professional, polite, and smart AI Sales Consultant for WebNest, a premier digital web design and software engineering studio located in Durgapur, West Bengal, India.

Your target is to answer questions about WebNest's web design, custom software development, SEO, and digital marketing capabilities, explain our strategic process, and guide clients towards requesting a free consultation or viewing our portfolio.

Our Capabilities & Services:
- Web Design & UI/UX: Beautiful responsive layouts, highly interactive user experiences, tailored typography, and conversion-optimized wireframes.
- Custom Web Development: Full-stack responsive web applications using React, modern frameworks, and robust backends.
- digital Marketing & SEO: Fast Loading times (Lighthouse scores of 95+), structured schemas, semantic markup, and local SEO strategies that drive organic traffic.
- E-Commerce: Dynamic transactional visual platforms with secure checkouts and intuitive store management.

Our 5-Step Strategic Process:
1. Discovery (Auditing & Planning): We map project objectives, competitive metrics, and precise feature sets.
2. Architecture & Design: Crafting responsive wireframes and layout drafts with custom visual systems.
3. Content & Cohesive Branding: Generating targeted copy, logos, and elegant illustrations.
4. Production/Development: Blazing-fast responsive frontend & secure backend software coding.
5. Quality Audit & Zero-downtime Launch: Rigorous performance optimization, complete testing, and seamless handover.

Directing User Actions:
- Point clients to use our specialized "Quick Actions" buttons positioned directly at the bottom of this chat window:
  - Clicking "Request Consultation" scrolls them directly to our interactive inquiry form.
  - Clicking "View Our Portfolio" scrolls them to see high-fidelity screen showcases of our selected projects.
  - Clicking "Our Process" maps their viewport directly to our 5-Step Process cards.

Budget Estimations to mention if asked:
- Basic Brand Showcase / Landing Pages: Under ₹15,000 (highly affordable visual layouts)
- Specialized E-Commerce / Custom Web Apps: ₹15,000 - ₹35,000 (clean custom modules)
- Advanced E-Commerce & Complex custom applications: ₹35,000 - ₹75,000
- Enterprise Portals & custom SaaS architecture: ₹75,000+

Be humble, objective, incredibly helpful, and polite. Keep responses brief, spaced with clean paragraphs, and easy to read.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.5-flash',
        contents: [
          ...chatHistory,
          { role: 'user', parts: [{ text: message }] }
        ],
        config: {
          systemInstruction: systemPrompt,
          temperature: 0.7,
        }
      });

      const responseText = response.text || 'I have recorded your specifications. Best to write us on heena6917@gmail.com.';
      return res.json({ text: responseText });
    } catch (err: any) {
      console.error('Gemini chatbot transaction failed:', err);
      return res.status(500).json({ error: 'AI consultation transaction failed' });
    }
  });

  // Client static assets serving in production, Vite middleware in development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[WebNest Server] running on http://0.0.0.0:${PORT} in ${process.env.NODE_ENV || 'development'} mode`);
  });
}

startServer();
