import Section from "../components/Section.jsx";
import Avatar from "../components/ui/Avatar.jsx";
import Badge from "../components/ui/Badge.jsx";

/*
 * Exercise 02 — Badge + Avatar
 * Primitivas pequenas e independentes: variantes e tamanhos mapeados
 * para strings completas de classes (sem JSX duplicado).
 */
export default function Ex02BadgeAvatar() {
  return (
    <Section
      number="02"
      title="Badge + Avatar"
      subtitle="Small UI primitives with size, radius and semantic color"
      mutedPanel
    >
      <div className="flex flex-wrap items-center gap-4">
        <Avatar initials="EI" variant="blue" />
        <Avatar initials="UX" variant="violet" />
        <Avatar initials="JS" variant="emerald" />
      </div>

      <div className="mt-5 flex flex-wrap items-end gap-4">
        <Avatar initials="SM" size="sm" variant="rose" />
        <Avatar initials="MD" size="md" variant="amber" />
        <Avatar initials="LG" size="lg" variant="blue" />
      </div>

      <div className="mt-6 flex flex-wrap gap-2.5">
        <Badge variant="info">Front-end</Badge>
        <Badge variant="success">New</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="danger">Error</Badge>
        <Badge variant="neutral">Draft</Badge>
      </div>

      <p className="mt-6 text-xs text-slate-500 dark:text-slate-400">
        Avatar: 56×56 · pill badge · uppercase tracking
      </p>
    </Section>
  );
}
