/*
 * Exercise 02 — Badge
 *
 * Pill (rounded-full) + texto uppercase + tracking maior + fundo suave
 * com texto semanticamente relacionado ao fundo.
 */

const VARIANT_CLASSES = {
  info: "bg-blue-50 text-blue-700 ring-blue-600/15",
  success: "bg-emerald-50 text-emerald-700 ring-emerald-600/15",
  warning: "bg-amber-50 text-amber-700 ring-amber-600/15",
  danger: "bg-red-50 text-red-700 ring-red-600/15",
  violet: "bg-violet-50 text-violet-700 ring-violet-600/15",
  neutral: "bg-slate-100 text-slate-600 ring-slate-500/15",
};

export default function Badge({
  children,
  variant = "info",
  className = "",
}) {
  const variantClasses = VARIANT_CLASSES[variant] ?? VARIANT_CLASSES.info;

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider ring-1 ring-inset dark:bg-slate-800 dark:text-slate-200 dark:ring-slate-700 ${variantClasses} ${className}`}
    >
      {children}
    </span>
  );
}
