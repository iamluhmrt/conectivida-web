"use client"

import { useState, type FormEvent } from "react"
import { Check, Loader2, ShieldCheck } from "lucide-react"
import Link from "next/link"

const inputClass =
  "h-11 w-full rounded-lg border border-input bg-background px-3.5 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30"

export function LeadForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle")
  const [agreed, setAgreed] = useState(false)
  const [error, setError] = useState<string | null>(null)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!agreed) {
      setError(
        "Para enviar o formulário, você precisa concordar com os Termos e a Política de Privacidade.",
      )
      return
    }
    setError(null)
    setStatus("loading")
    // Simula o envio. Integre com seu endpoint/CRM em produção.
    setTimeout(() => setStatus("success"), 1100)
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-10 text-center">
        <span className="flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Check className="size-7" />
        </span>
        <h3 className="mt-5 text-xl font-semibold text-foreground">
          Recebemos seu contato
        </h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
          Nosso especialista entrará em contato em breve para agendar a Prova de
          Conceito no seu hospital. Obrigado por nos ajudar.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="nome" className="text-sm font-medium text-foreground">
            Nome
          </label>
          <input id="nome" name="nome" required className={inputClass} placeholder="Seu nome" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="instituicao" className="text-sm font-medium text-foreground">
            Instituição
          </label>
          <input
            id="instituicao"
            name="instituicao"
            required
            className={inputClass}
            placeholder="Hospital ou clínica"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={inputClass}
            placeholder="voce@hospital.com.br"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="telefone" className="text-sm font-medium text-foreground">
            Telefone / WhatsApp
          </label>
          <input
            id="telefone"
            name="telefone"
            type="tel"
            required
            className={inputClass}
            placeholder="(00) 00000-0000"
          />
        </div>
        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <label htmlFor="assunto" className="text-sm font-medium text-foreground">
            Assunto
          </label>
          <select id="assunto" name="assunto" className={inputClass} defaultValue="">
            <option value="" disabled>
              Selecione uma solução
            </option>
            <option value="sinais-vitais">Sinais Vitais</option>
            <option value="ecg">ECG</option>
            <option value="ctg">Cardiotocografia</option>
            <option value="outro">Outro assunto</option>
          </select>
        </div>
        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <label htmlFor="mensagem" className="text-sm font-medium text-foreground">
            Mensagem
          </label>
          <textarea
            id="mensagem"
            name="mensagem"
            rows={4}
            className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30"
            placeholder="Conte-nos sobre os equipamentos e o desafio de integração do seu hospital."
          />
        </div>
      </div>

      <label className="mt-5 flex items-start gap-3 text-sm text-muted-foreground">
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          className="mt-0.5 size-4 shrink-0 rounded border-input accent-primary"
        />
        <span>
          Concordo com os{" "}
          <Link href="/termos-e-condicoes" className="font-medium text-primary hover:underline">
            Termos e Condições
          </Link>{" "}
          e a{" "}
          <Link
            href="/politica-de-privacidade"
            className="font-medium text-primary hover:underline"
          >
            Política de Privacidade
          </Link>{" "}
          da Conectivida.
        </span>
      </label>

      {error && <p className="mt-3 text-sm text-destructive">{error}</p>}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="size-4 animate-spin" /> Enviando...
          </>
        ) : (
          "Agendar Prova de Conceito"
        )}
      </button>

      <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
        <ShieldCheck className="size-3.5 text-primary" />
        Seus dados são tratados conforme a LGPD.
      </p>
    </form>
  )
}
