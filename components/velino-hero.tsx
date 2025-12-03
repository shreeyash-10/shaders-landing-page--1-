"use client";

import CardStack from "@/components/kokonutui/card-stack";

type ChannelCard = {
    id: string;
    label: string;
    title: string;
    subtitle: string;
    description: string;
    accent: string;
    specs: { label: string; value: string }[];
};

const CHANNEL_CARDS: ChannelCard[] = [
    {
        id: "whatsapp",
        label: "WhatsApp campaigns",
        title: "High-intent WhatsApp journeys",
        subtitle: "Triggered from smart lead search and segments.",
        description:
            "Keep replies human, timely and on-brand while the AI handles follow-ups, nudges and reminders.",
        accent: "linear-gradient(135deg, #22d3ee, #0ea5e9 60%)",
        specs: [
            { label: "2-way", value: "Conversational flows" },
            { label: "Auto", value: "Follow-ups" },
            { label: "100%", value: "Consent safe" },
            { label: "CRM", value: "Sync ready" },
        ],
    },
    {
        id: "instagram",
        label: "Instagram DM & comments",
        title: "Turn social traffic into leads",
        subtitle: "Auto-reply to DMs and comments, then move hot leads into CRM.",
        description:
            "Score intent from reels, stories and comments, then route qualified prospects to human agents.",
        accent: "linear-gradient(135deg, #f472b6, #a855f7 60%)",
        specs: [
            { label: "DM", value: "Automation" },
            { label: "Smart", value: "Lead scoring" },
            { label: "1-click", value: "Handover" },
            { label: "CRM", value: "Enrichment" },
        ],
    },
    {
        id: "voice",
        label: "AI phone calls",
        title: "Human-sounding AI calls at scale",
        subtitle: "Outbound & inbound journeys for sales, collections and care.",
        description:
            "Natural voice in local languages with live dispositions, status and intent capture.",
        accent: "linear-gradient(135deg, #34d399, #10b981 60%)",
        specs: [
            { label: "Natural", value: "Multilingual" },
            { label: "Live", value: "Call outcomes" },
            { label: "Deep", value: "SFA / DMS sync" },
            { label: "QA", value: "Auto summaries" },
        ],
    },
    {
        id: "email-sms",
        label: "Email & SMS",
        title: "Smart campaigns that stay in sync",
        subtitle: "Nurture leads and send alerts from one customer timeline.",
        description:
            "Keep email, SMS and chat aligned with the same triggers, content assist and unified reporting.",
        accent: "linear-gradient(135deg, #f59e0b, #ec4899 60%)",
        specs: [
            { label: "AI", value: "Content assist" },
            { label: "Event", value: "Triggers" },
            { label: "Unified", value: "Reporting" },
            { label: "Inbox", value: "One view" },
        ],
    },
];

export default function VelinoHero() {
    return (
        <section className="relative overflow-hidden bg-slate-950 text-white">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(129,140,248,0.18),_transparent_55%)]" />

            <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 py-16 lg:flex-row lg:py-24">
                {/* Left: copy */}
                <div className="flex-1 space-y-6">
                    <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/40 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-200">
                        <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                        Omnichannel AI for serious revenue teams
                    </div>

                    <div className="space-y-3">
                        <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                            Velino – your intelligent{" "}
                            <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
                                omnichannel engine
                            </span>
                        </h1>
                        <p className="max-w-xl text-sm text-slate-300 sm:text-base">
                            Velino finds high-intent leads from smart search, then runs
                            end-to-end outreach across WhatsApp, calls, Instagram,
                            email and SMS. One platform to run campaigns, customer care,
                            CRM, SFA and DMS workflows.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                        <button className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/40 transition hover:bg-sky-400">
                            Book a live demo
                        </button>
                        <button className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/40 px-5 py-2.5 text-sm font-medium text-slate-100 hover:border-slate-500 hover:bg-slate-900/70">
                            Explore use cases
                        </button>
                    </div>

                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-400">
                        <span>✅ Built for sales, service & dealer networks</span>
                        <span>✅ Plugs into your existing CRM / SFA / DMS</span>
                        <span>✅ Voice + chat + social + email in one place</span>
                    </div>
                </div>

                {/* Right: Kokonut UI stack */}
                <div className="flex-1">
                    <div className="mb-4 space-y-1 text-center lg:text-left">
                        <p className="text-xs font-medium uppercase tracking-[0.2em] text-sky-300/80">
                            Unified customer conversations
                        </p>
                        <p className="text-sm text-slate-300">
                            4 channels. One AI brain. Velino orchestrates every
                            touchpoint from a single customer timeline.
                        </p>
                    </div>
                    <div className="rounded-3xl border border-slate-800/80 bg-slate-900/60 p-4 shadow-2xl shadow-sky-900/40 backdrop-blur">
                        <CardStack items={CHANNEL_CARDS} className="max-w-[420px]" />
                    </div>
                </div>
            </div>
        </section>
    );
}
