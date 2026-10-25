import Section from "../components/Section.jsx";
import Button from "../components/ui/Button.jsx";
import InputField from "../components/ui/InputField.jsx";

/*
 * Exercise 05 — Login Form
 * Totalmente estático: nenhum useState, nenhum onChange, nenhum submit.
 * O estado de erro é apenas uma prop (demonstrado no segundo card).
 */
export default function Ex05LoginForm() {
  return (
    <Section
      number="05"
      title="Login Form"
      subtitle="Input component + focus state + static form composition"
    >
      <div className="flex flex-col gap-6 xl:flex-row">
        <form className="w-full max-w-[400px] rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            Welcome back
          </h3>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Sign in to continue
          </p>

          <div className="mt-6 space-y-4">
            <InputField
              id="email"
              label="Email"
              type="email"
              placeholder="you@example.com"
            />
            <InputField
              id="password"
              label="Password"
              type="password"
              placeholder="••••••••"
            />
          </div>

          <div className="mt-4 flex items-center justify-between gap-3">
            <label className="flex cursor-pointer items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
              <input
                type="checkbox"
                defaultChecked
                className="size-4 rounded border-slate-300 text-blue-600 focus-visible:ring-2 focus-visible:ring-blue-600/40"
              />
              Remember me
            </label>

            <a
              href="#"
              className="text-xs font-semibold text-blue-600 hover:text-blue-700 hover:underline"
            >
              Forgot password?
            </a>
          </div>

          <div className="mt-6">
            <Button variant="primary" fullWidth>
              Sign In
            </Button>
          </div>
        </form>

        <div className="w-full max-w-[400px]">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <p className="text-sm font-bold text-slate-900 dark:text-white">
              Estado de erro (só por prop)
            </p>

            <div className="mt-4">
              <InputField
                id="email-error"
                label="Email"
                type="email"
                placeholder="you@example.com"
                defaultValue="felipe@exemplo"
                error="Email inválido"
              />
            </div>
          </div>

          <p className="mt-4 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
            O label está associado ao input via <code>htmlFor/id</code>, o foco
            usa <code>focus:ring-4</code> e o erro é anunciado com{" "}
            <code>aria-invalid</code> + <code>aria-describedby</code>.
          </p>
        </div>
      </div>
    </Section>
  );
}
