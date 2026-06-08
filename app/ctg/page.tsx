import type { Metadata } from "next"
import { ProductPage } from "@/components/product-page"

export const metadata: Metadata = {
  title: "Cardiotocografia — Integração de Monitores Fetais ao PACS | Conectivida",
  description:
    "Integre monitores fetais ao PACS e ao prontuário eletrônico. Visualização de até 16 monitores, algoritmo de análise CTG com STV, intraparto unificado e alertas automáticos.",
}

export default function CtgPage() {
  return <ProductPage solutionKey="ctg" />
}
