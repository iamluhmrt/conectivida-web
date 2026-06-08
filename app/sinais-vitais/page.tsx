import type { Metadata } from "next"
import { ProductPage } from "@/components/product-page"

export const metadata: Metadata = {
  title: "Sinais Vitais — Integração de Monitores Multiparamétricos | Conectivida",
  description:
    "Integre monitores multiparamétricos ao prontuário eletrônico via HL7. Dashboard unificado por leito, admissão/alta/transferência automáticas, acesso remoto seguro e alertas em tempo real.",
}

export default function SinaisVitaisPage() {
  return <ProductPage solutionKey="sinais-vitais" />
}
