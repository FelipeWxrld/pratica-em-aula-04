/*
 * Exercise 01 — Button System
 *
 * Um único componente gera todas as variantes: as classes completas ficam
 * mapeadas em objetos de string (nunca montadas dinamicamente, ex.: `bg-${color}-500`).
 *
 * Especificação do Figma/Notion:
 *   altura 44px (h-11) · radius 12px (rounded-xl) · px ~20 (px-5) · 13–14px semibold
 */

const VARIANT_CLASSES = {
  primary:
    "bg-blue-600 text-white shadow-sm shadow-blue-600/20 hover:bg-blue-700 active:bg-blue-800",
  secondary:
    "bg-slate-100 text-slate-900 hover:bg-slate-200 active:bg-slate-300",
  danger: "bg-red-500 text-white hover:bg-red-600 active:bg-red-700",
  success:
    "bg-emerald-600 text-white shadow-sm shadow-emerald-600/20 hover:bg-emerald-700 active:bg-emerald-800",
  dark: "bg-slate-900 text-white hover:bg-slate-800 active:bg-slate-700",
  violet:
    "bg-violet-600 text-white shadow-sm shadow-violet-600/20 hover:bg-violet-700 active:bg-violet-800",
  outline:
    "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 active:bg-slate-100",
};

const SIZE_CLASSES = {
  sm: "h-9 px-3.5 text-xs gap-1.5",
  md: "h-11 px-5 text-[13px] gap-2",
  lg: "h-12 px-7 text-sm gap-2",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  type = "button",
  fullWidth = false,
  className = "",
}) {
  const variantClasses = VARIANT_CLASSES[variant] ?? VARIANT_CLASSES.primary;
  const sizeClasses = SIZE_CLASSES[size] ?? SIZE_CLASSES.md;
  const widthClasses = fullWidth ? "w-full" : "";

  return (
    <button
      type={type}
      disabled={disabled}
      className={`inline-flex items-center justify-center rounded-xl font-semibold tracking-tight transition-colors duration-150 outline-none focus-visible:ring-2 focus-visible:ring-blue-600/40 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${variantClasses} ${sizeClasses} ${widthClasses} ${className}`}
    >
      {children}
    </button>
  );
}
