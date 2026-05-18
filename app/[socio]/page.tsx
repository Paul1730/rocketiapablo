export const dynamic = 'force-dynamic';

import { notFound } from 'next/navigation';
import { getSupabase } from '@/lib/supabase';
import Navbar from '@/components/Navbar';
import Hero   from '@/components/Hero';

export default async function SocioPage({
  params,
}: {
  params: { socio: string };
}) {
  const supabase = getSupabase();

  const { data } = await supabase
    .from('socios')
    .select('link')
    .eq('slug', params.socio.toLowerCase())
    .maybeSingle();

  if (!data) notFound();

  return (
    <main className="min-h-screen bg-rocket-dark">
      <Navbar />
      <Hero ctaLink={data.link} />
    </main>
  );
}
