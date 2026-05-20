'use client';

import { motion } from 'framer-motion';
import { ClipboardList, ArrowRight } from 'lucide-react';

const VIDEO_URL =
  'https://anbshiqmblyizfzaqydn.supabase.co/storage/v1/object/public/VSL/RegistroGlobalRocket.mp4';

interface Props {
  ctaLink: string;
}

export default function RegistroPageContent({ ctaLink }: Props) {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-4 overflow-hidden grid-bg"
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
          background:
            'radial-gradient(circle, rgba(139,92,246,0.07) 0%, rgba(236,72,153,0.04) 35%, transparent 65%)',
        }}
      />

      <div className="relative z-10 w-full max-w-4xl mx-auto text-center">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 flex justify-center"
        >
          <span
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest"
            style={{
              background: 'rgba(139,92,246,0.1)',
              border: '1px solid rgba(139,92,246,0.3)',
              color: '#a78bfa',
              boxShadow: '0 0 20px rgba(139,92,246,0.1)',
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: '#a78bfa', boxShadow: '0 0 6px rgba(139,92,246,0.8)' }}
            />
            Video de Registro
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-black text-white leading-tight mb-3"
          style={{ fontSize: 'clamp(28px, 5vw, 58px)', letterSpacing: '-0.025em' }}
        >
          Mira el video y{' '}
          <span className="text-gradient-iA">completa tu registro</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl mx-auto mb-8 font-sans leading-relaxed"
          style={{ fontSize: 'clamp(14px, 1.8vw, 17px)', color: '#A8BCCF' }}
        >
          Sigue las instrucciones del video para activar tu acceso a{' '}
          <strong className="text-white font-semibold">Rocket iA™</strong>.
        </motion.p>

        {/* Video */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full mb-10"
        >
          <div
            className="absolute -inset-1 rounded-[28px] pointer-events-none"
            style={{
              background:
                'linear-gradient(135deg, rgba(139,92,246,0.25), rgba(236,72,153,0.2), rgba(0,210,255,0.15))',
              filter: 'blur(1px)',
            }}
          />
          <div
            className="relative rounded-3xl overflow-hidden"
            style={{
              border: '1.5px solid rgba(139,92,246,0.25)',
              boxShadow: '0 40px 100px rgba(0,0,0,0.55), 0 0 60px rgba(139,92,246,0.07)',
              background: 'rgba(5,8,20,0.98)',
            }}
          >
            <video
              src={VIDEO_URL}
              controls
              autoPlay
              playsInline
              className="w-full block"
              style={{ maxHeight: '62vh', objectFit: 'contain' }}
            />
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center"
        >
          <motion.a
            href={ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="relative inline-flex items-center justify-center gap-2.5 font-black text-white overflow-hidden rounded-full"
            style={{
              padding: 'clamp(14px, 2vw, 18px) clamp(28px, 4vw, 48px)',
              fontSize: 'clamp(15px, 1.5vw, 19px)',
              background: 'linear-gradient(90deg, #00D2FF 0%, #8B5CF6 50%, #EC4899 100%)',
              border: '1.5px solid rgba(255,255,255,0.15)',
              boxShadow: '0 0 40px rgba(0,210,255,0.35), 0 0 80px rgba(139,92,246,0.2)',
            }}
          >
            <ClipboardList size={20} />
            Registro Aquí
            <ArrowRight size={20} />
            <span
              className="absolute inset-0 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-500"
              style={{
                background: 'linear-gradient(90deg, #00D2FF, #8B5CF6, #00D2FF)',
                backgroundSize: '200% auto',
              }}
            />
          </motion.a>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 inset-x-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(5,8,20,0.8))' }}
      />
    </section>
  );
}
