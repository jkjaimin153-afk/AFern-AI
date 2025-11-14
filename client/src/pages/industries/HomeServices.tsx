import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { Check } from "lucide-react";

const PAIN_POINTS = [
  "Missed emergency calls during peak hours or after closing time.",
  "High cost and inconsistent quality from traditional answering services.",
  "Manual rescheduling and double bookings across shared calendars.",
];

const SOLUTIONS = [
  "Afern answers every line 24/7, qualifies callers, and escalates to the right on-call tech.",
  "Syncs schedules and job details with ServiceTitan, Housecall Pro, Jobber, and more.",
  "Automates payments, deposits, and confirmation messages so nothing slips.",
];

const PLAYBOOK = [
  {
    speaker: "AI",
    content:
      "Thanks for calling QuickFix Plumbing—this is Afern, your virtual coordinator. What’s happening on site?",
  },
  {
    speaker: "Caller",
    content: "We have a burst pipe in the kitchen and the water won’t stop.",
  },
  {
    speaker: "AI",
    content:
      "I can dispatch an emergency technician. Is anyone in danger or can we safely shut off the main?",
  },
  {
    speaker: "Caller",
    content: "We turned off the main—no immediate danger, just flooding.",
  },
  {
    speaker: "AI",
    content:
      "Understood. I’ll schedule the nearest plumber with emergency availability. Morning or evening visit?",
  },
];

export default function HomeServices() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 gradient-soft opacity-50" />
        <div className="absolute -top-24 right-12 h-64 w-64 orb-glow blur-3xl opacity-50" />

        <div className="container relative z-10 mx-auto max-w-5xl px-6">
          <Link href="/industries">
            <Button
              variant="ghost"
              className="mb-8 inline-flex h-11 rounded-full border border-border px-5 text-sm text-foreground/70 hover:text-foreground"
              data-testid="link-back-industries"
            >
              ← Browse industries
            </Button>
          </Link>

          <SectionHeading
            align="left"
            eyebrow="Home Services"
            title="AI reception + website experiences for emergency-ready trade teams."
            description="Plumbing, HVAC, electrical, and restoration crews rely on Afern to capture every urgent call, book the right technician, and keep clients informed."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <Card className="border-border bg-white shadow-[0_24px_40px_-30px_rgba(15,23,42,0.15)]" data-testid="card-pain-points">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-foreground">What operators struggle with</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-base text-muted-foreground">
                {PAIN_POINTS.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-accent/80" />
                    <span>{item}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-border bg-white shadow-[0_24px_40px_-30px_rgba(15,23,42,0.15)]" data-testid="card-solutions">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-foreground">How Afern fixes it</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-base text-muted-foreground">
                {SOLUTIONS.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                    <span>{item}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <Card className="mt-14 border-border bg-white shadow-[0_24px_40px_-30px_rgba(15,23,42,0.15)]">
            <CardHeader>
              <CardTitle className="text-lg text-foreground">Emergency booking flow (sample)</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 font-mono text-sm text-muted-foreground">
              {PLAYBOOK.map((line, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-border bg-slate-50 px-4 py-3"
                  data-testid={`script-line-${idx}`}
                >
                  <span className="mr-2 font-semibold text-accent">{line.speaker}:</span>
                  {line.content}
                </div>
              ))}
              <div className="mt-2 rounded-2xl border border-border bg-white px-4 py-3 text-xs uppercase tracking-[0.35em] text-muted-foreground/80 shadow-[0_16px_32px_-24px_rgba(15,23,42,0.18)]">
                Ticket created • Technician dispatched • Customer receives SMS confirmation and portal link
              </div>
            </CardContent>
          </Card>

          <div className="mt-16 flex justify-center">
            <Link href="/demo">
              <Button className="h-14 w-full max-w-xl rounded-full bg-gradient-to-r from-[#2563EB] to-[#1F3557] px-12 text-base font-semibold text-white shadow-[0_28px_60px_-24px_rgba(37,99,235,0.28)] hover:opacity-95">
                Request a home services demo
              </Button>
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
