'use client';

import { motion } from 'framer-motion';
import { Building2, FlaskConical, Leaf } from 'lucide-react';

const PILLARS = [
  {
    icon: Building2,
    color: '#D4AF37',
    title: 'Empresa registrada en USA',
    desc: 'Respaldo legal y operativo desde los Estados Unidos para un alcance global.',
  },
  {
    icon: FlaskConical,
    color: '#00D2FF',
    title: 'Casi 33 años de investigación',
    desc: 'Respaldado por décadas de investigación científica en salud, nutrición y bienestar.',
  },
  {
    icon: Leaf,
    color: '#10B981',
    title: 'Enfoque multidisciplinario',
    desc: 'Nutrición · Anti-envejecimiento · Cuidado Personal · Tecnología de vanguardia.',
  },
];

function Globe() {
  return (
    <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-w-sm mx-auto">
      {/* Outer glow */}
      <circle cx="200" cy="200" r="180" fill="url(#globeGlow)" />
      {/* Main sphere */}
      <circle cx="200" cy="200" r="155" stroke="#00D2FF" strokeWidth="1.5" fill="rgba(10,17,40,0.6)" />
      {/* Latitude lines */}
      {[-80, -50, -20, 10, 40, 70, 100, 130].map((y, i) => {
        const cy = 200 + y;
        const halfWidth = Math.sqrt(Math.max(0, 155 * 155 - (cy - 200) * (cy - 200)));
        return halfWidth > 10 ? (
          <ellipse key={i} cx="200" cy={cy} rx={halfWidth} ry={halfWidth * 0.25} stroke="rgba(0,210,255,0.2)" strokeWidth="0.8" fill="none" />
        ) : null;
      })}
      {/* Longitude lines */}
      {[0, 30, 60, 90, 120, 150].map((angle, i) => (
        <ellipse
          key={i}
          cx="200" cy="200"
          rx={155 * Math.abs(Math.cos((angle * Math.PI) / 180))}
          ry="155"
          stroke="rgba(0,210,255,0.15)"
          strokeWidth="0.8"
          fill="none"
          transform={`rotate(${angle}, 200, 200)`}
        />
      ))}
      {/* Connection dots */}
      {[
        { x: 130, y: 160, color: '#00D2FF' },
        { x: 260, y: 130, color: '#8B5CF6' },
        { x: 310, y: 220, color: '#EC4899' },
        { x: 170, y: 280, color: '#D4AF37' },
        { x: 90, y: 240, color: '#10B981' },
        { x: 240, y: 300, color: '#00D2FF' },
      ].map((dot, i) => (
        <g key={i}>
          <circle cx={dot.x} cy={dot.y} r="4" fill={dot.color} opacity="0.9" />
          <circle cx={dot.x} cy={dot.y} r="8" fill={dot.color} opacity="0.15" />
        </g>
      ))}
      {/* Connection lines */}
      <line x1="130" y1="160" x2="260" y2="130" stroke="#00D2FF" strokeWidth="0.8" strokeOpacity="0.3" strokeDasharray="4 6" />
      <line x1="260" y1="130" x2="310" y2="220" stroke="#8B5CF6" strokeWidth="0.8" strokeOpacity="0.3" strokeDasharray="4 6" />
      <line x1="310" y1="220" x2="240" y2="300" stroke="#EC4899" strokeWidth="0.8" strokeOpacity="0.3" strokeDasharray="4 6" />
      <line x1="240" y1="300" x2="170" y2="280" stroke="#D4AF37" strokeWidth="0.8" strokeOpacity="0.3" strokeDasharray="4 6" />
      <line x1="170" y1="280" x2="90" y2="240" stroke="#10B981" strokeWidth="0.8" strokeOpacity="0.3" strokeDasharray="4 6" />
      <line x1="90" y1="240" x2="130" y2="160" stroke="#00D2FF" strokeWidth="0.8" strokeOpacity="0.3" strokeDasharray="4 6" />
      <defs>
        <radialGradient id="globeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(0,210,255,0.08)" />
          <stop offset="70%" stopColor="rgba(139,92,246,0.04)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
    </svg>
  );
}

export default function BelezaSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(212,175,55,0.04) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-rocket-gold/70 mb-4">
              Respaldo Empresarial
            </p>

            <h2
              className="font-display font-black text-white mb-8 leading-tight"
              style={{ fontSize: 'clamp(28px, 4vw, 52px)', letterSpacing: '-0.02em' }}
            >
              Rocket iA nace dentro de la empresa{' '}
              <span className="text-gradient-gold">Beleza Beauty & Health</span>
            </h2>

            <div className="space-y-6 mb-10">
              {PILLARS.map((pillar, i) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="flex items-start gap-4"
                >
                  <div
                    className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{
                      background: `rgba(${pillar.color === '#D4AF37' ? '212,175,55' : pillar.color === '#00D2FF' ? '0,210,255' : '16,185,129'}, 0.12)`,
                      border: `1px solid rgba(${pillar.color === '#D4AF37' ? '212,175,55' : pillar.color === '#00D2FF' ? '0,210,255' : '16,185,129'}, 0.3)`,
                    }}
                  >
                    <pillar.icon size={20} style={{ color: pillar.color }} />
                  </div>
                  <div>
                    <p className="font-bold text-white mb-1">{pillar.title}</p>
                    <p className="text-sm text-white/55 leading-relaxed">{pillar.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div
              className="rounded-2xl px-6 py-4"
              style={{
                background: 'rgba(212,175,55,0.06)',
                border: '1px solid rgba(212,175,55,0.2)',
              }}
            >
              <p className="text-sm font-semibold text-white/70 leading-relaxed">
                Aperturando nueva área en tecnología{' '}
                <strong className="text-rocket-gold">para abrir el mercado global</strong>
              </p>
            </div>
          </motion.div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-8"
          >
            <Globe />

            {/* Beleza badge */}
            <div
              className="px-8 py-4 rounded-2xl text-center"
              style={{
                background: 'rgba(18,18,18,0.8)',
                border: '1px solid rgba(212,175,55,0.25)',
                boxShadow: '0 0 30px rgba(212,175,55,0.06)',
              }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-rocket-gold/60 mb-1">Fundadora</p>
              <p
                className="font-display font-black text-gradient-gold"
                style={{ fontSize: 'clamp(18px, 2.5vw, 28px)' }}
              >
                Beleza Beauty & Health
              </p>
              <p className="text-xs text-white/40 mt-1.5 tracking-wide">Est. ~1993 · USA · Global</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
