import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Smartphone, Monitor, CheckCircle2, AlertCircle, Sparkles, BookOpen, ChevronRight, Gauge } from 'lucide-react';

export default function SERPPreviewer() {
  const [device, setDevice] = useState<'mobile' | 'desktop'>('desktop');
  const [primaryKeyword, setPrimaryKeyword] = useState<string>('web design company in durgapur');
  const [title, setTitle] = useState<string>('WebNest | Best Web Design & Development Company in Durgapur');
  const [slug, setSlug] = useState<string>('services/web-design-durgapur');
  const [description, setDescription] = useState<string>('WebNest is the premier web design and SEO agency in Durgapur, West Bengal. We build high-performance custom responsive websites designed to rank on Google.');
  const [score, setScore] = useState<number>(100);
  const [feedback, setFeedback] = useState<Array<{ text: string; status: 'success' | 'warn' | 'info' }>>([]);

  // Live Audit Calculator based on Google Search algorithm recommendations
  useEffect(() => {
    let currentScore = 100;
    const items: Array<{ text: string; status: 'success' | 'warn' | 'info' }> = [];

    const normalizedKeyword = primaryKeyword.trim().toLowerCase();

    // 1. Meta Title Length audit (Standard Google cutoff is 60 chars)
    const titleLength = title.length;
    if (titleLength === 0) {
      currentScore -= 25;
      items.push({ text: 'Title tag cannot be blank for Google ranking.', status: 'warn' });
    } else if (titleLength < 30) {
      currentScore -= 10;
      items.push({ text: `Meta Title is quite short (${titleLength} chars). Use 30-60 characters to optimize keywords.`, status: 'info' });
    } else if (titleLength > 60) {
      currentScore -= 15;
      items.push({ text: `Meta Title is too long (${titleLength} chars) and will cut off (ellipses ...) on Google. Limit to 60 characters.`, status: 'warn' });
    } else {
      items.push({ text: 'Meta Title length is perfect (30-60 characters) for maximum click rate.', status: 'success' });
    }

    // 2. Meta Description Length audit (Standard Google cutoff is 155-160 chars)
    const descLength = description.length;
    if (descLength === 0) {
      currentScore -= 25;
      items.push({ text: 'Meta Description cannot be empty.', status: 'warn' });
    } else if (descLength < 110) {
      currentScore -= 10;
      items.push({ text: `Meta Description is short (${descLength} chars). Use 110-160 characters to increase user click intent.`, status: 'info' });
    } else if (descLength > 160) {
      currentScore -= 15;
      items.push({ text: `Meta Description is too long (${descLength} chars) and will truncate on Google. Limit to 160 characters.`, status: 'warn' });
    } else {
      items.push({ text: 'Meta Description length is fully optimized (110-160 characters).', status: 'success' });
    }

    // 3. Keyword presence analysis
    if (normalizedKeyword && normalizedKeyword.length > 2) {
      const keywordInTitle = title.toLowerCase().includes(normalizedKeyword);
      const keywordInDesc = description.toLowerCase().includes(normalizedKeyword);
      const keywordInSlug = slug.toLowerCase().replace(/[^a-zA-Z0-9]/g, ' ').includes(normalizedKeyword.replace(/[^a-zA-Z0-9]/g, ' '));

      if (keywordInTitle) {
        items.push({ text: 'Focus keyword matches perfectly inside your Meta Title.', status: 'success' });
      } else {
        currentScore -= 15;
        items.push({ text: 'Focus keyword missing from Meta Title. Add it close to the starting line.', status: 'warn' });
      }

      if (keywordInDesc) {
        items.push({ text: 'Focus keyword matches perfectly inside your Meta Description.', status: 'success' });
      } else {
        currentScore -= 10;
        items.push({ text: 'Add your primary target keyword to the Meta Description to boost CTR.', status: 'info' });
      }

      if (keywordInSlug) {
        items.push({ text: 'Focus keyword matches well in your URL slug structure.', status: 'success' });
      } else {
        currentScore -= 5;
        items.push({ text: `Incorporate focus descriptors into the slug (e.g. services/${normalizedKeyword.replace(/\s+/g, '-')})`, status: 'info' });
      }
    } else {
      items.push({ text: 'Define a target keyboard (e.g., "web design Durgapur") to scan density placement.', status: 'info' });
    }

    // Secure URL HTTPS check
    if (slug.startsWith('https://')) {
      items.push({ text: 'Secure HTTPS check validated.', status: 'success' });
    } else {
      items.push({ text: 'Always use secure https protocol format to satisfy Google Trust parameters.', status: 'success' });
    }

    setScore(Math.max(10, Math.min(100, currentScore)));
    setFeedback(items);
  }, [primaryKeyword, title, slug, description]);

  // Utility to split and bold query matches in snippet renders
  const renderHighlightedText = (text: string) => {
    if (!primaryKeyword || primaryKeyword.trim().length === 0) return text;
    const parts = text.split(new RegExp(`(${primaryKeyword})`, 'gi'));
    return (
      <>
        {parts.map((part, i) => 
          part.toLowerCase() === primaryKeyword.toLowerCase() ? (
            <strong key={i} className="text-slate-900 font-semibold dark:text-slate-100">{part}</strong>
          ) : (
            part
          )
        )}
      </>
    );
  };

  return (
    <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6 mb-8">
        <div>
          <span className="inline-flex items-center space-x-1 px-2.5 py-1 bg-amber-50 text-amber-800 text-[10px] font-extrabold uppercase tracking-wider rounded-lg mb-2">
            <Sparkles className="w-3 h-3 text-amber-600" />
            <span>Interactive Simulator</span>
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-none">
            Google Page 1 SERP Visualizer
          </h3>
          <p className="text-slate-500 text-xs mt-1.5 leading-relaxed">
            Draft and audit how your webpage handles titles, URLs, and snippets in real-time before releasing them to search engines.
          </p>
        </div>

        {/* Live Circular Score Badge */}
        <div className="flex items-center space-x-3 bg-slate-50 border border-slate-100 px-4 py-2.5 rounded-2xl shrink-0">
          <div className="relative w-12 h-12 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="24"
                cy="24"
                r="20"
                className="stroke-slate-200"
                strokeWidth="3.5"
                fill="none"
              />
              <circle
                cx="24"
                cy="24"
                r="20"
                className={`transition-all duration-500 ${
                  score >= 85 ? 'stroke-emerald-500' : score >= 60 ? 'stroke-amber-500' : 'stroke-red-500'
                }`}
                strokeWidth="3.5"
                fill="none"
                strokeDasharray={`${2 * Math.PI * 20}`}
                strokeDashoffset={`${2 * Math.PI * 20 * (1 - score / 100)}`}
              />
            </svg>
            <span className="absolute text-xs font-bold text-slate-800">{score}</span>
          </div>
          <div>
            <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider leading-none">SEO Grade</span>
            <span className={`text-xs font-extrabold block mt-1 leading-none ${
              score >= 85 ? 'text-emerald-600' : score >= 60 ? 'text-amber-600' : 'text-red-500'
            }`}>
              {score >= 85 ? 'Excellent Optimization' : score >= 60 ? 'Needs Attention' : 'Critical Weaknesses'}
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Form Controls */}
        <div className="lg:col-span-6 space-y-5">
          
          {/* Target Keyword */}
          <div>
            <label className="block text-[11px] font-extrabold uppercase text-slate-500 tracking-wider mb-2">
              Primary Focus Keyword
            </label>
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={primaryKeyword}
                onChange={(e) => setPrimaryKeyword(e.target.value)}
                placeholder="e.g. web design durgapur"
                className="w-full pl-10 pr-4 py-2.5 text-xs font-medium border border-slate-200 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-slate-50/50 leading-none outline-none"
              />
            </div>
            <span className="text-[10px] text-slate-400 block mt-1.5">
              The keyword queries you expect clients to search on Google.
            </span>
          </div>

          {/* Meta Title Input with length criteria */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-[11px] font-extrabold uppercase text-slate-500 tracking-wider">
                Webpage Meta Title Tag
              </label>
              <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                title.length >= 30 && title.length <= 60 
                  ? 'bg-emerald-50 text-emerald-700' 
                  : 'bg-amber-50 text-amber-700'
              }`}>
                {title.length} / 60 Chars
              </span>
            </div>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Page title showing on browser tabs..."
              className="w-full px-4 py-2.5 text-xs font-semibold border border-slate-200 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-slate-50/50 outline-none leading-relaxed"
            />
          </div>

          {/* Site Slug Router URL */}
          <div>
            <label className="block text-[11px] font-extrabold uppercase text-slate-500 tracking-wider mb-2">
              URL Router Slug Path
            </label>
            <div className="flex">
              <span className="bg-slate-100 border border-slate-200 border-r-0 text-slate-500 px-3 py-2.5 rounded-l-xl text-xs font-mono select-none flex items-center">
                https://webnest.digital/
              </span>
              <input
                type="text"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                placeholder="slug-path/details"
                className="flex-1 min-w-0 px-4 py-2.5 text-xs font-mono border border-slate-200 rounded-r-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-slate-50/50 outline-none"
              />
            </div>
          </div>

          {/* Meta Description input */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-[11px] font-extrabold uppercase text-slate-500 tracking-wider">
                Google Snippet / Meta Description
              </label>
              <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                description.length >= 110 && description.length <= 160 
                  ? 'bg-emerald-50 text-emerald-700' 
                  : 'bg-amber-50 text-amber-700'
              }`}>
                {description.length} / 160 Chars
              </span>
            </div>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Draft meta description details that invite searches to click through..."
              rows={3}
              className="w-full px-4 py-3 text-xs border border-slate-200 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-slate-50/50 outline-none leading-relaxed resize-none"
            />
          </div>

        </div>

        {/* Right Column: Google Live Snippet Preview Rendering */}
        <div className="lg:col-span-6 space-y-6">
          
          <div>
            <div className="flex justify-between items-center bg-slate-100 p-1 rounded-xl mb-4">
              <div className="text-[10px] uppercase font-extrabold text-slate-400 pl-3 select-none">
                Google Page 1 Mockup Screen
              </div>
              <div className="flex space-x-1">
                <button
                  type="button"
                  onClick={() => setDevice('desktop')}
                  className={`inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-bold tracking-tight transition-all cursor-pointer ${
                    device === 'desktop' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <Monitor className="w-3.5 h-3.5" />
                  <span>Desktop View</span>
                </button>
                <button
                  type="button"
                  onClick={() => setDevice('mobile')}
                  className={`inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-bold tracking-tight transition-all cursor-pointer ${
                    device === 'mobile' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Mobile View</span>
                </button>
              </div>
            </div>

            {/* Google Search Result container */}
            <div className="border border-slate-200/80 rounded-2xl bg-white p-5 sm:p-7 shadow-inner min-h-[160px] flex flex-col justify-center select-none bg-dotted-grid overflow-hidden">
              <div className="max-w-xl">
                
                {device === 'desktop' ? (
                  /* DESKTOP SERP MOCKUP */
                  <div className="space-y-1.5">
                    {/* Header breadcrumbs */}
                    <div className="flex items-center space-x-1.5 text-[12px] text-slate-500 truncate leading-none">
                      <span className="text-slate-700">https://webnest.digital</span>
                      <span>›</span>
                      <span className="text-slate-400 truncate">{slug || 'services'}</span>
                    </div>
                    {/* Blue Title Link */}
                    <h4 className="text-[19px] text-[#1a0dab] hover:underline font-normal leading-tight font-serif cursor-pointer tracking-normal truncate whitespace-nowrap">
                      {title || 'Please fill in a Meta Title'}
                    </h4>
                    {/* Snippet Description */}
                    <p className="text-[13.5px] text-[#4d5156] leading-relaxed break-words font-sans">
                      <span className="text-[#70757a] text-xs font-mono mr-1">Jun 16, 2026 —</span>
                      {description ? renderHighlightedText(description) : 'Enter description snippets to preview dynamic keywords matching...'}
                    </p>
                  </div>
                ) : (
                  /* MOBILE SERP MOCKUP */
                  <div className="space-y-2 bg-[#f8fafc] border border-slate-150 p-4 rounded-xl">
                    <div className="flex items-center space-x-2.5">
                      <div className="w-6 h-6 rounded-full bg-slate-900 border border-slate-100 flex items-center justify-center text-[10px] font-bold text-white select-none">
                        W
                      </div>
                      <div className="flex flex-col leading-tight">
                        <span className="text-[11px] font-semibold text-slate-800 leading-none">WebNest Digital</span>
                        <span className="text-[9.5px] text-slate-400 truncate leading-none mt-0.5">https://webnest.digital/{slug}</span>
                      </div>
                    </div>
                    {/* Blue Title Link */}
                    <h4 className="text-[16.5px] text-[#1558d6] leading-snug font-normal hover:underline cursor-pointer">
                      {title || 'Please fill in a Meta title'}
                    </h4>
                    {/* Snippet Description */}
                    <p className="text-[11.5px] text-[#3c4043] leading-relaxed break-words">
                      {description ? renderHighlightedText(description) : 'Enter description snippets to check responsive viewport configurations...'}
                    </p>
                  </div>
                )}
                
              </div>
            </div>
            
            {/* Disclaimer regarding Google customization */}
            <span className="text-[10.5px] text-slate-400 block mt-2.5 leading-relaxed italic text-center">
              * Note: Google algorithmically highlights focus keyword queries in bold text inside organic lists to double user click intent.
            </span>
          </div>

          {/* Checklist Feedback Card */}
          <div className="bg-slate-50 border border-slate-150 rounded-2xl p-5">
            <span className="text-[10px] font-extrabold uppercase text-slate-400 block tracking-widest mb-3">Live On-Page SEO Checklist Analyzer</span>
            <div className="space-y-2.5">
              {feedback.map((item, index) => (
                <div key={index} className="flex items-start space-x-2 text-xs">
                  {item.status === 'success' ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  ) : item.status === 'warn' ? (
                    <AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  ) : (
                    <div className="w-4 h-4 rounded-full bg-slate-200 flex items-center justify-center font-bold text-[9px] text-slate-500 shrink-0 mt-0.5 font-mono">i</div>
                  )}
                  <span className={`${
                    item.status === 'success' ? 'text-slate-700 font-medium' : item.status === 'warn' ? 'text-slate-600 font-medium' : 'text-slate-500'
                  }`}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* SEO Strategic Playbook summary to fulfill user ranked expectation */}
      <div className="border-t border-slate-100 pt-8 mt-10">
        <div className="flex items-center space-x-2 text-blue-600 mb-3">
          <BookOpen className="w-4.5 h-4.5" />
          <h4 className="text-sm font-bold uppercase tracking-wider">WebNest Strategy to Rank on Google Page 1</h4>
        </div>
        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
          Setting up meta tags is only step one. To rank in modern local searches (e.g. <em className="text-slate-800">"best web designer near me"</em>), your code must adhere to rigorous quality metrics:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-slate-50/50 p-4 border border-slate-100 rounded-2xl hover:border-blue-200 transition-all">
            <div className="flex items-center space-x-2 mb-2">
              <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs font-bold font-mono flex items-center justify-center">1</span>
              <span className="text-xs font-bold text-slate-800">Perfect Core Web Vitals</span>
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Google actively demotes slow sites. WebNest uses responsive inline styles, asynchronous fonts, deferred image loads, and compiled assets to load under 1.2 seconds, securing top-tier ranking advantage.
            </p>
          </div>

          <div className="bg-slate-50/50 p-4 border border-slate-100 rounded-2xl hover:border-blue-200 transition-all">
            <div className="flex items-center space-x-2 mb-2">
              <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs font-bold font-mono flex items-center justify-center">2</span>
              <span className="text-xs font-bold text-slate-800">JSON-LD Local Schema</span>
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Structured schema files tell Google crawlers exactly what services you offer, active business hours, coordinates, and prices, earning rich preview cards and local map pack listings.
            </p>
          </div>

          <div className="bg-slate-50/50 p-4 border border-slate-100 rounded-2xl hover:border-blue-200 transition-all">
            <div className="flex items-center space-x-2 mb-2">
              <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs font-bold font-mono flex items-center justify-center">3</span>
              <span className="text-xs font-bold text-slate-800">Keyword Density Mapping</span>
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Target local commercial searches with unique semantic tags (H1, H2, strong focus keywords in the body content). Keep layout clean and focus answers clearly to satisfy direct Google search intent.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
