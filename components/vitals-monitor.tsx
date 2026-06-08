"use client"

import { useEffect, useRef, useState } from "react"
import { Activity, Heart, Wind, Thermometer } from "lucide-react"

function useTicker(base: number, variance: number, interval = 2200) {
  const [value, setValue] = useState(base)
  useEffect(() => {
    const id = setInterval(() => {
      setValue(base + Math.round((Math.random() - 0.5) * variance))
    }, interval)
    return () => clearInterval(id)
  }, [base, variance, interval])
  return value
}

function EcgLine({ color }: { color: string }) {
  return (
    <svg
      viewBox="0 0 240 48"
      className="h-12 w-full"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 24 H40 l6 -2 6 4 5 -20 6 36 6 -18 7 0 H120 l6 -2 6 4 5 -20 6 36 6 -18 7 0 H240"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="ecg-path"
      />
    </svg>
  )
}

const beds = [
  { bed: "UTI 01", name: "Leito ocupado", color: "var(--chart-1)" },
  { bed: "UTI 02", name: "Leito ocupado", color: "var(--chart-4)" },
  { bed: "UTI 03", name: "Leito ocupado", color: "var(--chart-2)" },
]

export function VitalsMonitor() {
  const hr = useTicker(78, 8)
  const spo2 = useTicker(98, 2)
  const resp = useTicker(16, 4)
  const temp = useTicker(367, 6) // tenths of degree

  const liveRef = useRef<HTMLSpanElement>(null)

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-xl shadow-primary/5 ring-1 ring-black/5">
      {/* Window chrome */}
      <div className="flex items-center justify-between border-b border-border bg-secondary/60 px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="size-2.5 rounded-full bg-destructive/60" />
          <span className="size-2.5 rounded-full bg-chart-5/60" />
          <span className="size-2.5 rounded-full bg-chart-4/60" />
        </div>
        <span className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
          <span
            ref={liveRef}
            className="size-1.5 animate-pulse rounded-full bg-chart-4"
          />
          Dashboard unificado — Sinais Vitais
        </span>
        <span className="text-xs text-muted-foreground">HL7</span>
      </div>

      {/* Main vitals */}
      <div className="grid grid-cols-2 gap-3 p-4 sm:grid-cols-4">
        <Metric
          icon={Heart}
          label="FC"
          value={hr}
          unit="bpm"
          tone="text-chart-1"
        />
        <Metric
          icon={Activity}
          label="SpO₂"
          value={spo2}
          unit="%"
          tone="text-chart-2"
        />
        <Metric
          icon={Wind}
          label="FR"
          value={resp}
          unit="rpm"
          tone="text-chart-3"
        />
        <Metric
          icon={Thermometer}
          label="Temp"
          value={(temp / 10).toFixed(1)}
          unit="°C"
          tone="text-chart-5"
        />
      </div>

      <div className="px-4">
        <EcgLine color="var(--chart-1)" />
      </div>

      {/* Bed list */}
      <div className="space-y-px border-t border-border bg-secondary/30 p-4">
        {beds.map((b) => (
          <div
            key={b.bed}
            className="flex items-center gap-3 rounded-lg px-2 py-2"
          >
            <span className="w-16 text-xs font-semibold text-foreground">
              {b.bed}
            </span>
            <div className="min-w-0 flex-1">
              <EcgLine color={b.color} />
            </div>
            <span className="rounded-full bg-chart-4/15 px-2 py-0.5 text-[10px] font-semibold text-chart-4">
              Estável
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function Metric({
  icon: Icon,
  label,
  value,
  unit,
  tone,
}: {
  icon: React.ComponentType<{ className?: string }>
  label: string
  value: number | string
  unit: string
  tone: string
}) {
  return (
    <div className="rounded-xl border border-border bg-background p-3">
      <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
        <Icon className={`size-3.5 ${tone}`} />
        {label}
      </div>
      <div className="mt-1 flex items-baseline gap-1">
        <span className="text-2xl font-semibold tabular-nums text-foreground">
          {value}
        </span>
        <span className="text-xs text-muted-foreground">{unit}</span>
      </div>
    </div>
  )
}
