import type { Metadata } from "next"
import { LegalPage } from "@/components/legal-page"

export const metadata: Metadata = {
  title: "Termos e Condições | Conectivida",
  description:
    "Termos e condições de uso do site e dos serviços de integração hospitalar da Conectivida.",
}

export default function TermosECondicoesPage() {
  return (
    <LegalPage title="Termos e Condições" updated="Junho de 2026">
      <p>
        Ao acessar e utilizar o site e os serviços da Conectivida, você concorda
        com os termos e condições descritos a seguir. Recomendamos a leitura
        atenta deste documento.
      </p>

      <div>
        <h2>1. Objeto</h2>
        <p>
          A Conectivida fornece soluções de integração de equipamentos médicos —
          como eletrocardiógrafos, monitores multiparamétricos e monitores fetais
          — ao sistema de gestão hospitalar e ao PACS, automatizando a captação e
          a disponibilização de dados vitais.
        </p>
      </div>

      <div>
        <h2>2. Uso do site</h2>
        <p>
          O conteúdo deste site tem caráter informativo. O preenchimento de
          formulários implica concordância com nossa Política de Privacidade e
          autoriza o contato de nossa equipe.
        </p>
      </div>

      <div>
        <h2>3. Propriedade intelectual</h2>
        <p>
          Todo o conteúdo, marca, software e tecnologia da Conectivida são
          protegidos por direitos de propriedade intelectual. É vedada a
          reprodução sem autorização prévia.
        </p>
      </div>

      <div>
        <h2>4. Prestação de serviços</h2>
        <p>
          A contratação e os níveis de serviço, incluindo suporte e
          disponibilidade, são definidos em contrato específico firmado entre a
          Conectivida e a instituição de saúde contratante.
        </p>
      </div>

      <div>
        <h2>5. Limitação de responsabilidade</h2>
        <p>
          As decisões clínicas são de responsabilidade exclusiva dos
          profissionais de saúde. A Conectivida fornece a infraestrutura
          tecnológica de integração e disponibilização de dados.
        </p>
      </div>

      <div>
        <h2>6. Foro</h2>
        <p>
          Estes Termos são regidos pela legislação brasileira, elegendo-se o foro
          da comarca de Curitiba, PR, para dirimir eventuais controvérsias.
        </p>
      </div>
    </LegalPage>
  )
}
