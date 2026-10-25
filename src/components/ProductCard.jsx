/*
 * Exercise 04 — Product Card
 *
 * Área visual no topo com overflow-hidden + aspect-* e zoom controlado
 * pelo grupo (`group` / `group-hover:*`) e elevação do card no hover.
 *
 * Props: name, category, description, price, badge, image, imageLabel
 *   - image: classes Tailwind da área visual (ex.: "bg-blue-600") ou
 *     "url(...)" para uma imagem real via estilo inline.
 */

import Badge from "./ui/Badge.jsx";
import Button from "./ui/Button.jsx";

const isUrl = (value = "") => value.includes("url(") || /^https?:\/\//.test(value);

export default function ProductCard({
  name,
  category,
  description,
  price,
  badge,
  image = "bg-blue-600",
  imageLabel,
}) {
  const imageStyle = isUrl(image) ? { backgroundImage: image } : undefined;
  const imageClasses = isUrl(image)
    ? "bg-cover bg-center"
    : image;

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
      <div
        style={imageStyle}
        className={`relative flex aspect-[4/3] items-center justify-center overflow-hidden ${imageClasses}`}
      >
        {imageLabel ? (
          <span className="text-5xl font-extrabold tracking-tight text-white transition-transform duration-300 group-hover:scale-110">
            {imageLabel}
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
          {category}
        </p>

        <div className="mt-1.5 flex items-center gap-2">
          <h3 className="text-base font-bold tracking-tight text-slate-900 dark:text-white">
            {name}
          </h3>
          {badge ? <Badge variant="success">{badge}</Badge> : null}
        </div>

        <p className="mt-1.5 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
          {description}
        </p>

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-100 pt-4 dark:border-slate-800">
          <span className="text-lg font-extrabold tracking-tight text-slate-900 dark:text-white">
            {price}
          </span>
          <Button variant="dark" size="sm">
            Buy
          </Button>
        </div>
      </div>
    </article>
  );
}
