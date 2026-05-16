'use client';

export default function OrbitalRings() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      {/* Outer ring */}
      <div className="orbit-cw absolute" style={{ width: 900, height: 900 }}>
        <svg viewBox="0 0 900 900" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-[0.12]">
          <ellipse
            cx="450" cy="450" rx="440" ry="160"
            stroke="url(#ring-gradient-1)" strokeWidth="1.5"
            strokeDasharray="8 16"
          />
          <defs>
            <linearGradient id="ring-gradient-1" x1="0" y1="0" x2="900" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00D2FF" />
              <stop offset="0.5" stopColor="#8B5CF6" />
              <stop offset="1" stopColor="#EC4899" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Middle ring */}
      <div className="orbit-ccw absolute" style={{ width: 680, height: 680 }}>
        <svg viewBox="0 0 680 680" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-[0.18]">
          <ellipse
            cx="340" cy="340" rx="330" ry="120"
            stroke="url(#ring-gradient-2)" strokeWidth="1"
            strokeDasharray="4 12"
          />
          <defs>
            <linearGradient id="ring-gradient-2" x1="0" y1="0" x2="680" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00D2FF" />
              <stop offset="1" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Inner ring */}
      <div className="orbit-cw absolute" style={{ width: 480, height: 480, animationDuration: '40s' }}>
        <svg viewBox="0 0 480 480" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-[0.25]">
          <ellipse
            cx="240" cy="240" rx="230" ry="85"
            stroke="url(#ring-gradient-3)" strokeWidth="1"
          />
          <defs>
            <linearGradient id="ring-gradient-3" x1="0" y1="0" x2="480" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00D2FF" stopOpacity="0.9" />
              <stop offset="1" stopColor="#8B5CF6" stopOpacity="0.6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Glow circle behind hero */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 600,
          height: 600,
          background: 'radial-gradient(circle, rgba(0,210,255,0.06) 0%, rgba(139,92,246,0.04) 40%, transparent 70%)',
        }}
      />
    </div>
  );
}
