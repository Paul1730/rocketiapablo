import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Satoshi', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Satoshi', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'rocket-red': '#FF2424',
        'rocket-cyan': '#00D2FF',
        'rocket-gold': '#D4AF37',
        'rocket-space': '#0A1128',
        'rocket-carbon': '#121212',
        'rocket-purple': '#8B5CF6',
        'rocket-magenta': '#EC4899',
        'rocket-dark': '#050814',
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #FF2424 0%, #8B5CF6 50%, #00D2FF 100%)',
        'gradient-iA': 'linear-gradient(90deg, #EC4899 0%, #8B5CF6 50%, #00D2FF 100%)',
        'gradient-rocket': 'linear-gradient(90deg, #FF2424 0%, #00D2FF 100%)',
        'gradient-space': 'radial-gradient(ellipse at top, #1a1f3a 0%, #0A1128 50%, #050814 100%)',
        'gradient-cta': 'linear-gradient(90deg, #00D2FF 0%, #8B5CF6 100%)',
        'gradient-gold': 'linear-gradient(90deg, #D4AF37 0%, #F5E27A 50%, #D4AF37 100%)',
      },
      boxShadow: {
        'glow-cyan': '0 0 30px rgba(0, 210, 255, 0.4), 0 0 60px rgba(0, 210, 255, 0.15)',
        'glow-red': '0 0 30px rgba(255, 36, 36, 0.4), 0 0 60px rgba(255, 36, 36, 0.15)',
        'glow-purple': '0 0 30px rgba(139, 92, 246, 0.4), 0 0 60px rgba(139, 92, 246, 0.15)',
        'glow-gold': '0 0 20px rgba(212, 175, 55, 0.4)',
        'glow-sm-cyan': '0 0 15px rgba(0, 210, 255, 0.3)',
      },
      animation: {
        'spin-slow': 'spin 60s linear infinite',
        'spin-slow-reverse': 'spin 80s linear infinite reverse',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'breathing': 'breathing 4s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'marquee': 'marquee 30s linear infinite',
        'count-up': 'countUp 0.5s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 210, 255, 0.3)' },
          '50%': { boxShadow: '0 0 50px rgba(0, 210, 255, 0.7), 0 0 100px rgba(0, 210, 255, 0.3)' },
        },
        breathing: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.03)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};

export default config;
