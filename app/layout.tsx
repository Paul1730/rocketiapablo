import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  themeColor: '#0A1128',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://rocketia.com'),
  title: 'Rocket iA™ — La Suite de IA Definitiva para Emprendedores',
  description:
    '8 herramientas inteligentes + capacitación avanzada + agentes especializados para crear, vender y escalar tu negocio con IA. Pre-lanzamiento disponible.',
  keywords:
    'IA, inteligencia artificial, emprendedores, suite IA, Rocket iA, Edgardo Moreno, Beleza, herramientas IA, negocios digitales',
  authors: [{ name: 'Rocket iA™ by Beleza Beauty & Health' }],
  openGraph: {
    title: 'Rocket iA™ — Pre-Lanzamiento',
    description:
      'La nueva generación de herramientas inteligentes para crear, vender y escalar.',
    images: ['/og-image.png'],
    type: 'website',
    locale: 'es_ES',
    siteName: 'Rocket iA™',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rocket iA™ — La Suite de IA Definitiva',
    description:
      '8 herramientas + agentes especializados + capacitación avanzada. Pre-lanzamiento disponible.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@900,800,700,500,400,300&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/rocketia512.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/rocketia512.svg" />
      </head>
      <body className="bg-rocket-dark text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
