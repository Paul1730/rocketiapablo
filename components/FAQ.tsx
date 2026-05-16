'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  {
    q: '¿Qué incluye exactamente Rocket iA?',
    a: 'Rocket iA incluye acceso a 6 herramientas de inteligencia artificial listas para usar (Rocket iA Editor, Rocket Heroe, Rocket Hyperrealistic Images, Rocket Logo Maker, Rocket Smart Websites, Rocket Funnels), más Rocket University con cursos paso a paso, soporte dedicado y acceso a la comunidad de emprendedores.',
  },
  {
    q: '¿Necesito experiencia previa en inteligencia artificial?',
    a: 'Para nada. Rocket iA está diseñado para emprendedores sin conocimientos técnicos. Las herramientas son intuitivas y listas para usar desde el primer día. Además, Rocket University te guía paso a paso para que domines cada herramienta sin complicaciones.',
  },
  {
    q: '¿Cuánto tiempo tengo acceso a las herramientas?',
    a: 'Con Rocket iA I y Rocket iA II recibes acceso de por vida a las herramientas incluidas en tu plan. La cuota de mantenimiento mensual de $19 te da acceso continuo a actualizaciones, nuevas herramientas y soporte premium.',
  },
  {
    q: '¿Cómo funciona el soporte?',
    a: 'Rocket iA I incluye soporte básico por email. Rocket iA II incluye soporte premium con respuestas prioritarias, acceso a sesiones de preguntas en vivo y asistencia de nuestro equipo de expertos. Los agentes especializados también están disponibles 24/7 para ayudarte.',
  },
  {
    q: '¿Puedo cancelar la cuota de mantenimiento cuando quiera?',
    a: 'Sí, absolutamente. La cuota de mantenimiento de $19/mes es completamente flexible. Puedes cancelar en cualquier momento sin penalizaciones. Simplemente perderás acceso a las actualizaciones y soporte continuo, pero mantendrás acceso a lo que ya tienes.',
  },
  {
    q: '¿Las herramientas funcionan en español?',
    a: 'Sí, todas las herramientas y la capacitación están completamente en español. Somos una empresa latina y entendemos que el mercado hispanohablante merece soluciones de IA en su idioma nativo. Todo el contenido, los agentes y el soporte están en español.',
  },
  {
    q: '¿Recibo certificado de Rocket University?',
    a: 'Sí, al completar los cursos de Rocket University recibes certificados digitales que puedes compartir en tus redes sociales y LinkedIn para demostrar tus conocimientos en IA aplicada a negocios. Estos certificados están respaldados por Beleza Beauty & Health.',
  },
  {
    q: '¿Cuál es la garantía del producto?',
    a: 'Ofrecemos una garantía de satisfacción. Si después de usar Rocket iA consideras que no cumple con lo prometido, contáctanos y evaluamos tu caso. Nuestro compromiso es que obtengas resultados reales desde el primer día.',
  },
];

function FAQItem({ faq, index }: { faq: typeof FAQS[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left flex items-start justify-between gap-4 py-5 px-6 rounded-2xl transition-all duration-200 group"
        style={{
          background: open ? 'rgba(0,210,255,0.05)' : 'rgba(255,255,255,0.02)',
          border: `1px solid ${open ? 'rgba(0,210,255,0.2)' : 'rgba(255,255,255,0.05)'}`,
        }}
        aria-expanded={open}
      >
        <span className="font-display font-bold text-white text-sm sm:text-base leading-snug pr-4 group-hover:text-rocket-cyan transition-colors duration-200">
          {faq.q}
        </span>
        <span
          className="flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-300"
          style={{
            background: open ? 'rgba(0,210,255,0.15)' : 'rgba(255,255,255,0.04)',
            border: `1px solid ${open ? 'rgba(0,210,255,0.3)' : 'rgba(255,255,255,0.08)'}`,
          }}
        >
          {open
            ? <Minus size={14} className="text-rocket-cyan" />
            : <Plus size={14} className="text-white/50" />
          }
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <p className="text-sm text-white/55 leading-relaxed px-6 py-4">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(139,92,246,0.03) 0%, transparent 70%)' }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-rocket-cyan/60 mb-4">
            Preguntas Frecuentes
          </p>
          <h2
            className="font-display font-black text-white leading-tight"
            style={{ fontSize: 'clamp(28px, 4vw, 52px)', letterSpacing: '-0.02em' }}
          >
            Preguntas{' '}
            <span className="text-gradient-cta">frecuentes</span>
          </h2>
        </motion.div>

        {/* FAQ list */}
        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <FAQItem key={faq.q} faq={faq} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-white/50 text-sm mb-4">
            ¿Tienes más preguntas? Estamos aquí para ayudarte.
          </p>
          <a
            href="mailto:soporte@rocketia.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-200"
            style={{
              background: 'rgba(0,210,255,0.08)',
              border: '1px solid rgba(0,210,255,0.2)',
              color: '#00D2FF',
            }}
          >
            Contactar Soporte
          </a>
        </motion.div>
      </div>
    </section>
  );
}
