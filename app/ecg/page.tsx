import type { Metadata } from "next"
import { ProductPage } from "@/components/product-page"

export const metadata: Metadata = {
  title: "ECG — Integração de Eletrocardiogramas ao PACS | Conectivida",
  description:
    "Integre eletrocardiógrafos ao PACS e ao prontuário eletrônico. Laudo com assinatura digital, worklist integrada, redução de perda de exames e protocolo de dor torácica otimizado.",
}

export default function EcgPage() {
  return <ProductPage solutionKey="ecg" />
}
