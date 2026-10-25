/*
 * Exercise 09 — NavLink
 *
 * Link reutilizável da navbar com estado visual `active` (sem state:
 * a ativação vem da prop).
 */

export default function NavLink({
  href = "#",
  children,
  active = false,
  className = "",
}) {
  return (
    <a
      href={href}
      aria-current={active ? "page" : undefined}
      className={`rounded-lg px-3 py-2 text-sm transition-colors ${
        active
          ? "font-bold text-slate-900 dark:text-white"
          : "font-medium text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
      } ${className}`}
    >
      {children}
    </a>
  );
}
