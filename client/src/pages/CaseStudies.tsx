import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { TrendingUp, Clock, DollarSign } from "lucide-react";
import { Link } from "wouter";

export default function CaseStudies() {
  const [missedCalls, setMissedCalls] = useState(0);
  const [avgJobValue, setAvgJobValue] = useState(0);
  const [conversionRate, setConversionRate] = useState(0);

  const weeklyRevenue = (missedCalls * avgJobValue * conversionRate) / 100;
  const monthlyRevenue = weeklyRevenue * 4.33;
  const yearlyRevenue = monthlyRevenue * 12;

  const caseStudies = [
    {
      name: "Deerfield Inn — Motel Pilot",
      industry: "Hospitality",
      size: "15-room boutique motel",
      challenge: "Front desk staff overwhelmed during check-in hours, after-hours calls going unanswered, manual reservation management causing double bookings",
      solution: "Implemented Afern AI with Opera PMS integration, 24/7 automated check-in and booking, multilingual support for international guests",
      results: [
        { metric: "After-hours bookings", value: "0%", description: "increase in revenue capture" },
        { metric: "Staff time saved", value: "0 hrs/week", description: "reallocated to guest experience" },
        { metric: "Guest satisfaction", value: "0%", description: "improvement score" },
        { metric: "Double bookings", value: "0%", description: "reduction" },
      ],
    },
    {
      name: "QuickFix Plumbing — Service Area Pilot",
      industry: "Home Services",
      size: "8 technicians, metro area coverage",
      challenge: "Missing emergency calls during peak hours, high cost of traditional answering service, scheduling conflicts with manual dispatch",
      solution: "Deployed Afern AI with ServiceTitan integration, emergency triage and priority routing, automated appointment booking and dispatch",
      results: [
        { metric: "Emergency response", value: "0%", description: "faster booking time" },
        { metric: "Missed calls", value: "0%", description: "reduction" },
        { metric: "Monthly revenue", value: "$0", description: "increase from captured calls" },
        { metric: "Customer callbacks", value: "0%", description: "decrease" },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="py-20 md:py-32 bg-gradient-to-br from-background via-primary/5 to-background">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6" data-testid="text-case-studies-title">
              Real Results from <span className="text-accent">Real Businesses</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how businesses like yours are transforming their operations with AI-powered call handling.
            </p>
          </div>

          <div className="space-y-16 mb-20">
            {caseStudies.map((study, idx) => (
              <Card key={idx} className="p-10" data-testid={`card-case-study-${idx}`}>
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="px-4 py-1 bg-accent/10 border border-accent/20 rounded-full text-sm font-semibold text-accent">
                      {study.industry}
                    </div>
                    <span className="text-sm text-muted-foreground">{study.size}</span>
                  </div>
                  <h2 className="font-serif text-4xl font-bold mb-4">{study.name}</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div>
                    <h3 className="font-bold mb-3 flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-destructive/10 flex items-center justify-center">
                        <span className="text-xs">!</span>
                      </div>
                      Challenge
                    </h3>
                    <p className="text-muted-foreground">{study.challenge}</p>
                  </div>
                  <div>
                    <h3 className="font-bold mb-3 flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                        <span className="text-xs">→</span>
                      </div>
                      Solution
                    </h3>
                    <p className="text-muted-foreground">{study.solution}</p>
                  </div>
                  <div>
                    <h3 className="font-bold mb-3 flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                        <TrendingUp className="h-4 w-4 text-accent" />
                      </div>
                      Results
                    </h3>
                    <div className="space-y-2">
                      {study.results.slice(0, 2).map((result, ridx) => (
                        <div key={ridx} className="text-sm">
                          <span className="font-bold text-accent">{result.value}</span>
                          <span className="text-muted-foreground"> {result.description}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-4 gap-6 pt-8 border-t border-border">
                  {study.results.map((result, ridx) => (
                    <div key={ridx} className="text-center" data-testid={`result-${idx}-${ridx}`}>
                      <div className="text-3xl font-bold text-accent mb-1">{result.value}</div>
                      <div className="text-sm text-muted-foreground">{result.metric}</div>
                      <div className="text-xs text-muted-foreground mt-1">{result.description}</div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-8 mb-16">
            <h2 className="font-serif text-3xl font-bold mb-6">Calculate Your ROI</h2>
            <p className="text-muted-foreground mb-8">
              Estimate potential revenue recovery from implementing Afern AI
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div>
                <Label htmlFor="roi-missed-calls">Missed calls per week</Label>
                <Input
                  id="roi-missed-calls"
                  type="number"
                  value={missedCalls}
                  onChange={(e) => setMissedCalls(Number(e.target.value))}
                  placeholder="0"
                  data-testid="input-roi-missed-calls"
                />
              </div>
              <div>
                <Label htmlFor="roi-job-value">Average job/order value ($)</Label>
                <Input
                  id="roi-job-value"
                  type="number"
                  value={avgJobValue}
                  onChange={(e) => setAvgJobValue(Number(e.target.value))}
                  placeholder="0"
                  data-testid="input-roi-job-value"
                />
              </div>
              <div>
                <Label htmlFor="roi-conversion">Conversion rate (%)</Label>
                <Input
                  id="roi-conversion"
                  type="number"
                  value={conversionRate}
                  onChange={(e) => setConversionRate(Number(e.target.value))}
                  placeholder="0"
                  data-testid="input-roi-conversion"
                />
              </div>
            </div>

            <div className="bg-gradient-to-br from-accent/5 to-primary/5 border border-accent/20 rounded-2xl p-8">
              <h3 className="font-bold mb-6 text-center">Projected Recovered Revenue</h3>
              <div className="grid md:grid-cols-3 gap-8 mb-6">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Clock className="h-5 w-5 text-accent" />
                    <span className="text-sm text-muted-foreground">Weekly</span>
                  </div>
                  <div className="text-4xl font-bold text-accent" data-testid="result-roi-weekly">${weeklyRevenue.toFixed(0)}</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <DollarSign className="h-5 w-5 text-accent" />
                    <span className="text-sm text-muted-foreground">Monthly</span>
                  </div>
                  <div className="text-4xl font-bold text-accent" data-testid="result-roi-monthly">${monthlyRevenue.toFixed(0)}</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <TrendingUp className="h-5 w-5 text-accent" />
                    <span className="text-sm text-muted-foreground">Yearly</span>
                  </div>
                  <div className="text-4xl font-bold text-accent" data-testid="result-roi-yearly">${yearlyRevenue.toFixed(0)}</div>
                </div>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Formula: Missed Calls × Average Job Value × Conversion Rate
                </p>
                <Link href="/demo">
                  <Button className="bg-accent text-accent-foreground hover:bg-accent/90" data-testid="button-roi-demo">
                    See How We Can Help You Achieve This
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
