'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Lock, ClipboardList, Timer } from 'lucide-react';
import OrbitalRings from './ui/OrbitalRings';
import FloatingIcons from './ui/FloatingIcons';
import { DEFAULT_LINK } from '@/lib/socios';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
});

const AVATARS = ['/foto1.png', '/foto2.png', '/foto3.png'];

const TESTIMONIALS = [
  {
    avatar: '/foto1.png',
    name: 'María González',
    role: 'Emprendedora Digital',
    quote: 'Con Rocket iA™ automaticé mis ventas y generé $2,800 en mi primer mes. Nunca pensé que fuera tan rápido.',
  },
  {
    avatar: '/foto2.png',
    name: 'Carlos Mendoza',
    role: 'Coach de Negocios',
    quote: 'Los agentes de IA cambiaron todo. Pasé de trabajar 12 horas al día a escalar sin límites desde mi celular.',
  },
  {
    avatar: '/foto3.png',
    name: 'Ana Rodríguez',
    role: 'Consultora de Marketing',
    quote: 'En 60 días pasé de $900 a $3,400 mensuales. Las herramientas son increíbles y el soporte es top.',
  },
];

const UNLOCK_SECONDS = 300;
const DEFAULT_WHATSAPP = '+50371807574';
const YT_VIDEO_ID = 'c4KLMVpLHWE';

interface HeroProps {
  ctaLink?:      string;
  whatsapp?:     string;
  registroPath?: string;
  nombre?:       string;
}

