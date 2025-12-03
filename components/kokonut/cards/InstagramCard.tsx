import { Instagram, MessageCircle, Sparkles } from "lucide-react"

interface InstagramCardProps {
  title?: string
  subtitle?: string
  status?: string
  dm?: string
  reply?: string
}

export function InstagramCard({
  title = "Instagram DM Automation",
  subtitle = "DM + comment handling",
  status = "Auto-reply",
  dm = "Can I book a table for Saturday?",
  reply = "Absolutely. I’ve booked you for 7 PM with outdoor seating.",
}: InstagramCardProps) {
  return (
    <div className="w-full max-w-md overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-[#1b1f3a] via-[#0f1a36] to-[#111e3e] p-4 text-slate-100 shadow-xl shadow-sky-900/25">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
            <Instagram className="h-5 w-5 text-[#f4a6ff]" />
          </div>
          <div>
            <p className="text-sm font-semibold text-white">{title}</p>
            <p className="text-xs text-slate-200/70">{subtitle}</p>
          </div>
        </div>
        <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.12em] text-slate-100/80">
          {status}
        </span>
      </div>
      <div className="space-y-2 text-sm">
        <div className="rounded-xl bg-white/10 px-3 py-2">{`DM: "${dm}"`}</div>
        <div className="rounded-xl bg-gradient-to-r from-[#1c64ec]/40 to-[#5fc1ff]/40 px-3 py-2 text-white">
          Velina: “{reply}”
        </div>
        <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-100/80">
          <MessageCircle className="h-4 w-4 text-[#7ad0ff]" />
          <Sparkles className="h-4 w-4 text-[#f4a6ff]" />
          Sentiment trending up • Comments + spam filtered
        </div>
      </div>
    </div>
  )
}
