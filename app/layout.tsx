import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Manrope, Inter } from 'next/font/google'
import './globals.css'

const manrope = Manrope({
  variable: '--font-heading',
  subsets: ['latin'],
  display: 'swap',
})
const inter = Inter({
  variable: '--font-body',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Conectivida — Integração de Dados Vitais para Hospitais',
  description:
    'A Conectivida automatiza a captação de dados de equipamentos médicos de diferentes marcas e os integra ao sistema de gestão hospitalar e ao PACS. Sinais vitais, ECG e cardiotocografia em tempo real.',
  generator: 'v0.app',
  keywords: [
    'integração hospitalar',
    'HL7',
    'sinais vitais',
    'ECG',
    'cardiotocografia',
    'PACS',
    'prontuário eletrônico',
    'interoperabilidade em saúde',
  ],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${manrope.variable} ${inter.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
