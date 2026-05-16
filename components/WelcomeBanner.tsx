'use client';

import { motion } from 'framer-motion';

const MARQUEE_ITEMS = [
  'Inteligencia Artificial',
  'Crea con IA',
  'Vende con IA',
  'Escala con IA',
  'Herramientas Listas',
  'Agentes Especializados',
  'Capacitación Pro',
  'Pre-Lanzamiento',
];

export default function WelcomeBanner() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Section background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, rgba(5,8,20,1) 0%, rgba(10,17,40,0.6) 50%, rgba(5,8,20,1) 100%)',
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl overflow-hidden"
          style={{
            background: 'rgba(10,17,40,0.7)',
            border: '1px solid rgba(0,210,255,0.15)',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 0 60px rgba(0,210,255,0.06)',
          }}
        >
          {/* Top gradient line */}
          <div
            className="h-px w-full"
            style={{ background: 'linear-gradient(90deg, transparent, #00D2FF, #8B5CF6, #EC4899, transparent)' }}
          />

          <div className="px-8 sm:px-16 py-12 sm:py-16 text-center">
            {/* Small label */}
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-rocket-cyan/60 mb-6">
              Bienvenido al Futuro
            </p>

            {/* Main text */}
            <h2
              className="font-display font-black leading-tight text-white"
              style={{ fontSize: 'clamp(22px, 3.5vw, 44px)', letterSpacing: '-0.015em' }}
            >
              BIENVENIDO AL FUTURO DE LOS NEGOCIOS
              <br />
              IMPULSADOS POR{' '}
              <span className="text-gradient-iA">INTELIGENCIA ARTIFICIAL</span>
              {' '}
              <motion.span
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-rocket-cyan"
              >
                ›››
              </motion.span>
            </h2>
          </div>

          {/* Bottom gradient line */}
          <div
            className="h-px w-full"
            style={{ background: 'linear-gradient(90deg, transparent, #EC4899, #8B5CF6, #00D2FF, transparent)' }}
          />
        </motion.div>
      </div>

      {/* Marquee strip below */}
      <div className="mt-16 overflow-hidden relative">
        <div
          className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(90deg, rgba(5,8,20,1), transparent)' }}
        />
        <div
          className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(-90deg, rgba(5,8,20,1), transparent)' }}
        />

        <div className="marquee-track">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <div key={i} className="flex items-center gap-6 flex-shrink-0 px-6">
              <span className="font-display font-bold text-sm uppercase tracking-widest text-white/40 whitespace-nowrap">
                {item}
              </span>
              <span className="text-rocket-cyan/30 text-xl">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
