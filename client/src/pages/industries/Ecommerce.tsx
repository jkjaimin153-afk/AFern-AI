import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { Check } from "lucide-react";

const PAIN_POINTS = [
  "Customer support and order inquiries overwhelm lean teams.",
  "BOPIS, curbside, and return logistics require manual coordination.",
  "Marketing campaigns and CX lack a consistent, branded web experience.",
];

const SOLUTIONS = [
  "AI concierge automates order status, returns, exchanges, and loyalty questions 24/7.",
  "Real-time integrations with Shopify, POS, and inventory to coordinate pickups and curbside.",
  "Conversion-focused landing pages and customer portals launched beside voice support.",
];

const PLAYBOOK = [
  {
    speaker: "AI",
    content:
      "You’ve reached Northshore Goods. I can help with orders, returns, pickup scheduling, and product questions—what can I take care of?",
  },
  {
    speaker: "Customer",
    content: "Checking when order 42315 will arrive.",
  },
  {
    speaker: "AI",
    content:
      "Got it. For security, could you confirm the email tied to the purchase?",
  },
  {
    speaker: "Customer",
    content: "kelly@northmail.com.",
  },
  {
    speaker: "AI",
    content:
      "Thanks, Kelly. Your order shipped today and will be delivered Friday. I’ve texted the tracking link. Would you like me to start a return label for the extra size you ordered?",
  },
];

export default function Ecommerce() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 gradient-soft opacity-45" />
        <div className="absolute right-12 top-14 h-60 w-60 orb-glow blur-3xl opacity-55" />

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
            eyebrow="E-commerce & Retail"
            title="Give shoppers instant answers and keep operations moving."
            description="D2C brands, subscriptions, and modern retailers deploy Afern to automate support, coordinate fulfillment, and maintain a premium digital storefront."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <Card className="border-border bg-white shadow-[0_24px_40px_-30px_rgba(15,23,42,0.15)]" data-testid="card-pain-points">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-foreground">What retail teams struggle with</CardTitle>
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
              <CardTitle className="text-lg text-foreground">Sample order + return automation flow</CardTitle>
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
                Shopify queried • Tracking sent • Optional return initiated • Loyalty points updated
              </div>
            </CardContent>
          </Card>

          <div className="mt-16 flex justify-center">
            <Link href="/demo">
              <Button className="h-14 w-full max-w-xl rounded-full bg-gradient-to-r from-[#2563EB] to-[#1F3557] px-12 text-base font-semibold text-white shadow-[0_28px_60px_-24px_rgba(37,99,235,0.28)] hover:opacity-95">
                Request an e-commerce demo
              </Button>
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
