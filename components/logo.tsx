import { cn } from "@/lib/utils"

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2", className)}>
      <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="size-5"
        >
          <path d="M2 12h4l2.5-6 4 14 3-9 1.5 3.5H22" />
        </svg>
      </span>
      <span className="text-lg font-semibold tracking-tight text-foreground font-heading">
        Conectivida
      </span>
    </span>
  )
}
