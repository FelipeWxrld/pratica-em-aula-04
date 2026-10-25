import Ex01ButtonSystem from "./exercises/Ex01ButtonSystem.jsx";
import Ex02BadgeAvatar from "./exercises/Ex02BadgeAvatar.jsx";
import Ex03ProfileCard from "./exercises/Ex03ProfileCard.jsx";
import Ex04ProductCard from "./exercises/Ex04ProductCard.jsx";
import Ex05LoginForm from "./exercises/Ex05LoginForm.jsx";
import Ex06KpiCard from "./exercises/Ex06KpiCard.jsx";
import Ex07PricingCard from "./exercises/Ex07PricingCard.jsx";
import Ex08AlertShowcase from "./exercises/Ex08AlertShowcase.jsx";
import Ex09Navbar from "./exercises/Ex09Navbar.jsx";
import Ex10MiniDashboard from "./exercises/Ex10MiniDashboard.jsx";

const SECTIONS = [
  { number: "01", label: "Button" },
  { number: "02", label: "Badge + Avatar" },
  { number: "03", label: "Profile" },
  { number: "04", label: "Product" },
  { number: "05", label: "Login" },
  { number: "06", label: "KPI" },
  { number: "07", label: "Pricing" },
  { number: "08", label: "Alert" },
  { number: "09", label: "Navbar" },
  { number: "10", label: "Dashboard" },
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <header className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-blue-700 ring-1 ring-inset ring-blue-600/10">
            Aula 10 · React + Tailwind CSS
          </span>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Board de Componentes Estáticos
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-500 dark:text-slate-400">
            10 exercícios progressivos: JSX, componentização, props,
            reutilização, responsividade e Tailwind CSS — sem nenhum
            <code className="mx-1 rounded bg-slate-100 px-1.5 py-0.5 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-300">
              useState
            </code>
            .
          </p>

          <nav className="mt-6 flex flex-wrap gap-2">
            {SECTIONS.map((section) => (
              <a
                key={section.number}
                href={`#exercicio-${section.number}`}
                className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 transition-colors hover:border-blue-600 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
              >
                {section.number} · {section.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-10 sm:px-6 lg:px-8">
        <Ex01ButtonSystem />
        <Ex02BadgeAvatar />
        <Ex03ProfileCard />
        <Ex04ProductCard />
        <Ex05LoginForm />
        <Ex06KpiCard />
        <Ex07PricingCard />
        <Ex08AlertShowcase />
        <Ex09Navbar />
        <Ex10MiniDashboard />
      </main>

      <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 py-8 text-center text-xs text-slate-500 dark:text-slate-400">
          React + Tailwind — Board de Componentes Estáticos · referência visual:
          Figma “Tailwind Component Challenges — 10 Exercises”
        </div>
      </footer>
    </div>
  );
}
