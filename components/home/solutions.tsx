import Link from "next/link"
import { ArrowRight, HeartPulse, Activity, Baby } from "lucide-react"
import { solutions } from "@/lib/site"

const icons = {
  "sinais-vitais": HeartPulse,
  ecg: Activity,
  ctg: Baby,
} as const

export function Solutions() {
  return (
    <section id="solucoes" className="scroll-mt-20 bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
            Soluções
          </span>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Qual é a principal necessidade de integração do seu hospital hoje?
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
            Explore cada solução e entenda como podemos trazer resultados
            transformadores para sua instituição de saúde.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {solutions.map((s) => {
            const Icon = icons[s.key]
            return (
              <Link
                key={s.key}
                href={s.href}
                className="group flex flex-col rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-6 text-xl font-semibold text-foreground">
                  {s.label}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {s.summary}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  Saiba mais
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
