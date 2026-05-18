import { supabase } from '@/lib/supabase';
import { DEFAULT_LINK } from '@/lib/socios';
import Navbar from '@/components/Navbar';
import Hero   from '@/components/Hero';

export const dynamic = 'force-dynamic';

export default async function SocioPage({
  params,
}: {
  params: { socio: string };
}) {
  const { data } = await supabase
    .from('socios')
    .select('link')
    .eq('slug', params.socio.toLowerCase())
    .maybeSingle();

  const link = data?.link ?? DEFAULT_LINK;

  return (
    <main className="min-h-screen bg-rocket-dark">
      <Navbar />
      <Hero ctaLink={link} />
    </main>
  );
}
