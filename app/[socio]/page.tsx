import Navbar from '@/components/Navbar';
import Hero   from '@/components/Hero';
import { socios, DEFAULT_LINK } from '@/lib/socios';

export default function SocioPage({
  params,
}: {
  params: { socio: string };
}) {
  const socio = socios[params.socio.toLowerCase()];
  const link  = socio?.link ?? DEFAULT_LINK;

  return (
    <main className="min-h-screen bg-rocket-dark">
      <Navbar />
      <Hero ctaLink={link} />
    </main>
  );
}
