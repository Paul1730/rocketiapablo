'use client';

import { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Lock, TrendingUp, Volume2, VolumeX, ClipboardList } from 'lucide-react';
import OrbitalRings from './ui/OrbitalRings';
import FloatingIcons from './ui/FloatingIcons';
import RegistroModal from './RegistroModal';
import { DEFAULT_LINK } from '@/lib/socios';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
});

const AVATARS = ['/foto1.png', '/foto2.png', '/foto3.png'];

const DEFAULT_WHATSAPP = '+50371807574';

interface HeroProps {
  ctaLink?:   string;
  whatsapp?:  string;
}

export default function Hero({ ctaLink = DEFAULT_LINK, whatsapp = DEFAULT_WHATSAPP }: HeroProps) {
  const [ctaEnabled,   setCtaEnabled]   = useState(false);
  const [isMuted,      setIsMuted]      = useState(true);
  const [registroOpen, setRegistroOpen] = useState(false);
  const videoRef      = useRef<HTMLVideoElement>(null);
  const progressRef   = useRef<HTMLDivElement>(null);
  const enabledRef    = useRef(false);

  const handleTimeUpdate = useCallback(() => {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    const pct = video.currentTime / video.duration;
    if (progressRef.current) {
      progressRef.current.style.width = `${pct * 100}%`;
    }
    if (pct >= 0.7 && !enabledRef.current) {
      enabledRef.current = true;
      setCtaEnabled(true);
    }
  }, []);

  const toggleMute = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  }, []);

  /* shared button style helper */
  const btnStyle = (enabled: boolean, gradient: string, glow: string) => ({
    padding: 'clamp(12px, 2vw, 18px) clamp(16px, 3vw, 36px)',
    fontSize: 'clamp(13px, 1.5vw, 19px)',
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
        className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 overflow-hidden grid-bg"
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

          {/* Headline */}
          <motion.h1
            {...fadeUp(0.2)}
            className="font-display font-black leading-[0.96] tracking-[-0.025em] text-white mb-4"
            style={{ fontSize: 'clamp(40px, 7.5vw, 92px)' }}
          >
            <span className="block">La Suite de IA Definitiva</span>
            <span className="block mt-1">
              Para Emprendedores{' '}
              <span className="relative inline-block underline-gradient">Visionarios</span>
              <span className="text-rocket-cyan" style={{ filter: 'drop-shadow(0 0 12px rgba(0,210,255,0.8))' }}>.</span>
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            {...fadeUp(0.32)}
            className="max-w-2xl mx-auto font-sans font-normal leading-relaxed mb-10"
            style={{ fontSize: 'clamp(15px, 2vw, 19px)', color: '#A8BCCF' }}
          >
            8 herramientas inteligentes + capacitación avanzada + agentes especializados
            para <strong className="text-white font-semibold">crear, vender y escalar</strong> tu negocio con IA.
          </motion.p>

          {/* VIDEO */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
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
                background: 'rgba(5,8,20,0.95)',
              }}
            >
              <video
                ref={videoRef}
                src="https://anbshiqmblyizfzaqydn.supabase.co/storage/v1/object/public/VSL/VSL_RocketIA.mp4"
                autoPlay muted playsInline
                onTimeUpdate={handleTimeUpdate}
                className="w-full block"
                style={{ maxHeight: '60vh', objectFit: 'cover' }}
              />

              {/* Mute button — centered when muted */}
              {isMuted && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="absolute inset-0" style={{ background: 'rgba(5,8,20,0.45)' }} />
                  <motion.button
                    onClick={toggleMute}
                    whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.95 }}
                    aria-label="Activar audio"
                    className="relative pointer-events-auto flex flex-col items-center gap-3 px-10 py-6 rounded-2xl font-black"
                    style={{
                      background: 'linear-gradient(135deg, rgba(0,210,255,0.2), rgba(139,92,246,0.2))',
                      border: '2px solid rgba(0,210,255,0.6)',
                      color: '#ffffff',
                      backdropFilter: 'blur(16px)',
                      boxShadow: '0 0 40px rgba(0,210,255,0.3), 0 0 80px rgba(0,210,255,0.1)',
                      textShadow: '0 0 12px rgba(0,210,255,0.6)',
                    }}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <VolumeX size={36} style={{ filter: 'drop-shadow(0 0 10px rgba(0,210,255,0.8))' }} />
                    <span style={{ fontSize: 'clamp(16px, 2vw, 22px)', letterSpacing: '0.02em' }}>
                      🔊 Activar Audio
                    </span>
                  </motion.button>
                </div>
              )}

              {/* Small audio-active indicator */}
              {!isMuted && (
                <motion.button
                  onClick={toggleMute}
                  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.93 }}
                  aria-label="Silenciar"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className="absolute top-4 right-4 flex items-center gap-2 px-3 py-2 rounded-full font-bold text-sm"
                  style={{
                    background: 'rgba(0,210,255,0.15)',
                    border: '1px solid rgba(0,210,255,0.5)',
                    color: '#00D2FF',
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 0 16px rgba(0,210,255,0.25)',
                  }}
                >
                  <Volume2 size={15} style={{ filter: 'drop-shadow(0 0 6px rgba(0,210,255,0.7))' }} />
                  <span>Audio activo</span>
                </motion.button>
              )}

              {/* Progress bar */}
              <div className="absolute bottom-0 inset-x-0 h-1 bg-white/10">
                <div
                  ref={progressRef}
                  className="h-full rounded-full"
                  style={{
                    width: '0%',
                    background: 'linear-gradient(90deg, #00D2FF, #8B5CF6)',
                    boxShadow: '0 0 8px rgba(0,210,255,0.5)',
                  }}
                />
              </div>
            </div>

            {/* Unlock hint */}
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
                <Lock size={11} />
                El botón se activa cuando completes el 70% del video
              </motion.div>
            )}
          </motion.div>

          {/* ── BOTONES CTA ─────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-row items-center justify-center gap-2 sm:gap-4 mt-10 mb-10"
          >
            {/* Invierte Ahora */}
            <motion.a
              href={ctaEnabled ? ctaLink : undefined}
              target={ctaEnabled ? '_blank' : undefined}
              rel={ctaEnabled ? 'noopener noreferrer' : undefined}
              whileHover={ctaEnabled ? { scale: 1.05 } : {}}
              whileTap={ctaEnabled  ? { scale: 0.97 } : {}}
              className="relative inline-flex items-center justify-center gap-2.5 font-black text-white overflow-hidden transition-all duration-500 select-none"
              style={btnStyle(
                ctaEnabled,
                'linear-gradient(90deg, #00D2FF 0%, #8B5CF6 50%, #EC4899 100%)',
                '0 0 40px rgba(0,210,255,0.35), 0 0 80px rgba(139,92,246,0.2)',
              )}
            >
              {ctaEnabled
                ? <><TrendingUp size={20} />Invierte Ahora<ArrowRight size={20} /></>
                : <><Lock size={18} />Invierte Ahora</>
              }
              {ctaEnabled && (
                <span
                  className="absolute inset-0 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-500"
                  style={{ background: 'linear-gradient(90deg, #00D2FF, #8B5CF6, #00D2FF)', backgroundSize: '200% auto' }}
                />
              )}
            </motion.a>

            {/* Registro */}
            <motion.button
              onClick={() => ctaEnabled && setRegistroOpen(true)}
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
            </motion.button>
          </motion.div>

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
        </div>

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 inset-x-0 h-32 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent, rgba(5,8,20,0.8))' }}
        />
      </section>

      {/* Modal de registro */}
      <RegistroModal open={registroOpen} onClose={() => setRegistroOpen(false)} />
    </>
  );
}
