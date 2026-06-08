import Link from "next/link"
import { ArrowRight, ArrowLeft, Check } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ContactSection } from "@/components/contact-section"
import { solutions, type SolutionKey } from "@/lib/site"

export function ProductPage({ solutionKey }: { solutionKey: SolutionKey }) {
  const solution = solutions.find((s) => s.key === solutionKey)!
  const others = solutions.filter((s) => s.key !== solutionKey)

  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border bg-secondary/40">
          <div
            className="pointer-events-none absolute inset-0 -z-10 opacity-[0.4]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, var(--border) 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
            aria-hidden="true"
          />
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <Link
              href="/#solucoes"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-4" />
              Todas as soluções
            </Link>
            <div className="mt-8 grid items-center gap-12 lg:grid-cols-2">
              <div>
                <span className="inline-flex items-center rounded-full border border-border bg-background px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary">
                  {solution.label}
                </span>
                <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl">
                  {solution.heroHeadline}
                </h1>
                <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
                  {solution.heroSub}
                </p>
                <div className="mt-8">
                  <Link
                    href="#contato"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Agende uma Prova de Conceito
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                  Em destaque
                </p>
                <ul className="mt-5 divide-y divide-border">
                  {solution.highlights.map((h) => (
                    <li key={h.value} className="flex items-start gap-4 py-4 first:pt-0 last:pb-0">
                      <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Check className="size-5" />
                      </span>
                      <div>
                        <p className="font-semibold text-foreground">{h.value}</p>
                        <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                          {h.label}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pain statement */}
        <section className="border-b border-border bg-background">
          <div className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6 lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">
              O desafio
            </p>
            <p className="mt-4 text-balance text-2xl font-medium leading-snug text-foreground sm:text-3xl">
              {solution.pain}
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="bg-background py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {solution.title}
              </h2>
              <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
                Recursos pensados para o fluxo de trabalho clínico real.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {solution.features.map((f) => (
                <div
                  key={f.title}
                  className="rounded-2xl border border-border bg-card p-7 transition-shadow hover:shadow-md"
                >
                  <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Check className="size-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-foreground">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {f.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Other solutions */}
        <section className="border-t border-border bg-secondary/40 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-semibold text-foreground">
              Outras soluções
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {others.map((s) => (
                <Link
                  key={s.key}
                  href={s.href}
                  className="group flex items-start justify-between gap-4 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {s.label}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {s.summary}
                    </p>
                  </div>
                  <ArrowRight className="mt-1 size-5 shrink-0 text-primary transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
