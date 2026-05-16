'use client';

import { motion } from 'framer-motion';
import { Clock, Target, Zap, TrendingUp } from 'lucide-react';

const AGENTS = [
  {
    name: 'Asistente de Contenidos Millonario',
    role: 'Content Strategist',
    desc: 'Genera ideas y contenido estratégico que conecta, engancha y vende en todos los canales.',
    color: '#00D2FF',
    rgb: '0,210,255',
    emoji: '📝',
    initials: 'AC',
  },
  {
    name: 'Creador de Oferta Irresistible',
    role: 'Sales Architect',
    desc: 'Diseña ofertas persuasivas que conectan emocionalmente y multiplican tu tasa de conversión.',
    color: '#D4AF37',
    rgb: '212,175,55',
    emoji: '💰',
    initials: 'OI',
  },
  {
    name: 'Creador de Ideas y Riqueza Digital',
    role: 'Digital Strategist',
    desc: 'Descubre nuevas oportunidades digitales y modelos de negocio con alto potencial de ingreso.',
    color: '#FF2424',
    rgb: '255,36,36',
    emoji: '🚀',
    initials: 'IR',
  },
  {
    name: 'Explorador de Nichos IA',
    role: 'Market Researcher',
    desc: 'Investiga mercados y tendencias para encontrar nichos rentables con poca competencia.',
    color: '#10B981',
    rgb: '16,185,129',
    emoji: '🔍',
    initials: 'EN',
  },
  {
    name: 'Escritora de Copywriting Ganador',
    role: 'Copy Expert',
    desc: 'Crea textos persuasivos que convierten lectores en clientes y aumentan tus ventas.',
    color: '#8B5CF6',
    rgb: '139,92,246',
    emoji: '✍️',
    initials: 'CW',
  },
  {
    name: 'Marca Personal Mujer',
    role: 'Brand Builder',
    desc: 'Ayuda a construir tu marca personal femenina moderna, auténtica y poderosa.',
    color: '#F97316',
    rgb: '249,115,22',
    emoji: '👑',
    initials: 'MP',
  },
];

const BENEFITS = [
  { icon: Clock,      label: 'Ahorra Tiempo',          color: '#00D2FF', rgb: '0,210,255' },
  { icon: Target,     label: 'Enfocado en Resultados', color: '#8B5CF6', rgb: '139,92,246' },
  { icon: Zap,        label: 'Más Productividad',      color: '#D4AF37', rgb: '212,175,55' },
  { icon: TrendingUp, label: 'Crece, Vende y Escala',  color: '#10B981', rgb: '16,185,129' },
];

export default function AgentsSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(139,92,246,0.05) 0%, transparent 60%)' }}
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
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-rocket-purple/70 mb-4">
            Incluidos en Rocket iA II
          </p>
          <h2
            className="font-display font-black text-white mb-4 leading-tight"
            style={{ fontSize: 'clamp(28px, 4vw, 56px)', letterSpacing: '-0.02em' }}
          >
            Agentes Especializados{' '}
            <span className="text-gradient-iA">Incluidos</span>
          </h2>
          <p className="text-base text-white/50 max-w-xl mx-auto">
            Un equipo virtual disponible{' '}
            <strong className="text-white font-bold">24/7</strong> para ayudarte a{' '}
            <span className="text-gradient-cta font-semibold">CREAR, VENDER y CRECER</span>
          </p>
        </motion.div>

        {/* Agent cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {AGENTS.map((agent, i) => (
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="group relative rounded-3xl p-6 transition-all duration-300"
              style={{
                background: `linear-gradient(145deg, rgba(${agent.rgb},0.07) 0%, rgba(8,12,30,0.9) 100%)`,
                border: `1px solid rgba(${agent.rgb},0.15)`,
              }}
            >
              {/* Avatar */}
              <div className="flex items-center gap-4 mb-5">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{
                    background: `linear-gradient(135deg, rgba(${agent.rgb},0.2), rgba(${agent.rgb},0.08))`,
                    border: `1.5px solid rgba(${agent.rgb},0.3)`,
                    boxShadow: `0 0 20px rgba(${agent.rgb},0.15)`,
                  }}
                >
                  {agent.emoji}
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: agent.color }}>
                    {agent.role}
                  </p>
                  <h3 className="font-display font-black text-white text-sm leading-snug mt-0.5">
                    {agent.name}
                  </h3>
                </div>
              </div>

              <p className="text-sm text-white/50 leading-relaxed mb-5">{agent.desc}</p>

              {/* Status indicator */}
              <div className="flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ background: agent.color, boxShadow: `0 0 6px rgba(${agent.rgb},0.7)` }}
                />
                <span className="text-xs font-semibold text-white/40">Disponible 24/7</span>
              </div>

              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle at 50% 100%, rgba(${agent.rgb},0.06), transparent 70%)` }}
              />
            </motion.div>
          ))}
        </div>

        {/* Benefits strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="rounded-3xl px-6 py-6 flex flex-wrap items-center justify-center gap-6 sm:gap-12"
          style={{
            background: 'rgba(12,18,45,0.6)',
            border: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          {BENEFITS.map((b) => (
            <div key={b.label} className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: `rgba(${b.rgb},0.1)`, border: `1px solid rgba(${b.rgb},0.2)` }}
              >
                <b.icon size={18} style={{ color: b.color }} />
              </div>
              <span className="font-bold text-sm text-white/70">{b.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
