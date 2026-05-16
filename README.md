# Rocket iA™ — Landing Page

Landing page premium de alta conversión para **Rocket iA™**, la suite de inteligencia artificial todo-en-uno para emprendedores que quieren crear, vender y escalar con IA.

## Stack Técnico

- **Framework**: Next.js 14 (App Router)
- **Lenguaje**: TypeScript
- **Styling**: Tailwind CSS + CSS custom (globals.css)
- **Animaciones**: Framer Motion
- **Iconos**: Lucide React
- **Fuente**: Satoshi (Fontshare CDN) + Inter fallback
- **Deploy**: Vercel

## Secciones Incluidas

1. Navbar — Logo centrado con ícono cohete
2. Hero — Headline gigante, CTAs duales, social proof
3. Video Mockup — Card 16:9 con precio overlay y play button
4. Welcome Banner — Marquee animado + banner glassmorphism
5. Respaldo Empresarial — Beleza Beauty & Health, globo SVG
6. Suite de IA — Features, analogía del taladro, grid de herramientas
7. 6 Herramientas — Rocket iA I completo con cards animadas
8. Rocket iA II — Cursos avanzados y beneficios
9. Agentes Especializados — 6 agentes con avatars cyberpunk
10. Pricing — 3 planes con precio outline effect
11. Business Matrix — Layout 1×2 con cohete orbital
12. Testimonios — 6 cards con avatares y ratings
13. FAQ — Acordeón animado con 8 preguntas
14. CTA Final — Countdown timer + CTA gigante
15. Footer — 4 columnas con redes sociales

## Correr Localmente

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

## Build de Producción

```bash
npm run build
npm start
```

## Deploy en Vercel

### Opción 1: Auto-deploy desde GitHub

1. Push el repositorio a GitHub
2. Ir a [vercel.com](https://vercel.com) → **New Project**
3. Importar el repositorio
4. Vercel detecta Next.js automáticamente
5. Click en **Deploy**

Cada push a `main` generará un deploy automático.

### Opción 2: Vercel CLI

```bash
npm install -g vercel
vercel --prod
```

## Variables de Entorno

No se requieren variables de entorno para el deploy básico. Si agregas integraciones (formularios, analytics, etc.), crear `.env.local`:

```
NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
```

## Estructura del Proyecto

```
rocket-ia-landing/
├── app/
│   ├── layout.tsx          # RootLayout con SEO metadata + Satoshi font
│   ├── page.tsx            # Página principal (ensambla todas las secciones)
│   └── globals.css         # Variables CSS, animaciones, utilidades
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── VideoMockup.tsx
│   ├── WelcomeBanner.tsx
│   ├── BelezaSection.tsx
│   ├── AISuiteSection.tsx
│   ├── ToolsGrid.tsx
│   ├── RocketIA2Section.tsx
│   ├── AgentsSection.tsx
│   ├── PricingSection.tsx
│   ├── BusinessMatrix.tsx
│   ├── Testimonials.tsx
│   ├── FAQ.tsx
│   ├── FinalCTA.tsx
│   ├── Footer.tsx
│   └── ui/
│       ├── GradientButton.tsx
│       ├── GlowCard.tsx
│       ├── OrbitalRings.tsx
│       ├── FloatingIcons.tsx
│       └── NeonText.tsx
├── lib/
│   └── utils.ts
├── tailwind.config.ts
├── next.config.js
└── README.md
```

## Paleta de Colores

| Token | Hex | Uso |
|-------|-----|-----|
| `--rocket-red` | `#FF2424` | CTAs alternativos, fuego |
| `--rocket-cyan` | `#00D2FF` | Texto IA, bordes, acentos |
| `--rocket-gold` | `#D4AF37` | Badges premium, Beleza |
| `--rocket-space` | `#0A1128` | Fondo principal |
| `--rocket-carbon` | `#121212` | Fondos secundarios |
| `--rocket-purple` | `#8B5CF6` | Gradientes, Rocket iA II |

---

© 2026 Rocket iA™ by Beleza Beauty & Health
