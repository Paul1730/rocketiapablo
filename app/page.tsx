import Navbar         from '@/components/Navbar';
import Hero           from '@/components/Hero';
import Footer         from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <main className="min-h-screen bg-rocket-dark flex flex-col">
      <Navbar />
      <Hero nombre="Pablo Landos" />
      <Footer />
      <WhatsAppButton number="+50371807574" />
    </main>
  );
}
