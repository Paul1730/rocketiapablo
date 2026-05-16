'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import React from 'react';

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'cyan' | 'purple' | 'red' | 'gold' | 'green' | 'none';
  borderVariant?: 'cyan' | 'purple' | 'green' | 'gold' | 'subtle' | 'none';
  animate?: boolean;
  delay?: number;
}

export default function GlowCard({
  children,
  className,
  glowColor = 'cyan',
  borderVariant = 'cyan',
  animate = true,
  delay = 0,
}: GlowCardProps) {
  const borderClasses = {
    cyan:   'border-gradient-cyan',
    purple: 'border-gradient-purple',
    green:  'border-gradient-green',
    gold:   '',
    subtle: '',
    none:   '',
  };

  const hoverGlowMap = {
    cyan:   'hover:shadow-glow-cyan',
    purple: 'hover:shadow-glow-purple',
    red:    'hover:shadow-glow-red',
    gold:   'hover:shadow-glow-gold',
    green:  'hover:shadow-[0_0_30px_rgba(16,185,129,0.4)]',
    none:   '',
  };

  const card = (
    <div
      className={cn(
        'glass-card rounded-3xl overflow-hidden transition-all duration-300',
        borderClasses[borderVariant],
        hoverGlowMap[glowColor],
        className,
      )}
    >
      {children}
    </div>
  );

  if (!animate) return card;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {card}
    </motion.div>
  );
}
