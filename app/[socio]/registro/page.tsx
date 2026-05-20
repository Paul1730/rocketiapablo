export const dynamic = 'force-dynamic';

import { notFound }        from 'next/navigation';
import { getSupabase }     from '@/lib/supabase';
import Navbar              from '@/components/Navbar';
import RegistroPageContent from '@/components/RegistroPageContent';
import WhatsAppButton      from '@/components/WhatsAppButton';

export default async function SocioRegistroPage({
  params,
}: {
  params: { socio: string };
}) {
  const supabase = getSupabase();

  const { data } = await supabase
    .from('socios')
    .select('link, whatsapp')
    .eq('slug', params.socio.toLowerCase())
    .maybeSingle();

  if (!data) notFound();

  return (
    <main className="min-h-screen bg-rocket-dark">
      <Navbar />
      <RegistroPageContent ctaLink={data.link} />
      <WhatsAppButton number={data.whatsapp || '+50371807574'} />
    </main>
  );
}
