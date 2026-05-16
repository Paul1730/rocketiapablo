'use client';

import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <div className="glass-dark border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-16 sm:h-18">
            <a href="#" className="flex items-center gap-2.5 group">
              {/* Rocket icon */}
              <div
                className="relative flex items-center justify-center w-9 h-9 rounded-xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,36,36,0.2), rgba(139,92,246,0.2))',
                  border: '1px solid rgba(255,36,36,0.35)',
                  boxShadow: '0 0 16px rgba(255,36,36,0.2)',
                }}
              >
                <Rocket
                  size={18}
                  className="text-rocket-red group-hover:scale-110 transition-transform duration-300"
                  style={{ filter: 'drop-shadow(0 0 6px rgba(255,36,36,0.6))' }}
                />
              </div>

              {/* Logo text */}
              <span className="font-display text-xl font-black tracking-tight">
                <span className="text-white">Rocket</span>{' '}
                <span className="text-gradient-iA">iA</span>
                <span className="text-rocket-cyan/90 ml-0.5 font-black">™</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
