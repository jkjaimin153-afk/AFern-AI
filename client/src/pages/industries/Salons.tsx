import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check, ArrowRight, AlertCircle, Phone, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const challenges = [
  { icon: AlertCircle, text: "Stylists interrupted mid-service to answer phones, disrupting client experience" },
  { icon: Calendar, text: "Last-minute cancellations and no-shows leave costly gaps in the calendar" },
  { icon: Phone, text: "Deposit policies difficult to enforce consistently across booking channels" },
];

const managed = [
  "AI voice agents answer calls 24/7, book appointments, and handle membership inquiries without interrupting service",
  "AI chat agents automate booking across web and SMS, collect deposits, and send reminders",
  "Automated workflows sync appointments with booking systems and enforce deposit policies",
];

const impact = [
  "Reduce no-show rates by 40-60% through automated deposits and reminders",
  "Increase booking conversion rates by 30-50%",
  "Free up 10-15 hours per week of stylist time",
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

export default function Salons() {
  return (
    <div className="min-h-screen bg-background page-dots">
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 gradient-soft opacity-45" />
        <div className="absolute left-10 top-16 h-60 w-60 orb-glow blur-3xl opacity-55" />

        <div className="container relative z-10 mx-auto max-w-5xl px-6">
          <Link href="/industries">
            <Button
              variant="ghost"
              className="mb-8 inline-flex h-11 rounded-full border border-border px-5 text-sm text-foreground/70 hover:text-foreground"
            >
              ← Browse industries
            </Button>
          </Link>

          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-4">Beauty & Personal Care</h1>
            <p className="text-lg text-foreground font-medium max-w-3xl">
              Managed client communication that books appointments, collects deposits, and keeps chairs full without interrupting service.
            </p>
          </div>

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

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/demo">
              <Button className="h-14 rounded-full bg-gradient-to-r from-[#2563EB] to-[#1F3557] px-12 text-base font-semibold text-white shadow-[0_28px_60px_-24px_rgba(37,99,235,0.28)] hover:opacity-95">
                See how it works for Beauty Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
