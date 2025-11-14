import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { Check } from "lucide-react";

const PAIN_POINTS = [
  "Front desk teams juggling phone lines, walk-ins, and VIP guests simultaneously.",
  "After-hours booking requests and concierge inquiries left unanswered.",
  "Reservations, loyalty perks, and upsells scattered across multiple systems.",
];

const SOLUTIONS = [
  "Afern concierge answers in multiple languages, books rooms, and manages late arrivals automatically.",
  "Keeps Opera, Cloudbeds, Mews, and guest apps in sync so staff see a single source of truth.",
  "Automates upsells for late checkout, amenities, spa bookings, and experiences.",
];

const PLAYBOOK = [
  {
    speaker: "AI",
    content: "Welcome to the Meridian Boutique—I'm your digital concierge. How can I assist this evening?",
  },
  {
    speaker: "Guest",
    content: "We're arriving late Friday and need a room for two nights.",
  },
  {
    speaker: "AI",
    content: "Absolutely. Shall I reserve a deluxe king or premium suite? Late arrival? I’ll note that for our team.",
  },
  {
    speaker: "Guest",
    content: "Deluxe king, arriving around 11 PM.",
  },
  {
    speaker: "AI",
    content: "Done. Would you like airport transfer or add breakfast? I can include it now for a preferred rate.",
  },
];

export default function Hospitality() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 gradient-soft opacity-45" />
        <div className="absolute -right-16 top-12 h-64 w-64 orb-glow blur-3xl opacity-60" />

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
            eyebrow="Hospitality"
            title="Premium guest journeys without expanding the front desk."
            description="Hotels, resorts, and vacation rentals deploy Afern to offer concierge-level service around the clock—over phone, SMS, and web."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <Card className="border-border bg-white shadow-[0_24px_40px_-30px_rgba(15,23,42,0.15)]" data-testid="card-pain-points">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-foreground">What hospitality teams struggle with</CardTitle>
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
              <CardTitle className="text-lg text-foreground">Sample late-night booking flow</CardTitle>
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
                PMS updated • Confirmation sent • Upsell logged • Staff receives arrival briefing
              </div>
            </CardContent>
          </Card>

          <div className="mt-16 flex justify-center">
            <Link href="/demo">
              <Button className="h-14 w-full max-w-xl rounded-full bg-gradient-to-r from-[#2563EB] to-[#1F3557] px-12 text-base font-semibold text-white shadow-[0_28px_60px_-24px_rgba(37,99,235,0.28)] hover:opacity-95">
                Request a hospitality demo
              </Button>
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
