// Prüft src/data/*.json vor jedem Build (npm run build ruft das auf).
// Fängt Tippfehler aus Edits im GitHub-Web-Editor ab, bevor eine kaputte Seite deployt wird.
// Bewusst ohne Abhängigkeiten. Erlaubte Werte müssen zu Products.astro / Assistant.astro passen.
import { readFileSync, existsSync } from 'node:fs';

const root = new URL('../', import.meta.url);
const WORLDS = ['sage', 'rose', 'navy', 'braun'];
const PLATFORMS = ['Vinted', 'Kleinanzeigen'];
const CONDITIONS = ['Neu mit Etikett', 'Neuwertig', 'Sehr gut', 'Gut', 'Gebraucht mit Spuren'];
const REQUIRED = ['brand', 'name', 'size', 'cond', 'price', 'plat', 'url', 'img', 'world', 'fresh', 'demo'];

const errors = [];
const read = (p) => {
  try { return JSON.parse(readFileSync(new URL(p, root), 'utf8')); }
  catch (e) { errors.push(`${p}: kein gültiges JSON – ${e.message}`); return null; }
};
const isHttps = (v) => typeof v === 'string' && v.startsWith('https://');

const data = read('src/data/products.json');
const products = Array.isArray(data?.products) ? data.products : [];
if (data && !Array.isArray(data.products)) errors.push('products.json: "products" muss eine Liste sein');

products.forEach((p, i) => {
  const at = `products.json, Artikel ${i + 1} (${p.brand ?? '?'} ${p.name ?? '?'})`;
  for (const k of REQUIRED) if (p[k] === undefined || p[k] === '') errors.push(`${at}: Feld "${k}" fehlt`);
  if (p.price !== undefined && (typeof p.price !== 'number' || p.price < 0)) errors.push(`${at}: "price" muss eine Zahl ≥ 0 sein (ohne €, ohne Anführungszeichen)`);
  if (p.world && !WORLDS.includes(p.world)) errors.push(`${at}: "world" muss einer von ${WORLDS.join(' | ')} sein`);
  if (p.plat && !PLATFORMS.includes(p.plat)) errors.push(`${at}: "plat" muss einer von ${PLATFORMS.join(' | ')} sein`);
  if (p.cond && !CONDITIONS.includes(p.cond)) errors.push(`${at}: "cond" muss einer von ${CONDITIONS.join(' | ')} sein`);
  for (const k of ['fresh', 'demo']) if (p[k] !== undefined && typeof p[k] !== 'boolean') errors.push(`${at}: "${k}" muss true oder false sein (ohne Anführungszeichen)`);
  if (p.url && !isHttps(p.url)) errors.push(`${at}: "url" muss mit https:// beginnen`);
  if (p.img && !existsSync(new URL(`public/images/${p.img}`, root))) errors.push(`${at}: Bild public/images/${p.img} existiert nicht`);
});

const site = read('src/data/site.json');
if (site) {
  const { rating, count } = site.review ?? {};
  if ((rating == null) !== (count == null)) errors.push('site.json: review.rating und review.count nur gemeinsam setzen (oder beide null lassen)');
  if (rating != null && !(typeof rating === 'number' && rating >= 1 && rating <= 5)) errors.push('site.json: review.rating muss eine Zahl zwischen 1 und 5 sein');
  if (count != null && !(Number.isInteger(count) && count > 0)) errors.push('site.json: review.count muss eine ganze Zahl > 0 sein');
  for (const [k, v] of Object.entries(site.links ?? {})) if (!isHttps(v)) errors.push(`site.json: links.${k} muss mit https:// beginnen`);
}

if (errors.length) {
  console.error(`✗ Inhaltsprüfung fehlgeschlagen (${errors.length}):\n  - ${errors.join('\n  - ')}`);
  process.exit(1);
}
console.log(`✓ Inhaltsprüfung ok – ${products.length} Artikel, davon ${products.filter((p) => p.demo).length} Demo`);
