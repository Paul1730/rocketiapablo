import Navbar  from '@/components/Navbar';
import Footer  from '@/components/Footer';
import Link    from 'next/link';

export default function PoliticasPage() {
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
          Política de Privacidad
        </h1>
        <p className="text-xs mb-10" style={{ color: 'rgba(168,188,207,0.4)' }}>
          Última actualización: enero 2025
        </p>

        <div className="space-y-8 text-sm leading-relaxed" style={{ color: 'rgba(168,188,207,0.75)' }}>

          <section>
            <h2 className="text-white font-bold text-base mb-3">1. Información que Recopilamos</h2>
            <p>
              Rocket iA™ recopila únicamente la información que usted nos proporciona voluntariamente al
              completar formularios de registro en nuestro sitio, como nombre, apellido, correo electrónico
              y número de teléfono. No recopilamos datos sensibles sin su consentimiento expreso.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-base mb-3">2. Uso de la Información</h2>
            <p>
              La información recopilada se utiliza exclusivamente para: (a) procesar su solicitud de acceso
              a nuestros servicios; (b) enviarle información relevante sobre Rocket iA™ que usted ha
              solicitado; (c) mejorar nuestros servicios y experiencia de usuario.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-base mb-3">3. Protección de Datos</h2>
            <p>
              No vendemos, alquilamos ni compartimos su información personal con terceros bajo ninguna
              circunstancia. Sus datos están protegidos mediante medidas de seguridad técnicas y
              organizativas adecuadas para prevenir accesos no autorizados.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-base mb-3">4. Cookies</h2>
            <p>
              Este sitio puede utilizar cookies para mejorar su experiencia de navegación. Las cookies
              son pequeños archivos almacenados en su dispositivo que nos ayudan a recordar sus
              preferencias. Puede desactivarlas desde la configuración de su navegador.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-base mb-3">5. Comunicaciones</h2>
            <p>
              Al registrarse, usted acepta recibir comunicaciones relacionadas con Rocket iA™. Puede
              cancelar la suscripción en cualquier momento respondiendo con "STOP" a cualquier mensaje
              o contactándonos directamente. No realizamos spam ni comunicaciones no solicitadas.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-base mb-3">6. Sitios de Terceros</h2>
            <p>
              Nuestro sitio puede contener enlaces a sitios externos. Rocket iA™ no es responsable de
              las prácticas de privacidad ni del contenido de dichos sitios. Le recomendamos revisar
              las políticas de privacidad de cada sitio que visite.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-base mb-3">7. Sus Derechos</h2>
            <p>
              Usted tiene derecho a acceder, rectificar o eliminar sus datos personales en cualquier
              momento. Para ejercer estos derechos, contáctenos a través de WhatsApp durante nuestro
              horario comercial de lunes a viernes de 9:00 a.m. a 6:00 p.m.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-base mb-3">8. Cambios en esta Política</h2>
            <p>
              Rocket iA™ se reserva el derecho de actualizar esta Política de Privacidad en cualquier
              momento. Le notificaremos sobre cambios significativos publicando la nueva versión en
              este sitio con la fecha de actualización correspondiente.
            </p>
          </section>

        </div>
      </div>
      <Footer />
    </main>
  );
}
