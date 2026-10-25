/*
 * Exercise 09 — Responsive Navbar
 *
 * Estratégia escolhida: uma única estrutura responsiva para o caso real +
 * uma segunda composição estática para a prévia mobile (permitido pela spec:
 * "você poderá criar DesktopNav / MobileNav ... ou resolver com a mesma
 * estrutura e utilities responsivas").
 *
 *   viewport < md:  logo + botão Menu   (links/CTA ocultos)
 *   viewport >= md: logo + links + CTA  (Menu oculto com md:hidden)
 *
 * Altura ~90px, radius 18px e border sutil (Figma).
 */

import Button from "./ui/Button.jsx";
import NavLink from "./ui/NavLink.jsx";

const DEFAULT_LINKS = [
  { href: "#", children: "Home", active: true },
  { href: "#", children: "Products" },
  { href: "#", children: "About" },
  { href: "#", children: "Contact" },
];

function Bar({ children, className = "" }) {
  return (
    <nav
      className={`flex h-[90px] items-center justify-between gap-4 rounded-[18px] border border-slate-200 bg-white px-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:px-7 ${className}`}
    >
      {children}
    </nav>
  );
}

function Brand({ brand }) {
  return (
    <a
      href="#"
      className="text-lg font-extrabold tracking-tight text-slate-900 dark:text-white"
    >
      {brand}
    </a>
  );
}

/* Versão desktop: links centralizados + CTA à direita. */
export default function Navbar({
  brand = "TITLE",
  links = DEFAULT_LINKS,
  ctaLabel = "Get started",
  className = "",
}) {
  return (
    <Bar className={className}>
      <Brand brand={brand} />

      <div className="hidden items-center gap-1 md:flex">
        {links.map((link) => (
          <NavLink key={link.children} {...link} />
        ))}
      </div>

      <div className="hidden md:block">
        <Button variant="primary">{ctaLabel}</Button>
      </div>

      <div className="md:hidden">
        <Button
          variant="secondary"
          size="sm"
          className="dark:bg-slate-800 dark:text-slate-100"
        >
          Menu
        </Button>
      </div>
    </Bar>
  );
}

/* Composição mobile estática: logo + botão Menu (sem JavaScript). */
export function NavbarMobile({ brand = "TITLE", className = "" }) {
  return (
    <Bar className={className}>
      <Brand brand={brand} />

      <Button
        variant="secondary"
        size="sm"
        className="dark:bg-slate-800 dark:text-slate-100"
      >
        Menu
      </Button>
    </Bar>
  );
}
