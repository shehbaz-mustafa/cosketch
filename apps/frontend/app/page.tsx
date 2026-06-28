"use client";

import { useState } from 'react';
import {
  Pencil,
  ArrowRight,
  Sparkles,
  Shapes,
  Share2,
  Zap,
  Lock,
  Users,
  Check,
  Star,
  Download,
} from 'lucide-react';
import Link from 'next/link';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const features = [
    {
      icon: Shapes,
      title: 'Hand-drawn shapes',
      description: 'Rectangles, ellipses, arrows, lines, and text — all with that imperfect, hand-sketched feel that keeps ideas feeling loose and explorable.',
    },
    {
      icon: Users,
      title: 'Real-time collaboration',
      description: 'See every teammate\'s cursor and edits live. No refresh. No version conflicts. Just draw together like you\'re at the same whiteboard.',
    },
    {
      icon: Zap,
      title: 'Blazing fast',
      description: 'Opens instantly. Syncs in milliseconds. Built on CRDTs so it works great even on spotty connections.',
    },

  ];

  const steps = [
    {
      number: '1',
      title: 'Open a new board',
      description: 'No account, no download. Just click and you\'re in. A blank canvas, ready for your ideas.',
    },
    {
      number: '2',
      title: 'Draw freely',
      description: 'Grab a shape, draw an arrow, drop a sticky note. Everything looks hand-sketched on purpose.',
    },
  ];

  const examples = [
    { label: 'Wireframes', color: '#e8f0fe', sketch: 'M20 20h160v120H20z' },
    { label: 'Flowcharts', color: '#fce8e6', sketch: 'M20 20h160v120H20z' },
    { label: 'Architecture', color: '#e6f4ea', sketch: 'M20 20h160v120H20z' },
    { label: 'Retros', color: '#fef7e0', sketch: 'M20 20h160v120H20z' },
  ];

  const testimonials = [
    {
      quote: "We stopped using Miro and Figma Jam. cosketch just feels more natural for quick brainstorms.",
      name: 'Sarah K.',
      role: 'Product Lead',
      avatar: 'https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?w=80&h=80&fit=crop',
    },
    {
      quote: "The hand-drawn look keeps everyone relaxed. Nothing feels too precious to change.",
      name: 'James R.',
      role: 'Engineering Manager',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?w=80&h=80&fit=crop',
    },
    {
      quote: "Share a link, done. No more 'can you give me access?' back-and-forths.",
      name: 'Priya M.',
      role: 'Design Director',
      avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?w=80&h=80&fit=crop',
    },
  ];

