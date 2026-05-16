'use client';

import { motion } from 'framer-motion';
import { Check, MessageCircle, BookOpen, Gem, Globe, Mic, GraduationCap, Rocket, Settings, Users, RefreshCw } from 'lucide-react';

const BADGES = [
  '✓ Sin complicaciones técnicas',
  '✓ Sin perder meses investigando',
  '✓ Resultados desde el primer día',
];

const COURSES = [
  {
    icon: MessageCircle,
    name: 'ChatGPT Pro',
    desc: 'Domina ChatGPT y lleva tu productividad al siguiente nivel',
    color: '#10B981',
    rgb: '16,185,129',
    num: '01',
  },
  {
    icon: BookOpen,
    name: 'NotebookLM Pro',
    desc: 'Organiza, analiza y aprovecha información como un experto',
    color: '#8B5CF6',
    rgb: '139,92,246',
    num: '02',
  },
  {
    icon: Gem,
    name: 'Gemini Pro',
    desc: 'Sácale el máximo provecho a la IA de Google para tu negocio',
    color: '#3B82F6',
    rgb: '59,130,246',
    num: '03',
  },
  {
    icon: Globe,
    name: 'Creación de Websites',
    desc: 'Crea páginas profesionales instantáneas y listas para vender',
    color: '#F97316',
    rgb: '249,115,22',
    num: '04',
  },
  {
    icon: Mic,
    name: 'Agentes de Audio IA',
    desc: 'Automatiza contactos y genera oportunidades sin estar presente',
    color: '#10B981',
    rgb: '16,185,129',
    num: '05',
  },
];

const BENEFITS = [
  { icon: GraduationCap, label: 'Paso a Paso' },
  { icon: Rocket,         label: 'Herramientas Listas' },
  { icon: Settings,       label: 'Practicidad Total' },
  { icon: Users,          label: 'Acompañamiento' },
  { icon: RefreshCw,      label: 'Actualizaciones' },
];

export default function RocketIA2Section() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none grid-bg-subtle"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(139,92,246,0.04) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-6"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-rocket-purple/70 mb-4">
            Nivel Avanzado
          </p>
          <h2
            className="font-display font-black text-white mb-4 leading-tight"
            style={{ fontSize: 'clamp(32px, 5vw, 68px)', letterSpacing: '-0.025em' }}
          >
            <span className="text-gradient-iA">Rocket iA II</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto font-medium">
            Todo lo de Rocket iA I...{' '}
            <strong className="text-white">MÁS</strong> capacitación avanzada y{' '}
            <strong className="text-white">agentes especializados</strong>
          </p>
        </motion.div>

        {/* Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-16"
        >
          {BADGES.map((badge) => (
            <span
              key={badge}
              className="px-5 py-2.5 rounded-full text-sm font-bold"
              style={{
                background: 'rgba(139,92,246,0.08)',
                border: '1px solid rgba(139,92,246,0.25)',
                color: 'rgba(167,139,250,0.9)',
              }}
            >
              {badge}
            </span>
          ))}
        </motion.div>

        {/* Course grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {COURSES.map((course, i) => (
            <motion.div
              key={course.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5 }}
              className="relative group rounded-3xl p-6 transition-all duration-300"
              style={{
                background: `linear-gradient(145deg, rgba(${course.rgb},0.08), rgba(5,8,20,0.85))`,
                border: `1px solid rgba(${course.rgb},0.15)`,
              }}
            >
              <div className="flex items-start justify-between mb-5">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{
                    background: `rgba(${course.rgb},0.12)`,
                    border: `1px solid rgba(${course.rgb},0.25)`,
                    boxShadow: `0 0 16px rgba(${course.rgb},0.15)`,
                  }}
                >
                  <course.icon size={22} style={{ color: course.color }} />
                </div>
                <span
                  className="text-xs font-black px-2.5 py-1 rounded-lg"
                  style={{
                    background: `rgba(${course.rgb},0.1)`,
                    border: `1px solid rgba(${course.rgb},0.2)`,
                    color: course.color,
                  }}
                >
                  {course.num}
                </span>
              </div>

              <h3 className="font-display font-black text-white text-lg mb-2 leading-snug">
                {course.name}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed">{course.desc}</p>

              <div className="mt-4 flex items-center gap-2">
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center"
                  style={{ background: `rgba(${course.rgb},0.15)`, border: `1px solid rgba(${course.rgb},0.3)` }}
                >
                  <Check size={10} style={{ color: course.color }} />
                </div>
                <span className="text-xs font-semibold text-white/40">Incluido en Rocket iA II</span>
              </div>

              {/* Last card spans 2 cols on desktop */}
              {course.num === '05' && (
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(circle at 50% 100%, rgba(${course.rgb},0.06), transparent 70%)` }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Benefits strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="rounded-3xl px-6 py-6 flex flex-wrap items-center justify-center gap-6 sm:gap-10"
          style={{
            background: 'rgba(139,92,246,0.06)',
            border: '1px solid rgba(139,92,246,0.15)',
          }}
        >
          {BENEFITS.map((b, i) => (
            <div key={b.label} className="flex items-center gap-2.5">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(139,92,246,0.12)', border: '1px solid rgba(139,92,246,0.2)' }}
              >
                <b.icon size={17} className="text-rocket-purple" />
              </div>
              <span className="text-sm font-bold text-white/70">{b.label}</span>
              {i < BENEFITS.length - 1 && (
                <span className="hidden sm:block text-white/15 ml-2">|</span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
