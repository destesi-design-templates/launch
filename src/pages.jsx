import { Section } from './sections.jsx'

// This template's pages, in code. Each <Section> is an ordinary component
// call: change its props, replace it with your own JSX, add anything you
// like, delete what you do not want. Nothing reads a document to undo you.
// The look — fonts, colours, spacing, the header — is src/theme.css.

// The Google Fonts these pages and theme.css name. Add a key when you use a new one.
export const fonts = ["bricolage", "inter"]

export function Home() {
  return <main>
    <Section section={{
        id: "hero",
        type: "hero",
        props: {
          title: "Hecho para ir contigo",
          subtitle: "Pensado desde cero para acompañarte todos los días. Ya está aquí.",
          button_label: "Consigue el tuyo",
          design: {
            variant: "overlay"
          }
        }
      }} />
    <Section section={{
        id: "ticker",
        type: "marquee",
        props: {
          items: ["Disponible ahora", "Descubre la colección", "Hecho para acompañarte", "Elige el tuyo"],
          speed: "slow"
        }
      }} />
    <Section section={{
        id: "story",
        type: "rich_text",
        props: {
          eyebrow: "Pensado para el día a día",
          title: "Del escritorio al camino",
          body: "Pensado para cómo lo vas a usar: en el trabajo, afuera y en todo lo que pasa entre medio. Simple, cómodo y listo para acompañarte cada día.",
          button_label: "Ver la colección",
          image_side: "right"
        }
      }} />
    <Section section={{
        id: "collection",
        type: "product_grid",
        props: {
          title: "Elige el tuyo",
          chips: true,
          limit: 6,
          design: {
            columns: 3
          }
        }
      }} />
    <Section section={{
        id: "benefits",
        type: "benefits",
        props: {}
      }} />
    <Section section={{
        id: "faq",
        type: "faq",
        props: {
          title: "Antes de comprar",
          items: [
            {
              question: "¿Cómo hago mi pedido?",
              answer: "Elige el producto, agrégalo al carrito y completa tus datos de entrega. Antes de confirmar ves el resumen de tu compra."
            },
            {
              question: "¿Cómo puedo pagar?",
              answer: "Eliges el medio de pago al finalizar la compra, entre los que la tienda tiene disponibles."
            },
            {
              question: "¿Cómo elijo el que va conmigo?",
              answer: "En la página de cada producto encuentras sus fotos, opciones y precio antes de agregarlo al carrito."
            }
          ]
        }
      }} />
    <Section section={{
        id: "cta",
        type: "cta",
        props: {
          title: "¿Listo para el tuyo?",
          body: "Elige tu favorito y hazlo parte de tu día.",
          button_label: "Ver la colección"
        }
      }} />
  </main>
}

export function Product() {
  return <main>
    <Section section={{
        id: "detail",
        type: "product_detail",
        props: {
          design: {
            variant: "split"
          }
        }
      }} />
    <Section section={{
        id: "suggested",
        type: "product_suggested",
        props: {
          title: "Completa tu kit",
          limit: 4,
          design: {
            columns: 4
          }
        }
      }} />
  </main>
}
