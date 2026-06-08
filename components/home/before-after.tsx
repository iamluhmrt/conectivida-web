import { X, Check } from "lucide-react"

const before = [
  "Inserção manual de sinais vitais leito a leito",
  "Exames de ECG em papel que se perdem e geram glosas",
  "Dados presos em cada equipamento, sem visão centralizada",
  "Atraso na resposta a emergências cardíacas e obstétricas",
  "Equipes diferentes operando sistemas que não conversam",
]

const after = [
  "Captação automática e contínua, sem digitação",
  "Laudo assinado digitalmente e imagem no PACS automaticamente",
  "Dashboard unificado por leito, independente da marca",
  "Alertas em tempo real via SMS ou WhatsApp",
  "Equipamentos e HIS integrados em um fluxo único",
]

export function BeforeAfter() {
  return (
    <section className="border-y border-border bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            O que muda quando a integração acontece
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
            A diferença entre dados isolados e dados que geram decisão clínica.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-7">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground">
              <span className="flex size-7 items-center justify-center rounded-full bg-destructive/10 text-destructive">
                <X className="size-4" />
              </span>
              Sem integração
            </h3>
            <ul className="mt-6 space-y-4">
              {before.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                  <X className="mt-0.5 size-4 shrink-0 text-destructive/70" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border-2 border-primary/30 bg-card p-7 shadow-sm">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground">
              <span className="flex size-7 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Check className="size-4" />
              </span>
              Com a Conectivida
            </h3>
            <ul className="mt-6 space-y-4">
              {after.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-foreground">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
