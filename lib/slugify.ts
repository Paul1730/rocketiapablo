export function slugify(nombre: string, apellido: string): string {
  const normalize = (s: string) =>
    s
      .toLowerCase()
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '')
      .replace(/[^a-z0-9]/g, '')
      .trim();
  return `${normalize(nombre)}-${normalize(apellido)}`;
}
