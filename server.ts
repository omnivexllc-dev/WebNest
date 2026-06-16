import express from 'express';
import path from 'path';
import fs from 'fs';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import * as dotenv from 'dotenv';
import nodemailer from 'nodemailer';

// Load environment variables
dotenv.config();

// Ensure the data directory exists to store local leads
const DATA_DIR = path.join(process.cwd(), 'data');
const DATA_FILE = path.join(DATA_DIR, 'inquiries.json');

// Lazy transporter configuration for email notifications to webnestsupport@gmail.com
let transporter: nodemailer.Transporter | null = null;

function getTransporter() {
  if (transporter) return transporter;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const host = process.env.SMTP_HOST || 'smtp.gmail.com';
  const port = parseInt(process.env.SMTP_PORT || '587', 10);

  if (!user || !pass) {
    console.warn('[WebNest Email] SMTP_USER or SMTP_PASS environment variables are not configured in Settings > Secrets. Real emails will be logged to console.');
    return null;
  }

  transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
  return transporter;
}

async function sendEmailNotification(subject: string, htmlContent: string) {
  const mailOptions = {
    from: process.env.SMTP_FROM || process.env.SMTP_USER || 'webnestsupport@gmail.com',
    to: 'webnestsupport@gmail.com',
    subject,
    html: htmlContent,
  };

  const client = getTransporter();
  if (client) {
    try {
      await client.sendMail(mailOptions);
      console.log(`[WebNest Email] Real email sent successfully: "${subject}" to webnestsupport@gmail.com`);
    } catch (err) {
      console.error('[WebNest Email] Failed to send email via SMTP:', err);
    }
  } else {
    console.log('================================================================================');
    console.log('[WebNest Email Mock Output] Simulated delivery because SMTP credentials are pending in secrets:');
    console.log(`Recipient: ${mailOptions.to}`);
    console.log(`Subject: ${mailOptions.subject}`);
    console.log('--------------------------- BODY CONTENT ---------------------------');
    console.log(htmlContent.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '').replace(/<[^>]*>/g, '\n').split('\n').filter(Boolean).join('\n'));
    console.log('================================================================================');
  }
}

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

  // Serve llms.txt route for search indexing and LLM tools
  app.get('/llms.txt', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'llms.txt'));
  });

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

      // Trigger asynchronous email delivery to webnestsupport@gmail.com
      const emailSubject = `[WebNest Specification Form] New Inquiry from ${name}`;
      const emailHtml = `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; padding: 40px; color: #0f172a;">
          <div style="max-w: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
            <div style="background-color: #0f172a; padding: 24px; color: #ffffff; text-align: center;">
              <h2 style="margin: 0; font-size: 20px; font-weight: 800; tracking-spacing: 0.5px;">WEBNEST SPECIFICATION FORM</h2>
              <span style="font-size: 11px; text-transform: uppercase; color: #3b82f6; font-weight: 700; letter-spacing: 1px; display: block; margin-top: 4px;">New Client Lead Registered</span>
            </div>
            <div style="padding: 32px; background-color: #ffffff;">
              <div style="margin-bottom: 24px;">
                <span style="font-size: 10px; font-weight: 800; color: #64748b; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 8px;">Project Description / Specification</span>
                <p style="font-size: 14px; line-height: 1.6; color: #334155; white-space: pre-line; background-color: #f1f5f9; padding: 16px; border-radius: 8px; border-left: 4px solid #2563eb; margin: 0;">${message}</p>
              </div>
              <table style="width: 100%; border-collapse: collapse; font-size: 13px; color: #334155;">
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: 700; color: #64748b; width: 150px;">Client Name</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #0f172a;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: 700; color: #64748b;">Client Email</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #2563eb;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: 700; color: #64748b;">Phone Number</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #0f172a;">${phone || 'Not provided'}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: 700; color: #64748b;">WhatsApp Reps</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #10b981;">${whatsapp ? 'Enabled (Prefer WhatsApp replies)' : 'Disabled'}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: 700; color: #64748b;">Required Service</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #0f172a;">${service}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: 700; color: #64748b;">Estimated Budget</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: 700; color: #2563eb;">${budget}</td>
                </tr>
              </table>
            </div>
            <div style="background-color: #f1f5f9; padding: 16px; text-align: center; border-top: 1px solid #e2e8f0; font-size: 11px; color: #64748b;">
              Sent automatically from WebNest Studio on ${new Date().toLocaleString()}
            </div>
          </div>
        </div>
      `;
      // Run asynchronously to not block network response
      sendEmailNotification(emailSubject, emailHtml).catch(err => {
        console.error('[WebNest Email] Async dispatch failure for inquiry:', err);
      });

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
          text: 'Hi, I am WebNest! I am initialized, but our server-side API Key is pending registration in Settings > Secrets. You can still email us at webnestsupport@gmail.com or call us directly!'
        });
      }

      // Format conversation history into valid content blocks for Gemini chat
      const chatHistory = (history || []).map((h: any) => ({
        role: h.role, // 'user' or 'model'
        parts: [{ text: h.text }]
      }));

      const systemPrompt = `You are WebNest, a highly professional, polite, and smart AI Sales Consultant for WebNest, a premier digital web design and software engineering studio located in Durgapur, West Bengal, India.

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

      const responseText = response.text || 'I have recorded your specifications. Best to write us on webnestsupport@gmail.com.';

      // Generate chat transcript email with beautiful responsive markup
      const chatTranscriptHtml = (history || []).map((h: any) => {
        const isUser = h.role === 'user';
        const sender = isUser ? 'User' : 'WebNest AI';
        const senderColor = isUser ? '#64748b' : '#3b82f6';
        const bgColor = isUser ? '#f8fafc' : '#f0fdf4';
        return `
          <div style="margin-bottom: 10px; padding: 10px; border-radius: 8px; background-color: ${bgColor}; border: 1px solid #e2e8f0;">
            <p style="margin: 0 0 4px 0; font-size: 10px; font-weight: 700; color: ${senderColor};">${sender}</p>
            <p style="margin: 0; font-size: 11px; line-height: 1.5; color: #334155;">${h.text}</p>
          </div>
        `;
      }).join('');

      const fullChatEmailHtml = `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; padding: 40px; color: #0f172a;">
          <div style="max-w: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
            <div style="background-color: #0f172a; padding: 24px; color: #ffffff; text-align: center;">
              <h2 style="margin: 0; font-size: 20px; font-weight: 800; tracking-spacing: 0.5px;">WEBNEST LIVE CHAT</h2>
              <span style="font-size: 11px; text-transform: uppercase; color: #10b981; font-weight: 700; letter-spacing: 1px; display: block; margin-top: 4px;">User Contact / Counseling Conversation</span>
            </div>
            
            <div style="padding: 32px; background-color: #ffffff;">
              <div style="margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px solid #f1f5f9;">
                <span style="font-size: 10px; font-weight: 800; color: #2563eb; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 8px;">New Message Session</span>
                <div style="font-size: 14px; font-weight: 600; line-height: 1.5; color: #0f172a; margin: 0; background-color: #eff6ff; padding: 12.5px; border-radius: 8px; border-left: 4px solid #2563eb;">User: "${message}"</div>
                <div style="font-size: 14px; line-height: 1.5; color: #334155; margin: 8px 0 0 0; background-color: #f0fdf4; padding: 12.5px; border-radius: 8px; border-left: 4px solid #10b981;">WebNest: "${responseText}"</div>
              </div>
              
              <div>
                <span style="font-size: 10px; font-weight: 800; color: #64748b; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 12px;">Full Discussion Transcript</span>
                <div style="border-left: 2px solid #e2e8f0; padding-left: 16px; margin-left: 4px;">
                  ${chatTranscriptHtml || '<p style="color: #94a3b8; font-size: 12px; font-style: italic;">No previous message history</p>'}
                </div>
              </div>
            </div>
            
            <div style="background-color: #f1f5f9; padding: 16px; text-align: center; border-top: 1px solid #e2e8f0; font-size: 11px; color: #64748b;">
              Sent automatically from WebNest Studio on ${new Date().toLocaleString()}
            </div>
          </div>
        </div>
      `;

      sendEmailNotification(`[WebNest Chat] New Conversation Message`, fullChatEmailHtml).catch(err => {
        console.error('[WebNest Email] Async dispatch failure for chatbot:', err);
      });

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
