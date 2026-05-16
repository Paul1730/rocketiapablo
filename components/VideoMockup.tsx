'use client';

import { motion } from 'framer-motion';
import { Play, Check } from 'lucide-react';

const FEATURES = [
  'Acceso Pre-Lanzamiento',
  '8 Herramientas IA',
  'Capacitación Pro',
  'Comunidad Exclusiva',
];

export default function VideoMockup() {
  return (
    <section className="relative py-8 pb-24 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-x-0 top-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0,210,255,0.3), rgba(139,92,246,0.3), transparent)' }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* Outer glow ring */}
          <div
            className="absolute -inset-1 rounded-[28px] pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, rgba(0,210,255,0.2), rgba(139,92,246,0.2), rgba(236,72,153,0.15))',
              filter: 'blur(1px)',
            }}
          />

          {/* Main card */}
          <div
            className="relative rounded-3xl overflow-hidden"
            style={{
              background: 'linear-gradient(145deg, rgba(15,20,50,0.95), rgba(10,12,35,0.98))',
              border: '1.5px solid rgba(0,210,255,0.2)',
              boxShadow: '0 40px 120px rgba(0,0,0,0.6), 0 0 60px rgba(0,210,255,0.06)',
            }}
          >
            {/* Video area */}
            <div
              className="relative w-full overflow-hidden"
              style={{ aspectRatio: '16/9' }}
            >
              {/* Dark cinematic overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(135deg, rgba(5,8,20,0.85) 0%, rgba(10,17,40,0.7) 50%, rgba(5,8,20,0.9) 100%)',
                }}
              />

              {/* Grid pattern inside */}
              <div className="absolute inset-0 grid-bg-subtle opacity-40" />

              {/* Decorative circuit lines */}
              <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1200 675" fill="none">
                <line x1="0" y1="337" x2="1200" y2="337" stroke="#00D2FF" strokeWidth="0.5" />
                <line x1="600" y1="0" x2="600" y2="675" stroke="#00D2FF" strokeWidth="0.5" />
                <circle cx="600" cy="337" r="200" stroke="#8B5CF6" strokeWidth="0.5" strokeDasharray="10 20" />
                <circle cx="600" cy="337" r="300" stroke="#00D2FF" strokeWidth="0.5" strokeDasharray="5 30" />
              </svg>

              {/* Price overlay - ghost/outline effect */}
              <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none">
                <div className="text-center">
                  <div
                    className="price-outline font-display font-black leading-none"
                    style={{
                      fontSize: 'clamp(72px, 14vw, 200px)',
                      letterSpacing: '-0.04em',
                      WebkitTextStroke: '2px rgba(255,255,255,0.12)',
                    }}
                  >
                    $97
                  </div>
                  <p
                    className="font-display font-bold uppercase tracking-[0.25em] mt-2"
                    style={{
                      color: 'rgba(0,210,255,0.35)',
                      fontSize: 'clamp(10px, 1.5vw, 18px)',
                      WebkitTextStroke: '0.5px rgba(0,210,255,0.3)',
                    }}
                  >
                    Pago Único
                  </p>
                </div>
              </div>

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group"
                  aria-label="Reproducir video"
                >
                  {/* Pulse ring */}
                  <span
                    className="absolute inset-0 rounded-full animate-ping opacity-30"
                    style={{ background: 'rgba(0,210,255,0.3)' }}
                  />
                  <span
                    className="absolute inset-0 rounded-full animate-ping opacity-20 animation-delay-300"
                    style={{ background: 'rgba(139,92,246,0.3)', animationDelay: '0.5s' }}
                  />

                  {/* Button */}
                  <div
                    className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center"
                    style={{
                      background: 'rgba(255,255,255,0.12)',
                      border: '2px solid rgba(255,255,255,0.35)',
                      backdropFilter: 'blur(12px)',
                      boxShadow: '0 0 40px rgba(0,210,255,0.25), 0 8px 32px rgba(0,0,0,0.4)',
                    }}
                  >
                    <Play
                      size={32}
                      className="text-white ml-1 group-hover:scale-110 transition-transform duration-200"
                      fill="white"
                    />
                  </div>
                </motion.button>
              </div>

              {/* Corner decoration arrow pointing to play */}
              <div className="absolute bottom-8 right-10 hidden sm:block pointer-events-none">
                <svg width="80" height="60" viewBox="0 0 80 60" fill="none" className="opacity-40">
                  <path d="M10 10 Q50 10 65 40" stroke="#00D2FF" strokeWidth="1.5" fill="none" strokeDasharray="4 6" />
                  <path d="M60 35 L65 40 L55 40" stroke="#00D2FF" strokeWidth="1.5" fill="none" />
                </svg>
              </div>
            </div>

            {/* Bottom feature strip */}
            <div
              className="px-6 sm:px-10 py-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
              style={{
                background: 'rgba(0,210,255,0.04)',
                borderTop: '1px solid rgba(0,210,255,0.1)',
              }}
            >
              {FEATURES.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <div
                    className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(0,210,255,0.15)', border: '1px solid rgba(0,210,255,0.4)' }}
                  >
                    <Check size={10} className="text-rocket-cyan" />
                  </div>
                  <span className="text-sm font-semibold text-white/80">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
