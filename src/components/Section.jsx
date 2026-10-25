/*
 * Cabeçalho padrão de cada exercício — replica o frame do Figma:
 * pill "EXERCISE NN" + título + subtítulo + área de demonstração.
 */

export default function Section({
  number,
  title,
  subtitle,
  mutedPanel = false,
  children,
}) {
  return (
    <section id={`exercicio-${number}`} className="scroll-mt-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8 dark:border-slate-800 dark:bg-slate-900">
        <header className="mb-6 border-b border-slate-100 pb-6 dark:border-slate-800">
          <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-blue-700 ring-1 ring-inset ring-blue-600/10">
            Exercise {number}
          </span>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
            {title}
          </h2>
          <p className="mt-1.5 text-sm text-slate-500 dark:text-slate-400">
            {subtitle}
          </p>
        </header>

        <div
          className={
            mutedPanel
              ? "rounded-2xl bg-slate-100 p-5 sm:p-8 dark:bg-slate-950"
              : ""
          }
        >
          {children}
        </div>
      </div>
    </section>
  );
}
