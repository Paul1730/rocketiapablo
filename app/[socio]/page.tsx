export const dynamic = 'force-dynamic';

import { notFound } from 'next/navigation';
import { getSupabase } from '@/lib/supabase';
import Navbar         from '@/components/Navbar';
import Hero           from '@/components/Hero';
import Footer         from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default async function SocioPage({
  params,
}: {
  params: { socio: string };
}) {
  const supabase = getSupabase();

  const { data } = await supabase
    .from('socios')
    .select('nombre, apellido, link, whatsapp')
    .eq('slug', params.socio.toLowerCase())
    .maybeSingle();

  if (!data) notFound();

  return (
    <main className="min-h-screen bg-rocket-dark">
      <Navbar />
      <Hero ctaLink={data.link} registroPath={`/${params.socio}/registro`} nombre={`${data.nombre} ${data.apellido}`} />
      <Footer />
      <WhatsAppButton number={data.whatsapp || '+50371807574'} />
    </main>
  );
}
