import { MessageCircle, ShieldCheck } from "lucide-react"

type Message = {
  sender: "customer" | "agent"
  text: string
  time?: string
}

interface WhatsappChatCardProps {
  title?: string
  status?: string
  messages?: Message[]
}

export function WhatsappChatCard({
  title = "WhatsApp Personalization",
  status = "Live",
  messages = [
    { sender: "customer", text: "Can I get a table for 2 tonight at 8 PM?" },
    { sender: "agent", text: "Booked. Outdoor seating, and noted gluten-free." },
    { sender: "customer", text: "Perfect, thank you!" },
    { sender: "agent", text: "See you soon. I’ll remind you 2 hours before." },
  ],
}: WhatsappChatCardProps) {
  return (
    <div className="w-full max-w-md overflow-hidden rounded-2xl border border-emerald-400/20 bg-gradient-to-br from-[#07161a] via-[#0b2b2f] to-[#081724] p-4 text-emerald-50 shadow-xl shadow-emerald-900/20">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-50">
            <MessageCircle className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-semibold text-white">{title}</p>
            <p className="text-xs text-emerald-50/70">Smart memory on WhatsApp</p>
          </div>
        </div>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/15 px-3 py-1 text-[11px] uppercase tracking-[0.12em] text-emerald-50">
          {status}
        </span>
      </div>
      <div className="space-y-2">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm ${
              msg.sender === "agent"
                ? "ml-auto bg-emerald-400/20 text-emerald-50"
                : "bg-white/5 text-emerald-50/90"
            }`}
          >
            <p className="text-[11px] uppercase tracking-[0.14em] text-emerald-50/60">
              {msg.sender === "agent" ? "Velina" : "Customer"}
            </p>
            <p>{msg.text}</p>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-2 rounded-xl border border-emerald-400/25 bg-emerald-400/10 px-3 py-2 text-xs text-emerald-50/80">
        <ShieldCheck className="h-4 w-4 text-emerald-200" />
        Shared memory keeps every reply human and personal.
      </div>
    </div>
  )
}
