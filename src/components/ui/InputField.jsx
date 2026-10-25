/*
 * Exercise 05 — InputField
 *
 * Componente de apresentação (sem useState): o estado de erro vem
 * exclusivamente pela prop `error`.
 *
 * Props mínimas: id, label, type, placeholder (+ error, desafio adicional).
 */

export default function InputField({
  id,
  label,
  type = "text",
  placeholder,
  error,
  className = "",
  ...inputProps
}) {
  const errorId = `${id}-error`;

  return (
    <div className={`w-full ${className}`}>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
      >
        {label}
      </label>

      <input
        id={id}
        type={type}
        placeholder={placeholder}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={`h-[50px] w-full rounded-xl border bg-white px-4 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:ring-4 dark:bg-slate-900 dark:text-slate-100 ${
          error
            ? "border-red-500 focus:border-red-500 focus:ring-red-500/15"
            : "border-slate-200 focus:border-blue-600 focus:ring-blue-600/15 dark:border-slate-700"
        }`}
        {...inputProps}
      />

      {error ? (
        <p id={errorId} className="mt-2 text-xs font-medium text-red-600">
          {error}
        </p>
      ) : null}
    </div>
  );
}
