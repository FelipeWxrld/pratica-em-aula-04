import Section from "../components/Section.jsx";
import ProductCard from "../components/ProductCard.jsx";

/*
 * Exercise 04 — Product Card
 * Grid responsivo: 1 coluna (mobile) → 2 colunas (sm) → 3 colunas (lg).
 * Hover do card (translate + shadow) e group-hover na área visual.
 */
const PRODUCTS = [
  {
    name: "Velocity Runner",
    category: "Sneakers",
    description: "Lightweight everyday performance sneaker.",
    price: "R$ 499",
    badge: "New",
    image: "bg-blue-600",
    imageLabel: "RUN",
  },
  {
    name: "Cloud Knit",
    category: "Sneakers",
    description: "Breathable knit upper for all-day comfort.",
    price: "R$ 389",
    badge: "Sale",
    image: "bg-emerald-600",
    imageLabel: "KNIT",
  },
  {
    name: "Trail Grip",
    category: "Outdoors",
    description: "Rugged sole built for any terrain.",
    price: "R$ 549",
    image: "bg-violet-600",
    imageLabel: "GRIP",
  },
];

export default function Ex04ProductCard() {
  return (
    <Section
      number="04"
      title="Product Card"
      subtitle="group-hover + content hierarchy + CTA"
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
    </Section>
  );
}
