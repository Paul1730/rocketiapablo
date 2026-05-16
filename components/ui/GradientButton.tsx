'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import React from 'react';

interface GradientButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  onClick?: () => void;
  href?: string;
  type?: 'button' | 'submit';
}

export default function GradientButton({
  children,
  variant = 'primary',
  size = 'lg',
  className,
  onClick,
  href,
}: GradientButtonProps) {
  const sizes = {
    sm:  'px-6 py-2.5 text-sm',
    md:  'px-8 py-3.5 text-base',
    lg:  'px-10 py-4 text-base',
    xl:  'px-12 py-5 text-lg',
  };

  const baseClass = cn(
    'relative inline-flex items-center justify-center gap-2 rounded-full font-bold',
    'tracking-wide transition-all duration-300 cursor-pointer select-none',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rocket-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-rocket-dark',
    sizes[size],
    className,
  );

  const inner = (
    <motion.span
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className={cn(
        baseClass,
        variant === 'primary' && [
          'bg-gradient-to-r from-rocket-cyan via-rocket-purple to-rocket-cyan',
          'bg-[length:200%_auto] text-white',
          'shadow-glow-cyan hover:shadow-[0_0_50px_rgba(0,210,255,0.5),0_0_100px_rgba(139,92,246,0.3)]',
          'btn-shimmer',
        ],
        variant === 'secondary' && [
          'bg-transparent border-2 border-rocket-cyan/40 text-white',
          'hover:border-rocket-cyan hover:shadow-glow-sm-cyan',
        ],
        variant === 'outline' && [
          'bg-white/5 border border-white/15 text-white',
          'hover:bg-white/10 hover:border-white/30',
        ],
      )}
    >
      {variant === 'primary' && (
        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-rocket-cyan via-rocket-purple to-rocket-magenta opacity-0 hover:opacity-100 transition-opacity duration-500" />
      )}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.span>
  );

  if (href) {
    return <a href={href}>{inner}</a>;
  }

  return <button onClick={onClick}>{inner}</button>;
}
