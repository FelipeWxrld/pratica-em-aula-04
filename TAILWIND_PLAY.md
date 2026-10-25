# Tailwind Play — Board de Laboratórios

Documentação dos exercícios do board **“Tailwind Play — Board de Laboratórios”** (Notion).

- **Fonte:** <https://deluxe-blue-bc1.notion.site/63adfca74d8d8335879301b920bc0e94?v=46bdfca74d8d82a087d808c36ce9d353>
- **Página mãe:** [ Aula 10 ] Tailwind CSS 4.3 + React + Vite 8 — Guia Completo
- **Descrição do board:** Trilha prática com 3 exercícios progressivos no Tailwind Play: utilities, responsividade/estados e theme/dark mode/component layer.
- **Ambiente:** Tailwind Play (<https://play.tailwindcss.com>) — todos os exercícios são feitos no navegador, colando CSS no painel CSS e HTML no painel HTML.
- **Figma (referências visuais):** <https://www.figma.com/design/Zzehx6K2rvkvv8ej92MUDo>
- **Total:** 9 exercícios (8 laboratórios guiados + 1 checkpoint). Status no board: todos “A fazer”.

## Índice

| # | Exercício | Fase | Tipo |
|---|-----------|------|------|
| 01 | Card de Perfil: entendendo Utility-First | 1 · Utilities e composição | Laboratório guiado |
| 02 | Product Grid: estados e responsividade | 2 · Estados e responsividade | Laboratório guiado |
| 03 | Theme Lab: tokens, dark mode e @layer | 3 · Theme e dark mode | Laboratório guiado |
| 04 | Login Form: focus e acessibilidade | 2 · Estados e responsividade | Laboratório guiado |
| 05 | Pricing Cards: composição e hierarquia | 1 · Utilities e composição | Laboratório guiado |
| 06 | Settings Toggle: peer e checked | 2 · Estados e responsividade | Laboratório guiado |
| 07 | FAQ Accordion: details e open | 2 · Estados e responsividade | Laboratório guiado |
| 08 | Dashboard Summary: Grid e composição | 2 · Estados e responsividade | Checkpoint |
| 09 | Theme Toggle: botão Light / Dark | 3 · Theme e dark mode | Laboratório guiado |

**Fluxo padrão de cada laboratório:** copie o HTML sem classes → tente estilizar sozinho → compare com a referência (Figma) → altere as classes uma a uma para entender cada efeito → responda ao checkpoint.

---

## 01 — Card de Perfil: entendendo Utility-First

- **Fase:** 1 · Utilities e composição · **Ordem:** 1 · **Tipo:** Laboratório guiado
- **Conceitos:** Utility-first, Spacing, Sizing, Typography, Colors, Borders, Shadows, Flexbox
- **Figma:** <https://www.figma.com/design/Zzehx6K2rvkvv8ej92MUDo?node-id=1-4>

**Objetivo:** construir um Profile Card no Tailwind Play começando por HTML puro. Primeiro estilize sozinho; depois compare com a solução de referência e altere as classes para entender o efeito de cada utility.

**Referência visual:** use o Figma como resultado esperado. Não copie propriedades automaticamente: observe layout, hierarquia, espaçamentos, cores, bordas e proporções e traduza para utilities.

### 1. CSS inicial

```css
@import "tailwindcss";
```

### 2. HTML base — SEM ESTILIZAÇÃO

```html
<main>
  <article>
    <div>
      <div>INICIAIS</div>

      <div>
        <span>Front-end</span>

        <h1>SEU NOME</h1>

        <p>FullStack Developer · React · Node • PHP • Angular • Laravel</p>
      </div>
    </div>

    <p>
      Estudando como pequenas utilities podem ser combinadas para construir
      uma interface completa sem criar uma classe CSS para cada elemento.
    </p>

    <div>
      <button>Seguir</button>
      <button>Perfil</button>
    </div>
  </article>
</main>
```

### 3. Tente implementar

- página ocupando toda a viewport;
- card centralizado;
- largura máxima;
- background neutro;
- avatar circular;
- header com Flexbox;
- badge em formato pill;
- hierarquia tipográfica;
- dois botões com tratamentos diferentes;
- padding, gap, border, radius e shadow.

**Pesquise primeiro:**

```text
min-h-screen
mx-auto
max-w-*
p-*
mt-*
gap-*
flex
items-center
grid
place-items-center
size-*
rounded-*
rounded-full
border
shadow-*
bg-*
text-*
font-*
tracking-*
leading-*
flex-1
```

### 4. Agora modifique a solução

Faça uma alteração por vez:

- [ ] `p-6` → `p-10`
- [ ] `max-w-md` → `max-w-xl`
- [ ] `rounded-3xl` → `rounded-none`
- [ ] `shadow-xl` → `shadow-none`
- [ ] `gap-4` → `gap-8`
- [ ] `size-20` → `size-28`
- [ ] `bg-blue-600` → outra cor
- [ ] `flex` → `flex-col`
- [ ] remova `flex-1` do botão Seguir
- [ ] troque `tracking-wider` por `tracking-normal`

### 5. Explique as classes

Escolha pelo menos 8 classes da solução e escreva o que cada uma faz.

### Checkpoint

1. O que é utility-first?
2. Qual a diferença entre padding, margin e gap?
3. O que `max-w-md` controla?
4. Por que `size-20` substitui width e height?
5. O que `flex-1` faz no botão?

### Documentação oficial

- [Styling with utility classes](https://tailwindcss.com/docs/styling-with-utility-classes)
- [Padding](https://tailwindcss.com/docs/padding)
- [Margin](https://tailwindcss.com/docs/margin)
- [Width](https://tailwindcss.com/docs/width)
- [Flex](https://tailwindcss.com/docs/flex)
- [Border Radius](https://tailwindcss.com/docs/border-radius)
- [Box Shadow](https://tailwindcss.com/docs/box-shadow)

---

## 02 — Product Grid: estados e responsividade

- **Fase:** 2 · Estados e responsividade · **Ordem:** 2 · **Tipo:** Laboratório guiado
- **Conceitos:** Grid, Responsive, Hover, Focus, Active, Disabled, Flexbox, Utility-first
- **Figma:** <https://www.figma.com/design/Zzehx6K2rvkvv8ej92MUDo?node-id=1-25>

**Objetivo:** construir um Product Grid responsivo começando por HTML puro. Primeiro aplique Tailwind sozinho; depois compare com a resposta completa.

**Referência visual:** a referência mostra o comportamento visual esperado dos três cards. A implementação deve chegar a uma composição equivalente usando Grid, breakpoints e variantes.

### 1. CSS inicial

```css
@import "tailwindcss";
```

### 2. HTML base — SEM ESTILIZAÇÃO

```html
<main>
  <section>
    <header>
      <span>Tailwind Play</span>
      <h1>Product Grid Responsivo</h1>
      <p>
        Pratique breakpoints, Grid, hover, focus, active e disabled.
      </p>
    </header>

    <div>
      <article>
        <div>01</div>
        <div>
          <span>Starter</span>
          <h2>UI Foundations</h2>
          <p>Layout, spacing, tipografia e cores.</p>
          <button>Escolher</button>
        </div>
      </article>

      <article>
        <div>02</div>
        <div>
          <span>Intermediate</span>
          <h2>Responsive UI</h2>
          <p>Breakpoints e variantes condicionais.</p>
          <button>Escolher</button>
        </div>
      </article>

      <article>
        <div>03</div>
        <div>
          <span>Locked</span>
          <h2>Advanced UI</h2>
          <p>Este plano ainda está indisponível.</p>
          <button disabled>Indisponível</button>
        </div>
      </article>
    </div>
  </section>
</main>
```

### 3. Antes de olhar a resposta

Implemente:

```text
mobile → 1 coluna
sm     → 2 colunas
lg     → 3 colunas
```

Adicione também:

- background escuro;
- cards com border e radius;
- hover no card;
- focus no botão;
- active no botão;
- disabled no terceiro;
- animação na área visual usando `group-hover`.

**Pesquise:**

```text
grid
grid-cols-*
sm:
lg:
group
group-hover:
hover:
focus-visible:
active:
disabled:
transition
duration-*
scale-*
translate-y-*
aspect-*
overflow-hidden
```

### 4. Modifique a solução

- [ ] remova `sm:grid-cols-2`;
- [ ] troque `lg:grid-cols-3` por `lg:grid-cols-4`;
- [ ] remova `group`;
- [ ] troque `group-hover:scale-105` por `group-hover:rotate-2`;
- [ ] remova `transition`;
- [ ] mude `active:scale-95` para `active:scale-90`;
- [ ] remova `disabled:opacity-50`;
- [ ] crie um quarto card.

### 5. Explique

Escolha 10 classes relacionadas a responsividade ou estados e explique cada uma.

### Documentação oficial

- [Responsive Design](https://tailwindcss.com/docs/responsive-design)
- [Grid Template Columns](https://tailwindcss.com/docs/grid-template-columns)
- [Hover, Focus & Other States](https://tailwindcss.com/docs/hover-focus-and-other-states)
- [Transition Property](https://tailwindcss.com/docs/transition-property)
- [Scale](https://tailwindcss.com/docs/scale)

---

## 03 — Theme Lab: tokens, dark mode e @layer

- **Fase:** 3 · Theme e dark mode · **Ordem:** 3 · **Tipo:** Laboratório guiado
- **Conceitos:** Dark mode, @theme, @custom-variant, @layer, @apply, Design tokens, Colors, Utility-first
- **Figma:** <https://www.figma.com/design/Zzehx6K2rvkvv8ej92MUDo?node-id=1-59>

**Objetivo:** aprender design tokens, `@theme`, dark mode, `@custom-variant`, `@layer` e `@apply`.

**Referência visual:** o mesmo padrão visual em Light e Dark, usando tokens semânticos (`background`, `surface`, `foreground`, `muted`, `chestnut`).

### 1. CSS fornecido

```css
@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));

@theme {
  --color-primary: #2563eb;

  --color-background: var(--background);
  --color-surface: var(--surface);
  --color-foreground: var(--foreground);
  --color-muted: var(--muted);
  --color-border: var(--border);

  --color-chestnut: var(--chestnut);
}

:root {
  --background: #ffffff;
  --surface: #f4f4f5;
  --foreground: #18181b;
  --muted: #71717a;
  --border: #e4e4e7;

  --chestnut: #973f29;
}

.dark {
  --background: #15155a;
  --surface: #18181b;
  --foreground: #fafafa;
  --muted: #a1a1aa;
  --border: #27272a;

  --chestnut: #d9785f;
}

@layer components {
  .custom-colors {
    @apply bg-chestnut p-2 text-center text-2xl text-white;
  }
}
```

### 2. HTML base — SEM ESTILIZAÇÃO

```html
<main>
  <header>
    <span>Theme Lab</span>
    <h1>Tailwind Design Tokens</h1>
    <p>
      O mesmo componente deverá funcionar com tokens do tema claro e escuro.
    </p>
  </header>

  <div>
    <section>
      <span>Light</span>
      <h2>Tema claro</h2>
      <p>Este bloco deve utilizar os valores definidos em :root.</p>

      <div>
        <strong>Surface token</strong>
        <p>Use background, surface, muted e border.</p>
      </div>

      <div>Cor Chestnut customizada</div>

      <button>Primary Button</button>
    </section>

    <section class="dark">
      <span>Dark</span>
      <h2>Tema escuro</h2>
      <p>Este bloco deve utilizar os valores definidos em .dark.</p>

      <div>
        <strong>Surface token</strong>
        <p>Observe como os tokens mudam mantendo as mesmas utilities.</p>
      </div>

      <div>Cor Chestnut customizada</div>

      <button>Primary Button</button>

      <p>Use também pelo menos uma classe com o prefixo dark:.</p>
    </section>
  </div>
</main>
```

### 3. Antes de olhar a resposta

Tente utilizar:

```text
bg-background
bg-surface
text-foreground
text-muted
border-border
bg-primary
text-primary
bg-chestnut
dark:
grid
lg:grid-cols-2
rounded-*
shadow-*
```

### 4. Modifique os tokens e classes

- [ ] altere `--color-primary`;
- [ ] altere o chestnut somente em `.dark`;
- [ ] remova `class="dark"`;
- [ ] crie `--color-success`;
- [ ] use `bg-success`;
- [ ] crie outra classe em `@layer components`;
- [ ] aplique `@apply`;
- [ ] troque `lg:grid-cols-2` por outra estrutura.

### Checkpoint

1. Qual a diferença entre `:root`, `.dark` e `@theme`?
2. O que `--color-primary` cria?
3. Por que `background`/`surface` são nomes semânticos?
4. O que `@custom-variant` faz?
5. O que `@layer components` organiza?
6. O que `@apply` faz?

### Documentação oficial

- [Theme Variables](https://tailwindcss.com/docs/theme)
- [Dark Mode](https://tailwindcss.com/docs/dark-mode)
- [Functions and Directives](https://tailwindcss.com/docs/functions-and-directives)
- [Adding Custom Styles](https://tailwindcss.com/docs/adding-custom-styles)

---

## 04 — Login Form: focus e acessibilidade

- **Fase:** 2 · Estados e responsividade · **Ordem:** 4 · **Tipo:** Laboratório guiado
- **Conceitos:** Utility-first, Spacing, Sizing, Typography, Colors, Borders, Focus, Responsive
- **Figma:** <https://www.figma.com/design/Zzehx6K2rvkvv8ej92MUDo?node-id=1-90>

**Objetivo:** transformar um formulário HTML sem estilo em uma interface de login clara, acessível e responsiva com Tailwind CSS.

### 1. CSS inicial

```css
@import "tailwindcss";
```

### 2. HTML base — SEM ESTILIZAÇÃO

```html
<main>
  <section>
    <h1>Welcome back</h1>
    <p>Entre na sua conta para continuar.</p>

    <form>
      <div>
        <label for="email">E-mail</label>
        <input id="email" type="email" placeholder="you@example.com" />
      </div>

      <div>
        <label for="password">Senha</label>
        <input id="password" type="password" placeholder="••••••••" />
      </div>

      <div>
        <label>
          <input type="checkbox" checked />
          Lembrar de mim
        </label>

        <a href="#">Esqueci minha senha</a>
      </div>

      <button type="submit">Sign In</button>
    </form>
  </section>
</main>
```

### 3. Tente criar

- página centralizada;
- card branco;
- título e subtítulo com hierarquia;
- labels visíveis;
- inputs de mesma altura;
- borda neutra;
- focus visível;
- checkbox;
- link secundário;
- botão ocupando toda a largura.

**Pesquise:**

```text
min-h-screen
grid
place-items-center
max-w-*
w-full
space-y-*
rounded-*
border
focus:
focus-visible:
ring-*
placeholder:
accent-*
text-*
bg-*
```

### 4. Modifique a solução

- [ ] altere `max-w-md`;
- [ ] remova `space-y-4`;
- [ ] troque `h-12` por `h-14`;
- [ ] remova `focus:ring-4`;
- [ ] mude `accent-blue-600`;
- [ ] altere `rounded-xl`;
- [ ] teste navegação somente com Tab.

### Checkpoint

1. Qual a diferença entre `focus:` e `focus-visible:`?
2. Para que serve `outline-none`?
3. O que `accent-*` altera?
4. Por que labels são importantes?
5. Como `space-y-4` funciona?

### Documentação oficial

- [Hover, Focus & Other States](https://tailwindcss.com/docs/hover-focus-and-other-states)
- [Outline](https://tailwindcss.com/docs/outline-style)
- [Accent Color](https://tailwindcss.com/docs/accent-color)
- [Colors](https://tailwindcss.com/docs/colors)

---

## 05 — Pricing Cards: composição e hierarquia

- **Fase:** 1 · Utilities e composição · **Ordem:** 5 · **Tipo:** Laboratório guiado
- **Conceitos:** Utility-first, Spacing, Typography, Colors, Borders, Shadows, Flexbox, Grid, Responsive
- **Figma:** <https://www.figma.com/design/Zzehx6K2rvkvv8ej92MUDo?node-id=1-112>

**Objetivo:** transformar três blocos de preço em cards comparáveis e responsivos.

### 1. CSS inicial

```css
@import "tailwindcss";
```

### 2. HTML base — SEM ESTILIZAÇÃO

```html
<main>
  <section>
    <header>
      <span>Pricing</span>
      <h1>Escolha o plano ideal</h1>
      <p>Compare recursos e preços.</p>
    </header>

    <div>
      <article>
        <h2>Starter</h2>
        <strong>$0</strong>
        <span>/ month</span>

        <ul>
          <li>Projects</li>
          <li>Basic support</li>
        </ul>

        <button>Choose</button>
      </article>

      <article>
        <span>Popular</span>
        <h2>Pro</h2>
        <strong>$29</strong>
        <span>/ month</span>

        <ul>
          <li>Projects</li>
          <li>Analytics</li>
          <li>Priority support</li>
        </ul>

        <button>Choose</button>
      </article>

      <article>
        <h2>Team</h2>
        <strong>$79</strong>
        <span>/ month</span>

        <ul>
          <li>Projects</li>
          <li>Analytics</li>
          <li>Team access</li>
        </ul>

        <button>Choose</button>
      </article>
    </div>
  </section>
</main>
```

### 3. Antes de olhar a resposta

Construa:

- título centralizado;
- três cards;
- layout 1 coluna no mobile e 3 no desktop;
- plano Pro em destaque;
- preço com hierarquia;
- lista de benefícios;
- CTA de largura total.

**Pesquise:**

```text
grid
lg:grid-cols-3
max-w-*
gap-*
rounded-*
border
shadow-*
ring-*
translate-y-*
bg-*
text-*
space-y-*
w-full
```

### 4. Modifique a solução

- [ ] remova `lg:-translate-y-2`;
- [ ] troque `border-2` por `ring-4`;
- [ ] altere a paleta do plano Pro;
- [ ] mude `lg:grid-cols-3` para `md:grid-cols-3`;
- [ ] troque `text-4xl` do preço;
- [ ] adicione hover nos três cards.

### Documentação oficial

- [Grid Template Columns](https://tailwindcss.com/docs/grid-template-columns)
- [Border Width](https://tailwindcss.com/docs/border-width)
- [Box Shadow](https://tailwindcss.com/docs/box-shadow)
- [Translate](https://tailwindcss.com/docs/translate)

---

## 06 — Settings Toggle: peer e checked

- **Fase:** 2 · Estados e responsividade · **Ordem:** 6 · **Tipo:** Laboratório guiado
- **Conceitos:** Utility-first, Flexbox, Borders, Colors, Focus, Responsive
- **Figma:** <https://www.figma.com/design/Zzehx6K2rvkvv8ej92MUDo?node-id=1-145>

**Objetivo:** estilizar controles de configuração e compreender a variante `peer` para reagir ao estado de um checkbox.

### 1. CSS inicial

```css
@import "tailwindcss";
```

### 2. HTML base — SEM ESTILIZAÇÃO

```html
<main>
  <section>
    <h1>Notification Settings</h1>
    <p>Controle suas preferências de comunicação.</p>

    <label>
      <div>
        <strong>Email notifications</strong>
        <span>Receive product updates</span>
      </div>

      <input type="checkbox" checked />
      <span></span>
    </label>

    <label>
      <div>
        <strong>Marketing</strong>
        <span>Receive campaigns</span>
      </div>

      <input type="checkbox" />
      <span></span>
    </label>
  </section>
</main>
```

### 3. Antes de olhar a resposta

**Pesquise:**

```text
peer
peer-checked:
sr-only
relative
absolute
translate-x-*
rounded-full
cursor-pointer
transition
```

### 4. Modifique a solução

- [ ] remova `peer`;
- [ ] altere `peer-checked:bg-blue-600`;
- [ ] troque `translate-x-5`;
- [ ] remova `sr-only`;
- [ ] altere o tamanho do switch;
- [ ] crie uma terceira preferência.

### Checkpoint

1. Por que o input usa `peer`?
2. O que `peer-checked:` faz?
3. Por que usamos `sr-only`?
4. Por que o knob utiliza `absolute`?
5. Como o `translate-x-5` cria o movimento?

### Documentação oficial

- [Hover, Focus & Other States](https://tailwindcss.com/docs/hover-focus-and-other-states)
- [Screen Readers](https://tailwindcss.com/docs/screen-readers)
- [Position](https://tailwindcss.com/docs/position)
- [Translate](https://tailwindcss.com/docs/translate)

---

## 07 — FAQ Accordion: details e open

- **Fase:** 2 · Estados e responsividade · **Ordem:** 7 · **Tipo:** Laboratório guiado
- **Conceitos:** Utility-first, Spacing, Typography, Borders, Colors
- **Figma:** <https://www.figma.com/design/Zzehx6K2rvkvv8ej92MUDo?node-id=1-166>

**Objetivo:** criar um FAQ com o HTML nativo `<details>` e estilizar o estado aberto com a variante `open:`.

### 1. CSS inicial

```css
@import "tailwindcss";
```

### 2. HTML base — SEM ESTILIZAÇÃO

```html
<main>
  <section>
    <h1>Frequently Asked Questions</h1>

    <details open>
      <summary>O que é utility-first?</summary>
      <p>
        É uma abordagem baseada na composição de pequenas utilities.
      </p>
    </details>

    <details>
      <summary>Tailwind substitui CSS?</summary>
      <p>
        Tailwind continua sendo CSS, mas oferece utilities e ferramentas.
      </p>
    </details>

    <details>
      <summary>Como funciona dark mode?</summary>
      <p>
        Variantes permitem alterar estilos quando um tema dark está ativo.
      </p>
    </details>
  </section>
</main>
```

### 3. Antes de olhar a resposta

**Pesquise:**

```text
details
summary
open:
marker:
cursor-pointer
rounded-*
border
bg-*
text-*
```

### 4. Modifique a solução

- [ ] altere `open:bg-blue-50`;
- [ ] remova `open:border-blue-500`;
- [ ] teste sem `marker:hidden`;
- [ ] troque `space-y-4`;
- [ ] crie uma quarta pergunta;
- [ ] adicione hover no `summary`.

### Checkpoint

1. O que o atributo HTML `open` faz?
2. Como a variante `open:` funciona?
3. Para que serve `marker:hidden`?
4. Por que usar `details`/`summary` é melhor que simular tudo com divs?

### Documentação oficial

- [Hover, Focus & Other States](https://tailwindcss.com/docs/hover-focus-and-other-states)
- [List Style Type](https://tailwindcss.com/docs/list-style-type)
- [Border Color](https://tailwindcss.com/docs/border-color)

---

## 08 — Dashboard Summary: Grid e composição (Checkpoint)

- **Fase:** 2 · Estados e responsividade · **Ordem:** 8 · **Tipo:** Checkpoint
- **Conceitos:** Utility-first, Grid, Flexbox, Responsive, Spacing, Sizing, Typography, Colors, Borders
- **Figma:** <https://www.figma.com/design/Zzehx6K2rvkvv8ej92MUDo?node-id=1-184>

**Objetivo:** combinar os conceitos anteriores em um pequeno dashboard estático e responsivo.

### 1. CSS inicial

```css
@import "tailwindcss";
```

### 2. HTML base — SEM ESTILIZAÇÃO

```html
<main>
  <section>
    <header>
      <h1>Overview</h1>
      <button>Export</button>
    </header>

    <div>
      <article>
        <span>Revenue</span>
        <strong>128k</strong>
      </article>

      <article>
        <span>Orders</span>
        <strong>1,842</strong>
      </article>

      <article>
        <span>Conversion</span>
        <strong>4.7%</strong>
      </article>
    </div>

    <div>
      <section>
        <h2>Performance</h2>

        <div>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </section>

      <aside>
        <h2>Activity</h2>
        <p>New order</p>
        <p>Payment approved</p>
        <p>User created</p>
      </aside>
    </div>
  </section>
</main>
```

### 3. Antes de olhar a resposta

Implemente:

- container central;
- header com Flexbox;
- 3 KPI cards;
- Grid responsivo;
- Performance maior que Activity;
- barras feitas com `span`;
- cards com borda/radius;
- botão Export destacado.

**Pesquise:**

```text
grid
sm:grid-cols-3
lg:grid-cols-[2fr_1fr]
flex
justify-between
items-center
gap-*
h-*
w-*
rounded-*
border
bg-*
```

### 4. Modifique a solução

- [ ] troque `sm:grid-cols-3`;
- [ ] altere `lg:grid-cols-[2fr_1fr]`;
- [ ] mude alturas das barras;
- [ ] remova `flex-1` das barras;
- [ ] troque a cor da última barra;
- [ ] altere `max-w-6xl`;
- [ ] crie um quarto KPI.

### Checkpoint final

1. Onde Grid foi melhor que Flexbox?
2. Onde Flexbox foi melhor que Grid?
3. O que `lg:grid-cols-[2fr_1fr]` significa?
4. Como `flex-1` afeta as barras?
5. Quais utilities você mais reutilizou durante os 8 exercícios?

### Documentação oficial

- [Grid Template Columns](https://tailwindcss.com/docs/grid-template-columns)
- [Flex](https://tailwindcss.com/docs/flex)
- [Responsive Design](https://tailwindcss.com/docs/responsive-design)
- [Height](https://tailwindcss.com/docs/height)
- [Width](https://tailwindcss.com/docs/width)

---

## 09 — Theme Toggle: botão Light / Dark

- **Fase:** 3 · Theme e dark mode · **Ordem:** 9 · **Tipo:** Laboratório guiado
- **Conceitos:** Utility-first, Dark mode, @theme, @custom-variant, Design tokens, Colors, Hover, Focus
- **Figma:** <https://www.figma.com/design/Zzehx6K2rvkvv8ej92MUDo?node-id=5-2>

**Objetivo:** criar uma interface com um único botão capaz de alternar entre Light e Dark Mode, mantendo os mesmos componentes e utilities semânticas.

> O componente não precisa trocar todas as classes quando o tema muda. O botão apenas adiciona/remove a classe `.dark`, enquanto os tokens passam a fornecer valores diferentes.

### 1. CSS inicial

```css
@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));

@theme {
  --color-primary: #2563eb;

  --color-background: var(--background);
  --color-surface: var(--surface);
  --color-foreground: var(--foreground);
  --color-muted: var(--muted);
  --color-border: var(--border);

  --color-chestnut: var(--chestnut);
}

:root {
  --background: #ffffff;
  --surface: #f4f4f5;
  --foreground: #18181b;
  --muted: #71717a;
  --border: #e4e4e7;
  --chestnut: #973f29;
}

.dark {
  --background: #15155a;
  --surface: #18181b;
  --foreground: #fafafa;
  --muted: #a1a1aa;
  --border: #27272a;
  --chestnut: #d9785f;
}

@layer components {
  .custom-colors {
    @apply bg-chestnut p-2 text-center text-white;
  }
}
```

### 2. HTML base — SEM ESTILIZAÇÃO

O comportamento do botão já está conectado, mas ainda não existe nenhuma classe Tailwind.

```html
<main>
  <section>
    <header>
      <div>
        <span>Theme Lab</span>
        <h1>Light & Dark Mode</h1>
      </div>

      <button
        type="button"
        onclick="document.documentElement.classList.toggle('dark')"
      >
        Alternar tema
      </button>
    </header>

    <p>
      O mesmo componente deverá mudar de aparência sem trocar sua estrutura HTML.
    </p>

    <div>
      <strong>Surface token</strong>
      <p>
        Background e texto devem responder ao tema.
      </p>
    </div>

    <div>
      Chestnut
    </div>

    <button>
      Primary Button
    </button>
  </section>
</main>
```

### 3. Entenda o comando do botão

```html
onclick="document.documentElement.classList.toggle('dark')"
```

O que acontece:

```text
document
↓
acessa a página

documentElement
↓
representa a tag <html>

classList
↓
acessa as classes do elemento

toggle('dark')
↓
se .dark não existe → adiciona
se .dark existe → remove
```

Portanto:

```text
<html>
↓ clique
<html class="dark">
↓ clique
<html>
```

### 4. Antes de olhar a resposta

Tente fazer o componente:

- ocupar toda a viewport;
- centralizar um card;
- utilizar `bg-background`;
- utilizar `text-foreground`;
- utilizar `bg-surface`;
- utilizar `text-muted`;
- utilizar `border-border`;
- mostrar um botão de tema no header;
- mudar o texto do botão entre Dark mode e Light mode;
- criar transição suave de cores;
- alterar a cor Chestnut automaticamente.

**Pesquise:**

```text
bg-background
bg-surface
text-foreground
text-muted
border-border
transition-colors
duration-*
dark:
hidden
dark:hidden
dark:inline
hover:
focus-visible:
```

### 5. Como o texto do botão muda

O botão contém dois textos:

```html
<span class="dark:hidden">
  ☾ Dark mode
</span>

<span class="hidden dark:inline">
  ☀ Light mode
</span>
```

Light Mode:

```text
dark:hidden
→ ainda não está ativo
→ "Dark mode" aparece

hidden dark:inline
→ hidden está ativo
→ "Light mode" não aparece
```

Dark Mode (quando `.dark` é adicionada):

```text
dark:hidden
→ esconde "Dark mode"

dark:inline
→ mostra "Light mode"
```

### 6. Experimentos obrigatórios

- [ ] Clique várias vezes no botão e acompanhe a classe `.dark`.
- [ ] Remova `transition-colors`.
- [ ] Troque `duration-500` por `duration-1000`.
- [ ] Remova `dark:hidden`.
- [ ] Remova `hidden dark:inline`.
- [ ] Troque o botão dark amarelo por outra cor.
- [ ] Modifique o valor de `--background` dentro de `.dark`.
- [ ] Modifique `--chestnut` somente no Dark Mode.
- [ ] Adicione uma nova área usando `bg-surface`.
- [ ] Adicione uma utility explícita `dark:` em algum elemento.

### 7. Challenge

Faça o botão ficar no formato de toggle switch, mas mantenha o mesmo:

```javascript
document.documentElement.classList.toggle('dark')
```

Depois crie três elementos que respondam ao tema:

1. Card
2. Badge
3. Alert

Todos deverão utilizar tokens semânticos, evitando repetir cores Light/Dark manualmente.

### Checkpoint

Explique:

1. Onde a classe `.dark` está sendo adicionada?
2. O que `classList.toggle()` faz?
3. Por que `bg-background` muda sem receber `dark:bg-...`?
4. Qual a diferença entre mudar tokens e utilizar `dark:` diretamente?
5. O que `dark:hidden` faz?
6. Como o botão sabe qual texto mostrar?
7. Por que `transition-colors` melhora a experiência?

### Documentação oficial

- [Dark Mode](https://tailwindcss.com/docs/dark-mode)
- [Theme Variables](https://tailwindcss.com/docs/theme)
- [Hover, Focus & Other States](https://tailwindcss.com/docs/hover-focus-and-other-states)
- [Display](https://tailwindcss.com/docs/display)
- [Transition Property](https://tailwindcss.com/docs/transition-property)
- [Transition Duration](https://tailwindcss.com/docs/transition-duration)

---

## Trilha sugerida

1. **Utilities e composição** — 01 (Card de Perfil) e 05 (Pricing Cards).
2. **Estados e responsividade** — 02 (Product Grid), 04 (Login Form), 06 (Settings Toggle), 07 (FAQ Accordion) e 08 (Dashboard Summary, checkpoint).
3. **Theme e dark mode** — 03 (Theme Lab) e 09 (Theme Toggle).

## Observações

- As páginas do board **não incluem o código da solução de referência**: a comparação deve ser feita pela referência visual do Figma e pelos experimentos propostos em cada exercício.
- Todos os exercícios usam apenas `@import "tailwindcss";` como base (Tailwind CSS 4.x), exceto 03 e 09, que já trazem `@theme`, `@custom-variant` e `@layer`.
