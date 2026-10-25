/*
 * Exercise 06 — KPI Card
 *
 * Hierarquia: label pequeno/muted → valor grande/extra bold → badge semântico.
 * O ícone fica em um container quadrado arredondado, logo ao lado do label.
 *
 * Props: label, value, change, comparison, icon, trend (+ compact, usado
 * pelo Mini Dashboard do exercício 10 para reaproveitar o mesmo componente).
 */

const TREND_CLASSES = {
  positive: "bg-emerald-50 text-emerald-700 ring-emerald-600/15",
  negative: "bg-red-50 text-red-700 ring-red-600/15",
  neutral: "bg-slate-100 text-slate-600 ring-slate-500/15",
};

export default function KpiCard({
  label,
  value,
  change,
  comparison,
  icon,
  trend = "neutral",
  compact = false,
  className = "",
}) {
  const trendClasses = TREND_CLASSES[trend] ?? TREND_CLASSES.neutral;

  return (
    <article
      className={`flex h-full flex-col rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900 ${
        compact ? "gap-1 p-4" : "min-h-[240px] justify-between p-6"
      } ${className}`}
    >
      <div className="flex items-center gap-2">
        <span
          className={`font-medium text-slate-500 dark:text-slate-400 ${
            compact ? "text-xs" : "text-sm"
          }`}
        >
          {label}
        </span>
        {icon ? (
          <span
            className={`grid shrink-0 place-items-center rounded-lg bg-blue-50 font-bold text-blue-600 dark:bg-blue-500/10 ${
              compact ? "size-6 text-[11px]" : "size-8 text-sm"
            }`}
          >
            {icon}
          </span>
        ) : null}
      </div>

      <p
        className={`font-extrabold tracking-tight text-slate-900 dark:text-white ${
          compact ? "text-2xl" : "mt-4 text-4xl"
        }`}
      >
        {value}
      </p>

      {change ? (
        <div
          className={`flex flex-wrap items-center gap-2 ${
            compact ? "mt-2" : "mt-5"
          }`}
        >
          <span
            className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${trendClasses}`}
          >
            {change}
          </span>
          {comparison ? (
            <span className="text-xs text-slate-400 dark:text-slate-500">
              {comparison}
            </span>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}
