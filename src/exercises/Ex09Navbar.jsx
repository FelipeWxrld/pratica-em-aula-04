import Section from "../components/Section.jsx";
import Navbar, { NavbarMobile } from "../components/Navbar.jsx";

/*
 * Exercise 09 — Responsive Navbar
 *
 * Estratégia: uma única estrutura com utilities responsivas
 * (hidden / md:flex / md:hidden) resolve o caso real — redimensione a
 * janela para ver a navbar trocar de variante, sem JavaScript.
 *
 * A prévia mobile abaixo é a segunda composição estática sugerida pela
 * spec (DesktopNav/MobileNav), já que breakpoints respondem ao viewport
 * e não à largura do container.
 */
export default function Ex09Navbar() {
  return (
    <Section
      number="09"
      title="Responsive Navbar"
      subtitle="Logo + navigation + CTA + mobile-first thinking"
    >
      <Navbar />

      <div className="mt-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
          Mobile — composição estática (logo + botão Menu)
        </p>
        <div className="max-w-sm">
          <NavbarMobile />
        </div>
      </div>

      <p className="mt-6 text-xs text-slate-500 dark:text-slate-400">
        Challenge: create desktop + mobile variants with Tailwind breakpoints —
        sem nenhum useState. Redimensione a janela para ver{" "}
        <code className="font-semibold">hidden md:flex</code> e{" "}
        <code className="font-semibold">md:hidden</code> em ação.
      </p>
    </Section>
  );
}
