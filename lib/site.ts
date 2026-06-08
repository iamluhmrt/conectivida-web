export const siteConfig = {
  name: "Conectivida",
  tagline: "Integração de dados vitais para hospitais",
  address: "Rua Júlio Bartolomeu Taborda Luiz, 270 — Curitiba, PR",
  examsProcessed: "1.000.000+",
  foundedYear: 2019,
}

export type SolutionKey = "sinais-vitais" | "ecg" | "ctg"

export const solutions: {
  key: SolutionKey
  href: string
  label: string
  title: string
  shortTitle: string
  summary: string
  heroHeadline: string
  heroSub: string
  pain: string
  highlights: { value: string; label: string }[]
  features: { title: string; description: string }[]
}[] = [
  {
    key: "sinais-vitais",
    href: "/sinais-vitais",
    label: "Sinais Vitais",
    shortTitle: "Sinais Vitais",
    title: "Monitores multiparamétricos integrados ao prontuário",
    summary:
      "Integre monitores multiparamétricos ao prontuário eletrônico, otimizando o fluxo de cuidados desde o pronto-atendimento até a UTI.",
    heroHeadline: "Transforme sinais em dados e dados em decisões que salvam vidas.",
    heroSub:
      "Centralize os sinais vitais de toda a instituição em um painel único, independentemente da marca do monitor, e leve cada leito ao prontuário eletrônico em tempo real.",
    pain: "Enfermeiros perdem tempo transcrevendo manualmente sinais vitais leito a leito — um trabalho repetitivo, sujeito a erros e que atrasa decisões clínicas críticas.",
    highlights: [
      { value: "Tempo real", label: "Cada leito no prontuário, sem digitação manual" },
      { value: "Multimarca", label: "Integra monitores de qualquer fabricante via HL7" },
      { value: "SMS / WhatsApp", label: "Alertas automáticos ao alterar sinais vitais" },
    ],
    features: [
      {
        title: "Integração fluida via HL7",
        description:
          "A compatibilidade HL7 dos monitores multiparamétricos permite integrá-los ao sistema de gestão hospitalar, fazendo os dados vitais fluírem automaticamente para profissionais e gestores.",
      },
      {
        title: "Dashboard unificado por leito",
        description:
          "Visualize o status e as atualizações de cada monitor em uma única tela, independentemente da marca, com uma visão ampliada e organizada por leitos.",
      },
      {
        title: "Admissão, alta e transferência automáticas",
        description:
          "Ao vincular o paciente a um leito no HIS, o software realiza a admissão no monitor correspondente — e a alta ou transferência sincroniza automaticamente, sem interrupção da captação.",
      },
      {
        title: "Acesso remoto seguro",
        description:
          "Acesse os dados vitais de qualquer setor intra-hospitalar com login e senha, garantindo flexibilidade e um fluxo de informação contínuo.",
      },
      {
        title: "Alertas em tempo real",
        description:
          "Receba notificações automáticas via SMS ou WhatsApp quando houver alterações nos sinais vitais, conforme regras configuradas no monitor, acelerando a resposta da equipe.",
      },
    ],
  },
  {
    key: "ecg",
    href: "/ecg",
    label: "ECG",
    shortTitle: "ECG",
    title: "Eletrocardiogramas integrados ao PACS e ao prontuário",
    summary:
      "Integre eletrocardiogramas ao PACS e ao prontuário eletrônico, automatizando o fluxo de exames, emergências cardíacas e o protocolo de dor torácica.",
    heroHeadline: "Transforme traçados em dados e dados em decisões que salvam vidas.",
    heroSub:
      "Do exame ao laudo assinado digitalmente, com a imagem armazenada no PACS e o resultado anexado ao prontuário — automaticamente.",
    pain: "Exames de ECG em papel se perdem, geram glosas e repetições, e atrasam o atendimento de emergências cardíacas que dependem de minutos.",
    highlights: [
      { value: "PACS", label: "Imagem armazenada e laudo anexado ao prontuário" },
      { value: "Assinatura digital", label: "Laudo remoto pelo cardiologista, com validade legal" },
      { value: "Dor torácica", label: "Atendimento imediato, antes mesmo da prescrição" },
    ],
    features: [
      {
        title: "Integração fluida",
        description:
          "Os eletrocardiógrafos são integrados ao nosso software, com ferramentas de laudo, assinatura digital e acesso remoto ao cardiologista. O laudo finalizado é anexado ao HIS e a imagem enviada ao PACS.",
      },
      {
        title: "Armazenamento seguro das imagens",
        description:
          "As imagens dos exames de ECG são enviadas diretamente ao PACS, garantindo armazenamento seguro e disponível para consulta e análise detalhada onde e quando necessário.",
      },
      {
        title: "Worklist integrada",
        description:
          "Através da integração com o PACS, acesse a agenda de pacientes e organize a fila de exames a partir da prescrição, personalizada por setor, otimizando o fluxo de trabalho.",
      },
      {
        title: "Redução de perda de exames",
        description:
          "Com a integração completa, a perda de exames é praticamente eliminada, resultando em menos glosas e repetições, economizando tempo e recursos ao digitalizar o processo.",
      },
      {
        title: "Protocolo de dor torácica",
        description:
          "Otimizamos o fluxo do protocolo de dor torácica na emergência, garantindo atendimento imediato — antes mesmo da prescrição — com vínculo automático das informações no sistema do hospital.",
      },
    ],
  },
  {
    key: "ctg",
    href: "/ctg",
    label: "Cardiotocografia",
    shortTitle: "CTG",
    title: "Monitores fetais integrados ao PACS e ao prontuário",
    summary:
      "Integre monitores fetais ao PACS e ao prontuário eletrônico, provendo segurança materno-fetal do anteparto ao intraparto.",
    heroHeadline:
      "Transforme sinais em dados e dados em decisões que salvam vidas desde o início.",
    heroSub:
      "Acompanhe até 16 monitores fetais simultaneamente, com análise algorítmica do bem-estar fetal e alertas automáticos em tempo real.",
    pain: "A vigilância fetal exige acompanhamento contínuo e interpretação precisa de traçados — difícil de centralizar e propenso a atrasos quando feito monitor a monitor.",
    highlights: [
      { value: "16 monitores", label: "Visualização simultânea dos traçados fetais" },
      { value: "Algoritmo CTG", label: "Linha base, STV e pré-diagnóstico do bem-estar fetal" },
      { value: "Anteparto ao intraparto", label: "Segurança materno-fetal em todo o cuidado" },
    ],
    features: [
      {
        title: "Integração fluida",
        description:
          "Os cardiotocógrafos são integrados ao software, com laudo, assinatura digital e acesso remoto ao obstetra. O laudo é anexado ao HIS e a imagem enviada ao PACS, com visualização múltipla de até 16 monitores.",
      },
      {
        title: "Armazenamento seguro das imagens",
        description:
          "As imagens dos exames de CTG são enviadas diretamente ao PACS, garantindo armazenamento seguro e acessível para consulta e análise detalhada onde e quando necessário.",
      },
      {
        title: "Worklist integrada",
        description:
          "Através da integração com o PACS, acesse a agenda de pacientes e organize a fila de exames a partir da prescrição, personalizada por setor, otimizando a eficiência do departamento.",
      },
      {
        title: "Algoritmo de análise CTG",
        description:
          "Cálculo preciso da linha base, detecção de acelerações e desacelerações, monitoramento de movimentos fetais, análise de Short Term Variation (STV) e geração de pré-diagnóstico do bem-estar fetal.",
      },
      {
        title: "Intraparto unificado",
        description:
          "Acompanhe em tempo real os traçados de CTG das pacientes em trabalho de parto em uma tela centralizada, organizada por leito, com alertas automáticos quando parâmetros saem da normalidade.",
      },
      {
        title: "Emergências obstétricas",
        description:
          "Otimizamos o fluxo na emergência obstétrica, garantindo que a gestante seja atendida imediatamente — antes mesmo da prescrição — com vínculo automático das informações no sistema.",
      },
    ],
  },
]

export const steps = [
  {
    number: "01",
    title: "Automatizar",
    description:
      "Coleta automática dos dados vitais de equipamentos médicos, eliminando a inserção manual e os erros de transcrição.",
  },
  {
    number: "02",
    title: "Integrar",
    description:
      "Conexão dos dispositivos ao sistema de gestão hospitalar para garantir um fluxo contínuo e confiável dos dados vitais.",
  },
  {
    number: "03",
    title: "Dar visibilidade",
    description:
      "Dados vitais instantaneamente disponíveis e acessíveis de qualquer local, para decisões clínicas mais rápidas.",
  },
]

export const stats = [
  { value: "1M+", label: "Exames já transitados na plataforma" },
  { value: "2019", label: "Ano de fundação, do telelaudo à integração" },
  { value: "HL7", label: "Padrão de interoperabilidade nativo" },
  { value: "24/7", label: "Captação contínua de dados vitais" },
]
