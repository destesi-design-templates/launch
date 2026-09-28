// The sample shop this template shows where no shop is behind the page (its
// live demo, or your project before the workspace sets up a shop). It never
// reaches a live shop: there the page draws the shop's own catalog, banner and
// settings. Replace it with your own sample shop, or leave it: a live shop
// never loads these photos.
import hero from './demo/hero.webp'
import story from './demo/story.webp'
import p1 from './demo/p1.webp'
import p2 from './demo/p2.webp'
import p3 from './demo/p3.webp'
import p4 from './demo/p4.webp'
import p5 from './demo/p5.webp'
import p6 from './demo/p6.webp'

export const demo = {
  name: 'AQUA ONE',
  tagline: 'La botella para todo tu día',
  about: 'Una botella térmica y sus accesorios, para llevar tu bebida a todas partes. Una tienda de demostración de la plantilla Launch.',
  announcement: 'Ya disponible',
  hero,
  story,
  detail: 'Doble pared de acero, tapa hermética y un acabado mate que se siente bien en la mano. Pensada para ir del escritorio al camino.',
  benefits: ['Doble pared de acero', 'Tapa hermética', 'Atención personal'],
  categories: [
    { id: 'botellas', name: 'Botellas' },
    { id: 'accesorios', name: 'Accesorios' },
  ],
  products: [
    { id: '1', name: 'Botella One Navy 750 ml', price_cents: 14900000, category_id: 'botellas', badge: 'Nuevo', image: p1 },
    { id: '2', name: 'Botella One Ámbar 750 ml', price_cents: 14900000, category_id: 'botellas', badge: 'Nuevo', image: p2 },
    { id: '3', name: 'Botella One Blanca 750 ml', price_cents: 14900000, category_id: 'botellas', image: p3 },
    { id: '4', name: 'Correa tejida', price_cents: 3900000, category_id: 'accesorios', image: p4 },
    { id: '5', name: 'Tapa de repuesto', price_cents: 2900000, category_id: 'accesorios', image: p5 },
    { id: '6', name: 'Kit de limpieza', price_cents: 2400000, category_id: 'accesorios', image: p6 },
  ],
}
