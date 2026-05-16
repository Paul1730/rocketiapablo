'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Shield } from 'lucide-react';

function useCountdown(targetDate: Date) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const calc = () => {
      const diff = targetDate.getTime() - Date.now();
      if (diff <= 0) return;
      setTimeLeft({
        days:  Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        mins:  Math.floor((diff / (1000 * 60)) % 60),
        secs:  Math.floor((diff / 1000) % 60),
      });
    };
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  return timeLeft;
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div
        className="relative w-16 sm:w-20 h-16 sm:h-20 rounded-2xl flex items-center justify-center mb-2"
        style={{
          background: 'rgba(0,210,255,0.08)',
          border: '1.5px solid rgba(0,210,255,0.2)',
          boxShadow: '0 0 20px rgba(0,210,255,0.08)',
        }}
      >
        <span
          className="countdown-digit text-white text-2xl sm:text-3xl"
          style={{ textShadow: '0 0 20px rgba(0,210,255,0.4)' }}
        >
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">{label}</span>
    </div>
  );
}

export default function FinalCTA() {
  const target = new Date();
  target.setDate(target.getDate() + 7);
  const timeLeft = useCountdown(target);

  return (
    <section
      className="py-28 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, rgba(10,17,40,0.95) 0%, rgba(20,10,50,0.9) 50%, rgba(5,15,40,0.95) 100%)',
      }}
    >
      {/* Gradient mesh background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 20% 50%, rgba(255,36,36,0.06) 0%, transparent 60%),
            radial-gradient(ellipse 60% 80% at 80% 50%, rgba(0,210,255,0.06) 0%, transparent 60%),
            radial-gradient(ellipse 100% 40% at 50% 100%, rgba(139,92,246,0.08) 0%, transparent 50%)
          `,
        }}
      />

      {/* Decorative rocket lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 1440 800" fill="none">
          <line x1="0" y1="400" x2="1440" y2="400" stroke="#00D2FF" strokeWidth="1" strokeDasharray="10 30" />
          <line x1="720" y1="0" x2="720" y2="800" stroke="#00D2FF" strokeWidth="1" strokeDasharray="10 30" />
          <circle cx="720" cy="400" r="300" stroke="#8B5CF6" strokeWidth="1" strokeDasharray="8 20" />
          <circle cx="720" cy="400" r="150" stroke="#00D2FF" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <span
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest"
            style={{
              background: 'rgba(255,36,36,0.1)',
              border: '1px solid rgba(255,36,36,0.3)',
              color: '#FF6B6B',
            }}
          >
            <span className="w-2 h-2 rounded-full bg-rocket-red animate-pulse" />
            Pre-Lanzamiento · Cupos Limitados
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-black text-white leading-tight mb-6"
          style={{ fontSize: 'clamp(32px, 5.5vw, 72px)', letterSpacing: '-0.025em' }}
        >
          ¿Estás listo para{' '}
          <span className="text-gradient-hero">Crear, Vender y Crecer</span>{' '}
          con IA?
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base sm:text-lg text-white/55 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Únete al pre-lanzamiento de Rocket iA y transforma tu negocio hoy mismo.
          <br />
          <strong className="text-white/80">Miles de emprendedores ya están usando el futuro.</strong>
        </motion.p>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center gap-4 sm:gap-6 mb-12"
        >
          <CountdownUnit value={timeLeft.days}  label="Días"    />
          <span className="text-2xl font-black text-white/30 pb-6">:</span>
          <CountdownUnit value={timeLeft.hours} label="Horas"   />
          <span className="text-2xl font-black text-white/30 pb-6">:</span>
          <CountdownUnit value={timeLeft.mins}  label="Min"     />
          <span className="text-2xl font-black text-white/30 pb-6">:</span>
          <CountdownUnit value={timeLeft.secs}  label="Seg"     />
        </motion.div>

        {/* Giant CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <motion.a
            href="#pricing"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="relative inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full font-black text-lg text-white overflow-hidden group"
            style={{
              background: 'linear-gradient(90deg, #FF2424, #8B5CF6, #00D2FF)',
              backgroundSize: '200% auto',
              boxShadow: '0 0 40px rgba(139,92,246,0.3), 0 0 80px rgba(0,210,255,0.15)',
            }}
          >
            <TrendingUp size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
            Invierte Ahora
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
          </motion.a>
        </motion.div>

        {/* Guarantee badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          <div className="flex items-center gap-2">
            <Shield size={16} className="text-green-400" />
            <span className="text-sm text-white/50 font-semibold">Garantía de satisfacción</span>
          </div>
          <span className="text-white/20">·</span>
          <div className="flex items-center gap-2">
            <span className="text-sm">🔒</span>
            <span className="text-sm text-white/50 font-semibold">Pago 100% seguro</span>
          </div>
          <span className="text-white/20">·</span>
          <div className="flex items-center gap-2">
            <span className="text-sm">🇪🇸</span>
            <span className="text-sm text-white/50 font-semibold">Soporte en español</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
