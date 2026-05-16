'use client';

import { Rocket, Cpu, Mail, Send, Zap, BarChart3 } from 'lucide-react';

interface FloatingIconProps {
  icon: React.ReactNode;
  color: string;
  glowColor: string;
  className: string;
  animClass: string;
}

function FloatingIcon({ icon, color, glowColor, className, animClass }: FloatingIconProps) {
  return (
    <div
      className={`absolute z-10 pointer-events-none ${className} ${animClass}`}
    >
      <div
        className="flex items-center justify-center rounded-2xl p-3"
        style={{
          background: `rgba(${color}, 0.12)`,
          border: `1px solid rgba(${color}, 0.3)`,
          boxShadow: `0 0 20px rgba(${color}, 0.2), 0 0 40px rgba(${color}, 0.08)`,
          backdropFilter: 'blur(8px)',
        }}
      >
        <div style={{ color: `rgb(${color})`, filter: `drop-shadow(0 0 8px rgba(${color}, 0.6))` }}>
          {icon}
        </div>
      </div>
    </div>
  );
}

export default function FloatingIcons() {
  return (
    <>
      {/* Top-left: Rocket */}
      <FloatingIcon
        icon={<Rocket size={22} />}
        color="255, 36, 36"
        glowColor="255, 36, 36"
        className="top-[18%] left-[8%] hidden lg:flex"
        animClass="float-icon"
      />

      {/* Top-right: CPU/AI chip */}
      <FloatingIcon
        icon={<Cpu size={22} />}
        color="0, 210, 255"
        glowColor="0, 210, 255"
        className="top-[22%] right-[8%] hidden lg:flex"
        animClass="float-icon-delay1"
      />

      {/* Middle-left: Email */}
      <FloatingIcon
        icon={<Mail size={20} />}
        color="212, 175, 55"
        glowColor="212, 175, 55"
        className="top-[48%] left-[5%] hidden lg:flex"
        animClass="float-icon-delay2"
      />

      {/* Middle-right: Send/paper plane */}
      <FloatingIcon
        icon={<Send size={20} />}
        color="139, 92, 246"
        glowColor="139, 92, 246"
        className="top-[50%] right-[5%] hidden lg:flex"
        animClass="float-icon-delay3"
      />

      {/* Lower-left: Zap */}
      <FloatingIcon
        icon={<Zap size={18} />}
        color="0, 210, 255"
        glowColor="0, 210, 255"
        className="bottom-[28%] left-[12%] hidden xl:flex"
        animClass="float-icon-delay1"
      />

      {/* Lower-right: Chart */}
      <FloatingIcon
        icon={<BarChart3 size={18} />}
        color="16, 185, 129"
        glowColor="16, 185, 129"
        className="bottom-[28%] right-[12%] hidden xl:flex"
        animClass="float-icon-delay2"
      />
    </>
  );
}
