import Navbar  from '@/components/Navbar';
import Footer  from '@/components/Footer';
import Link    from 'next/link';

export default function TerminosPage() {
  return (
    <main className="min-h-screen bg-rocket-dark flex flex-col">
      <Navbar />
      <div className="flex-1 max-w-3xl mx-auto px-4 sm:px-6 py-24 w-full">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold mb-10 transition-colors hover:text-white"
          style={{ color: 'rgba(0,210,255,0.6)' }}
        >
          ← Volver al inicio
        </Link>

        <h1
          className="font-display font-black text-white mb-2"
          style={{ fontSize: 'clamp(28px, 4vw, 44px)', letterSpacing: '-0.02em' }}
        >
          Términos de Uso
        </h1>
        <p className="text-xs mb-10" style={{ color: 'rgba(168,188,207,0.4)' }}>
          Última actualización: enero 2025
        </p>

        <div className="space-y-8 text-sm leading-relaxed" style={{ color: 'rgba(168,188,207,0.75)' }}>

          <section>
            <h2 className="text-white font-bold text-base mb-3">1. Aceptación de los Términos</h2>
            <p>
              Al acceder y utilizar el sitio web de Rocket iA™, usted acepta cumplir y estar sujeto a los
              presentes Términos de Uso. Si no está de acuerdo con alguna parte de estos términos, le
              solicitamos que no utilice nuestro sitio.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-base mb-3">2. Descripción del Servicio</h2>
            <p>
              Rocket iA™ es una suite de herramientas de inteligencia artificial diseñada para emprendedores
              digitales. Ofrecemos acceso a herramientas de IA, capacitaciones y agentes especializados para
              ayudar a crear, vender y escalar negocios en línea.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-base mb-3">3. Uso Aceptable</h2>
            <p>
              Usted se compromete a utilizar los servicios de Rocket iA™ únicamente para fines lícitos y de
              acuerdo con estos términos. Queda prohibido: (a) usar el servicio de manera que infrinja las
              leyes aplicables; (b) transmitir material difamatorio, ofensivo o dañino; (c) intentar obtener
              acceso no autorizado a nuestros sistemas.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-base mb-3">4. Propiedad Intelectual</h2>
            <p>
              Todo el contenido publicado en este sitio, incluyendo textos, imágenes, videos, logos y software,
              es propiedad de Rocket iA™ y está protegido por las leyes de propiedad intelectual aplicables.
              Queda prohibida su reproducción sin autorización expresa y por escrito.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-base mb-3">5. Limitación de Responsabilidad</h2>
            <p>
              Los resultados mostrados en este sitio son ejemplos reales pero no garantizan resultados idénticos
              para todos los usuarios. Los ingresos dependen del esfuerzo individual, experiencia y condiciones
              del mercado. Rocket iA™ no se hace responsable por decisiones tomadas basándose en la información
              de este sitio.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-base mb-3">6. Modificaciones</h2>
            <p>
              Rocket iA™ se reserva el derecho de modificar estos términos en cualquier momento. Las
              modificaciones entrarán en vigor inmediatamente después de su publicación en el sitio.
              El uso continuado del servicio constituye la aceptación de los nuevos términos.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-base mb-3">7. Contacto</h2>
            <p>
              Si tiene preguntas sobre estos Términos de Uso, puede contactarnos a través de WhatsApp
              durante nuestro horario comercial de lunes a viernes de 9:00 a.m. a 6:00 p.m.
            </p>
          </section>

        </div>
      </div>
      <Footer />
    </main>
  );
}
