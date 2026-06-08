import { Phone, Calendar, Workflow } from "lucide-react"
import { LeadForm } from "@/components/lead-form"

const points = [
  {
    icon: Calendar,
    title: "Prova de Conceito sem custo",
    description:
      "Veja o impacto real da integração no seu ambiente antes de qualquer decisão.",
  },
  {
    icon: Workflow,
    title: "Integração com qualquer marca",
    description:
      "Comunicamo-nos com equipamentos médicos e sistemas de gestão em diferentes 'línguas'.",
  },
  {
    icon: Phone,
    title: "Suporte resolutivo ao seu lado",
    description:
      "Interpretamos suas necessidades e prestamos suporte até o fechamento do chamado.",
  },
]

export function ContactSection() {
  return (
    <section id="contato" className="scroll-mt-20 bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
              Fale conosco
            </span>
            <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Agende uma Prova de Conceito e veja o impacto no seu hospital
            </h2>
            <p className="mt-4 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground">
              Fale com nosso especialista e descubra, na prática, como a
              Conectivida transforma sinais e traçados em decisões clínicas mais
              rápidas e seguras.
            </p>

            <ul className="mt-10 space-y-6">
              {points.map((p) => (
                <li key={p.title} className="flex gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <p.icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-foreground">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {p.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <LeadForm />
        </div>
      </div>
    </section>
  )
}
