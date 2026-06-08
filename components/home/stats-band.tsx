import { stats } from "@/lib/site"

export function StatsBand() {
  return (
    <section className="border-b border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Tecnologia própria, time próprio, resultados comprovados
        </p>
        <dl className="mt-8 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <dt className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
                {s.value}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
