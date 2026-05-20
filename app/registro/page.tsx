import Navbar              from '@/components/Navbar';
import RegistroPageContent from '@/components/RegistroPageContent';
import WhatsAppButton      from '@/components/WhatsAppButton';
import { DEFAULT_LINK }    from '@/lib/socios';

export default function RegistroPage() {
  return (
    <main className="min-h-screen bg-rocket-dark">
      <Navbar />
      <RegistroPageContent ctaLink={DEFAULT_LINK} />
      <WhatsAppButton number="+50371807574" />
    </main>
  );
}
