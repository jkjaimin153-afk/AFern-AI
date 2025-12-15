import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Search, Layout, Rocket, TrendingUp, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery & Communication Audit",
    description: "We analyze your current communication channels, identify gaps, and map your ideal customer journey.",
    icon: Search,
  },
  {
    number: "02",
    title: "System Design & Setup",
    description: "Our team designs your communication architecture, creates AI training materials, and configures integrations.",
    icon: Layout,
  },
  {
    number: "03",
    title: "Deployment & Integration",
    description: "We deploy your systems, connect all tools and platforms, and train your team with full support.",
    icon: Rocket,
  },
  {
    number: "04",
    title: "Monitoring, Optimization & Growth",
    description: "Ongoing weekly reviews and systematic improvements to continuously optimize and scale your systems.",
    icon: TrendingUp,
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

export default function HowItWorks() {
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
            className="space-y-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-[2.8rem] font-semibold leading-tight text-foreground md:text-[3.2rem]">
              How It Works
            </h1>
            <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">
              A straightforward process from discovery to deployment to ongoing optimization. We handle the complexity so you don&apos;t have to.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps Section - Premium Editorial Layout */}
      <motion.section
        className="py-20 md:py-28"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto max-w-6xl px-6">
          <div className="space-y-16">
            {steps.map((step, idx) => (
              <motion.div
                key={step.number}
                variants={item}
                className="relative"
              >
                <div className="grid md:grid-cols-12 gap-8 items-start">
                  {/* Left Column - Number & Icon */}
                  <div className="md:col-span-3 flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="flex items-center gap-4">
                        <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20">
                          <step.icon className="h-8 w-8 text-accent" />
                        </div>
                        <span className="text-3xl font-bold text-accent/70">{step.number}</span>
                      </div>
                    </div>
                    {idx < steps.length - 1 && (
                      <div className="hidden md:block absolute top-20 left-8 w-px h-full bg-gradient-to-b from-accent/30 via-accent/20 to-transparent" style={{ height: 'calc(100% + 4rem)' }} />
                    )}
                  </div>

                  {/* Right Column - Content */}
                  <div className="md:col-span-9">
                    <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">{step.title}</h3>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Timeline Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto max-w-5xl px-6">
          <motion.div
            className="rounded-3xl border border-border bg-white p-10 md:p-14 shadow-[0_30px_70px_-34px_rgba(15,23,42,0.2)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-10">
              <h2 className="text-4xl font-semibold text-foreground md:text-5xl mb-4">Typical Timeline</h2>
              <p className="text-lg text-muted-foreground">
                Most deployments go live within 30 days
              </p>
            </div>
            <div className="space-y-6">
              {[
                { phase: "Week 1-2", activity: "Discovery, audit, and system design" },
                { phase: "Week 2-3", activity: "Development, AI training, and integration setup" },
                { phase: "Week 3-4", activity: "Testing, QA, and team training" },
                { phase: "Week 4+", activity: "Launch and ongoing optimization" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-6 pb-6 border-b border-border/50 last:border-0">
                  <div className="flex-shrink-0 w-24">
                    <span className="text-sm font-semibold text-accent uppercase tracking-wide">{item.phase}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-base text-foreground">{item.activity}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

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
            <div className="relative overflow-hidden rounded-[40px] border-none bg-gradient-to-br from-[#F6F9FF] via-[#EDF4FF] to-[#E5F0FF] text-center text-foreground shadow-[0_34px_70px_-32px_rgba(37,99,235,0.16)] px-12 py-16 md:px-20 md:py-20">
              <div className="absolute inset-0 bg-white/60 mix-blend-soft-light" />
              <div className="relative z-10 space-y-10">
                <h2 className="text-4xl font-semibold leading-tight md:text-5xl">Ready to Get Started?</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Let&apos;s begin with a discovery call to understand your communication needs and design the right solution.
                </p>
                <div className="flex justify-center">
                  <Link href="/demo">
                    <Button size="lg" className="h-14 rounded-full bg-gradient-to-r from-[#2563EB] to-[#1F3557] px-12 text-base font-semibold text-white shadow-[0_28px_60px_-24px_rgba(31,41,55,0.24)] transition hover:opacity-95">
                      Book a Strategy Call
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
