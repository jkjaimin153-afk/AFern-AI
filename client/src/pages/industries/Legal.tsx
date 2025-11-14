import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { Check } from "lucide-react";

const PAIN_POINTS = [
  "Potential clients contact firms after-hours and rarely receive a timely response.",
  "Conflict checks, NDAs, and intake questionnaires delay engagement.",
  "Billable staff spend hours on follow-ups, reminders, and document collection.",
];

const SOLUTIONS = [
  "24/7 intake concierge that screens new matters, captures facts, and books consultations.",
  "Automated conflict checks and NDA workflows connected to Clio, MyCase, or your CRM.",
  "Digital document vault for retainers, ID verification, and payment capture.",
];

const PLAYBOOK = [
  {
    speaker: "AI",
    content:
      "Thank you for contacting Westbridge Legal—I'm your virtual intake specialist. Are you seeking help with business or personal matters?",
  },
  {
    speaker: "Caller",
    content: "A contract dispute with a former supplier.",
  },
  {
    speaker: "AI",
    content:
      "I can arrange a consultation. I'll run a quick conflict check—could you share your name and the other party involved?",
  },
  {
    speaker: "Caller",
    content: "It's Michael Reyes. The other party is Horizon Manufacturing.",
  },
  {
    speaker: "AI",
    content:
      "Thanks, no conflicts detected. We can meet Wednesday at 2 PM in person or Thursday at 11 AM via video. Which do you prefer?",
  },
];

export default function Legal() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 gradient-soft opacity-40" />
        <div className="absolute right-10 top-20 h-60 w-60 orb-glow blur-3xl opacity-55" />

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
            eyebrow="Legal & Professional Services"
            title="Conflict-aware intake and premium client experience."
            description="Boutique law firms, consultancies, and accountants rely on Afern to qualify matters, manage documents, and initiate retainers around the clock."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <Card className="border-border bg-white shadow-[0_24px_40px_-30px_rgba(15,23,42,0.15)]" data-testid="card-pain-points">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-foreground">What legal teams struggle with</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-base text-muted-foreground">
                {PAIN_POINTS.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3" data-testid={`pain-point-${idx}`}>
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
                  <div key={idx} className="flex items-start gap-3" data-testid={`solution-${idx}`}>
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                    <span>{item}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <Card className="mt-14 border-border bg-white shadow-[0_24px_40px_-30px_rgba(15,23,42,0.15)]">
            <CardHeader>
              <CardTitle className="text-lg text-foreground">Sample conflict-free intake flow</CardTitle>
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
                Conflict cleared • NDA issued • Consultation booked • Retainer invoice sent
              </div>
            </CardContent>
          </Card>

          <div className="mt-16 flex justify-center">
            <Link href="/demo">
              <Button className="h-14 w-full max-w-xl rounded-full bg-gradient-to-r from-[#2563EB] to-[#1F3557] px-12 text-base font-semibold text-white shadow-[0_28px_60px_-24px_rgba(37,99,235,0.28)] hover:opacity-95">
                Request a legal intake demo
              </Button>
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
