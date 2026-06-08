import Link from "next/link"
import { ArrowRight, ShieldCheck } from "lucide-react"
import { VitalsMonitor } from "@/components/vitals-monitor"

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.4]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--border) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-8 lg:px-8 lg:py-24">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3.5 py-1.5 text-xs font-semibold text-primary">
            <span className="size-1.5 rounded-full bg-chart-4" />
            Hospitais conectados com a Conectivida
          </span>

          <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Quando a integração acontece, os dados vitais ganham{" "}
            <span className="text-primary">visibilidade</span>
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Automatizamos a captação de dados de equipamentos médicos de
            diferentes marcas e os integramos ao sistema de gestão hospitalar e
            ao PACS — tornando cada sinal vital instantaneamente visível e
            acessível para decisões clínicas mais rápidas.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/#contato"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Agende sua PoC hoje
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="#solucoes"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-border bg-background px-6 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              Conheça as soluções
            </Link>
          </div>

          <p className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
            <ShieldCheck className="size-4 text-primary" />
            Mais de 1 milhão de exames já transitados na plataforma.
          </p>
        </div>

        <div className="animate-fade-up [animation-delay:120ms]">
          <VitalsMonitor />
        </div>
      </div>
    </section>
  )
}
