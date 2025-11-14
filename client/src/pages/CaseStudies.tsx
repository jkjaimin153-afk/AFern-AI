import { useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "wouter";
import { ArrowRight, Clock, DollarSign, TrendingUp } from "lucide-react";

type CaseStudy = {
  name: string;
  industry: string;
  size: string;
  challenge: string;
  solution: string;
  results: { metric: string; value: string; description: string }[];
};

const CASE_STUDIES: CaseStudy[] = [
  {
    name: "Deerfield Inn",
    industry: "Hospitality",
    size: "15-room boutique motel",
    challenge:
      "Front desk staff overwhelmed during check-in rushes and after-hours calls—leading to missed bookings and double reservations.",
    solution:
      "Afern AI concierge integrated with Opera PMS for multilingual bookings, late-night check-ins, and proactive guest messaging.",
    results: [
      { metric: "After-hours revenue", value: "+41%", description: "captured bookings vs. previous quarter" },
      { metric: "Guest satisfaction", value: "+18pt", description: "lift in post-stay NPS" },
      { metric: "Team hours saved", value: "32/week", description: "reinvested into on-property experience" },
      { metric: "Double bookings", value: "-100%", description: "eliminated through real-time availability sync" },
    ],
  },
  {
    name: "QuickFix Plumbing",
    industry: "Home Services",
    size: "8 technicians · metro service area",
    challenge:
      "Emergency calls were going to voicemail during peak times; dispatch struggled to prioritise jobs and capture payments.",
    solution:
      "Emergency triage flows, ServiceTitan integration, and automated deposits ensured urgent jobs were booked instantly.",
    results: [
      { metric: "Missed calls", value: "-78%", description: "reduction during peak hours" },
      { metric: "Emergency response", value: "→12m", description: "average time from call to dispatch" },
      { metric: "Monthly revenue", value: "+$42K", description: "additional jobs captured each month" },
      { metric: "Callback rate", value: "-63%", description: "drop in double-handled tickets" },
    ],
  },
];

export default function CaseStudies() {
  const [missedCalls, setMissedCalls] = useState(12);
  const [avgJobValue, setAvgJobValue] = useState(350);
  const [conversionRate, setConversionRate] = useState(35);

  const weeklyRevenue = (missedCalls * avgJobValue * conversionRate) / 100;
  const monthlyRevenue = weeklyRevenue * 4.33;
  const yearlyRevenue = monthlyRevenue * 12;

  return (
    <div className="min-h-screen bg-background">
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 gradient-soft opacity-45" />
        <div className="absolute -top-24 right-24 h-72 w-72 orb-glow blur-3xl opacity-50" />

        <div className="container relative z-10 mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Case Studies"
            title="Proof that premium experiences produce measurable growth."
            description="See how operators across hospitality, home services, and retail refactored their front office with Afern."
          >
            <Link href="/demo">
              <Button className="mt-6 h-14 rounded-full bg-gradient-to-r from-[#2563EB] to-[#1F3557] px-10 text-base font-semibold text-white shadow-[0_24px_48px_-20px_rgba(31,41,55,0.28)] hover:opacity-95">
                Talk through a tailored roadmap
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </SectionHeading>

          <div className="mt-16 space-y-14">
            {CASE_STUDIES.map((study, idx) => (
              <Card
                key={study.name}
                className="border-border bg-white shadow-[0_28px_56px_-30px_rgba(15,23,42,0.16)]"
                data-testid={`card-case-study-${idx}`}
              >
                <CardHeader className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                  <div className="space-y-3">
                    <div className="inline-flex items-center gap-3">
                      <span className="rounded-full border border-border px-4 py-1 text-xs uppercase tracking-[0.35em] text-accent/80">
                        {study.industry}
                      </span>
                      <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                        {study.size}
                      </span>
                    </div>
                    <CardTitle className="font-serif text-3xl md:text-4xl text-foreground">
                      {study.name}
                    </CardTitle>
                  </div>
                  <Link href="/demo">
                    <Button
                      variant="ghost"
                      className="h-11 rounded-full border border-border px-6 text-sm font-semibold text-foreground/80 hover:text-foreground"
                    >
                      Request similar rollout
                    </Button>
                  </Link>
                </CardHeader>

                <CardContent className="space-y-10">
                  <div className="grid gap-8 md:grid-cols-3">
                    <div className="space-y-3">
                      <h3 className="text-sm uppercase tracking-[0.3em] text-accent/80">Challenge</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{study.challenge}</p>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-sm uppercase tracking-[0.3em] text-accent/80">Solution</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{study.solution}</p>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-sm uppercase tracking-[0.3em] text-accent/80">Highlights</h3>
                      <div className="space-y-3">
                        {study.results.slice(0, 2).map((result) => (
                          <div key={result.metric} className="rounded-2xl border border-border bg-slate-50 px-4 py-3 shadow-[0_16px_32px_-24px_rgba(15,23,42,0.18)]">
                            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{result.metric}</p>
                            <p className="mt-1 text-lg font-semibold text-foreground">{result.value}</p>
                            <p className="text-xs text-muted-foreground/80">{result.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-6 border-t border-border pt-8 md:grid-cols-4">
                    {study.results.map((result, ridx) => (
                      <div key={ridx} className="rounded-2xl border border-border bg-white px-4 py-4 text-center shadow-[0_16px_32px_-24px_rgba(15,23,42,0.16)]" data-testid={`result-${idx}-${ridx}`}>
                        <div className="text-2xl font-semibold text-foreground">{result.value}</div>
                        <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mt-1">{result.metric}</div>
                        <div className="mt-2 text-xs text-muted-foreground/80">{result.description}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-20 border-border bg-white shadow-[0_28px_56px_-30px_rgba(15,23,42,0.16)]">
            <CardHeader className="space-y-4">
              <SectionHeading
                align="left"
                eyebrow="ROI Model"
                title="Estimate the revenue you recover with Afern."
                description="Plug in a few numbers to see the impact of capturing every conversation."
                className="max-w-3xl"
              />
            </CardHeader>
            <CardContent className="space-y-8">
                <div className="grid gap-6 md:grid-cols-3">
                <div>
                  <Label htmlFor="roi-missed-calls" className="text-sm text-foreground/80">
                    Missed calls per week
                  </Label>
                  <Input
                    id="roi-missed-calls"
                    type="number"
                    value={missedCalls}
                    onChange={(e) => setMissedCalls(Number(e.target.value))}
                    className="mt-2 border-border bg-white"
                    data-testid="input-roi-missed-calls"
                    min={0}
                  />
                </div>
                <div>
                  <Label htmlFor="roi-job-value" className="text-sm text-foreground/80">
                    Average job / order value ($)
                  </Label>
                  <Input
                    id="roi-job-value"
                    type="number"
                    value={avgJobValue}
                    onChange={(e) => setAvgJobValue(Number(e.target.value))}
                    className="mt-2 border-border bg-white"
                    data-testid="input-roi-job-value"
                    min={0}
                  />
                </div>
                <div>
                  <Label htmlFor="roi-conversion" className="text-sm text-foreground/80">
                    Conversion rate (%)
                  </Label>
                  <Input
                    id="roi-conversion"
                    type="number"
                    value={conversionRate}
                    onChange={(e) => setConversionRate(Number(e.target.value))}
                    className="mt-2 border-border bg-white"
                    data-testid="input-roi-conversion"
                    min={0}
                    max={100}
                  />
                </div>
              </div>

              <div className="rounded-3xl border border-border bg-white p-8 shadow-[0_26px_50px_-30px_rgba(15,23,42,0.16)]">
                <div className="grid gap-8 md:grid-cols-3">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.35em] text-muted-foreground">
                      <Clock className="h-4 w-4 text-accent" />
                      Weekly
                    </div>
                    <p className="mt-3 text-4xl font-semibold text-foreground" data-testid="result-roi-weekly">
                      ${weeklyRevenue.toFixed(0)}
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.35em] text-muted-foreground">
                      <DollarSign className="h-4 w-4 text-accent" />
                      Monthly
                    </div>
                    <p className="mt-3 text-4xl font-semibold text-foreground" data-testid="result-roi-monthly">
                      ${monthlyRevenue.toFixed(0)}
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.35em] text-muted-foreground">
                      <TrendingUp className="h-4 w-4 text-accent" />
                      Yearly
                    </div>
                    <p className="mt-3 text-4xl font-semibold text-foreground" data-testid="result-roi-yearly">
                      ${yearlyRevenue.toFixed(0)}
                    </p>
                  </div>
                </div>
                <p className="mt-6 text-center text-xs uppercase tracking-[0.35em] text-muted-foreground/80">
                  Formula · Missed Calls × Average Value × Conversion Rate
                </p>
                <div className="mt-6 flex justify-center">
                  <Link href="/demo">
                    <Button className="h-12 rounded-full bg-gradient-to-r from-[#2563EB] to-[#1F3557] px-8 text-sm font-semibold text-white shadow-[0_20px_40px_-20px_rgba(31,41,55,0.28)] hover:opacity-95" data-testid="button-roi-demo">
                      Review a tailored ROI model
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
