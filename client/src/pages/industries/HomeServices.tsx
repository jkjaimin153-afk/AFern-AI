import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check, ArrowRight, AlertCircle, Phone, MessageSquare, Zap } from "lucide-react";
import { motion } from "framer-motion";

const challenges = [
  { icon: AlertCircle, text: "After-hours emergency calls go unanswered, losing revenue to competitors" },
  { icon: Phone, text: "Peak season call volume overwhelms dispatchers, causing delays and missed appointments" },
  { icon: Zap, text: "Manual scheduling across multiple technicians creates double bookings and conflicts" },
];

const managed = [
  "AI voice agents answer every call 24/7, qualify emergencies, and route to available technicians",
  "AI chat agents handle web inquiries, SMS follow-ups, and automated confirmations",
  "Automated workflows sync schedules with ServiceTitan, Housecall Pro, and field management systems",
];

const impact = [
  "Capture 100% of inbound calls, including after-hours emergencies",
  "Reduce response time from hours to under 2 minutes",
  "Increase booking conversion rates by 25-40%",
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function HomeServices() {
  return (
    <div className="min-h-screen bg-background page-dots">
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 gradient-soft opacity-50" />
        <div className="absolute -top-24 right-12 h-64 w-64 orb-glow blur-3xl opacity-50" />

        <div className="container relative z-10 mx-auto max-w-5xl px-6">
          <Link href="/industries">
            <Button
              variant="ghost"
              className="mb-8 inline-flex h-11 rounded-full border border-border px-5 text-sm text-foreground/70 hover:text-foreground"
            >
              ← Browse industries
            </Button>
          </Link>

          {/* Industry Header - Clean Text */}
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-4">Home & Field Services</h1>
            <p className="text-lg text-foreground font-medium max-w-3xl">
              Managed customer communication that captures every call, books the right technician, and keeps operations running 24/7.
            </p>
          </div>

          {/* Top Challenges - Horizontal Row */}
          <motion.section
            className="mb-16"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-xl font-semibold text-foreground mb-8 text-muted-foreground uppercase tracking-wide">Top Challenges</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {challenges.map((challenge, idx) => (
                <motion.div key={idx} variants={item} className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <challenge.icon className="h-5 w-5 text-accent" />
                  </div>
                  <p className="text-base text-muted-foreground leading-relaxed">{challenge.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* What We Manage - Side by Side */}
          <motion.section
            className="mb-16"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="grid md:grid-cols-5 gap-8 items-start">
              <div className="md:col-span-2">
                <h2 className="text-2xl font-semibold text-foreground">What We Manage</h2>
                <p className="text-sm text-muted-foreground mt-2">Voice, chat, and workflows—fully managed</p>
              </div>
              <div className="md:col-span-3 space-y-4 pl-0 md:pl-8 border-l-0 md:border-l border-border/30">
                {managed.map((solution, idx) => (
                  <motion.div key={idx} variants={item} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                    <p className="text-base text-foreground leading-relaxed">{solution}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Business Impact - Highlighted Strip */}
          <motion.section
            className="mb-16"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="rounded-2xl bg-gradient-to-br from-[#F6F9FF] via-[#EDF4FF] to-white px-8 py-10 md:px-12 md:py-12">
              <h2 className="text-xl font-semibold text-foreground mb-8 text-muted-foreground uppercase tracking-wide">Business Impact</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {impact.map((outcome, idx) => (
                  <motion.div key={idx} variants={item} className="flex items-start gap-3">
                    <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-accent/10 flex-shrink-0">
                      <Check className="h-4 w-4 text-accent" />
                    </div>
                    <p className="text-lg text-foreground font-medium leading-relaxed">{outcome}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/demo">
              <Button className="h-14 rounded-full bg-gradient-to-r from-[#2563EB] to-[#1F3557] px-12 text-base font-semibold text-white shadow-[0_28px_60px_-24px_rgba(37,99,235,0.28)] hover:opacity-95">
                See how it works for Home Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
