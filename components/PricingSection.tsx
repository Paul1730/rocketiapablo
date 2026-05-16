'use client';

import { motion } from 'framer-motion';
import { Check, Star, RefreshCw, Laptop } from 'lucide-react';
import GradientButton from './ui/GradientButton';

const PLANS = [
  {
    id: 'ia1',
    badge: 'ROCKET iA I',
    price: '$97',
    period: 'Pago Único',
    emoji: '💻',
    tagline: 'Todo lo esencial para comenzar con IA',
    borderVariant: 'cyan',
    rgb: '0,210,255',
    color: '#00D2FF',
    popular: false,
    ctaText: 'Comenzar con Rocket iA I',
    features: [
      '6 Poderosas Herramientas de IA',
      'Rocket University (3 cursos esenciales)',
      'Herramientas listas para usar',
      'Soporte básico incluido',
      'Acceso pre-lanzamiento',
      'Comunidad de emprendedores',
    ],
    href: '#',
  },
  {
    id: 'ia2',
    badge: 'ROCKET iA II',
    price: '$247',
    period: 'Pago Único',
    emoji: '🚀',
    tagline: 'La suite completa para escalar tu negocio',
    borderVariant: 'purple',
    rgb: '139,92,246',
    color: '#8B5CF6',
    popular: true,
    ctaText: 'Acceder a Rocket iA II',
    features: [
      'Todo lo de Rocket iA I incluido',
      '5 Cursos Avanzados de IA',
      '6 Agentes Especializados',
      'Soporte Premium prioritario',
      'Capacitación avanzada paso a paso',
      'Acceso a actualizaciones futuras',
    ],
    href: '#',
  },
  {
    id: 'maint',
    badge: 'ROCKET UNIVERSITY',
    price: '$19',
    period: 'Al Mes',
    emoji: '🔄',
    tagline: 'Acceso continuo, actualizaciones y soporte constante',
    borderVariant: 'green',
    rgb: '16,185,129',
    color: '#10B981',
    popular: false,
    ctaText: 'Suscribirse al Plan',
    features: [
      'Acceso continuo a todas las actualizaciones',
      'Nuevos cursos y herramientas mensuales',
      'Soporte dedicado en comunidad',
      'Sesiones de preguntas en vivo',
    ],
    isMonthly: true,
    href: '#',
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 100% 60% at 50% 50%, rgba(139,92,246,0.05) 0%, transparent 70%)' }}
      />
      <div className="absolute inset-0 grid-bg-subtle pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-6"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-rocket-cyan/60 mb-4">
            Pricing
          </p>
          <h2
            className="font-display font-black text-white mb-4 leading-tight"
            style={{ fontSize: 'clamp(28px, 4vw, 56px)', letterSpacing: '-0.02em' }}
          >
            El Sistema Completo{' '}
            <span className="text-gradient-cta">Para Crear, Vender y Crecer</span>
          </h2>
          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold mt-2"
            style={{
              background: 'rgba(212,175,55,0.08)',
              border: '1px solid rgba(212,175,55,0.2)',
              color: '#D4AF37',
            }}
          >
            <Star size={14} className="fill-rocket-gold" />
            Un precio justo. Un valor inigualable.
          </div>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid lg:grid-cols-3 gap-6 mt-14 items-start">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className={`relative rounded-3xl overflow-hidden transition-all duration-300 ${plan.popular ? 'animate-breathe' : ''}`}
              style={{
                background: plan.popular
                  ? `linear-gradient(145deg, rgba(${plan.rgb},0.1) 0%, rgba(8,10,30,0.97) 100%)`
                  : 'rgba(10,15,35,0.85)',
                border: `1.5px solid rgba(${plan.rgb},${plan.popular ? '0.35' : '0.2'})`,
                boxShadow: plan.popular
                  ? `0 0 60px rgba(${plan.rgb},0.12), 0 40px 80px rgba(0,0,0,0.4)`
                  : '0 20px 60px rgba(0,0,0,0.3)',
              }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div
                  className="absolute top-0 inset-x-0 flex justify-center py-2.5"
                  style={{
                    background: `linear-gradient(90deg, rgba(${plan.rgb},0.15), rgba(${plan.rgb},0.3), rgba(${plan.rgb},0.15))`,
                    borderBottom: `1px solid rgba(${plan.rgb},0.2)`,
                  }}
                >
                  <span
                    className="text-xs font-black uppercase tracking-[0.2em]"
                    style={{ color: '#D4AF37', textShadow: '0 0 12px rgba(212,175,55,0.4)' }}
                  >
                    ⭐ Más Popular
                  </span>
                </div>
              )}

              <div className={`p-7 ${plan.popular ? 'pt-14' : ''}`}>
                {/* Badge */}
                <div
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5 text-xs font-black uppercase tracking-[0.15em]"
                  style={{
                    background: `rgba(${plan.rgb},0.1)`,
                    border: `1px solid rgba(${plan.rgb},0.25)`,
                    color: plan.color,
                  }}
                >
                  <span className="text-sm">{plan.emoji}</span>
                  {plan.badge}
                </div>

                {/* Price */}
                <div className="mb-2">
                  <div className="flex items-end gap-2 mb-1">
                    <span
                      className={`font-display font-black leading-none price-outline`}
                      style={{
                        fontSize: 'clamp(56px, 8vw, 96px)',
                        letterSpacing: '-0.04em',
                        WebkitTextStroke: `2px rgba(${plan.rgb},0.85)`,
                        color: 'transparent',
                        fontVariantNumeric: 'tabular-nums',
                      }}
                    >
                      {plan.price}
                    </span>
                  </div>
                  <p
                    className="text-sm font-bold uppercase tracking-[0.2em]"
                    style={{ color: `rgba(${plan.rgb},0.65)` }}
                  >
                    {plan.period}
                  </p>
                </div>

                <p className="text-sm text-white/50 mb-7 leading-relaxed">{plan.tagline}</p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{
                          background: `rgba(${plan.rgb},0.12)`,
                          border: `1px solid rgba(${plan.rgb},0.3)`,
                        }}
                      >
                        <Check size={10} style={{ color: plan.color }} />
                      </div>
                      <span className="text-sm text-white/70 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  className="w-full py-4 rounded-2xl font-bold text-base transition-all duration-300 relative overflow-hidden group"
                  style={{
                    background: plan.popular
                      ? `linear-gradient(90deg, rgba(${plan.rgb},0.8), rgba(${plan.rgb},0.6))`
                      : `rgba(${plan.rgb},0.1)`,
                    border: `1.5px solid rgba(${plan.rgb},${plan.popular ? '0.5' : '0.25'})`,
                    color: plan.popular ? '#ffffff' : plan.color,
                    boxShadow: plan.popular ? `0 0 30px rgba(${plan.rgb},0.25)` : 'none',
                  }}
                >
                  <span className="relative z-10">{plan.ctaText}</span>
                  {plan.popular && (
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: `linear-gradient(90deg, rgba(${plan.rgb},1), rgba(${plan.rgb},0.8))` }}
                    />
                  )}
                </button>

                {/* Monthly renewal icon for maintenance */}
                {plan.isMonthly && (
                  <div className="mt-5 flex items-center justify-center gap-2">
                    <RefreshCw size={14} className="text-green-400" />
                    <span className="text-xs text-white/40">Renovación automática mensual · Cancela cuando quieras</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div
            className="inline-flex items-center gap-3 px-7 py-3.5 rounded-2xl"
            style={{
              background: 'rgba(16,185,129,0.06)',
              border: '1px solid rgba(16,185,129,0.2)',
            }}
          >
            <span className="text-xl">🛡️</span>
            <span className="text-sm font-semibold text-white/70">
              Garantía de satisfacción incluida · Soporte en español
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
