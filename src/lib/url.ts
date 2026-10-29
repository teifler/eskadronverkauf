// Basis-URL mit garantiertem End-Slash (GitHub-Pages-Unterordner-sicher)
export const base = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : import.meta.env.BASE_URL + '/';
export const asset = (p: string) => base + p.replace(/^\//, '');
