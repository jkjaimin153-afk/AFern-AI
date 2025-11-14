import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/SectionHeading";
import { Link } from "wouter";
import { ArrowRight, Brain, Check, Globe, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const offerings = [
  {
    title: "AI voice concierge",
    copy: "24/7 phone agents that replicate your tone, answer questions, and qualify every lead before handing off.",
    bullets: [
      "Branded scripts and guardrails baked in from day one",
      "Multi-language coverage across major regions",
      "Summaries + CRM updates pushed automatically",
    ],
    icon: Brain,
  },
  {
    title: "Chat + messaging automation",
    copy: "Guided conversations across SMS, web chat, and social DMs that qualify, schedule, and capture payments without friction.",
    bullets: [
      "Smart triage, follow-up nudges, and deposit collection",
      "Works with HubSpot, Salesforce, and ServiceTitan",
      "Knowledge base trained on your FAQs and compliance notes",
    ],
    icon: MessageSquare,
  },
  {
    title: "Conversion-first websites",
    copy: "High-performing landing pages and sites from our design studio, so every campaign has a premium destination.",
    bullets: [
      "Tailored messaging and conversion-focused copy",
      "Modern, responsive layouts with premium visuals",
      "Analytics and experimentation ready from day one",
    ],
    icon: Globe,
  },
];

const outcomes = [
  {
    title: "Capture every lead",
    copy: "Calls, chats, and forms feed into one playbook so no enquiry slips through.",
  },
  {
    title: "Reduce manual busywork",
    copy: "Automations log notes, schedule follow-ups, and collect payments without extra headcount.",
  },
  {
    title: "Launch faster",
    copy: "Most deployments go live in under 30 days with dedicated project and success leads.",
  },
];

const steps = [
  {
    phase: "01 • Scope",
    title: "Plan & align",
    copy: "Workshop to map goals, scripts, and integrations together.",
  },
  {
    phase: "02 • Build",
    title: "Prototype & train",
    copy: "We design flows, tune prompts, craft web pages, and connect your stack.",
  },
  {
    phase: "03 • Launch",
    title: "Test & optimise",
    copy: "Soft launch, QA, and weekly reviews with clear dashboards and next steps.",
  },
];

const integrations = ["HubSpot", "Salesforce", "Stripe", "Calendly", "ServiceTitan", "Clio"];
const marqueeLogos = [
  { name: "HubSpot", color: "#334155" },
  { name: "Salesforce", color: "#334155" },
  { name: "Stripe", color: "#334155" },
  { name: "Calendly", color: "#334155" },
  { name: "Google", color: "#334155" },
  { name: "ServiceTitan", color: "#334155" },
  { name: "Clio", color: "#334155" },
  { name: "Zapier", color: "#334155" },
  { name: "Zendesk", color: "#334155" },
  { name: "Intercom", color: "#334155" },
  { name: "Freshdesk", color: "#334155" },
  { name: "Jira", color: "#334155" },
];

function LogoMarquee() {
  const items = [...marqueeLogos, ...marqueeLogos];
  return (
    <div className="relative mt-16 overflow-hidden">
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-background via-background/85 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background via-background/85 to-transparent" />
      <motion.div
        className="flex items-center gap-6 md:gap-10"
        style={{ width: "max-content" }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 34, ease: "linear", repeat: Infinity }}
      >
        {items.map((item, idx) => (
          <div key={`${item.name}-${idx}`} className="flex items-center gap-6">
            <span className="text-3xl font-semibold tracking-[0.08em] text-foreground/80">
              {item.name}
            </span>
            <span className="text-lg text-muted-foreground/60">•</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Product() {
  const heroOrbs = [
    {
      size: "28rem",
      top: "-12%",
      left: "-16%",
      gradient: "bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.22)_0%,rgba(37,99,235,0)_70%)]",
      delay: 0,
    },
    {
      size: "22rem",
      bottom: "-24%",
      right: "-10%",
      gradient: "bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.18)_0%,rgba(14,165,233,0)_70%)]",
      delay: 1.8,
    },
  ];

  const launchOrbs = [
    {
      size: "24rem",
      top: "-30%",
      left: "-14%",
      gradient: "bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.2)_0%,rgba(37,99,235,0)_70%)]",
      delay: 0.8,
    },
    {
      size: "18rem",
      bottom: "-28%",
      right: "-8%",
      gradient: "bg-[radial-gradient(circle_at_center,rgba(148,163,184,0.18)_0%,rgba(148,163,184,0)_70%)]",
      delay: 2.4,
    },
  ];

  return (
    <div className="min-h-screen bg-background page-dots">
      <section className="relative overflow-hidden pt-20 pb-18 md:pt-24 md:pb-22">
        <div className="absolute inset-0 hero-grid opacity-30" />
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {heroOrbs.map((orb, idx) => (
            <motion.div
              key={`hero-orb-${idx}`}
              className={`absolute ${orb.gradient} blur-[120px] mix-blend-screen`}
              style={{
                width: orb.size,
                height: orb.size,
                top: orb.top,
                left: orb.left,
                right: orb.right,
                bottom: orb.bottom,
              }}
              initial={{ scale: 0.92, opacity: 0.26 }}
              animate={{
                scale: [0.92, 1.06, 0.98, 1.04, 0.92],
                x: [0, 16, -12, 10, 0],
                y: [0, -14, 12, -10, 0],
                opacity: [0.22, 0.3, 0.2, 0.28, 0.22],
              }}
              transition={{ duration: 24, repeat: Infinity, ease: "easeInOut", delay: orb.delay }}
            />
          ))}
        </div>
        <div className="container relative z-10 mx-auto max-w-6xl px-6">
          <motion.div
            className="space-y-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="space-y-6">
              <h1 className="text-[2.8rem] font-semibold leading-tight text-foreground md:text-[3.2rem]">
                Everything you need to automate your communication.
              </h1>
              <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">
                Enterprise-grade features designed for small businesses. No hidden fees—just powerful AI that works.
              </p>
            </div>

            <div className="grid gap-7 text-left md:grid-cols-3">
              {offerings.map((offering) => (
                <div
                  key={offering.title}
                  className="flex h-full flex-col rounded-3xl border border-border/60 bg-white/92 p-7 text-center shadow-[0_30px_70px_-32px_rgba(15,23,42,0.16)] backdrop-blur transition hover:-translate-y-1 hover:shadow-[0_36px_82px_-34px_rgba(15,23,42,0.2)]"
                >
                  <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100">
                    <offering.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="mt-5 text-[1.55rem] font-semibold text-foreground">{offering.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-foreground/75">{offering.copy}</p>
                  <div className="mt-5 grow space-y-3 text-base text-foreground/70">
                    {offering.bullets.map((point) => (
                      <div key={point} className="flex items-start gap-2 text-left">
                        <span className="mt-1 text-[#2563EB]">⚡</span>
                        <span className="flex-1 leading-relaxed">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <Link href="/demo">
                <Button className="h-12 w-full rounded-full bg-gradient-to-r from-[#2563EB] to-[#1F3557] px-9 text-base font-semibold text-white shadow-[0_22px_50px_-20px_rgba(37,99,235,0.24)] transition hover:opacity-95 sm:w-auto">
                  Request a demo
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="pt-20 pb-16 text-center md:pt-24 md:pb-18">
        <div className="container mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-foreground/60">
            Trusted by teams using
          </p>
          <LogoMarquee />
        </div>
      </section>

      <section className="py-22 md:py-28">
        <div className="container mx-auto max-w-6xl px-6">
          <motion.div
            className="space-y-6 rounded-[30px] border border-border/60 bg-white p-10 shadow-[0_36px_80px_-36px_rgba(15,23,42,0.24)]"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="space-y-3 text-center md:text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-foreground/60">
                Performance report
              </p>
              <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
                Intelligent insights from every conversation.
              </h2>
            </div>
            <div className="mx-auto w-full">
              <img
                src="/images/dashboard-insights.jpg"
                alt="Client interaction insights dashboard"
                className="mx-auto w-full max-w-4xl rounded-[24px] border border-border/50 object-cover shadow-[0_30px_80px_-36px_rgba(15,23,42,0.28)]"
              />
            </div>
            <div className="grid gap-6 text-base text-muted-foreground md:grid-cols-2 md:text-lg">
              {[
                "Real-time interaction insights show how every caller engages with AI or human agents.",
                "Actionable analytics highlight topics, sentiment, and recommended next steps.",
                "Performance monitoring tracks response times, agent talk time, and quality.",
                "Customer experience improves as optimisation opportunities surface automatically.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-2 inline-flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[#1F3557]" />
                  <span className="leading-relaxed text-foreground/85">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24 md:py-28">
        <div className="absolute inset-0 gradient-midnight opacity-80" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background via-transparent" />
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {launchOrbs.map((orb, idx) => (
            <motion.div
              key={`launch-orb-${idx}`}
              className={`absolute ${orb.gradient} blur-[120px] mix-blend-screen`}
              style={{
                width: orb.size,
                height: orb.size,
                top: orb.top,
                left: orb.left,
                right: orb.right,
                bottom: orb.bottom,
              }}
              initial={{ scale: 0.9, opacity: 0.24 }}
              animate={{
                scale: [0.9, 1.04, 0.96, 1.08, 0.9],
                x: [0, -12, 10, -8, 0],
                y: [0, 10, -12, 8, 0],
                opacity: [0.2, 0.3, 0.18, 0.28, 0.2],
              }}
              transition={{ duration: 26, repeat: Infinity, ease: "easeInOut", delay: orb.delay }}
            />
          ))}
        </div>
        <div className="container relative z-10 mx-auto max-w-5xl px-6">
            <div className="rounded-[30px] border border-border/70 bg-white/92 px-10 py-12 shadow-[0_32px_80px_-34px_rgba(15,23,42,0.28)] backdrop-blur">
            <SectionHeading
              align="center"
              title="A simple three-step launch."
              description="Plan it together, build it fast, and keep improving once you’re live."
            />

            <div className="relative mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-3">
              <div className="hidden md:block absolute top-16 left-20 right-20 h-px bg-gradient-to-r from-transparent via-[#4C6EF5]/35 to-transparent" />
              {steps.map((step) => (
                <div
                  key={step.title}
                  className="relative z-10 flex flex-col rounded-[28px] border border-border/60 bg-white px-7 py-9 text-left shadow-[0_26px_70px_-34px_rgba(15,23,42,0.22)]"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.42em] text-accent/70">
                    {step.phase}
                  </p>
                  <h3 className="mt-4 text-xl font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-3 text-base text-foreground/70 leading-relaxed">{step.copy}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <Link href="/demo">
                <Button className="h-12 w-full rounded-full bg-gradient-to-r from-[#2563EB] to-[#1F3557] px-9 text-base font-semibold text-white shadow-[0_22px_50px_-20px_rgba(37,99,235,0.24)] transition hover:opacity-95 sm:w-auto">
                  Request a demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24 pt-12 md:pb-30" />
    </div>
  );
}
