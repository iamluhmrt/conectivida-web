"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { Logo } from "@/components/logo"
import { solutions } from "@/lib/site"
import { cn } from "@/lib/utils"

const nav = [
  { label: "Início", href: "/" },
  { label: "A Conectivida", href: "/a-conectivida" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="Conectivida — página inicial">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}

          <div
            className="relative"
            onMouseEnter={() => setSolutionsOpen(true)}
            onMouseLeave={() => setSolutionsOpen(false)}
          >
            <button
              className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              aria-expanded={solutionsOpen}
            >
              Soluções
              <ChevronDown className="size-4" />
            </button>
            {solutionsOpen && (
              <div className="absolute left-0 top-full w-80 pt-2">
                <div className="overflow-hidden rounded-xl border border-border bg-popover p-2 shadow-lg">
                  {solutions.map((s) => (
                    <Link
                      key={s.key}
                      href={s.href}
                      className="block rounded-lg px-3 py-2.5 transition-colors hover:bg-muted"
                    >
                      <span className="block text-sm font-semibold text-foreground">
                        {s.label}
                      </span>
                      <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground">
                        {s.summary}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/#contato"
            className="inline-flex h-10 items-center justify-center rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Agende sua PoC
          </Link>
        </div>

        <button
          className="inline-flex size-10 items-center justify-center rounded-lg text-foreground lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="space-y-1 px-4 py-4 sm:px-6">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted"
              >
                {item.label}
              </Link>
            ))}
            <p className="px-3 pb-1 pt-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Soluções
            </p>
            {solutions.map((s) => (
              <Link
                key={s.key}
                href={s.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted"
              >
                {s.label}
              </Link>
            ))}
            <Link
              href="/#contato"
              onClick={() => setOpen(false)}
              className={cn(
                "mt-3 inline-flex h-11 w-full items-center justify-center rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground",
              )}
            >
              Agende sua PoC
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
