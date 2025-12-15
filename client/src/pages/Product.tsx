import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/SectionHeading";
import { Link } from "wouter";
import { Check, ArrowRight, Phone, MessageSquare, Globe, Zap, BarChart3, Shield, Clock, Users, Building2 } from "lucide-react";
import { motion } from "framer-motion";

const serviceTiers = [
  {
    name: "Essential",
    tagline: "For small businesses needing a professional presence and automated communication",
    icon: Globe,
    features: [
      "Simple business website (1–3 pages)",
      "Mobile-optimized, AI-ready design",
      "AI chat agent (FAQ + lead capture)",
      "Basic automation (business hours, notifications)",
      "Monitoring, maintenance, and monthly improvements",
    ],
    cta: "Start with Essential",
    popular: false,
  },
  {
    name: "Advanced",
    tagline: "For businesses relying on inbound calls, chats, and lead flow",
    icon: Phone,
    features: [
      "Everything in Essential, plus:",
      "AI voice agent for calls",
      "Lead qualification & routing",
      "Automated follow-ups (SMS / email)",
      "CRM & booking integrations",
      "Analytics dashboard",
      "Ongoing optimization",
    ],
    cta: "Scale with Advanced",
    popular: true,
  },
  {
    name: "Enterprise",
    tagline: "Fully customized enterprise-grade communication and marketing infrastructure",
    icon: Building2,
    features: [
      "Custom AI voice & chat architecture",
      "Multi-location and multi-brand support",
      "Enterprise integrations (CRM, ERP, telephony)",
      "SLA, uptime guarantees, priority support",
      "Advanced analytics and attribution",
    ],
    cta: "Build a Custom Enterprise System",
    popular: false,
  },
];

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

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

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
  return (
    <div className="min-h-screen bg-background page-dots">
      {/* Hero Section */}
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
                Services
              </h1>
              <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">
                Choose the level of managed customer communication services that fits your business needs. All tiers include ongoing management, monitoring, and optimization.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Tiers Section */}
      <motion.section
        className="py-20 md:py-28"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {serviceTiers.map((tier, idx) => (
              <motion.div key={tier.name} variants={item} className="flex pt-6">
                <Card
                  className={`group relative flex flex-col h-full w-full rounded-3xl border transition-all ${
                    tier.popular
                      ? "border-accent/50 bg-white shadow-[0_36px_80px_-36px_rgba(37,99,235,0.24)]"
                      : "border-border/60 bg-white shadow-[0_30px_70px_-32px_rgba(15,23,42,0.16)]"
                  } hover:-translate-y-1 hover:shadow-[0_40px_90px_-34px_rgba(15,23,42,0.2)]`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide z-10 whitespace-nowrap">
                      Most Popular
                  </div>
                  )}
                  <CardHeader className="space-y-4 pb-6 flex-shrink-0">
                    <div className={`inline-flex h-14 w-14 items-center justify-center rounded-xl ${
                      tier.popular ? "bg-accent/10" : "bg-slate-100"
                    }`}>
                      <tier.icon className="h-7 w-7 text-accent" />
                      </div>
                    <CardTitle className="text-2xl font-semibold text-foreground">{tier.name}</CardTitle>
                    <p className="text-base text-muted-foreground leading-relaxed">{tier.tagline}</p>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow space-y-6">
                    <div className="space-y-3 flex-grow">
                      {tier.features.map((feature, fidx) => (
                        <div key={fidx} className="flex items-start gap-3">
                          <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                          <span className="text-base text-foreground/80 leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
                    <div className="pt-4 mt-auto">
              <Link href="/demo">
                        <Button
                          className={`w-full h-12 rounded-full font-semibold transition ${
                            tier.popular
                              ? "bg-gradient-to-r from-[#2563EB] to-[#1F3557] text-white shadow-[0_22px_50px_-20px_rgba(37,99,235,0.24)] hover:opacity-95"
                              : "bg-white border-2 border-border text-foreground hover:bg-slate-50"
                          }`}
                        >
                          {tier.cta}
                          {tier.popular && <ArrowRight className="ml-2 h-4 w-4" />}
                </Button>
              </Link>
            </div>
                  </CardContent>
                </Card>
          </motion.div>
            ))}
        </div>
        </div>
      </motion.section>

      {/* Trusted By Section */}
      <motion.section
        className="py-12 md:py-16"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto max-w-6xl px-6">
          <motion.div variants={item} className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Trusted by teams using
            </p>
          </motion.div>
          <LogoMarquee />
        </div>
      </motion.section>

      {/* Performance Report Section */}
      <motion.section
        className="py-20 md:py-28"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="container mx-auto max-w-6xl px-6">
          <motion.div
            className="space-y-6 rounded-[30px] border border-border/60 bg-white p-10 shadow-[0_36px_80px_-36px_rgba(15,23,42,0.24)]"
            variants={item}
          >
            <div className="space-y-3 text-center md:text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-foreground/60">
                Performance report
              </p>
              <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
                Intelligent insights from every conversation.
              </h2>
            </div>
            <div className="mx-auto w-full mt-8">
              <img
                src="/images/dashboard-insights.jpg"
                alt="Client interaction insights dashboard"
                className="mx-auto w-full max-w-4xl rounded-[24px] border border-border/50 object-cover shadow-[0_30px_80px_-36px_rgba(15,23,42,0.28)]"
              />
            </div>
            <div className="grid gap-6 text-base text-muted-foreground md:grid-cols-2 md:text-lg mt-8">
              {[
                "Real-time interaction insights show how every caller engages with AI or human agents.",
                "Actionable analytics highlight topics, sentiment, and recommended next steps.",
                "Performance monitoring tracks response times, agent talk time, and quality.",
                "Customer experience improves as optimisation opportunities surface automatically.",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="mt-2 inline-flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[#1F3557]" />
                  <span className="leading-relaxed text-foreground/85">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Why Managed Services Section */}
      <motion.section
        className="py-20 md:py-28"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="container mx-auto max-w-5xl px-6">
            <motion.div
            className="rounded-3xl border border-border bg-white p-10 md:p-14 shadow-[0_30px_70px_-34px_rgba(15,23,42,0.2)]"
            variants={item}
          >
            <div className="text-center mb-10">
              <h2 className="text-4xl font-semibold text-foreground md:text-5xl">Why Managed Services?</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Managed services are better than DIY tools because we handle everything for you
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "No software to manage",
                  description: "We handle all platform updates, security patches, and infrastructure management. You focus on your business.",
                },
                {
                  title: "No AI training required",
                  description: "Our team continuously trains, tunes, and optimizes your AI systems. No technical expertise needed on your end.",
                },
                {
                  title: "Continuous improvement",
                  description: "Weekly performance reviews and systematic optimizations ensure your systems get better over time, not worse.",
                },
                {
                  title: "One partner for all communication",
                  description: "Phone, chat, web, and automation—all managed by one team with one point of contact and unified reporting.",
                },
              ].map((benefit, idx) => (
                <motion.div key={benefit.title} variants={item} className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Check className="h-5 w-5 text-accent" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="pb-24 pt-12 md:pb-30"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={container}
      >
        <div className="container mx-auto max-w-4xl px-6">
          <motion.div variants={item}>
            <Card className="relative overflow-hidden rounded-[40px] border-none bg-gradient-to-br from-[#F6F9FF] via-[#EDF4FF] to-[#E5F0FF] text-center text-foreground shadow-[0_34px_70px_-32px_rgba(37,99,235,0.16)] px-12 py-16 md:px-20 md:py-20">
              <div className="absolute inset-0 bg-white/60 mix-blend-soft-light" />
              <div className="relative z-10 space-y-10">
                <h2 className="text-4xl font-semibold leading-tight md:text-5xl">Ready to Build Your Communication Infrastructure?</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Let&apos;s discuss which service tier is right for your business and how we can help you scale.
                </p>
                <div className="flex justify-center">
              <Link href="/demo">
                    <Button size="lg" className="h-14 rounded-full bg-gradient-to-r from-[#2563EB] to-[#1F3557] px-12 text-base font-semibold text-white shadow-[0_28px_60px_-24px_rgba(31,41,55,0.24)] transition hover:opacity-95">
                      Book a Strategy Call
                </Button>
              </Link>
            </div>
          </div>
            </Card>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
