import Section from "../components/Section.jsx";
import Button from "../components/ui/Button.jsx";

/*
 * Exercise 01 — Button System
 * Um único Button.jsx gera todas as variantes (primary, secondary, danger,
 * success, outline, dark, violet), tamanhos (sm/md/lg), disabled e fullWidth.
 */
export default function Ex01ButtonSystem() {
  return (
    <Section
      number="01"
      title="Button System"
      subtitle="Variants + hover/focus/disabled states"
      mutedPanel
    >
      <div className="flex flex-wrap gap-4">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="success">Success</Button>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-4">
        <Button variant="primary" size="sm">
          Small
        </Button>
        <Button variant="primary" size="md">
          Medium
        </Button>
        <Button variant="primary" size="lg">
          Large
        </Button>
        <Button variant="secondary" disabled>
          Disabled
        </Button>
      </div>

      <div className="mt-4 max-w-md">
        <Button variant="primary" fullWidth>
          Full width
        </Button>
      </div>

      <p className="mt-6 text-xs text-slate-500 dark:text-slate-400">
        44px height · 12px radius · px 20 · semibold · focus-visible ring
      </p>
    </Section>
  );
}
