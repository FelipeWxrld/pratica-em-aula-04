/*
 * Exercise 02 — Avatar
 *
 * 56×56 circular com iniciais centralizadas (grid + place-items-center).
 * Três tamanhos (sm/md/lg) sem duplicar JSX: o tamanho é uma propriedade
 * mapeada para uma string de classes completa.
 */

const SIZE_CLASSES = {
  sm: "size-9 text-[11px]",
  md: "size-14 text-sm",
  lg: "size-16 text-base",
};

const VARIANT_CLASSES = {
  blue: "bg-blue-50 text-blue-600 ring-blue-500",
  violet: "bg-violet-50 text-violet-600 ring-violet-500",
  emerald: "bg-emerald-50 text-emerald-600 ring-emerald-500",
  amber: "bg-amber-50 text-amber-600 ring-amber-500",
  rose: "bg-rose-50 text-rose-600 ring-rose-500",
  slate: "bg-slate-100 text-slate-600 ring-slate-400",
};

export default function Avatar({
  initials,
  variant = "blue",
  size = "md",
  className = "",
}) {
  const sizeClasses = SIZE_CLASSES[size] ?? SIZE_CLASSES.md;
  const variantClasses = VARIANT_CLASSES[variant] ?? VARIANT_CLASSES.blue;

  return (
    <span
      role="img"
      aria-label={`Avatar de ${initials}`}
      className={`grid shrink-0 place-items-center rounded-full font-bold ring-2 ring-inset dark:bg-slate-800 ${sizeClasses} ${variantClasses} ${className}`}
    >
      {initials}
    </span>
  );
}
