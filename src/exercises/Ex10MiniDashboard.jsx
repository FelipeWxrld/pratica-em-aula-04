import Section from "../components/Section.jsx";
import MiniDashboard from "../components/MiniDashboard.jsx";

/*
 * Exercise 10 — Mini Dashboard
 * Reutiliza KpiCard + Button; KPIs vindo de array + map();
 * responsividade (1 → 2/3 → Performance 2/3 + Activity 1/3).
 *
 * Desafio final: a segunda instância é envolvida por <div className="dark">,
 * ativando as variantes dark: definidas no CSS — sem useState.
 */
export default function Ex10MiniDashboard() {
  return (
    <Section
      number="10"
      title="Mini Dashboard"
      subtitle="Compose reusable cards into a responsive section"
    >
      <MiniDashboard />

      <div className="mt-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
          Dark mode — apenas classes dark: + @theme (sem state)
        </p>
        <div className="dark">
          <MiniDashboard />
        </div>
      </div>
    </Section>
  );
}
