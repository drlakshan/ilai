import type { APIRoute } from 'astro';

// Keep the canonical content routes together; omit the legacy redirect.
const routes = ['/', '/about/', '/journey/', '/writing/', '/institutions/', '/work/', '/contact/'];
export const GET: APIRoute = () => new Response(
  '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' +
  routes.map((route) => `<url><loc>https://ilai.academy${route}</loc></url>`).join('') +
  '</urlset>',
  { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
);
