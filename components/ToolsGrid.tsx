'use client';

import { motion } from 'framer-motion';
import { Film, Sword, ImageIcon, PenTool, Globe, TrendingUp, GraduationCap, Headphones, Users } from 'lucide-react';

const TOOLS = [
  {
    num: '01',
    icon: Film,
    name: 'Rocket iA Editor',
    tagline: 'Edición de Video con IA',
    desc: 'Edita videos de forma más inteligente y rápida con IA. Corta, mejora y exporta en minutos.',
    color: '#00D2FF',
    rgb: '0,210,255',
    bgClass: 'from-cyan-950/80 to-rocket-dark/80',
  },
  {
    num: '02',
    icon: Sword,
    name: 'Rocket Heroe',
    tagline: 'Videos de Superhéroes',
    desc: 'Crea videos de superhéroes impulsados por IA con efectos cinematográficos impresionantes.',
    color: '#FF2424',
    rgb: '255,36,36',
    bgClass: 'from-red-950/80 to-rocket-dark/80',
  },
  {
    num: '03',
    icon: ImageIcon,
    name: 'Rocket Hyperrealistic',
    tagline: 'Imágenes Fotorrealistas',
    desc: 'Genera imágenes impresionantes con calidad fotográfica para cualquier proyecto.',
    color: '#8B5CF6',
    rgb: '139,92,246',
    bgClass: 'from-purple-950/80 to-rocket-dark/80',
  },
  {
    num: '04',
    icon: PenTool,
    name: 'Rocket Logo Maker',
    tagline: 'Diseño de Logotipos',
    desc: 'Diseña logotipos únicos y profesionales en segundos. Sin experiencia en diseño.',
    color: '#F97316',
    rgb: '249,115,22',
    bgClass: 'from-orange-950/80 to-rocket-dark/80',
  },
  {
    num: '05',
    icon: Globe,
    name: 'Rocket Smart Websites',
    tagline: 'Sitios Web Inteligentes',
    desc: 'Crea sitios web atractivos y de alto rendimiento en minutos, listos para vender.',
    color: '#3B82F6',
    rgb: '59,130,246',
    bgClass: 'from-blue-950/80 to-rocket-dark/80',
  },
  {
    num: '06',
    icon: TrendingUp,
    name: 'Rocket Funnels',
    tagline: 'Embudos de Ventas',
    desc: 'Crea embudos de ventas de alta conversión que venden 24/7 en piloto automático.',
    color: '#10B981',
    rgb: '16,185,129',
    bgClass: 'from-emerald-950/80 to-rocket-dark/80',
  },
];

const EXTRAS = [
  { icon: GraduationCap, title: 'Rocket University', desc: 'Capacitación paso a paso para dominar cada herramienta', color: '#8B5CF6', rgb: '139,92,246' },
  { icon: Headphones,    title: 'Soporte Premium',   desc: 'Asistencia experta cuando la necesites, sin demoras',  color: '#00D2FF', rgb: '0,210,255' },
  { icon: Users,         title: 'Centro de Negocios', desc: 'Conecta, colabora y crece con nuestra comunidad activa', color: '#D4AF37', rgb: '212,175,55' },
];

export default function ToolsGrid() {
  return (
    <section id="herramientas" className="py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 100% 60% at 50% 0%, rgba(0,210,255,0.04) 0%, transparent 60%)' }}
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
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-rocket-cyan/60 mb-4">
            Rocket iA 1
          </p>
          <h2
            className="font-display font-black text-white mb-4 leading-tight"
            style={{ fontSize: 'clamp(28px, 4vw, 56px)', letterSpacing: '-0.02em' }}
          >
            <span className="text-gradient-cta">6 Poderosas Herramientas</span>
            <br />
            incluidas en Rocket iA 1
          </h2>
          <p className="font-medium text-white/50 max-w-xl mx-auto">
            Todo lo que necesitas para crear, vender y crecer con IA
          </p>
        </motion.div>

        {/* 6 tool cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {TOOLS.map((tool, i) => (
            <motion.div
              key={tool.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="group relative rounded-3xl overflow-hidden p-6 transition-all duration-300 cursor-pointer"
              style={{
                background: `linear-gradient(145deg, rgba(${tool.rgb},0.08) 0%, rgba(5,8,20,0.9) 100%)`,
                border: `1px solid rgba(${tool.rgb},0.15)`,
              }}
            >
              {/* Number badge */}
              <div
                className="absolute top-5 right-5 w-9 h-9 rounded-xl flex items-center justify-center text-xs font-black"
                style={{
                  background: `rgba(${tool.rgb},0.12)`,
                  border: `1px solid rgba(${tool.rgb},0.25)`,
                  color: tool.color,
                }}
              >
                {tool.num}
              </div>

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                style={{
                  background: `rgba(${tool.rgb},0.12)`,
                  border: `1px solid rgba(${tool.rgb},0.25)`,
                  boxShadow: `0 0 20px rgba(${tool.rgb},0.15)`,
                }}
              >
                <tool.icon size={26} style={{ color: tool.color, filter: `drop-shadow(0 0 8px rgba(${tool.rgb},0.6))` }} />
              </div>

              {/* Content */}
              <p className="text-xs font-bold uppercase tracking-[0.15em] mb-2" style={{ color: `rgba(${tool.rgb},0.7)` }}>
                {tool.tagline}
              </p>
              <h3 className="font-display font-black text-white text-lg mb-3 leading-snug">
                {tool.name}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed">
                {tool.desc}
              </p>

              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle at 50% 100%, rgba(${tool.rgb},0.06), transparent 70%)` }}
              />
            </motion.div>
          ))}
        </div>

        {/* Extras strip */}
        <div className="grid sm:grid-cols-3 gap-4">
          {EXTRAS.map((extra, i) => (
            <motion.div
              key={extra.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="flex items-center gap-4 p-5 rounded-2xl"
              style={{
                background: `rgba(${extra.rgb},0.06)`,
                border: `1px solid rgba(${extra.rgb},0.15)`,
              }}
            >
              <div
                className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                style={{
                  background: `rgba(${extra.rgb},0.12)`,
                  border: `1px solid rgba(${extra.rgb},0.25)`,
                }}
              >
                <extra.icon size={22} style={{ color: extra.color }} />
              </div>
              <div>
                <p className="font-display font-bold text-white text-sm">{extra.title}</p>
                <p className="text-xs text-white/45 mt-0.5 leading-snug">{extra.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
