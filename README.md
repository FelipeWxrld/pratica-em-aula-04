# React + Tailwind — Board de Componentes Estáticos

Os 10 exercícios do board do Notion
([React + Tailwind — Board de Componentes Estáticos](https://deluxe-blue-bc1.notion.site/773dfca74d8d8341a03c016e0fb4127f))
implementados em React + JSX + Tailwind CSS v4, com referência visual no Figma
[“Tailwind Component Challenges — 10 Exercises”](https://www.figma.com/design/68JGQxPGbW0d2xGDEBxya9).

## Como rodar

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # build de produção em dist/
npm run preview  # serve o build
```

Stack: Vite 8 + React 19 + Tailwind CSS 4.3 (`@tailwindcss/vite`, sem config extra).

## Estrutura

```
src/
├── App.jsx                     # showcase responsivo com as 10 seções
├── index.css                   # @import "tailwindcss", @theme e @custom-variant dark
├── components/
│   ├── Section.jsx             # cabeçalho padrão de cada exercício
│   ├── ui/                     # primitivas reutilizáveis
│   │   ├── Button.jsx          # ex01 — variantes/sizes/disabled/fullWidth
│   │   ├── Avatar.jsx          # ex02 — 56×56, variants, sizes sm/md/lg
│   │   ├── Badge.jsx           # ex02 — pill uppercase, variantes semânticas
│   │   ├── InputField.jsx      # ex05 — label + error apenas por prop
│   │   ├── Alert.jsx           # ex08 — success/warning/error/info + actionLabel
│   │   └── NavLink.jsx         # ex09 — href/children/active
│   ├── ProfileCard.jsx         # ex03 — compõe Avatar + Badge + Button
│   ├── ProductCard.jsx         # ex04 — group-hover + aspect-* + hover:-translate-y-1
│   ├── KpiCard.jsx             # ex06 — reutilizado no ex10 (array + map)
│   ├── PricingCard.jsx         # ex07 — features[] + highlighted
│   ├── Navbar.jsx              # ex09 — Navbar responsiva + NavbarMobile estática
│   └── MiniDashboard.jsx       # ex10 — KpiGrid + Performance + Activity
└── exercises/Ex01 … Ex10       # composição/showcase de cada exercício
```

## Regras atendidas

- **Nenhum `useState`** — todo estado visual (erro, destaque, active, dark mode)
  vem por props ou por classes CSS.
- **Sem classes dinâmicas** — variantes são mapeadas para strings completas
  (`VARIANT_CLASSES[variant]`), nunca `bg-${color}-500`.
- **Um único componente por primitiva** — não existem `PrimaryButton.jsx`,
  `DangerButton.jsx` etc.
- **Reutilização real** — ProfileCard usa Avatar/Badge/Button; ProductCard usa
  Badge/Button; PricingCard usa Badge/Button; o dashboard usa KpiCard + Button.
- **Responsividade** — grids 1 → 2 → 3 colunas, navbar `hidden md:flex` /
  `md:hidden`, layouts que colapsam no mobile.
- **Acessibilidade** — `htmlFor/id`, `aria-invalid`/`aria-describedby`,
  `aria-current`, `focus-visible:ring`, `role="alert"`.

## Decisões de design

| Tema | Decisão |
| --- | --- |
| Ex03 Profile Card | A spec pede Avatar 64×64 no header flex; o Figma não desenha o avatar, mas a composição oficial é “Avatar + Badge + Button” → avatar incluído no header (`layout="horizontal"` e `"vertical"`). |
| Ex06 KPI Card | Conferido no Figma: o ícone fica **adjacente** ao label (`Revenue $`), em container quadrado arredondado — não à direita com `justify-between`. |
| Ex09 Navbar | Estrutura única com breakpoints reais (`hidden md:flex`, `md:hidden`) + composição estática `NavbarMobile` para a prévia mobile, como o Notion autoriza. |
| Ex10 Dark mode | `@custom-variant dark` ativado por `<div className="dark">` — mesma árvore renderizada nas versões clara e escura, sem state. |
| Produto (ex04) | A prop `image` aceita classes Tailwind da área visual (ex.: `bg-blue-600`) ou `url(...)` para imagem real; `imageLabel` mostra o texto tipográfico do Figma (“RUN”). |
