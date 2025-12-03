"use client"

import { useEffect, useRef, useState } from "react"
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  Bot,
  Check,
  Clock3,
  Facebook,
  Globe2,
  Instagram,
  Layers,
  LineChart,
  MessageCircle,
  MessageSquare,
  Mic,
  PhoneCall,
  Radar,
  Shield,
  ShieldCheck,
  Sparkles,
  Star,
  Utensils,
  Waves,
} from "lucide-react"
import { ChromaFlow, Shader, Swirl } from "shaders/react"
import { motion } from "framer-motion"

import { CustomCursor } from "@/components/custom-cursor"
import { GrainOverlay } from "@/components/grain-overlay"
import { MagneticButton } from "@/components/magnetic-button"
import { SlideTextButton, AppleActivityCard, LiquidGlass, WhatsappChatCard, InstagramCard } from "@/components/kokonut"

const navItems = [
  { label: "Hero", index: 0 },
  { label: "Channels", index: 1 },
  { label: "WhatsApp", index: 2 },
  { label: "Social", index: 3 },
  { label: "Workflows", index: 4 },
  { label: "Voice", index: 5 },
  { label: "Platform", index: 6 },
  { label: "Onboarding", index: 7 },
]

const channels = [
  {
    title: "WhatsApp Agent",
    description: "Personalized customer conversations",
    badge: "Most Popular",
    icon: MessageSquare,
    accent: "from-[#1a5fd5] to-[#4fb3ff]",
  },
  {
    title: "Instagram Agent",
    description: "DM + comment automation",
    badge: "New",
    icon: Instagram,
    accent: "from-[#0f2a63] to-[#4aa6ff]",
  },
  {
    title: "Facebook Messenger",
    description: "Customer support + post comments",
    badge: "Live",
    icon: Facebook,
    accent: "from-[#174478] to-[#52c2ff]",
  },
]

const whatsappChat = [
  {
    title: "Booking",
    body: "Reserved a table for 4 at 7:30 PM. Added vegan preference to the profile.",
  },
  {
    title: "Reminder",
    body: "Hi Sara, your table is confirmed for tonight. Reply RESCHEDULE to adjust.",
  },
  {
    title: "Follow-up",
    body: "How was your visit? Share a quick rating so we can improve your next experience.",
  },
  {
    title: "Review request",
    body: "Thank you for dining with us. Here’s your link to drop a review—it helps us a ton.",
  },
]

const whatsappFeatures = [
  "Instant customer recognition",
  "Smart human-like memory",
  "Birthday & anniversary wishes",
  "WhatsApp appointment booking",
  "Monthly follow-ups",
  "Review collection",
  "Personalized campaigns",
  "Shared memory across agents",
]

const socialFeatures = [
  "Direct Message Automation",
  "Comment Auto-Replies",
  "Spam Filtering",
  "Sentiment Detection",
  "Engagement Analytics",
  "Conversation Trends",
]

const workflowHighlights = [
  "Smart reservation system",
  "Staff alerts",
  "Personalized guest follow-ups",
  "Feedback management",
]

const modules = [
  "Marketing Automation (official Meta API)",
  "Smart Message Queues",
  "Anti-Spam Protection",
  "Bulk Campaign Manager",
  "Intelligent CRM",
  "Transaction Tracking",
  "Predictive Analytics",
  "Employee Reports",
  "Smart Memory Engine",
]

const enterpriseStrip = ["End-to-End Encryption", "99.9% Uptime", "Scalable Infrastructure", "Multi-Channel Engine"]

const onboardingSteps = [
  "Fill onboarding form",
  "Custom AI creation",
  "Receive credentials",
  "Access dashboard",
  "Monitor & scale",
]

