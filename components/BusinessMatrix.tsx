'use client';

import { motion } from 'framer-motion';
import { Rocket, TrendingUp } from 'lucide-react';

export default function BusinessMatrix() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Dark bg with gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, rgba(5,8,20,1) 0%, rgba(10,20,50,0.4) 50%, rgba(5,8,20,1) 100%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-rocket-gold/60 mb-4">
            Sistema de Ingresos
          </p>
          <h2
            className="font-display font-black text-white leading-tight"
            style={{ fontSize: 'clamp(30px, 5vw, 68px)', letterSpacing: '-0.025em' }}
          >
            Presentamos{' '}
            <span className="text-gradient-gold">Rocket Business Matrix</span>
          </h2>
          <div
            className="inline-flex items-center gap-2 mt-4 px-5 py-2 rounded-full text-sm font-bold"
            style={{
              background: 'rgba(212,175,55,0.08)',
              border: '1px solid rgba(212,175,55,0.2)',
              color: '#D4AF37',
            }}
          >
            1 x 2 con Acelerador de Ingresos
          </div>
        </motion.div>

        {/* 3-column layout */}
        <div className="grid lg:grid-cols-3 gap-8 items-center">

          {/* Left: 1x2 */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center lg:text-left"
          >
            <div className="flex items-baseline justify-center lg:justify-start gap-4 mb-6">
              <span
                className="font-display font-black price-outline"
                style={{
                  fontSize: 'clamp(80px, 12vw, 160px)',
                  letterSpacing: '-0.04em',
                  WebkitTextStroke: '3px rgba(59,130,246,0.8)',
                  color: 'transparent',
                }}
              >
                1
              </span>
              <span
                className="font-display font-black text-white/30"
                style={{ fontSize: 'clamp(40px, 6vw, 80px)' }}
              >
                x
              </span>
              <span
                className="font-display font-black price-outline"
                style={{
                  fontSize: 'clamp(80px, 12vw, 160px)',
                  letterSpacing: '-0.04em',
                  WebkitTextStroke: '3px rgba(249,115,22,0.8)',
                  color: 'transparent',
                }}
              >
                2
              </span>
            </div>
            <p
              className="font-display font-bold text-white/60 leading-snug"
              style={{ fontSize: 'clamp(14px, 1.8vw, 22px)' }}
            >
              Crece tu negocio.{' '}
              <span className="text-white">Duplica tus resultados.</span>
            </p>
          </motion.div>

          {/* Center: Rocket illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              {/* Outer ring */}
              <div
                className="absolute inset-0 rounded-full border-2 border-dashed opacity-20 orbit-cw"
                style={{ borderColor: '#D4AF37' }}
              />
              {/* Middle ring */}
              <div
                className="absolute inset-8 rounded-full border opacity-30 orbit-ccw"
                style={{ borderColor: '#00D2FF' }}
              />
              {/* Inner glow */}
              <div
                className="absolute inset-16 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(212,175,55,0.15) 0%, rgba(0,210,255,0.08) 60%, transparent 80%)',
                }}
              />

              {/* Rocket icon center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-24 h-24 rounded-3xl flex items-center justify-center float-icon"
                  style={{
                    background: 'linear-gradient(135deg, rgba(212,175,55,0.2), rgba(0,210,255,0.15))',
                    border: '2px solid rgba(212,175,55,0.35)',
                    boxShadow: '0 0 40px rgba(212,175,55,0.2), 0 0 80px rgba(0,210,255,0.08)',
                  }}
                >
                  <Rocket
                    size={48}
                    className="text-rocket-gold -rotate-45"
                    style={{ filter: 'drop-shadow(0 0 16px rgba(212,175,55,0.6))' }}
                  />
                </div>
              </div>

              {/* Orbit dot */}
              <div
                className="absolute top-4 right-4 w-4 h-4 rounded-full"
                style={{ background: '#D4AF37', boxShadow: '0 0 12px rgba(212,175,55,0.7)' }}
              />
              <div
                className="absolute bottom-8 left-6 w-3 h-3 rounded-full"
                style={{ background: '#00D2FF', boxShadow: '0 0 10px rgba(0,210,255,0.7)' }}
              />
            </div>
          </motion.div>

          {/* Right: Accelerator */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-center lg:text-right"
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-xs font-black uppercase tracking-widest"
              style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)', color: '#10B981' }}
            >
              <TrendingUp size={14} />
              Acelerador de Ingresos
            </div>

            <h3
              className="font-display font-black text-white mb-4 leading-tight"
              style={{ fontSize: 'clamp(22px, 3vw, 38px)', letterSpacing: '-0.02em' }}
            >
              Estrategias inteligentes que{' '}
              <span className="text-gradient-cta">activan, escalan y multiplican</span>{' '}
              tus ingresos
            </h3>

            {/* Mini stats */}
            <div className="grid grid-cols-2 gap-3 mt-6">
              {[
                { label: 'Multiplicar', val: '2x', color: '#D4AF37' },
                { label: 'Resultados', val: '📈', color: '#10B981' },
                { label: 'Desde el', val: 'Día 1', color: '#00D2FF' },
                { label: 'Disponible', val: '24/7', color: '#8B5CF6' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-3 rounded-2xl text-center"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <p className="font-display font-black text-lg" style={{ color: stat.color }}>{stat.val}</p>
                  <p className="text-xs text-white/40 font-semibold mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
