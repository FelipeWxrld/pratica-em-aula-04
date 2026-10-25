/*
 * Exercise 08 — Alert / Notification
 *
 * Um único componente cobre todas as variantes semânticas:
 * o mapa de variantes guarda as classes completas + o ícone correspondente.
 *
 * Props: variant, title, children (mensagem), actionLabel (botão opcional).
 */

import Button from "./Button.jsx";

function IconSuccess(props) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0l-3.5-3.5a1 1 0 1 1 1.4-1.4l2.8 2.8 6.8-6.8a1 1 0 0 1 1.4 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function IconWarning(props) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M8.5 3.5A1.5 1.5 0 0 1 10 2.25h.01a1.5 1.5 0 0 1 1.49 1.26l.62 3.4a1 1 0 0 0 .99.84h3.14a1 1 0 0 1 .79 1.62l-2.5 3.2a1 1 0 0 0-.16.95l.94 2.83a1.5 1.5 0 0 1-1.43 1.99H6.12a1.5 1.5 0 0 1-1.43-1.99l.94-2.83a1 1 0 0 0-.16-.95l-2.5-3.2a1 1 0 0 1 .79-16.2h.01Zm-.6 6.25 1.86 5.57h.01l1.86-5.57H7.9Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function IconError(props) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.53-9.77a.75.75 0 0 0-1.06-1.06L10 8.94 7.53 6.47a.75.75 0 0 0-1.06 1.06L8.94 10l-2.47 2.47a.75.75 0 1 0 1.06 1.06L10 11.06l2.47 2.47a.75.75 0 0 0 1.06-1.06L11.06 10l2.47-1.77Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function IconInfo(props) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-11.25a.75.75 0 0 0-1.5 0v.5a.75.75 0 0 0 1.5 0v-.5ZM10 9a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 10 9Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const VARIANTS = {
  success: {
    wrapper: "bg-emerald-50/70 ring-emerald-600/15",
    iconBox: "bg-emerald-500",
    title: "text-emerald-900",
    message: "text-emerald-800/90",
    Icon: IconSuccess,
  },
  warning: {
    wrapper: "bg-amber-50/70 ring-amber-600/15",
    iconBox: "bg-amber-500",
    title: "text-amber-900",
    message: "text-amber-800/90",
    Icon: IconWarning,
  },
  error: {
    wrapper: "bg-red-50/70 ring-red-600/15",
    iconBox: "bg-red-500",
    title: "text-red-900",
    message: "text-red-800/90",
    Icon: IconError,
  },
  info: {
    wrapper: "bg-blue-50/70 ring-blue-600/15",
    iconBox: "bg-blue-500",
    title: "text-blue-900",
    message: "text-blue-800/90",
    Icon: IconInfo,
  },
};

export default function Alert({
  variant = "info",
  title,
  children,
  actionLabel,
}) {
  const config = VARIANTS[variant] ?? VARIANTS.info;
  const { Icon } = config;

  return (
    <div
      role="alert"
      className={`flex items-start gap-3.5 rounded-2xl p-4 ring-1 ring-inset ${config.wrapper}`}
    >
      <span
        className={`grid size-10 shrink-0 place-items-center rounded-xl text-white ${config.iconBox}`}
      >
        <Icon className="size-5" />
      </span>

      <div className="min-w-0 flex-1">
        <p className={`text-sm font-bold ${config.title}`}>{title}</p>
        <p className={`mt-0.5 text-sm leading-relaxed ${config.message}`}>
          {children}
        </p>

        {actionLabel ? (
          <Button variant="outline" size="sm" className="mt-3">
            {actionLabel}
          </Button>
        ) : null}
      </div>
    </div>
  );
}
