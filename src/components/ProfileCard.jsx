/*
 * Exercise 03 — Profile Card
 *
 * Composição: Avatar + Badge + Button (reutiliza os exercícios 01 e 02).
 * Dois cards com dados diferentes são renderizados sem duplicar estrutura.
 *
 * Props: name, role, initials, category, description (+ layout, desafio).
 */

import Avatar from "./ui/Avatar.jsx";
import Badge from "./ui/Badge.jsx";
import Button from "./ui/Button.jsx";

export default function ProfileCard({
  name,
  role,
  initials,
  category,
  description,
  layout = "horizontal",
  avatarVariant = "blue",
}) {
  const isVertical = layout === "vertical";

  return (
    <article
      className={`w-full max-w-[420px] rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 ${
        isVertical ? "text-center" : ""
      }`}
    >
      <header
        className={`flex gap-4 ${isVertical ? "flex-col items-center" : "items-center"}`}
      >
        <Avatar initials={initials} variant={avatarVariant} size="lg" />

        <div className={`min-w-0 flex-1 ${isVertical ? "text-center" : ""}`}>
          <Badge variant="info">{category}</Badge>
          <h3 className="mt-2 text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            {name}
          </h3>
          <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">
            {role}
          </p>
        </div>
      </header>

      <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        {description}
      </p>

      <div className="mt-6 flex gap-3">
        <Button variant="primary" className="flex-1">
          Follow
        </Button>
        <Button variant="secondary" className="flex-1 dark:bg-slate-800 dark:text-slate-100">
          Profile
        </Button>
      </div>
    </article>
  );
}
