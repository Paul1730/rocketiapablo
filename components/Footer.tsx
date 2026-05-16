'use client';

import { Rocket, Instagram, Youtube, Facebook } from 'lucide-react';

const LINKS = {
  Producto: [
    { label: 'Rocket iA I',      href: '#pricing' },
    { label: 'Rocket iA II',     href: '#pricing' },
    { label: 'Rocket University', href: '#herramientas' },
    { label: 'Ver Pricing',      href: '#pricing' },
  ],
  Empresa: [
    { label: 'Beleza Beauty & Health', href: '#respaldo' },
    { label: 'Sobre Edgardo Moreno',   href: '#' },
    { label: 'Contacto',              href: 'mailto:hola@rocketia.com' },
    { label: 'Soporte',               href: 'mailto:soporte@rocketia.com' },
  ],
  Legal: [
    { label: 'Términos de Uso',  href: '#' },
    { label: 'Privacidad',       href: '#' },
    { label: 'Garantía',         href: '#' },
    { label: 'Refund Policy',    href: '#' },
  ],
};

const SOCIALS = [
  { icon: Instagram, label: 'Instagram', href: '#', color: '#EC4899' },
  { icon: Youtube,   label: 'YouTube',   href: '#', color: '#FF2424' },
  { icon: Facebook,  label: 'Facebook',  href: '#', color: '#3B82F6' },
];

// TikTok SVG (not in lucide)
function TikTokIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.2a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V9.01a8.23 8.23 0 0 0 4.82 1.55V7.12a4.85 4.85 0 0 1-1.06-.43z"/>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Top gradient border */}
      <div
        className="h-px w-full"
        style={{ background: 'linear-gradient(90deg, transparent, #00D2FF, #8B5CF6, #EC4899, transparent)' }}
      />

      <div
        className="relative"
        style={{
          background: 'linear-gradient(180deg, rgba(8,12,30,0.95) 0%, rgba(5,8,20,1) 100%)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Top: logo + description */}
          <div className="grid lg:grid-cols-5 gap-12 mb-16">
            {/* Brand col */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2.5 mb-4">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{
                    background: 'rgba(255,36,36,0.15)',
                    border: '1px solid rgba(255,36,36,0.3)',
                  }}
                >
                  <Rocket size={18} className="text-rocket-red" />
                </div>
                <span className="font-display text-lg font-black">
                  <span className="text-white">Rocket</span>{' '}
                  <span className="text-gradient-iA">iA</span>
                  <span className="text-rocket-cyan/90">™</span>
                </span>
              </div>

              <p className="text-sm text-white/45 leading-relaxed max-w-xs mb-6">
                La suite de inteligencia artificial todo-en-uno para emprendedores que quieren crear, vender y escalar con IA.
              </p>

              {/* Social icons */}
              <div className="flex items-center gap-3">
                {SOCIALS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: 'rgba(255,255,255,0.5)',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = social.color;
                      (e.currentTarget as HTMLElement).style.borderColor = `${social.color}40`;
                      (e.currentTarget as HTMLElement).style.background = `rgba(${social.color === '#EC4899' ? '236,72,153' : social.color === '#FF2424' ? '255,36,36' : '59,130,246'},0.08)`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)';
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
                      (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)';
                    }}
                  >
                    <social.icon size={16} />
                  </a>
                ))}
                <a
                  href="#"
                  aria-label="TikTok"
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: 'rgba(255,255,255,0.5)',
                  }}
                >
                  <TikTokIcon size={16} />
                </a>
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(LINKS).map(([category, links]) => (
              <div key={category}>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-white/30 mb-5">
                  {category}
                </p>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-white/45 hover:text-rocket-cyan transition-colors duration-200 font-medium"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div
            className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
            style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
          >
            <p className="text-xs text-white/30 font-medium text-center sm:text-left">
              © 2026 Rocket iA™ by{' '}
              <span className="text-rocket-gold/70">Beleza Beauty & Health</span>.
              {' '}Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-2">
              <div
                className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"
                style={{ boxShadow: '0 0 6px rgba(74,222,128,0.7)' }}
              />
              <span className="text-xs text-white/25 font-medium">Todos los sistemas operativos</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