const footerColumns: Record<string, string[]> = {
  "AI Agents": ["WhatsApp Agent", "Instagram Agent", "Messenger Agent", "Call Agent", "Web Voice Agent"],
  "Platform Features": ["Automation Studio", "Campaign Manager", "Analytics", "Smart Memory", "Security"],
  Company: ["About Velina", "Careers", "Studios", "Blog", "Press"],
  Legal: ["Privacy Policy", "Terms of Service", "Data Processing", "Security", "Contact"],
}

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const shaderContainerRef = useRef<HTMLDivElement>(null)
  const touchStartY = useRef(0)
  const touchStartX = useRef(0)
  const scrollThrottleRef = useRef<number>()
  const [currentSection, setCurrentSection] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const checkShaderReady = () => {
      if (shaderContainerRef.current) {
        const canvas = shaderContainerRef.current.querySelector("canvas")
        if (canvas && canvas.width > 0 && canvas.height > 0) {
          setIsLoaded(true)
          return true
        }
      }
      return false
    }

    if (checkShaderReady()) return

    const intervalId = setInterval(() => {
      if (checkShaderReady()) {
        clearInterval(intervalId)
      }
    }, 120)

    const fallbackTimer = setTimeout(() => setIsLoaded(true), 1200)

    return () => {
      clearInterval(intervalId)
      clearTimeout(fallbackTimer)
    }
  }, [])

  const scrollToSection = (index: number) => {
    if (scrollContainerRef.current) {
      const sectionWidth = scrollContainerRef.current.offsetWidth
      scrollContainerRef.current.scrollTo({
        left: sectionWidth * index,
        behavior: "smooth",
      })
      setCurrentSection(index)
    }
  }

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY
      touchStartX.current = e.touches[0].clientX
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (Math.abs(e.touches[0].clientY - touchStartY.current) > 10) {
        e.preventDefault()
      }
    }

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndY = e.changedTouches[0].clientY
      const touchEndX = e.changedTouches[0].clientX
      const deltaY = touchStartY.current - touchEndY
      const deltaX = touchStartX.current - touchEndX

      if (Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > 50) {
        if (deltaY > 0 && currentSection < 7) {
          scrollToSection(currentSection + 1)
        } else if (deltaY < 0 && currentSection > 0) {
          scrollToSection(currentSection - 1)
        }
      }
    }

    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener("touchstart", handleTouchStart, { passive: true })
      container.addEventListener("touchmove", handleTouchMove, { passive: false })
      container.addEventListener("touchend", handleTouchEnd, { passive: true })
    }

    return () => {
      if (container) {
        container.removeEventListener("touchstart", handleTouchStart)
        container.removeEventListener("touchmove", handleTouchMove)
        container.removeEventListener("touchend", handleTouchEnd)
      }
    }
  }, [currentSection])

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault()

        if (!scrollContainerRef.current) return

        scrollContainerRef.current.scrollBy({
          left: e.deltaY,
          behavior: "instant",
        })

        const sectionWidth = scrollContainerRef.current.offsetWidth
        const newSection = Math.round(scrollContainerRef.current.scrollLeft / sectionWidth)
        if (newSection !== currentSection) {
          setCurrentSection(newSection)
        }
      }
    }

    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false })
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel)
      }
    }
  }, [currentSection])

  useEffect(() => {
    const handleScroll = () => {
      if (scrollThrottleRef.current) return

      scrollThrottleRef.current = requestAnimationFrame(() => {
        if (!scrollContainerRef.current) {
          scrollThrottleRef.current = undefined
          return
        }

        const sectionWidth = scrollContainerRef.current.offsetWidth
        const scrollLeft = scrollContainerRef.current.scrollLeft
        const newSection = Math.round(scrollLeft / sectionWidth)

        if (newSection !== currentSection && newSection >= 0 && newSection <= 7) {
          setCurrentSection(newSection)
        }

        scrollThrottleRef.current = undefined
      })
    }

    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener("scroll", handleScroll, { passive: true })
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll)
      }
      if (scrollThrottleRef.current) {
        cancelAnimationFrame(scrollThrottleRef.current)
      }
    }
  }, [currentSection])

  return (
    <main className="relative h-screen w-full overflow-hidden bg-[#050b18] text-white">
      <CustomCursor />
      <GrainOverlay />

      <div
        ref={shaderContainerRef}
        className={`fixed inset-0 z-0 transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        style={{ contain: "strict" }}
      >
        <Shader className="h-full w-full opacity-80">
          <Swirl
            colorA="#081229"
            colorB="#0f2f5c"
            speed={0.7}
            detail={0.9}
            blend={55}
            coarseX={32}
            coarseY={28}
            mediumX={38}
            mediumY={36}
            fineX={44}
            fineY={44}
          />
          <ChromaFlow
            baseColor="#0b2d66"
            upColor="#0a244d"
            downColor="#125cbe"
            leftColor="#0c3e7e"
            rightColor="#1677ff"
            intensity={0.95}
            radius={1.6}
            momentum={22}
            maskType="alpha"
            opacity={0.9}
          />
        </Shader>
        <div className="absolute inset-0 bg-gradient-to-b from-[#050b18]/90 via-[#071029]/92 to-[#050b18]" />
        <div className="absolute inset-x-10 top-0 h-28 rounded-full bg-[#3ba7ff]/15 blur-3xl" />
        <div className="absolute -left-24 top-52 h-56 w-56 rounded-full bg-[#4fd1f9]/12 blur-3xl" />
        <div className="absolute -right-10 bottom-24 h-64 w-64 rounded-full bg-[#1a4ea1]/18 blur-3xl" />
      </div>

      <div className={`relative z-10 transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-5 md:px-10">
          <button onClick={() => scrollToSection(0)} className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#1c64ec] to-[#3fb7ff] text-lg font-bold text-white shadow-lg shadow-sky-900/40">
              V
            </div>
            <div className="text-left">
              <p className="text-base font-semibold tracking-tight text-white">Velina AI</p>
              <p className="text-xs text-slate-200/70">Intelligent communications</p>
            </div>
          </button>
          <div className="hidden items-center gap-4 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl lg:flex">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.index)}
                className={`relative px-3 py-1 text-sm transition-colors ${
                  currentSection === item.index ? "text-white" : "text-slate-200/70 hover:text-white"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-[#5fc1ff] transition-all duration-300 ${
                    currentSection === item.index ? "w-8" : ""
                  }`}
                />
              </button>
            ))}
          </div>
          <div className="hidden items-center gap-3 md:flex">
            <MagneticButton variant="secondary" size="default" className="px-4">
              Get Started
            </MagneticButton>
            <MagneticButton variant="primary" size="default" className="px-4">
              Schedule a Demo
            </MagneticButton>
          </div>
        </nav>

        <div
          ref={scrollContainerRef}
          data-scroll-container
          className={`relative z-10 mt-24 flex h-[calc(100vh-24px)] overflow-x-auto overflow-y-hidden scroll-smooth transition-opacity duration-700 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {/* SECTION 1 — HERO */}
          <section className="flex min-h-[calc(100vh-24px)] w-screen shrink-0 items-center px-6 pb-14 pt-6 md:px-12">
            <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="space-y-6"
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.16em] text-slate-100/80">
                  <Sparkles className="h-4 w-4 text-[#5fc1ff]" />
                  Velina AI — Launch Edition
                </div>
                <h1 className="text-4xl font-semibold leading-[1.1] text-white drop-shadow-sm sm:text-5xl lg:text-6xl">
                  Velina AI — Intelligent Communications for Modern Business
                </h1>
                <p className="max-w-2xl text-lg leading-relaxed text-slate-200/90">
                  Transform your customer interactions across WhatsApp, voice calls, and website with AI-powered agents.
                  Built for enterprises that expect precision, security, and always-on performance.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <MagneticButton size="lg" variant="primary" className="px-7">
                    Get Started
                  </MagneticButton>
                  <MagneticButton size="lg" variant="secondary" className="px-7">
                    Schedule a Demo
                  </MagneticButton>
                  <SlideTextButton label="4-minute overview" />
                </div>
                <div className="flex flex-wrap gap-3">
                  {[
                    { label: "Enterprise Grade", icon: ShieldCheck },
                    { label: "Secure", icon: Shield },
                    { label: "24/7 Automation", icon: Clock3 },
                  ].map(({ label, icon: Icon }) => (
                    <div
                      key={label}
                      className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100/90"
                    >
                      <Icon className="h-4 w-4 text-[#5fc1ff]" />
                      {label}
                    </div>
                  ))}
                </div>
                <LiquidGlass>
                  <div className="mb-3 flex items-center justify-between text-sm text-white/80">
                    <span className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-[#5fc1ff]" />
                      Kokonut motion layer
                    </span>
                    <span className="rounded-full bg-black/20 px-2 py-1 text-[11px] text-white/80">Live preview</span>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <AppleActivityCard title="Avg First Response" value="1.3s" />
                    <AppleActivityCard title="CSAT" value="4.9 / 5" />
                  </div>
                </LiquidGlass>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
                className="relative"
              >
                <div className="absolute -left-6 -top-10 h-28 w-28 rounded-full bg-[#65d1ff]/15 blur-3xl" />
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-white/5 to-[#1f4d96]/30 p-6 shadow-2xl shadow-sky-900/30 backdrop-blur">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-slate-100/80">Multi-channel signal</p>
                    <span className="rounded-full bg-[#5fc1ff]/20 px-3 py-1 text-xs text-[#b5e7ff]">Live</span>
                  </div>
                  <div className="mt-6 grid grid-cols-3 gap-4">
                    {[{ icon: MessageCircle, label: "Chat" }, { icon: PhoneCall, label: "Call" }, { icon: Mic, label: "Voice" }].map(
                      ({ icon: Icon, label }, idx) => (
                        <div
                          key={label}
                          className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 text-center shadow-lg shadow-sky-900/30 ${
                            idx === 0 ? "animate-pulse" : ""
                          }`}
                        >
                          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#1c64ec] to-[#4ac8ff] text-white shadow-md shadow-sky-900/40">
                            <Icon className="h-5 w-5" />
                          </div>
                          <p className="text-sm font-semibold text-white">{label}</p>
                          <p className="text-xs text-slate-200/70">AI agents online</p>
                        </div>
                      ),
                    )}
                  </div>
                  <div className="mt-6 rounded-2xl border border-white/5 bg-gradient-to-r from-[#0d1d3e] via-[#123669] to-[#0d1d3e] p-4 shadow-inner shadow-sky-900/40">
                    <div className="mb-2 flex items-center justify-between text-xs text-slate-200/70">
                      <span>Waveform</span>
                      <span>Stable</span>
                    </div>
                    <div className="relative h-24 overflow-hidden rounded-xl bg-white/5">
                      <div className="absolute inset-0">
                        <div className="absolute left-2 top-6 h-12 w-12 animate-ping rounded-full bg-[#5fc1ff]/10 blur-2xl" />
                        <div className="absolute right-4 bottom-4 h-16 w-16 animate-pulse rounded-full bg-[#1b6fdb]/10 blur-2xl" />
                      </div>
                      <div className="relative flex h-full items-center gap-2 px-3">
                        {Array.from({ length: 30 }).map((_, idx) => (
                          <div
                            key={idx}
                            className="w-1.5 rounded-full bg-gradient-to-b from-[#5fc1ff] to-[#1f78ff]"
                            style={{
                              height: `${30 + Math.sin(idx + 1) * 18 + (idx % 4) * 6}px`,
                              animation: "pulse 2s ease-in-out infinite",
                              animationDelay: `${idx * 0.06}s`,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 grid grid-cols-3 gap-3 text-xs text-slate-100/80">
                    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                      <p className="text-white">Avg response</p>
                      <p className="text-lg font-semibold text-[#5fc1ff]">1.3s</p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                      <p className="text-white">CSAT</p>
                      <p className="text-lg font-semibold text-[#74e1c5]">4.9/5</p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                      <p className="text-white">Channels</p>
                      <p className="text-lg font-semibold text-[#b5e7ff]">5 linked</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* SECTION 2 — MULTI-CHANNEL OVERVIEW */}
          <section className="flex min-h-[calc(100vh-24px)] w-screen shrink-0 items-center px-6 pb-14 pt-6 md:px-12">
            <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-200/70">Multi-channel agents overview</p>
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">Channels your customers already use</h2>
                <p className="max-w-2xl text-base text-slate-200/90">
                  Velina AI provides seamless communication across every major touchpoint from messaging to voice. One
                  platform, one shared memory, everywhere your brand speaks.
                </p>
                <div className="hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#0e2044] to-[#153e7a] p-4 text-sm text-slate-100/80 shadow-lg shadow-sky-900/30 lg:block">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                      <Bot className="h-5 w-5 text-[#5fc1ff]" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Unified AI core</p>
                      <p className="text-xs text-slate-200/70">Channel icons morph into one AI brain</p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                    <div className="flex items-center gap-2 text-xs text-slate-200/70">
                      <MessageCircle className="h-4 w-4 text-[#5fc1ff]" />
                      <Instagram className="h-4 w-4 text-[#5fc1ff]" />
                      <Facebook className="h-4 w-4 text-[#5fc1ff]" />
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-200/70">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#5fc1ff]" />
                      Flow synced
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-2 text-xs text-slate-200/70">
                    <Waves className="h-4 w-4 text-[#5fc1ff]" />
                    Live waveform shows sentiment across channels in real time.
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {channels.map(({ title, description, badge, icon: Icon, accent }) => (
                  <div
                    key={title}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-white/5 to-white/5 p-5 shadow-lg shadow-sky-900/30"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-0 transition duration-300 group-hover:opacity-10`} />
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-100/80">{badge}</span>
                    </div>
                    <p className="text-lg font-semibold text-white">{title}</p>
                    <p className="mt-2 text-sm text-slate-200/80">{description}</p>
                    <button className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#7ad0ff]">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 3 — WHATSAPP AGENT */}
          <section className="flex min-h-[calc(100vh-24px)] w-screen shrink-0 items-center px-6 pb-14 pt-6 md:px-12">
            <div className="mx-auto grid w-full max-w-6xl gap-8 rounded-3xl border border-emerald-500/10 bg-gradient-to-br from-[#07161a] via-[#0b2b2f] to-[#081724] p-8 shadow-xl shadow-emerald-900/20 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs uppercase tracking-[0.16em] text-emerald-100">
                  Soft green glow
                </div>
                <h3 className="text-3xl font-semibold text-white sm:text-4xl">WhatsApp Agent (Personalization Engine)</h3>
                <p className="text-base text-emerald-50/85">
                  Human-like memory, recognition, and campaigns running on the channel your customers open first.
                </p>
                <div className="relative overflow-hidden rounded-2xl border border-emerald-400/15 bg-black/10 p-4 shadow-lg shadow-emerald-900/30">
                  <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-emerald-400/15 blur-3xl" />
                  <div className="absolute -left-16 bottom-0 h-32 w-32 rounded-full bg-emerald-300/10 blur-3xl" />
                  <div className="relative space-y-3">
                    {whatsappChat.map((item, idx) => (
                      <div
                        key={item.title}
                        className="flex items-start gap-3 rounded-2xl border border-emerald-400/15 bg-emerald-400/10 px-4 py-3 shadow-inner shadow-emerald-900/20"
                      >
                        <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-100">
                          <MessageCircle className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="text-sm font-semibold text-white">{item.title}</p>
                            <span className="text-[10px] uppercase tracking-[0.16em] text-emerald-100/70">
                              {idx === 0 ? "Live" : "Auto"}
                            </span>
                          </div>
                          <p className="text-sm text-emerald-50/80">{item.body}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-4">
                  <WhatsappChatCard />
                </div>
              </div>
              <div className="flex flex-col justify-between gap-6">
                <div className="grid grid-cols-2 gap-3">
                  {whatsappFeatures.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 rounded-xl border border-emerald-400/20 bg-emerald-400/5 px-3 py-3 text-sm text-emerald-50"
                    >
                      <Check className="h-4 w-4 text-emerald-200" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <MagneticButton size="lg" variant="primary" className="px-6">
                  Get Started with WhatsApp Agent
                </MagneticButton>
                <div className="flex items-center gap-3 rounded-2xl border border-emerald-400/15 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-50">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/20 text-emerald-100">
                    <Layers className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Shared memory across agents</p>
                    <p className="text-emerald-50/70">One profile powers every channel, instantly.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 4 — SOCIAL MEDIA AUTOMATION */}
          <section className="flex min-h-[calc(100vh-24px)] w-screen shrink-0 items-center px-6 pb-14 pt-6 md:px-12">
            <div className="mx-auto grid w-full max-w-6xl gap-8 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-sky-900/30 lg:grid-cols-2">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-200/70">Instagram + Facebook</p>
                <h3 className="text-3xl font-semibold text-white sm:text-4xl">Social Media Automation</h3>
                <p className="text-base text-slate-200/85">
                  Live engagement automation for DMs, comments, spam filtering, and sentiment-aware replies that keep
                  your community close.
                </p>
                <InstagramCard />
                <div className="grid grid-cols-2 gap-3">
                  {socialFeatures.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-sm text-slate-100"
                    >
                      <BadgeCheck className="h-4 w-4 text-[#7ad0ff]" />
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-xs text-slate-100/80">
                  <Sparkles className="h-4 w-4 text-[#5fc1ff]" />
                  Powered by Velina AI
                </div>
              </div>
              <div className="relative grid gap-4 rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1f41] via-[#112f63] to-[#0b1b34] p-5 shadow-xl shadow-sky-900/30">
                <div className="absolute -left-10 -top-10 h-24 w-24 rounded-full bg-[#5fc1ff]/15 blur-3xl" />
                <div className="absolute -right-10 bottom-6 h-28 w-28 rounded-full bg-[#1e7bff]/15 blur-3xl" />
                <div className="relative grid gap-4 lg:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg shadow-sky-900/30">
                    <div className="mb-3 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-slate-200/80">
                        <Instagram className="h-5 w-5 text-[#f4a6ff]" />
                        Instagram DM
                      </div>
                      <span className="rounded-full bg-white/10 px-2 py-1 text-[10px] text-slate-100/80">Auto-reply</span>
                    </div>
                    <div className="space-y-3 text-sm text-white">
                      <div className="rounded-xl bg-white/10 px-3 py-2">DM: “Can I book a table for Saturday?”</div>
                      <div className="rounded-xl bg-gradient-to-r from-[#1c64ec]/40 to-[#5fc1ff]/40 px-3 py-2">
                        Velina: “Absolutely. I’ve booked you for 7 PM with outdoor seating.”
                      </div>
                      <div className="rounded-xl bg-white/10 px-3 py-2">Analytics: sentiment trending ↑</div>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg shadow-sky-900/30">
                    <div className="mb-3 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-slate-200/80">
                        <Facebook className="h-5 w-5 text-[#82b3ff]" />
                        Messenger Chat
                      </div>
                      <span className="rounded-full bg-white/10 px-2 py-1 text-[10px] text-slate-100/80">Live</span>
                    </div>
                    <div className="space-y-3 text-sm text-white">
                      <div className="rounded-xl bg-white/10 px-3 py-2">Comment: “Is the patio open tonight?”</div>
                      <div className="rounded-xl bg-gradient-to-r from-[#1e95ff]/40 to-[#7ad0ff]/40 px-3 py-2">
                        Auto-reply: “Yes! Patio is open until 11 PM.”
                      </div>
                      <div className="rounded-xl bg-white/10 px-3 py-2">Spam filtering • Sentiment detection</div>
                    </div>
                  </div>
                </div>
                <div className="relative rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-100">
                  <div className="absolute right-4 top-4 flex items-center gap-1 text-[10px] uppercase tracking-[0.16em] text-[#7ad0ff]">
                    <Activity className="h-3.5 w-3.5" />
                    Live charts
                  </div>
                  <p className="text-white">Engagement analytics</p>
                  <div className="mt-3 flex items-end gap-2">
                    {[18, 24, 30, 28, 36, 32, 40, 44, 38, 48].map((value, idx) => (
                      <div
                        key={idx}
                        className="w-3 rounded-full bg-gradient-to-t from-[#0f2f63] to-[#5fc1ff]"
                        style={{ height: `${value}px` }}
                      />
                    ))}
                    <div className="ml-3 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-100/80">
                      <LineChart className="h-4 w-4 text-[#5fc1ff]" />
                      Conversation trends rising
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 5 — SMART WORKFLOWS */}
          <section className="flex min-h-[calc(100vh-24px)] w-screen shrink-0 items-center px-6 pb-14 pt-6 md:px-12">
            <div className="mx-auto w-full max-w-6xl space-y-6 rounded-3xl border border-white/10 bg-gradient-to-br from-[#0a1024] via-[#0f1f40] to-[#0a142c] p-8 shadow-xl shadow-sky-900/30">
              <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-200/70">Smart workflows for businesses</p>
                  <h3 className="text-3xl font-semibold text-white sm:text-4xl">Use-Case Highlight: Restaurant Booking</h3>
                  <p className="max-w-3xl text-base text-slate-200/85">
                    Smart reservation system with live staff alerts, personalized follow-ups, and feedback capture—fully
                    automated.
                  </p>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-200/80">
                  <Clock3 className="h-4 w-4 text-[#7ad0ff]" />
                  Live Dialogue UI
                </div>
              </div>
              <div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
                <div className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg shadow-sky-900/30">
                  <div className="flex flex-wrap gap-2">
                    {workflowHighlights.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-100/80"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="space-y-3 text-sm text-white">
                    {[
                      { speaker: "Customer", text: "Can I book a table for 6 tomorrow at 8 PM?" },
                      { speaker: "Velina", text: "Booked. Adding Chef’s tasting menu. Need a birthday message prepared?" },
                      { speaker: "Customer", text: "Yes, and text me 2 hours before." },
                      { speaker: "Velina", text: "Done. Staff alerted. You’ll get a reminder + Google Map pin." },
                    ].map((line, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2 shadow-inner shadow-sky-900/10"
                      >
                        <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#1c64ec] to-[#5fc1ff] text-xs font-semibold">
                          {line.speaker[0]}
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-[0.14em] text-slate-200/70">{line.speaker}</p>
                          <p className="text-slate-50/90">{line.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg shadow-sky-900/30">
                    <div className="flex items-center gap-2 text-sm text-slate-100/80">
                      <Utensils className="h-5 w-5 text-[#7ad0ff]" />
                      Staff alerts + personalized follow-ups
                    </div>
                    <div className="mt-3 grid grid-cols-3 gap-3 text-center text-sm text-slate-100/80">
                      {[
                        { label: "20+ hours saved/week", value: "20+" },
                        { label: "90% booking automation", value: "90%" },
                        { label: "Zero no-show tracking", value: "0" },
                      ].map((item) => (
                        <div key={item.label} className="rounded-xl border border-white/10 bg-white/5 p-3">
                          <p className="text-2xl font-semibold text-white">{item.value}</p>
                          <p className="text-[11px] text-slate-200/70">{item.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg shadow-sky-900/30">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                        <Star className="h-5 w-5 text-[#ffc56f]" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">Marco Rossi, Bella Italia</p>
                        <p className="text-xs text-slate-200/70">Testimonial with background blur + spotlight</p>
                      </div>
                    </div>
                    <p className="text-base text-slate-100/90">
                      “Velina handles every guest message like a seasoned host. Bookings, reminders, reviews—it’s on
                      autopilot.”
                    </p>
                    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-200/80">
                      <BadgeCheck className="h-4 w-4 text-[#7ad0ff]" />
                      Spotlight animation keeps the story alive.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 6 — CALL AGENT + WEB VOICE AGENT */}
          <section className="flex min-h-[calc(100vh-24px)] w-screen shrink-0 items-center px-6 pb-14 pt-6 md:px-12">
            <div className="mx-auto grid w-full max-w-6xl gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-sky-900/30 lg:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0c1f3d] to-[#103462] p-5 shadow-lg shadow-sky-900/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-slate-200/80">
                    <PhoneCall className="h-5 w-5 text-[#7ad0ff]" />
                    Call Agent
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/10 px-2 py-1 text-[10px] text-[#b5e7ff]">
                    Launching Soon in India
                  </span>
                </div>
                <p className="mt-2 text-base text-slate-200/85">
                  Automated reminders, natural voice calls, rescheduling, follow-ups, and multilingual responses with
                  business-hour awareness.
                </p>
                <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-slate-100/90">
                  {[
                    "Automated reminders",
                    "Natural voice calls",
                    "Rescheduling",
                    "Follow-ups",
                    "Multilingual",
                    "Business hours handling",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                      <Check className="h-4 w-4 text-[#7ad0ff]" />
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-200/80">
                  <Waves className="h-4 w-4 text-[#7ad0ff]" />
                  Incoming call UI animation + sentiment-aware waveform
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0c2b47] to-[#0f3f73] p-5 shadow-lg shadow-sky-900/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-slate-200/80">
                    <Mic className="h-5 w-5 text-[#7ad0ff]" />
                    Web Voice Agent
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/10 px-2 py-1 text-[10px] text-[#b5e7ff]">
                    Always on
                  </span>
                </div>
                <p className="mt-2 text-base text-slate-200/85">
                  Voice-enabled web assistant with live page-aware context, 24/7 support, human handoff, and multilingual
                  answers.
                </p>
                <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-slate-100/90">
                  {["Voice-enabled web assistant", "Live page-aware context", "24/7 support", "Human handoff", "Multilingual", "Guided journeys"].map(
                    (item) => (
                      <div key={item} className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                        <Check className="h-4 w-4 text-[#7ad0ff]" />
                        {item}
                      </div>
                    ),
                  )}
                </div>
                <div className="mt-4 flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-200/80">
                  <Radar className="h-4 w-4 text-[#7ad0ff]" />
                  Website mic waveform reacts to speech and intent.
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 7 — ENTERPRISE PLATFORM */}
          <section className="flex min-h-[calc(100vh-24px)] w-screen shrink-0 items-center px-6 pb-14 pt-6 md:px-12">
            <div className="mx-auto w-full max-w-6xl space-y-6 rounded-3xl border border-white/10 bg-gradient-to-br from-[#070f22] via-[#0b1c3a] to-[#081426] p-8 shadow-xl shadow-sky-900/30">
              <div className="flex flex-col gap-3">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-200/70">Enterprise Automation Platform</p>
                <h3 className="text-3xl font-semibold text-white sm:text-4xl">Tech + backend seriousness</h3>
                <p className="max-w-3xl text-base text-slate-200/85">
                  Engineered with official Meta APIs, smart queues, encryption, and predictive analytics to keep
                  enterprise communications compliant and scalable.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {modules.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100 shadow-lg shadow-sky-900/30"
                  >
                    <Layers className="mt-1 h-4 w-4 text-[#7ad0ff]" />
                    {item}
                  </div>
                ))}
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {enterpriseStrip.map((item) => (
                  <div key={item} className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                    <ShieldCheck className="h-4 w-4 text-[#7ad0ff]" />
                    <span className="text-sm text-slate-100">{item}</span>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-100 shadow-lg shadow-sky-900/30">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-slate-200/70">
                  <Globe2 className="h-4 w-4 text-[#7ad0ff]" />
                  Dark dashboard mockup • Data flowing between modules
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <div className="h-2 w-full rounded-full bg-gradient-to-r from-[#1c64ec] via-[#5fc1ff] to-[#68e1fd]" />
                  <div className="h-2 w-16 rounded-full bg-gradient-to-r from-[#103262] to-[#1c64ec]" />
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 8 — ONBOARDING + CTA + FOOTER */}
          <section className="flex min-h-[calc(100vh-24px)] w-screen shrink-0 items-center px-6 pb-14 pt-6 md:px-12">
            <div className="mx-auto w-full max-w-6xl space-y-8 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-sky-900/30">
              <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-200/70">Onboarding</p>
                  <h3 className="text-3xl font-semibold text-white sm:text-4xl">5-step flow to launch</h3>
                </div>
                <div className="flex items-center gap-3">
                  <MagneticButton variant="primary" size="default" className="px-5">
                    Get Started
                  </MagneticButton>
                  <MagneticButton variant="secondary" size="default" className="px-5">
                    Schedule a Demo
                  </MagneticButton>
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                {onboardingSteps.map((step, idx) => (
                  <div
                    key={step}
                    className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-5 text-sm text-slate-100 shadow-lg shadow-sky-900/30"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#1c64ec] to-[#5fc1ff] text-base font-semibold text-white">
                      {idx + 1}
                    </div>
                    <p className="font-semibold text-white">{step}</p>
                  </div>
                ))}
              </div>
              <div className="grid gap-6 lg:grid-cols-[1.2fr,0.8fr]">
                <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0e2348] to-[#143768] p-6 shadow-lg shadow-sky-900/30">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-200/80">Final CTA</p>
                      <h4 className="text-2xl font-semibold text-white">
                        Velina AI — Intelligent AI agents for modern business communication.
                      </h4>
                    </div>
                    <Sparkles className="h-6 w-6 text-[#7ad0ff]" />
                  </div>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <MagneticButton variant="primary" size="lg" className="px-6">
                      Get Started
                    </MagneticButton>
                    <MagneticButton variant="secondary" size="lg" className="px-6">
                      Schedule a Demo
                    </MagneticButton>
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-sky-900/30">
                  <p className="text-sm text-slate-200/80">Velocity metrics</p>
                  <div className="mt-3 flex items-center gap-3">
                    {[{ label: "SLA compliance", value: "99.9%" }, { label: "Avg first response", value: "1.3s" }].map(
                      (item) => (
                        <div key={item.label} className="flex-1 rounded-xl border border-white/10 bg-white/5 p-3 text-sm">
                          <p className="text-slate-200/70">{item.label}</p>
                          <p className="text-xl font-semibold text-white">{item.value}</p>
                        </div>
                      ),
                    )}
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-xs text-slate-200/70">
                    <Shield className="h-4 w-4 text-[#7ad0ff]" />
                    Secure, audited, enterprise-ready.
                  </div>
                </div>
              </div>
              <div className="grid gap-6 border-t border-white/5 pt-6 sm:grid-cols-2 lg:grid-cols-4">
                {Object.entries(footerColumns).map(([column, links]) => (
                  <div key={column} className="space-y-3">
                    <p className="text-sm font-semibold text-white">{column}</p>
                    <div className="space-y-2 text-sm text-slate-200/75">
                      {links.map((link) => (
                        <div key={link} className="flex items-center gap-2">
                          <ArrowRight className="h-3.5 w-3.5 text-[#7ad0ff]" />
                          {link}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        <style jsx global>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </main>
  )
}
