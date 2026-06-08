import type { Metadata } from "next"
import { LegalPage } from "@/components/legal-page"

export const metadata: Metadata = {
  title: "Política de Privacidade | Conectivida",
  description:
    "Saiba como a Conectivida coleta, utiliza e protege seus dados pessoais em conformidade com a LGPD.",
}

export default function PoliticaDePrivacidadePage() {
  return (
    <LegalPage title="Política de Privacidade" updated="Junho de 2026">
      <p>
        A Conectivida valoriza a privacidade e a proteção dos dados de seus
        usuários, clientes e parceiros. Esta Política de Privacidade descreve
        como coletamos, utilizamos, armazenamos e protegemos as informações
        fornecidas, em conformidade com a Lei Geral de Proteção de Dados (Lei nº
        13.709/2018 — LGPD).
      </p>

      <div>
        <h2>1. Dados que coletamos</h2>
        <p>
          Coletamos dados de identificação e contato fornecidos voluntariamente
          por meio de nossos formulários — como nome, instituição, e-mail,
          telefone e a mensagem enviada — com a finalidade de responder
          solicitações e agendar provas de conceito.
        </p>
      </div>

      <div>
        <h2>2. Como utilizamos seus dados</h2>
        <p>
          Utilizamos os dados para entrar em contato, prestar suporte técnico,
          enviar informações sobre nossas soluções e cumprir obrigações legais e
          contratuais. Não comercializamos seus dados pessoais.
        </p>
      </div>

      <div>
        <h2>3. Dados de saúde e ambiente hospitalar</h2>
        <p>
          No contexto de integração hospitalar, os dados clínicos transitados
          pela plataforma pertencem às instituições de saúde e são tratados sob
          rígidos controles de segurança, acesso autenticado e confidencialidade,
          conforme acordado contratualmente com cada cliente.
        </p>
      </div>

      <div>
        <h2>4. Segurança da informação</h2>
        <p>
          Adotamos medidas técnicas e organizacionais para proteger os dados
          contra acesso não autorizado, perda ou alteração, incluindo controle de
          acesso por login e senha e comunicação segura entre sistemas.
        </p>
      </div>

      <div>
        <h2>5. Seus direitos</h2>
        <p>
          Você pode solicitar a confirmação, o acesso, a correção, a
          portabilidade ou a exclusão de seus dados pessoais, bem como revogar o
          consentimento, entrando em contato com nossa equipe.
        </p>
      </div>

      <div>
        <h2>6. Contato</h2>
        <p>
          Para exercer seus direitos ou esclarecer dúvidas sobre esta Política,
          entre em contato pelo formulário disponível em nosso site.
        </p>
      </div>
    </LegalPage>
  )
}
