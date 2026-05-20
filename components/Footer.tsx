import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      className="w-full py-10 px-4 text-center"
      style={{ background: 'rgba(5,8,20,0.98)', borderTop: '1px solid rgba(255,255,255,0.05)' }}
    >
      <div className="max-w-3xl mx-auto space-y-5">

        <div>
          <p className="text-sm font-semibold" style={{ color: 'rgba(168,188,207,0.55)' }}>
            Copyright 2025 – Rocket iA™
          </p>
          <p className="text-xs mt-0.5" style={{ color: 'rgba(168,188,207,0.35)' }}>
            Todos los Derechos Reservados
          </p>
        </div>

        <div className="flex items-center justify-center gap-3">
          <Link
            href="/terminos"
            className="text-sm font-semibold transition-colors duration-200 hover:text-white"
            style={{ color: 'rgba(168,188,207,0.55)' }}
          >
            Términos de uso
          </Link>
          <span style={{ color: 'rgba(168,188,207,0.25)' }}>|</span>
          <Link
            href="/politicas"
            className="text-sm font-semibold transition-colors duration-200 hover:text-white"
            style={{ color: 'rgba(168,188,207,0.55)' }}
          >
            Políticas
          </Link>
        </div>

        <p className="text-xs leading-relaxed" style={{ color: 'rgba(168,188,207,0.35)' }}>
          Este sitio web no está afiliado a Facebook ni a ninguna entidad de esta. Una vez que abandona
          Facebook, la responsabilidad no es de ellos sino de nuestro sitio web. Hacemos todo lo posible
          para indicar claramente y mostrar todas las pruebas del producto y utilizar resultados reales.
          No vendemos su correo electrónico ni ninguna información a terceros. Nunca hacemos ningún tipo
          de spam. Si tiene alguna pregunta, no dude en contactarnos durante el horario comercial de lunes
          a viernes de 9:00 a.m. a 6:00 p.m. Leemos y respondemos todos los mensajes por orden de llegada.
        </p>

      </div>
    </footer>
  );
}
