import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, Check, Clock, MessageCircle, TrendingUp } from "lucide-react";

const stats = [
  { value: "60+", label: "Industries supported" },
  { value: "25%", label: "Increase in booked appointments" },
  { value: "99.9%", label: "Platform uptime" },
  { value: "10+", label: "Languages supported" },
  { value: "20+", label: "Agents launched" },
  { value: "98%", label: "Response accuracy" },
  { value: "30 days", label: "Go-live timeline" },
];

const features = [
  {
    icon: Clock,
    title: "Always-on coverage",
    description: "Every enquiry is answered quickly and routed to the right place, day or night.",
    bullets: [
      "Phone, SMS, chat, and web handled in one system",
      "Smart handoffs when your team needs to step in",
      "Live view of what’s being answered around the clock",
    ],
  },
  {
    icon: MessageCircle,
    title: "Human-level conversations",
    description: "Voice and chat flows that sound like your team and stay on brand.",
    bullets: [
      "Scripts tuned to your tone and compliance notes",
      "Summaries and CRM updates dropped in automatically",
      "Weekly reviews to keep quality and accuracy high",
    ],
  },
  {
    icon: TrendingUp,
    title: "Revenue-ready journeys",
    description: "Web touchpoints and automations that move prospects from interest to booked.",
    bullets: [
      "Landing pages designed to capture and convert",
      "Automated follow-ups, deposits, and reminders",
      "Analytics, SEO, and experimentation managed for you",
    ],
  },
];

const ambientOrbs = [
  {
    size: "32rem",
    top: "-18%",
    left: "-12%",
    gradient: "bg-[radial-gradient(circle_at_center,rgba(30,64,175,0.26)_0%,rgba(30,64,175,0)_70%)]",
    delay: 0,
  },
  {
    size: "26rem",
    top: "10%",
    right: "-6%",
    gradient: "bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.24)_0%,rgba(15,23,42,0)_65%)]",
    delay: 2.5,
  },
  {
    size: "20rem",
    bottom: "-12%",
    left: "20%",
    gradient: "bg-[radial-gradient(circle_at_center,rgba(71,85,105,0.26)_0%,rgba(71,85,105,0)_70%)]",
    delay: 1.2,
  },
];

const featureOrbs = [
  {
    size: "22rem",
    top: "-10%",
    left: "-12%",
    gradient: "bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.2)_0%,rgba(37,99,235,0)_70%)]",
    delay: 0,
  },
  {
    size: "18rem",
    bottom: "-18%",
    right: "-8%",
    gradient: "bg-[radial-gradient(circle_at_center,rgba(148,163,184,0.18)_0%,rgba(148,163,184,0)_70%)]",
    delay: 1.5,
  },
];

const ctaOrbs = [
  {
    size: "20rem",
    top: "-40%",
    left: "-10%",
    gradient: "bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.18)_0%,rgba(37,99,235,0)_70%)]",
    delay: 0.6,
  },
  {
    size: "16rem",
    bottom: "-30%",
    right: "-6%",
    gradient: "bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.18)_0%,rgba(14,165,233,0)_70%)]",
    delay: 2.2,
  },
];

const benefits = [
  "Hands-on team and clear communication from kickoff to launch.",
  "Integrations with HubSpot, Stripe, ServiceTitan, Clio, Shopify, and more.",
  "Weekly performance reviews to keep automations sharp and on-brand.",
  "Fast launch timelines with no hidden surprises.",
  "One partner for automation, chat, and web design.",
];

type StatItem = {
  value: string;
  label: string;
};