;

  return (
    <div className="dot-grid font-body min-h-screen" style={{ backgroundColor: 'var(--bg)' }}>
      {/* ── NAV ── */}
      <header className="sticky top-0 z-50" style={{ backgroundColor: 'var(--bg)', borderBottom: '1.5px solid var(--border)' }}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-1.5">
            <span className="font-sketch text-2xl font-bold" style={{ color: 'var(--text)' }}>
              cosketch
            </span>
            <span className="w-1.5 h-1.5 rounded-full mt-1" style={{ backgroundColor: 'var(--orange)' }} />
          </a>

          {/* Center nav - desktop */}


          {/* Right actions */}
          <div className="hidden md:flex items-center gap-3">
          <Link href={"/signin"}> 
            <button  className="btn-orange-sm">
              <Pencil className="w-3.5 h-3.5" />
              Start drawing
            </button>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ color: 'var(--muted)' }}
          >
            <div className="w-5 h-px mb-1.5" style={{ backgroundColor: 'var(--text)' }} />
            <div className="w-5 h-px mb-1.5" style={{ backgroundColor: 'var(--text)' }} />
            <div className="w-5 h-px" style={{ backgroundColor: 'var(--text)' }} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden px-6 pb-4 flex flex-col gap-3" style={{ borderTop: '1px solid var(--border)' }}>
            {['Features', 'How it works', 'Examples'].map((link) => (
              <a key={link} href={`#${link.toLowerCase().replace(' ', '-')}`} className="py-2 text-sm font-medium" style={{ color: 'var(--muted)' }}>
                {link}
              </a>
            ))}
            <div className="flex gap-3 pt-2">
              <button className="btn-outline-sm flex-1 justify-center">Open app</button>
              <button className="btn-orange-sm flex-1 justify-center">Start drawing</button>
            </div>
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section className="pt-20 pb-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="anim-1 flex justify-center mb-8">
            <span className="badge-pill">
              <Sparkles className="w-4 h-4" style={{ color: 'var(--orange)' }} />
              Free, open, and delightfully sketchy
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-sketch anim-2 mb-6" style={{ fontSize: 'clamp(52px, 10vw, 100px)', lineHeight: 1.1, color: 'var(--text)', letterSpacing: '-4px' }}>
            Sketch ideas<br />
            <span className="">without the polish</span>
          </h1>

          {/* Sub-description */}
          <p className="anim-3 text-lg max-w-xl mx-auto mb-10" style={{ color: 'var(--muted)', fontFamily: 'Inter, sans-serif', lineHeight: 1.65 }}>
            cosketch is a fast, hand-drawn whiteboard for diagrams, wireframes, and
            notes. Pick it up like a marker, share it like a link.
          </p>

          {/* CTAs */}
          <div className="anim-4 flex flex-col sm:flex-row items-center justify-center gap-4 mb-5">
           <Link href={"/signin"}>
            <button className="btn-orange">
              <Pencil className="w-5 h-5" />
              Sign in
            </button>
            </Link>
            <Link href={"/signup"}>
            <button className="btn-outline">
              Sign up
              <ArrowRight className="w-4 h-4" />
            </button>
            </Link>
          </div>

          {/* Fine print */}
         
        </div>
      </section>

      {/* ── CANVAS PREVIEW ── */}
      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="canvas-box">
            {/* Toolbar mockup */}
            <div className="flex items-center justify-between px-5 py-3" style={{ borderBottom: '1px solid var(--border)', backgroundColor: '#fafaf8' }}>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex items-center gap-2 px-3 py-1 rounded-full" style={{ border: '1px solid var(--border)', fontSize: '13px', color: 'var(--muted)' }}>
                cosketch — team-roadmap
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-pink-400 border-2 border-white" />
                <div className="w-6 h-6 rounded-full bg-blue-400 border-2 border-white -ml-1" />
                <div className="w-6 h-6 rounded-full bg-emerald-400 border-2 border-white -ml-1" />
              </div>
            </div>

            {/* Canvas area */}
            <div className="relative" style={{ height: '340px', background: '#fefefe' }}>
              {/* Dot grid on canvas */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: 'radial-gradient(circle, #ddd 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                }}
              />

              {/* Sketch elements */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 900 340" preserveAspectRatio="xMidYMid meet">
                {/* Sticky note 1 */}
                <rect x="60" y="50" width="170" height="130" rx="4" fill="#FEF9C3" stroke="#d4b400" strokeWidth="2" strokeDasharray="6,3" />
                <text x="80" y="82" fontSize="14" fontFamily="Caveat, cursive" fontWeight="700" fill="#1a1611">Q3 Ideas</text>
                <line x1="80" y1="95" x2="208" y2="95" stroke="#d4b400" strokeWidth="1.5" strokeDasharray="4,2" />
                <text x="80" y="118" fontSize="13" fontFamily="Caveat, cursive" fill="#555">• Launch beta</text>
                <text x="80" y="140" fontSize="13" fontFamily="Caveat, cursive" fill="#555">• Onboarding</text>
                <text x="80" y="162" fontSize="13" fontFamily="Caveat, cursive" fill="#555">• Templates</text>

                {/* Arrow */}
                <path d="M232 115 Q280 115 295 90" stroke="#c73e0e" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeDasharray="8,3" />
                <polygon points="295,90 285,97 292,104" fill="#c73e0e" />

                {/* Rounded rect */}
                <rect x="305" y="40" width="185" height="100" rx="16" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeDasharray="7,3" />
                <text x="395" y="78" textAnchor="middle" fontSize="15" fontFamily="Caveat, cursive" fontWeight="700" fill="#1e40af">User Flow v2</text>
                <text x="395" y="102" textAnchor="middle" fontSize="12" fontFamily="Caveat, cursive" fill="#6b7280">Simplified → 1 step</text>
                <text x="395" y="122" textAnchor="middle" fontSize="12" fontFamily="Caveat, cursive" fill="#6b7280">fewer drop-offs</text>

                {/* Sticky note 2 */}
                <rect x="320" y="175" width="150" height="110" rx="4" fill="#FFE4E6" stroke="#f43f5e" strokeWidth="2" strokeDasharray="6,3" />
                <text x="340" y="205" fontSize="14" fontFamily="Caveat, cursive" fontWeight="700" fill="#1a1611">Blockers</text>
                <text x="340" y="228" fontSize="13" fontFamily="Caveat, cursive" fill="#555">• Auth system</text>
                <text x="340" y="250" fontSize="13" fontFamily="Caveat, cursive" fill="#555">• API rate limits</text>
                <text x="340" y="272" fontSize="13" fontFamily="Caveat, cursive" fill="#555">• Mobile layout</text>

                {/* Diamond */}
                <path d="M580 80 L640 125 L580 170 L520 125 Z" fill="none" stroke="#059669" strokeWidth="2.5" strokeDasharray="7,3" />
                <text x="580" y="120" textAnchor="middle" fontSize="15" fontFamily="Caveat, cursive" fontWeight="700" fill="#047857">Launch</text>
                <text x="580" y="140" textAnchor="middle" fontSize="13" fontFamily="Caveat, cursive" fill="#047857">ready?</text>

                {/* Arrow from box to diamond */}
                <path d="M492 90 Q510 90 520 110" stroke="#2563eb" strokeWidth="2" fill="none" strokeLinecap="round" strokeDasharray="6,3" />
                <polygon points="520,110 510,107 514,118" fill="#2563eb" />

                {/* Arrow down from diamond */}
                <path d="M580 172 L580 210" stroke="#059669" strokeWidth="2" fill="none" strokeLinecap="round" />
                <polygon points="580,210 575,200 585,200" fill="#059669" />
                <rect x="540" y="210" width="80" height="30" rx="15" fill="#d1fae5" stroke="#059669" strokeWidth="2" />
                <text x="580" y="229" textAnchor="middle" fontSize="13" fontFamily="Caveat, cursive" fontWeight="600" fill="#065f46">Ship it!</text>

                {/* Ellipse / note */}
                <ellipse cx="760" cy="130" rx="95" ry="55" fill="none" stroke="#7c3aed" strokeWidth="2.5" strokeDasharray="8,3" />
                <text x="760" y="122" textAnchor="middle" fontSize="15" fontFamily="Caveat, cursive" fontWeight="700" fill="#5b21b6">Research</text>
                <text x="760" y="143" textAnchor="middle" fontSize="12" fontFamily="Caveat, cursive" fill="#6b7280">in progress</text>

                {/* Cursor - blue */}
                <g transform="translate(430, 220)">
                  <path d="M2 2L16 10L10 12L8 18Z" fill="#3b82f6" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
                  <rect x="16" y="18" width="46" height="18" rx="9" fill="#3b82f6" />
                  <text x="39" y="30" textAnchor="middle" fontSize="10" fontFamily="Inter, sans-serif" fill="white" fontWeight="600">Marcus</text>
                </g>

                {/* Cursor - pink */}
                <g transform="translate(100, 200)">
                  <path d="M2 2L16 10L10 12L8 18Z" fill="#ec4899" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
                  <rect x="16" y="18" width="40" height="18" rx="9" fill="#ec4899" />
                  <text x="36" y="30" textAnchor="middle" fontSize="10" fontFamily="Inter, sans-serif" fill="white" fontWeight="600">Sarah</text>
                </g>

                {/* Squiggly underline decoration */}
                <path d="M60 300 Q80 295 100 300 Q120 305 140 300 Q160 295 180 300" stroke="#c73e0e" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.4" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="features" className="py-20 px-6" style={{ borderTop: '1.5px solid var(--border)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-sketch mb-4" style={{ fontSize: 'clamp(36px, 6vw, 60px)', color: 'var(--text)' }}>
              Everything you need to think out loud
            </h2>
            <p className="text-base max-w-lg mx-auto" style={{ color: 'var(--muted)' }}>
              No feature bloat. Just the tools that help you move fast.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="feature-card">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(199,62,14,0.1)' }}>
                    <Icon className="w-5 h-5" style={{ color: 'var(--orange)' }} />
                  </div>
                  <h3 className="font-sketch text-xl font-bold mb-2" style={{ color: 'var(--text)' }}>{f.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{f.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* ── EXAMPLES ── */}
      <section id="examples" className="py-20 px-6" style={{ borderTop: '1.5px solid var(--border)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-sketch mb-4" style={{ fontSize: 'clamp(36px, 6vw, 60px)', color: 'var(--text)' }}>
              What teams sketch
            </h2>
            <p className="text-base" style={{ color: 'var(--muted)' }}>
              From quick wireframes to full architecture diagrams.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                label: 'Wireframes',
                img: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?w=400&h=300&fit=crop',
              },
              {
                label: 'Flowcharts',
                img: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?w=400&h=300&fit=crop',
              },
              {
                label: 'Architecture',
                img: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?w=400&h=300&fit=crop',
              },
              {
                label: 'Retros',
                img: 'https://images.pexels.com/photos/3182811/pexels-photo-3182811.jpeg?w=400&h=300&fit=crop',
              },
            ].map((ex) => (
              <div key={ex.label} className="canvas-box overflow-hidden group cursor-pointer">
                <div className="relative overflow-hidden" style={{ height: '160px' }}>
                  <img
                    src={ex.img}
                    alt={ex.label}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center" style={{ background: '' }}>
                    <span className="font-sketch text-white text-lg font-bold"></span>
                  </div>
                </div>
                <div className="px-4 py-3" style={{ borderTop: '1px solid var(--border)' }}>
                  <span className="font-sketch text-base font-semibold" style={{ color: 'var(--text)' }}>{ex.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>




      {/* ── FINAL CTA ── */}
      <section className="py-24 px-6 text-center" style={{ borderTop: '1.5px solid var(--border)' }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="font-sketch mb-6" style={{ fontSize: 'clamp(42px, 8vw, 80px)', lineHeight: 1.1, color: 'var(--text)' }}>
            Start your first sketch.
          </h2>
          <p className="text-base mb-10" style={{ color: 'var(--muted)' }}>
            Just open and draw.
          </p>
          <Link href={"/signin"}>
          
          <button className="btn-orange text-lg px-10 py-4">
            <Pencil className="w-5 h-5" />
            Sign in
          </button>
          </Link>
          <p className="mt-4 text-sm" style={{ color: 'var(--muted)' }}>Works in your browser. Always free for individuals.</p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-12 px-6" style={{ borderTop: '1.5px solid var(--border)' }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-1.5 mb-3">
              <span className="font-sketch text-xl font-bold" style={{ color: 'var(--text)' }}>cosketch</span>
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--orange)' }} />
            </div>
            <p className="text-sm" style={{ color: 'var(--muted)' }}>
              A fast, hand-drawn whiteboard for teams.
            </p>
          </div>
          <div className="flex flex-wrap gap-8">
            {[
              { title: 'Product', links: ['Features', 'Examples', 'Changelog'] },
              { title: 'Company', links: ['About', 'Blog', 'Contact'] },
              { title: 'Legal', links: ['Privacy', 'Terms'] },
            ].map((col) => (
              <div key={col.title}>
                <div className="text-xs font-semibold uppercase tracking-wide mb-3" style={{ color: 'var(--muted)', fontFamily: 'Inter, sans-serif' }}>
                  {col.title}
                </div>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm transition-colors"
                        style={{ color: 'var(--muted)' }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text)')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-5xl mx-auto mt-10 pt-6 flex items-center justify-between" style={{ borderTop: '1px solid var(--border)' }}>
          <p className="text-xs" style={{ color: 'var(--muted)' }}>© 2024 cosketch. All rights reserved.</p>
          <p className="text-xs" style={{ color: 'var(--muted)' }}>Made with care, for teams everywhere.</p>
        </div>
      </footer>
    </div>
  );
}
