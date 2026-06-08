import { MessageSquareHeart, Languages, ShieldCheck, Cpu } from "lucide-react"

const pillars = [
  {
    icon: Cpu,
    title: "Tecnologia e time próprios",
    description:
      "Nossa equipe de desenvolvimento evolui, inova e atualiza a plataforma constantemente, com expertise em TI aplicada à saúde.",
  },
  {
    icon: Languages,
    title: "Falamos a língua dos equipamentos",
    description:
      "Comunicamo-nos com equipamentos médicos de diversos fabricantes e com sistemas de gestão em diferentes 'idiomas' técnicos.",
  },
  {
    icon: ShieldCheck,
    title: "Robusto e estável",
    description:
      "Software comprovado em ambiente hospitalar real, com mais de 1 milhão de exames transitados com confiabilidade.",
  },
  {
    icon: MessageSquareHeart,
    title: "Suporte que resolve",
    description:
      "Interpretamos suas necessidades e prestamos suporte resolutivo, buscando ao final de cada chamado um sincero 'muito obrigado'.",
  },
]

export function WhyUs() {
  return (
    <section className="border-y border-border bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <span className="inline-flex items-center rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
              Fazemos acontecer
            </span>
            <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              A importância de estarmos ao seu lado
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
              Utilizamos nossa expertise em tecnologia da informação para
              integrar eletrocardiógrafos, monitores multiparamétricos e
              monitores fetais de diversos fabricantes — garantindo que cada
              dispositivo se conecte perfeitamente ao sistema de gestão
              hospitalar e automatizando a coleta de registros gráficos e
              alfanuméricos.
            </p>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
              A troca de informação é um dos segredos tecnológicos da
              Conectivida. Diga olá quando precisar.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <span className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <p.icon className="size-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-foreground">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
