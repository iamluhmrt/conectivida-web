import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ContactSection } from "@/components/contact-section"
import { stats } from "@/lib/site"

export const metadata: Metadata = {
  title: "A Conectivida — Do Telelaudo à Integração Hospitalar",
  description:
    "Nascemos em 2019 da aquisição do WEBECG pelo grupo Macrosul. Hoje somos referência em integração de registros gráficos, sinais vitais e cardiotocografia para hospitais.",
}

const timeline = [
  {
    year: "2019",
    title: "O ponto de partida",
    description:
      "Nascemos da visão estratégica do grupo Macrosul ao adquirir o WEBECG, braço da startup gaúcha I9 — um software de telelaudos que permitia a cardiologistas laudar exames de ECG a distância, a qualquer hora e lugar.",
  },
  {
    year: "Ano 1",
    title: "Projeto pioneiro em Bento Gonçalves",
    description:
      "Integramos os exames de ECG ao sistema de gestão de um hospital de referência regional, resolvendo um problema crítico e abrindo caminho para novos projetos na mesma instituição.",
  },
  {
    year: "Expansão",
    title: "Dos sinais vitais à referência nacional",
    description:
      "Em um esforço multidisciplinar com engenheiros clínicos, TI, médicos e equipe assistencial, integramos monitores multiparamétricos e nos tornamos referência em integração de registros gráficos, sinais vitais e cardiotocografia.",
  },
  {
    year: "Hoje",
    title: "Mais de 1 milhão de exames",
    description:
      "Nossa plataforma já transitou mais de 1.000.000 de exames, presente em diversos hospitais. Contamos com uma equipe de desenvolvimento dedicada a ajudar hospitais a gerenciar dados vitais com mais eficácia.",
  },
]

export default function AConectividaPage() {
  return (
    <>
      <SiteHeader />
      <main>
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
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <span className="inline-flex items-center rounded-full border border-border bg-background px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary">
              A Conectivida
            </span>
            <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl">
              Do telelaudo à integração hospitalar — a história por trás dos
              dados vitais
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              Uma trajetória de inovação que começou com cardiologistas laudando
              a distância e evoluiu para a integração completa de equipamentos
              médicos ao hospital digital.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="border-b border-border bg-background">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <dl className="grid grid-cols-2 gap-8 lg:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
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

        {/* Image */}
        <section className="bg-background pt-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative aspect-[16/7] overflow-hidden rounded-2xl border border-border">
              <Image
                src="/images/equipe-clinica.png"
                alt="Equipe clínica monitorando dados de sinais vitais em um centro de comando hospitalar"
                fill
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-background py-20 sm:py-28">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Nossa trajetória
            </h2>
            <ol className="mt-12 space-y-10">
              {timeline.map((item, i) => (
                <li key={i} className="relative flex gap-6">
                  <div className="flex flex-col items-center">
                    <span className="flex size-3 shrink-0 rounded-full bg-primary ring-4 ring-primary/15" />
                    {i < timeline.length - 1 && (
                      <span className="mt-2 w-px flex-1 bg-border" />
                    )}
                  </div>
                  <div className="-mt-1 pb-2">
                    <span className="text-sm font-semibold text-primary">
                      {item.year}
                    </span>
                    <h3 className="mt-1 text-xl font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-14 rounded-2xl border border-border bg-secondary/50 p-8">
              <h3 className="text-xl font-semibold text-foreground">
                Nossa missão hoje
              </h3>
              <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                Proporcionar registros gráficos e alfanuméricos em tempo real,
                com maior segurança e rapidez nas decisões clínicas, elevando a
                gestão do paciente e do hospital a novos patamares digitais.
              </p>
              <Link
                href="/#solucoes"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
              >
                Conheça nossas soluções
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