function StatMarquee({ stats }: { stats: StatItem[] }) {
  const items = [...stats, ...stats];

  return (
    <div className="relative mx-auto mt-12 max-w-5xl overflow-hidden">
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-background via-background/80 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-background via-background/80 to-transparent" />
      <motion.div
        className="flex flex-nowrap gap-5 md:gap-7"
        style={{ width: "max-content" }}
        animate={{ x: ["0%", "-100%"] }}
        transition={{ duration: 36, ease: "linear", repeat: Infinity, repeatType: "loop" }}
      >
        {items.map((stat, idx) => (
          <Card
            key={`${stat.label}-${idx}`}
            className="flex h-32 min-w-[230px] flex-col justify-center rounded-3xl border border-border/70 bg-white/90 px-7 text-center shadow-[0_28px_64px_-32px_rgba(15,23,42,0.2)] backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-[0_34px_74px_-34px_rgba(15,23,42,0.22)]"
          >
            <p className="text-2xl font-semibold text-foreground">{stat.value}</p>
            <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
          </Card>
        ))}
      </motion.div>
    </div>
  );
}

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18 },
  },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background page-dots">
      <motion.section
        className="relative overflow-hidden pt-20 pb-24 md:pt-24 md:pb-32"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 hero-grid" />
        <div className="absolute inset-0 overflow-hidden">
          {ambientOrbs.map((orb, idx) => (
            <motion.div
              key={idx}
              className={`pointer-events-none absolute ${orb.gradient} blur-[120px] mix-blend-multiply`}
              style={{
                width: orb.size,
                height: orb.size,
                top: orb.top,
                left: orb.left,
                right: orb.right,
                bottom: orb.bottom,
              }}
              initial={{ scale: 1, x: 0, y: 0, rotate: 0, opacity: 0.3 }}
              animate={{
                scale: [1, 1.15, 0.95, 1.08, 1],
                x: [0, 35, -22, 18, 0],
                y: [0, -28, 18, -14, 0],
                rotate: [0, 10, -6, 8, 0],
                opacity: [0.24, 0.4, 0.22, 0.36, 0.28],
              }}
              transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: orb.delay }}
            />
          ))}
        </div>

        <div className="container relative z-10 mx-auto max-w-5xl px-6 text-center">
          <motion.p
            className="inline-flex items-center gap-2 rounded-full border border-border/80 px-5 py-2 text-xs uppercase tracking-[0.35em] text-foreground/70 backdrop-blur"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            AI Automation • Web Design
          </motion.p>
          <motion.h1
            className="mt-8 text-[3.5rem] font-semibold leading-[1.05] text-foreground md:text-[4.25rem]"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
          >
            Your partner in strategic <span className="text-accent">growth</span>
            <span className="text-accent">.</span>
          </motion.h1>
          <motion.p
            className="mx-auto mt-5 max-w-3xl text-lg text-muted-foreground md:text-xl"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            Providing AI solutions that streamline operations, connect with clients, and deliver measurable results.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
          >
            <Link href="/demo">
              <Button className="h-14 rounded-full bg-gradient-to-r from-[#2563EB] to-[#1F3557] px-12 text-base font-semibold text-white shadow-[0_28px_60px_-24px_rgba(37,99,235,0.28)] transition hover:shadow-[0_34px_70px_-28px_rgba(37,99,235,0.24)]" data-testid="button-request-demo-hero">
                See how we work
              </Button>
            </Link>
            <Link href="/product">
              <Button
                variant="ghost"
                className="h-14 rounded-full border border-border px-12 text-base font-semibold text-foreground/80 transition hover:-translate-y-0.5 hover:text-foreground"
              >
                View our services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>

          <StatMarquee stats={stats} />
        </div>
      </motion.section>

      <motion.section
        className="py-20 md:py-24"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            {featureOrbs.map((orb, idx) => (
              <motion.div
                key={`feature-orb-${idx}`}
                className={`absolute ${orb.gradient} blur-[110px] mix-blend-screen`}
                style={{
                  width: orb.size,
                  height: orb.size,
                  top: orb.top,
                  left: orb.left,
                  right: orb.right,
                  bottom: orb.bottom,
                }}
                initial={{ scale: 0.95, x: 0, y: 0, opacity: 0.26 }}
                animate={{
                  scale: [0.95, 1.08, 0.98, 1.04, 0.95],
                  x: [0, 16, -12, 10, 0],
                  y: [0, -14, 12, -10, 0],
                  opacity: [0.22, 0.32, 0.18, 0.28, 0.22],
                }}
                transition={{ duration: 26, repeat: Infinity, ease: "easeInOut", delay: orb.delay }}
              />
            ))}
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature) => (
              <motion.div key={feature.title} variants={item}>
                <Card className="group relative h-full overflow-hidden rounded-3xl border-none bg-white shadow-[0_30px_60px_-28px_rgba(15,23,42,0.18)] transition hover:-translate-y-1 hover:shadow-[0_36px_72px_-30px_rgba(15,23,42,0.2)]">
                  <div className="absolute inset-x-6 -top-12 h-24 rounded-3xl bg-gradient-to-r from-[#2563EB]/18 to-transparent blur-2xl transition group-hover:blur-3xl" />
                  <CardHeader className="relative space-y-4">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-slate-100">
                      <feature.icon className="h-7 w-7 text-accent" />
                    </div>
                    <CardTitle className="text-2xl text-foreground">{feature.title}</CardTitle>
                    <p className="text-base leading-relaxed text-muted-foreground">{feature.description}</p>
                  </CardHeader>
                  <CardContent className="relative space-y-3 text-base text-muted-foreground">
                    <ul className="space-y-2 text-left">
                      {feature.bullets.map((point) => (
                        <li key={point} className="flex items-start gap-2">
                          <span className="mt-1 text-[#2563EB]">⚡</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="py-16"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="container mx-auto max-w-4xl px-6">
          <motion.div className="rounded-3xl border border-border bg-white px-10 py-14 text-left shadow-[0_30px_70px_-34px_rgba(15,23,42,0.2)]" variants={item}>
            <h2 className="text-4xl font-semibold text-foreground md:text-5xl">Why choose Afern?</h2>
            <ul className="mt-8 space-y-4 text-base text-muted-foreground md:text-lg">
              <motion.li className="flex items-start gap-3" variants={item}>
                <Check className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                <span>
                  <span className="font-semibold text-foreground">Dedicated, hands-on team</span> — From kickoff to launch, we provide clear, proactive communication at every step.
                </span>
              </motion.li>
              <motion.li className="flex items-start gap-3" variants={item}>
                <Check className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                <span>
                  <span className="font-semibold text-foreground">Performance-focused automation</span> — Weekly reviews ensure workflows remain sharp, efficient, and on-brand.
                </span>
              </motion.li>
              <motion.li className="flex items-start gap-3" variants={item}>
                <Check className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                <span>
                  <span className="font-semibold text-foreground">Fast, transparent launches</span> — Rapid timelines with complete clarity, no hidden surprises.
                </span>
              </motion.li>
              <motion.li className="flex items-start gap-3" variants={item}>
                <Check className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                <span>
                  <span className="font-semibold text-foreground">Comprehensive digital partner</span> — Automation, AI chat, and web design, all managed under one roof.
                </span>
              </motion.li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="pb-24 pt-10 md:pb-28"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={container}
      >
        <div className="relative mx-auto max-w-4xl px-6">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            {ctaOrbs.map((orb, idx) => (
              <motion.div
                key={`cta-orb-${idx}`}
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
                  scale: [0.9, 1.05, 0.96, 1.08, 0.9],
                  x: [0, -12, 10, -8, 0],
                  y: [0, 10, -12, 8, 0],
                  opacity: [0.2, 0.3, 0.18, 0.28, 0.2],
                }}
                transition={{ duration: 24, repeat: Infinity, ease: "easeInOut", delay: orb.delay }}
              />
            ))}
          </div>
          <motion.div variants={item}>
            <Card className="relative overflow-hidden rounded-[40px] border-none bg-gradient-to-br from-[#F6F9FF] via-[#EDF4FF] to-[#E5F0FF] text-center text-foreground shadow-[0_34px_70px_-32px_rgba(37,99,235,0.16)] px-12 py-16 md:px-20 md:py-20">
              <div className="absolute inset-0 bg-white/60 mix-blend-soft-light" />
              <div className="relative z-10 space-y-10">
                <h2 className="text-4xl font-semibold leading-tight md:text-5xl">Let&apos;s build your next automation.</h2>
                <div className="flex justify-center">
                  <Link href="/demo">
                    <Button size="lg" className="h-14 rounded-full bg-gradient-to-r from-[#2563EB] to-[#1F3557] px-12 text-base font-semibold text-white shadow-[0_28px_60px_-24px_rgba(31,41,55,0.24)] transition hover:opacity-95">
                      Request a demo
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
