import Section from "../components/Section.jsx";
import KpiCard from "../components/KpiCard.jsx";

/*
 * Exercise 06 — KPI Card
 * Hierarquia visual + cor semântica dependente da prop `trend`.
 * O ícone fica no container quadrado ao lado do label (referência do Figma).
 */
const KPIS = [
  {
    label: "Revenue",
    value: "R$ 128.4k",
    change: "+12.8%",
    comparison: "vs previous period",
    icon: "$",
    trend: "positive",
  },
  {
    label: "Orders",
    value: "1,842",
    change: "-3.1%",
    comparison: "vs last week",
    icon: "#",
    trend: "negative",
  },
  {
    label: "Conversion",
    value: "4.7%",
    change: "0.0%",
    comparison: "vs baseline",
    icon: "%",
    trend: "neutral",
  },
];

export default function Ex06KpiCard() {
  return (
    <Section
      number="06"
      title="KPI Card"
      subtitle="Data hierarchy + semantic status badge"
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {KPIS.map((kpi) => (
          <KpiCard key={kpi.label} {...kpi} />
        ))}
      </div>
    </Section>
  );
}
