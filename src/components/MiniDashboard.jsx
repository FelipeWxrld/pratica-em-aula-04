/*
 * Exercise 10 — Mini Dashboard
 *
 * Reutiliza KpiCard (exercício 06) e Button (exercício 01).
 * Os KPIs vêm de array + map(): nenhuma estrutura JSX foi copiada.
 * O gráfico são apenas divs estáticas (sem Recharts, sem useState).
 *
 * Todas as cores têm par light/dark via variantes `dark:` — o desafio
 * final da seção renderiza esta mesma árvore dentro de <div className="dark">.
 */

import Button from "./ui/Button.jsx";
import KpiCard from "./KpiCard.jsx";

const METRICS = [
  { label: "Revenue", value: "128k" },
  { label: "Orders", value: "1,842" },
  { label: "Conv.", value: "4.7%" },
];

const BARS = [40, 64, 50, 76, 58, 100];

const ACTIVITY = ["New order", "Payment approved", "User created"];

function CardShell({ title, className = "", children }) {
  return (
    <div
      className={`rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 ${className}`}
    >
      <p className="text-sm font-bold text-slate-900 dark:text-white">
        {title}
      </p>
      {children}
    </div>
  );
}

export default function MiniDashboard({ className = "" }) {
  return (
    <div
      className={`rounded-2xl bg-slate-100 p-5 dark:bg-slate-950 sm:p-6 ${className}`}
    >
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
          Overview
        </h3>
        <Button variant="dark" size="sm" className="dark:bg-white dark:text-slate-900">
          Export
        </Button>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {METRICS.map((metric) => (
          <KpiCard key={metric.label} compact label={metric.label} value={metric.value} />
        ))}
      </div>

      <div className="mt-3 grid grid-cols-1 gap-3 lg:grid-cols-3">
        <CardShell title="Performance" className="lg:col-span-2">
          <div className="mt-4 flex h-32 items-end gap-3">
            {BARS.map((height, index) => (
              <div
                key={`bar-${index}`}
                style={{ height: `${height}%` }}
                className={`flex-1 rounded-t-md transition-colors ${
                  index === BARS.length - 1
                    ? "bg-blue-600"
                    : "bg-slate-200 dark:bg-slate-800"
                }`}
              />
            ))}
          </div>
        </CardShell>

        <CardShell title="Activity">
          <ul className="mt-4 space-y-3">
            {ACTIVITY.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400"
              >
                <span className="size-1.5 shrink-0 rounded-full bg-blue-500" />
                {item}
              </li>
            ))}
          </ul>
        </CardShell>
      </div>
    </div>
  );
}
