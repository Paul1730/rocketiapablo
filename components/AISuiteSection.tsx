'use client';

import { motion } from 'framer-motion';
import { Check, Rocket, Zap, Clock, Target, MessageSquare, FileText, Palette, Video, Settings, BarChart3, Mic, Share2 } from 'lucide-react';

const FEATURES = [
  { icon: Check, text: '100% Listos para usarse' },
  { icon: Rocket, text: 'Implementación inmediata' },
  { icon: Clock, text: 'Ahorra tiempo y recursos' },
  { icon: Target, text: 'Enfocados en resultados' },
];

const TOOLS = [
  { icon: MessageSquare, name: 'Chat AI',       color: '#00D2FF' },
  { icon: FileText,      name: 'Content AI',    color: '#8B5CF6' },
  { icon: Palette,       name: 'Design AI',     color: '#EC4899' },
  { icon: Video,         name: 'Video AI',      color: '#FF2424' },
  { icon: Settings,      name: 'Automation AI', color: '#D4AF37' },
  { icon: BarChart3,     name: 'Analytics AI',  color: '#10B981' },
  { icon: Mic,           name: 'Voice AI',      color: '#3B82F6' },
  { icon: Share2,        name: 'Social AI',     color: '#F97316' },
];

export default function AISuiteSection() {
  return (
    <section className="py-24 relative overflow-hidden grid-bg-subtle">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 100% 50% at 50% 50%, rgba(0,210,255,0.03) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-rocket-cyan/60 mb-4">
            Suite de IA Lista para Usarse
          </p>
          <h2
            className="font-display font-black text-white leading-tight"
            style={{ fontSize: 'clamp(28px, 4vw, 52px)', letterSpacing: '-0.02em' }}
          >
            Entregamos al cliente una{' '}
            <span className="text-gradient-cta">SUITE de productos de IA</span>
            <br />
            listos para usarse
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* 4 mini-features grid */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {FEATURES.map((feature, i) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-center gap-3 p-4 rounded-2xl"
                  style={{
                    background: 'rgba(0,210,255,0.05)',
                    border: '1px solid rgba(0,210,255,0.1)',
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(0,210,255,0.12)', border: '1px solid rgba(0,210,255,0.25)' }}
                  >
                    <feature.icon size={16} className="text-rocket-cyan" />
                  </div>
                  <span className="text-sm font-semibold text-white/80 leading-snug">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Quote */}
            <div
              className="rounded-2xl p-6 mb-8"
              style={{
                background: 'rgba(255,36,36,0.06)',
                border: '1px solid rgba(255,36,36,0.15)',
              }}
            >
              <p className="font-display font-black text-white text-xl leading-tight">
                <span className="text-rocket-red">NO</span> hacemos perder{' '}
                tiempo a los clientes
              </p>
            </div>

            {/* Drill analogy */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-2xl glass-card">
                <span className="text-2xl">🚫</span>
                <div>
                  <p className="text-sm font-semibold text-white/60">No tienen tiempo de construir un taladro</p>
                  <div className="w-full h-px mt-2 bg-red-500/20" />
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-2xl"
                style={{ background: 'rgba(0,210,255,0.06)', border: '1px solid rgba(0,210,255,0.15)' }}
              >
                <span className="text-2xl">👁️</span>
                <div>
                  <p className="text-sm font-semibold text-white">Quieren un <strong className="text-rocket-cyan">AGUJERO en la pared</strong></p>
                  <p className="text-xs text-white/40 mt-0.5">Resultados, no procesos complicados</p>
                </div>
              </div>
            </div>

            {/* Footer tagline */}
            <div className="mt-8 text-center">
              <p className="font-display font-bold text-white/60 text-sm tracking-wide">
                Menos complejidad.{' '}
                <span className="text-rocket-cyan">Más resultados.</span>{' '}
                Más crecimiento.
              </p>
            </div>
          </motion.div>

          {/* Right column - Tool grid mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="relative rounded-3xl p-6 sm:p-8"
              style={{
                background: 'rgba(12,18,45,0.8)',
                border: '1px solid rgba(0,210,255,0.15)',
                boxShadow: '0 0 60px rgba(0,210,255,0.05)',
              }}
            >
              {/* Toolbox header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rocket-red/70" />
                  <div className="w-3 h-3 rounded-full bg-rocket-gold/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <div
                  className="flex-1 h-6 rounded-lg"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}
                />
              </div>

              <p className="text-xs font-bold uppercase tracking-widest text-rocket-cyan/50 mb-5 text-center">
                Rocket iA™ — Suite Completa
              </p>

              {/* 2x4 tool grid */}
              <div className="grid grid-cols-4 gap-3">
                {TOOLS.map((tool, i) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.06 }}
                    whileHover={{ scale: 1.1, y: -4 }}
                    className="flex flex-col items-center gap-2 p-3 rounded-2xl cursor-pointer transition-all duration-200"
                    style={{
                      background: `rgba(${tool.color === '#00D2FF' ? '0,210,255' : tool.color === '#8B5CF6' ? '139,92,246' : tool.color === '#EC4899' ? '236,72,153' : tool.color === '#FF2424' ? '255,36,36' : tool.color === '#D4AF37' ? '212,175,55' : tool.color === '#10B981' ? '16,185,129' : tool.color === '#3B82F6' ? '59,130,246' : '249,115,22'}, 0.1)`,
                      border: `1px solid rgba(${tool.color === '#00D2FF' ? '0,210,255' : tool.color === '#8B5CF6' ? '139,92,246' : tool.color === '#EC4899' ? '236,72,153' : tool.color === '#FF2424' ? '255,36,36' : tool.color === '#D4AF37' ? '212,175,55' : tool.color === '#10B981' ? '16,185,129' : tool.color === '#3B82F6' ? '59,130,246' : '249,115,22'}, 0.2)`,
                    }}
                  >
                    <tool.icon size={20} style={{ color: tool.color, filter: `drop-shadow(0 0 6px ${tool.color}60)` }} />
                    <span className="text-[10px] font-bold text-white/60 text-center leading-tight">{tool.name}</span>
                  </motion.div>
                ))}
              </div>

              {/* Glow */}
              <div
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-64 h-8 rounded-full blur-xl pointer-events-none"
                style={{ background: 'rgba(0,210,255,0.12)' }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