export default function Hero({ ctaLink = DEFAULT_LINK, whatsapp = DEFAULT_WHATSAPP, registroPath = '/registro', nombre }: HeroProps) {
  const [ctaEnabled, setCtaEnabled] = useState(false);
  const [countdown,  setCountdown]  = useState(UNLOCK_SECONDS);
  const enabledRef = useRef(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          if (!enabledRef.current) {
            enabledRef.current = true;
            setCtaEnabled(true);
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const fmtCountdown = (s: number) =>
    `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;

  const btnStyle = (enabled: boolean, gradient: string, glow: string) => ({
    padding: 'clamp(14px, 2vw, 20px) clamp(28px, 4vw, 52px)',
    fontSize: 'clamp(14px, 1.5vw, 19px)',
    background:   enabled ? gradient : 'rgba(255,255,255,0.04)',
    border:       enabled ? '1.5px solid rgba(255,255,255,0.15)' : '1.5px solid rgba(255,255,255,0.08)',
    boxShadow:    enabled ? glow : 'none',
    cursor:       enabled ? 'pointer' : 'not-allowed',
    opacity:      enabled ? 1 : 0.4,
    filter:       enabled ? 'none' : 'grayscale(1)',
    borderRadius: '9999px',
  });

  return (
    <>
      <section
        id="inicio"
        className="relative flex flex-col items-center justify-center pt-24 pb-16 overflow-hidden grid-bg"
      >
        {/* Background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 120% 80% at 50% 0%, rgba(26,31,58,0.9) 0%, rgba(10,17,40,0.95) 40%, rgba(5,8,20,1) 100%)',
          }}
        />
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
          style={{
            width: 800, height: 800,
            background: 'radial-gradient(circle, rgba(0,210,255,0.05) 0%, rgba(139,92,246,0.04) 35%, transparent 65%)',
          }}
        />
        <OrbitalRings />
        <FloatingIcons />

        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          {/* Eyebrow */}
          <motion.div {...fadeUp(0.1)} className="mb-8 flex justify-center">
            <span
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest"
              style={{
                background: 'rgba(0,210,255,0.08)',
                border: '1px solid rgba(0,210,255,0.25)',
                color: '#00D2FF',
                boxShadow: '0 0 20px rgba(0,210,255,0.1)',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-rocket-cyan animate-pulse"
                style={{ boxShadow: '0 0 6px rgba(0,210,255,0.8)' }} />
              Pre-Lanzamiento Disponible
            </span>
          </motion.div>

          {/* Headline principal — $2,580 */}
          <motion.h1
            {...fadeUp(0.2)}
            className="font-display font-black tracking-[-0.02em] text-white mb-3"
            style={{ fontSize: 'clamp(32px, 5.5vw, 72px)', lineHeight: 1.05 }}
          >
            Mira como la Inteligencia Artificial te ayuda a colocar{' '}
            <span
              className="font-black"
              style={{
                color: '#22c55e',
                textShadow: '0 0 30px rgba(34,197,94,0.8), 0 0 60px rgba(34,197,94,0.35)',
              }}
            >
              $2,580 dólares extras
            </span>{' '}
            al mes en tu bolsillo.
          </motion.h1>

          {/* Subheadline — suite */}
          <motion.p
            {...fadeUp(0.3)}
            className="max-w-xl mx-auto font-sans font-medium leading-snug mb-10"
            style={{ fontSize: 'clamp(15px, 1.8vw, 21px)', color: 'rgba(168,188,207,0.7)' }}
          >
            La Suite de IA Definitiva · Para Emprendedores{' '}
            <span className="relative inline-block underline-gradient text-white">Visionarios</span>
            <span className="text-rocket-cyan" style={{ filter: 'drop-shadow(0 0 10px rgba(0,210,255,0.8))' }}>.</span>
          </motion.p>

          {/* VIDEO — YouTube embed */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full mb-8"
          >
            <div
              className="absolute -inset-1 rounded-[28px] pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, rgba(0,210,255,0.2), rgba(139,92,246,0.2), rgba(236,72,153,0.15))',
                filter: 'blur(1px)',
              }}
            />
            <div
              className="relative rounded-3xl overflow-hidden"
              style={{
                border: '1.5px solid rgba(0,210,255,0.2)',
                boxShadow: '0 40px 100px rgba(0,0,0,0.55), 0 0 60px rgba(0,210,255,0.06)',
                background: '#000',
                aspectRatio: '16/9',
              }}
            >
              <iframe
                src={`https://www.youtube.com/embed/${YT_VIDEO_ID}?rel=0&modestbranding=1`}
                title="Rocket iA™ — Video de presentación"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>

            {/* Countdown hint */}
            {!ctaEnabled && (
              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1.5 rounded-full font-bold text-[10px] sm:text-xs"
                style={{
                  background: 'linear-gradient(90deg, rgba(0,210,255,0.18), rgba(139,92,246,0.18))',
                  border: '1px solid rgba(0,210,255,0.5)',
                  color: '#ffffff',
                  whiteSpace: 'nowrap',
                  boxShadow: '0 0 20px rgba(0,210,255,0.15)',
                  textShadow: '0 0 12px rgba(0,210,255,0.8)',
                }}
              >
                <Timer size={11} />
                El botón se activa en {fmtCountdown(countdown)}
              </motion.div>
            )}
          </motion.div>

          {/* ── BOTÓN REGISTRO ─────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center mt-10 mb-4"
          >
            <motion.a
              href={ctaEnabled ? registroPath : undefined}
              whileHover={ctaEnabled ? { scale: 1.05 } : {}}
              whileTap={ctaEnabled  ? { scale: 0.97 } : {}}
              className="inline-flex items-center justify-center gap-2.5 font-black text-white transition-all duration-500 select-none"
              style={btnStyle(
                ctaEnabled,
                'linear-gradient(90deg, #8B5CF6 0%, #EC4899 100%)',
                '0 0 40px rgba(139,92,246,0.35), 0 0 80px rgba(236,72,153,0.2)',
              )}
            >
              {ctaEnabled
                ? <><ClipboardList size={20} />Registro<ArrowRight size={20} /></>
                : <><Lock size={18} />Registro</>
              }
            </motion.a>
          </motion.div>

          {/* Nombre + rol */}
          {nombre && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.62, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center justify-center gap-2 mb-10"
            >
              <span className="w-8 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(0,210,255,0.4))' }} />
              <span
                className="font-bold tracking-wide"
                style={{
                  fontSize: 'clamp(13px, 1.2vw, 15px)',
                  background: 'linear-gradient(90deg, #00D2FF, #a78bfa)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0 0 8px rgba(0,210,255,0.3))',
                }}
              >
                {nombre}
              </span>
              <span className="text-white/25 font-light" style={{ fontSize: '13px' }}>·</span>
              <span className="text-xs font-semibold tracking-wide" style={{ color: 'rgba(168,188,207,0.55)' }}>
                Embajador de Marca
              </span>
              <span className="w-8 h-px" style={{ background: 'linear-gradient(90deg, rgba(139,92,246,0.4), transparent)' }} />
            </motion.div>
          )}

          {/* SOCIAL PROOF */}
          <motion.div
            {...fadeUp(0.72)}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8"
          >
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {AVATARS.map((src, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full overflow-hidden border-2 border-rocket-space"
                    style={{ boxShadow: '0 0 0 1px rgba(0,210,255,0.2)' }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={src} alt={`Usuario ${i + 1}`} className="w-full h-full object-cover bg-slate-700" />
                  </div>
                ))}
              </div>
              <span className="text-sm font-semibold text-white/80">
                <strong className="text-white">1,000+</strong> Emprendedores activos
              </span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-white/10" />
            <div className="flex items-center gap-2.5">
              <span className="text-xl font-black text-white">4.9/5</span>
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="15" height="15" viewBox="0 0 24 24" fill="#D4AF37"
                    style={{ filter: 'drop-shadow(0 0 4px rgba(212,175,55,0.5))' }}>
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-white/50 font-medium">Rating</span>
            </div>
          </motion.div>

          {/* TESTIMONIALES */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className="flex flex-col gap-5 p-7 rounded-3xl text-left"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.09)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06), 0 8px 32px rgba(0,0,0,0.3)',
                }}
              >
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, s) => (
                    <svg key={s} width="18" height="18" viewBox="0 0 24 24" fill="#D4AF37"
                      style={{ filter: 'drop-shadow(0 0 4px rgba(212,175,55,0.6))' }}>
                      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                    </svg>
                  ))}
                </div>
                <p className="leading-relaxed flex-1" style={{ fontSize: 'clamp(14px, 1.4vw, 16px)', color: 'rgba(168,188,207,0.9)' }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-1 border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                  <div
                    className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0"
                    style={{ border: '2px solid rgba(0,210,255,0.25)', boxShadow: '0 0 12px rgba(0,210,255,0.15)' }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={t.avatar} alt={t.name} className="w-full h-full object-cover bg-slate-700" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{t.name}</p>
                    <p className="text-xs mt-0.5" style={{ color: 'rgba(168,188,207,0.5)' }}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

        </div>

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 inset-x-0 h-32 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent, rgba(5,8,20,0.8))' }}
        />
      </section>
    </>
  );
}
