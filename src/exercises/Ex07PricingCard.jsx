import Section from "../components/Section.jsx";
import PricingCard from "../components/PricingCard.jsx";

/*
 * Exercise 07 — Pricing Card
 * Três planos renderizados a partir de dados; apenas o Pro recebe destaque
 * (prop highlighted), sem duplicar JSX.
 */
const PLANS = [
  {
    name: "Free",
    price: "$0",
    period: "/ month",
    features: ["1 project", "Community support", "Basic analytics"],
    cta: "Current plan",
  },
  {
    name: "Pro Plan",
    price: "$29",
    period: "/ month",
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "Priority support",
    ],
    highlighted: true,
    badge: "Most popular",
    cta: "Start free trial",
  },
  {
    name: "Enterprise",
    price: "$99",
    period: "/ month",
    features: [
      "Unlimited seats",
      "Custom integrations",
      "Dedicated success manager",
    ],
    cta: "Contact sales",
  },
];

export default function Ex07PricingCard() {
  return (
    <Section
      number="07"
      title="Pricing Card"
      subtitle="Feature list + pricing hierarchy + highlighted CTA"
    >
      <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 xl:grid-cols-3">
        {PLANS.map((plan) => (
          <div key={plan.name} className="flex justify-center">
            <PricingCard {...plan} />
          </div>
        ))}
      </div>
    </Section>
  );
}
