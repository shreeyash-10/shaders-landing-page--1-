import { cn } from "../utils"

export function SlideTextButton({ label }: { label: string }) {
  return (
    <button
      className={cn(
        "relative overflow-hidden rounded-xl bg-black px-6 py-3 text-white transition-all",
        "group shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/25",
      )}
    >
      <span className="block transition-transform duration-300 group-hover:-translate-y-full">{label}</span>
      <span className="absolute inset-0 flex translate-y-full items-center justify-center transition-transform duration-300 group-hover:translate-y-0">
        {label}
      </span>
    </button>
  )
}
