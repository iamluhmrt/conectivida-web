import { steps } from "@/lib/site"
import { Cog, Network, Eye } from "lucide-react"

const icons = [Cog, Network, Eye]

export function Process() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
            Descomplicando
          </span>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            3 passos para a saúde digital
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
            Do equipamento à decisão clínica, sem inserção manual e sem ruído
            entre sistemas.
          </p>
        </div>

        <div className="relative mt-14 grid gap-6 lg:grid-cols-3">
          {steps.map((step, i) => {
            const Icon = icons[i]
            return (
              <div
                key={step.number}
                className="relative rounded-2xl border border-border bg-card p-7 transition-shadow hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="size-6" />
                  </span>
                  <span className="text-4xl font-semibold tracking-tight text-border">
                    {step.number}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
