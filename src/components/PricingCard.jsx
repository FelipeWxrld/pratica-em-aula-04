/*
 * Exercise 07 — Pricing Card
 *
 * Badge + Price + FeatureList (array via map) + CTA de largura total.
 * A prop `highlighted` muda o visual sem duplicar JSX.
 *
 * Props: name, price, period, features, highlighted, badge (+ cta).
 */

import Badge from "./ui/Badge.jsx";
import Button from "./ui/Button.jsx";

function IconCheck(props) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0l-3.5-3.5a1 1 0 1 1 1.4-1.4l2.8 2.8 6.8-6.8a1 1 0 0 1 1.4 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function PricingCard({
  name,
  price,
  period,
  features = [],
  highlighted = false,
  badge = "Most popular",
  cta = "Start free trial",
}) {
  return (
    <article
      className={`flex w-full max-w-[400px] flex-col rounded-3xl border bg-white p-6 shadow-sm transition dark:bg-slate-900 ${
        highlighted
          ? "border-violet-500 ring-2 ring-violet-500/20 dark:border-violet-500"
          : "border-slate-200 dark:border-slate-800"
      }`}
    >
      <div className="min-h-[26px]">
        {highlighted ? <Badge variant="violet">{badge}</Badge> : null}
      </div>

      <h3 className="mt-3 text-xl font-bold tracking-tight text-slate-900 dark:text-white">
        {name}
      </h3>

      <p className="mt-3 flex items-baseline gap-1.5">
        <span className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          {price}
        </span>
        <span className="text-sm text-slate-400">{period}</span>
      </p>

      <ul className="mt-6 space-y-3">
        {features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300"
          >
            <IconCheck
              className={`mt-0.5 size-4 shrink-0 ${
                highlighted ? "text-violet-600" : "text-slate-400"
              }`}
            />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <Button
          variant={highlighted ? "violet" : "outline"}
          fullWidth
        >
          {cta}
        </Button>
      </div>
    </article>
  );
}
