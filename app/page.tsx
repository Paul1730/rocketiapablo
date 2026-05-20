import Navbar         from '@/components/Navbar';
import Hero           from '@/components/Hero';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <main className="min-h-screen bg-rocket-dark">
      <Navbar />
      <Hero nombre="Pablo Landos" />
      <WhatsAppButton number="+50371807574" />
    </main>
  );
}
