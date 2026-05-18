export interface Socio {
  nombre: string;
  link: string;
}

// Agrega aquí cada socio: slug (la URL) y su link de compra
export const socios: Record<string, Socio> = {
  pablo: {
    nombre: 'Pablo',
    link: 'https://belezateam.com//link/page/EMPRENDEDOR',
  },
  // Ejemplo de cómo agregar más socios:
  // ana: {
  //   nombre: 'Ana',
  //   link: 'https://belezateam.com//link/page/ANA',
  // },
  // carlos: {
  //   nombre: 'Carlos',
  //   link: 'https://belezateam.com//link/page/CARLOS',
  // },
};

export const DEFAULT_LINK = 'https://belezateam.com//link/page/EMPRENDEDOR';
