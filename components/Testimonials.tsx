'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Daniela Reyes',
    role: 'Emprendedora Digital · México',
    avatar: 'https://api.dicebear.com/8.x/avataaars/svg?seed=Daniela&backgroundColor=b6e3f4',
    quote: 'Rocket iA transformó completamente mi negocio. En 2 semanas ya estaba generando contenido de calidad que antes me tomaba días enteros. Las herramientas son increíbles y el soporte es de otro nivel.',
    rating: 5,
    tag: 'Rocket iA II',
    tagColor: '#8B5CF6',
  },
  {
    name: 'Carlos Mendoza',
    role: 'Coach de Negocios · Colombia',
    avatar: 'https://api.dicebear.com/8.x/avataaars/svg?seed=Carlos&backgroundColor=ffd5dc',
    quote: 'No soy experto en tecnología y pensé que sería complicado. ¡Para nada! Todo está listo para usar desde el primer día. Los agentes especializados son como tener un equipo de expertos a disposición 24/7.',
    rating: 5,
    tag: 'Agentes IA',
    tagColor: '#00D2FF',
  },
  {
    name: 'María Fernanda López',
    role: 'Creadora de Contenido · Venezuela',
    avatar: 'https://api.dicebear.com/8.x/avataaars/svg?seed=MariaF&backgroundColor=c0aede',
    quote: 'El Rocket iA Editor y el generador de imágenes son mis favoritos. Ahorro mínimo 15 horas a la semana. Mis clientes no pueden creer la velocidad y calidad de mi trabajo ahora.',
    rating: 5,
    tag: 'Rocket iA I',
    tagColor: '#10B981',
  },
  {
    name: 'Roberto Castillo',
    role: 'Dueño de E-commerce · Argentina',
    avatar: 'https://api.dicebear.com/8.x/avataaars/svg?seed=Roberto&backgroundColor=d1f4d1',
    quote: 'El Business Matrix y los embudos de ventas me ayudaron a duplicar mis conversiones en el primer mes. La inversión de $247 la recuperé en la primera semana. Totalmente recomendado.',
    rating: 5,
    tag: 'Rocket Funnels',
    tagColor: '#D4AF37',
  },
  {
    name: 'Valeria Sánchez',
    role: 'Consultora de Marketing · Perú',
    avatar: 'https://api.dicebear.com/8.x/avataaars/svg?seed=Valeria&backgroundColor=ffd5dc',
    quote: 'Llevo 3 años en marketing digital y Rocket iA es la herramienta más completa que he encontrado. La Rocket University tiene contenido de calidad que no encuentras en ningún otro lado.',
    rating: 5,
    tag: 'Rocket University',
    tagColor: '#FF2424',
  },
  {
    name: 'Andrés Morales',
    role: 'Agencia de Diseño · Chile',
    avatar: 'https://api.dicebear.com/8.x/avataaars/svg?seed=Andres&backgroundColor=b6e3f4',
    quote: 'El Rocket Logo Maker y Hyperrealistic Images son perfectos para mi agencia. Entrego proyectos 3x más rápido y mis clientes están fascinados con los resultados. Definitivamente seguiré invirtiendo.',
    rating: 5,
    tag: 'Design Tools',
    tagColor: '#EC4899',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 40% at 50% 0%, rgba(0,210,255,0.04) 0%, transparent 60%)' }}
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
            Testimonios
          </p>
          <h2
            className="font-display font-black text-white leading-tight"
            style={{ fontSize: 'clamp(28px, 4vw, 52px)', letterSpacing: '-0.02em' }}
          >
            Lo que dicen nuestros{' '}
            <span className="text-gradient-cta">emprendedores</span>
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-3xl p-6 flex flex-col"
              style={{
                background: 'rgba(10,15,35,0.8)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {/* Quote icon */}
              <Quote size={24} className="text-white/10 mb-4" />

              {/* Quote text */}
              <p className="text-sm text-white/65 leading-relaxed flex-1 mb-6">
                "{t.quote}"
              </p>

              {/* Stars + tag */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-0.5">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} size={13} className="fill-rocket-gold text-rocket-gold" />
                  ))}
                </div>
                <span
                  className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-lg"
                  style={{
                    background: `rgba(${t.tagColor === '#8B5CF6' ? '139,92,246' : t.tagColor === '#00D2FF' ? '0,210,255' : t.tagColor === '#10B981' ? '16,185,129' : t.tagColor === '#D4AF37' ? '212,175,55' : t.tagColor === '#FF2424' ? '255,36,36' : '236,72,153'}, 0.12)`,
                    border: `1px solid rgba(${t.tagColor === '#8B5CF6' ? '139,92,246' : t.tagColor === '#00D2FF' ? '0,210,255' : t.tagColor === '#10B981' ? '16,185,129' : t.tagColor === '#D4AF37' ? '212,175,55' : t.tagColor === '#FF2424' ? '255,36,36' : '236,72,153'}, 0.25)`,
                    color: t.tagColor,
                  }}
                >
                  {t.tag}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div
                  className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0"
                  style={{ border: '1.5px solid rgba(255,255,255,0.1)' }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={t.avatar} alt={t.name} className="w-full h-full object-cover bg-slate-800" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{t.name}</p>
                  <p className="text-xs text-white/40">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
