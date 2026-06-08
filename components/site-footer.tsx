import Link from "next/link"
import { MapPin } from "lucide-react"
import { Logo } from "@/components/logo"
import { solutions, siteConfig } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Quando a integração acontece, os dados vitais ganham visibilidade.
              Tecnologia própria para conectar equipamentos médicos ao hospital.
            </p>
            <p className="mt-5 flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>{siteConfig.address}</span>
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Soluções</h3>
            <ul className="mt-4 space-y-3">
              {solutions.map((s) => (
                <li key={s.key}>
                  <Link
                    href={s.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Empresa</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/a-conectivida"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link
                  href="/#contato"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Fale conosco
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Legal</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/politica-de-privacidade"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link
                  href="/termos-e-condicoes"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Termos e Condições
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 sm:flex-row sm:items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Conectivida. Todos os direitos
            reservados.
          </p>
          <p className="text-xs text-muted-foreground">
            Curitiba, PR &middot; Brasil
          </p>
        </div>
      </div>
    </footer>
  )
}
