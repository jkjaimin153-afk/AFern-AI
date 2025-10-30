import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, AlertCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function HomeServices() {
  const [missedCalls, setMissedCalls] = useState(0);
  const [avgJobValue, setAvgJobValue] = useState(0);
  const [conversionRate, setConversionRate] = useState(0);

  const weeklyRevenue = (missedCalls * avgJobValue * conversionRate) / 100;
  const monthlyRevenue = weeklyRevenue * 4.33;
  const yearlyRevenue = monthlyRevenue * 12;

  const painPoints = [
    "Missing emergency calls during peak hours",
    "High cost of 24/7 answering services",
    "Double bookings and scheduling conflicts",
  ];

  const solutions = [
    "AI answers every call instantly, even during busy times",
    "Automatic emergency triage and priority routing",
    "Two-way sync with ServiceTitan and Housecall Pro",
  ];

  const integrations = ["ServiceTitan", "Housecall Pro", "Jobber", "Google Calendar", "Stripe"];

  return (
    <div className="min-h-screen">
      <section className="py-20 md:py-32 bg-gradient-to-br from-background via-blue-500/5 to-background">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mb-16">
            <Link href="/industries">
              <Button variant="ghost" className="mb-6" data-testid="link-back-industries">
                ← Back to Industries
              </Button>
            </Link>
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6" data-testid="text-home-services-title">
              AI Receptionist for <span className="text-blue-500">Home Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Built for plumbers, HVAC technicians, electricians, and field service professionals who can't afford to miss emergency calls.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <Card className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <AlertCircle className="h-6 w-6 text-destructive" />
                <h3 className="text-2xl font-bold">Common Challenges</h3>
              </div>
              <ul className="space-y-4">
                {painPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3" data-testid={`pain-point-${idx}`}>
                    <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-8 bg-blue-500/5 border-blue-500/20">
              <div className="flex items-center gap-3 mb-6">
                <Check className="h-6 w-6 text-blue-500" />
                <h3 className="text-2xl font-bold">How InFlowCalls Helps</h3>
              </div>
              <ul className="space-y-4">
                {solutions.map((solution, idx) => (
                  <li key={idx} className="flex items-start gap-3" data-testid={`solution-${idx}`}>
                    <Check className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>{solution}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <Card className="p-8 mb-16 bg-card/50 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6">Sample Emergency Call Flow</h3>
            <div className="space-y-4 font-mono text-sm">
              <div className="p-4 bg-blue-500/10 rounded-lg" data-testid="script-line-0">
                <span className="text-blue-500 font-bold">AI:</span> "Thanks for calling QuickFix Plumbing, this is InFlow — how can I help today?"
              </div>
              <div className="p-4 bg-muted rounded-lg" data-testid="script-line-1">
                <span className="text-muted-foreground font-bold">Caller:</span> "I have a burst pipe in the kitchen."
              </div>
              <div className="p-4 bg-blue-500/10 rounded-lg" data-testid="script-line-2">
                <span className="text-blue-500 font-bold">AI:</span> "I'm sorry to hear that. Is anyone in immediate danger or is the leak contained?"
              </div>
              <div className="p-4 bg-muted rounded-lg" data-testid="script-line-3">
                <span className="text-muted-foreground font-bold">Caller:</span> "No danger, just lots of water."
              </div>
              <div className="p-4 bg-blue-500/10 rounded-lg" data-testid="script-line-4">
                <span className="text-blue-500 font-bold">AI:</span> "I can book an emergency visit. What's the address and preferred time — morning or afternoon?"
              </div>
              <div className="p-4 bg-background rounded-lg border border-border mt-4">
                <span className="text-xs text-muted-foreground">
                  System then captures address, preferred time, creates ticket in ServiceTitan, and sends confirmation text.
                </span>
              </div>
            </div>
          </Card>

          <Card className="p-8 mb-16">
            <h3 className="text-2xl font-bold mb-6">Required Integrations</h3>
            <div className="flex flex-wrap gap-3">
              {integrations.map((integration, idx) => (
                <div key={idx} className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm" data-testid={`integration-${idx}`}>
                  {integration}
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6">ROI Calculator</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div>
                <Label htmlFor="missed-calls">Missed calls per week</Label>
                <Input
                  id="missed-calls"
                  type="number"
                  value={missedCalls}
                  onChange={(e) => setMissedCalls(Number(e.target.value))}
                  placeholder="0"
                  data-testid="input-missed-calls"
                />
              </div>
              <div>
                <Label htmlFor="avg-job-value">Average job value ($)</Label>
                <Input
                  id="avg-job-value"
                  type="number"
                  value={avgJobValue}
                  onChange={(e) => setAvgJobValue(Number(e.target.value))}
                  placeholder="0"
                  data-testid="input-avg-job-value"
                />
              </div>
              <div>
                <Label htmlFor="conversion-rate">Conversion rate (%)</Label>
                <Input
                  id="conversion-rate"
                  type="number"
                  value={conversionRate}
                  onChange={(e) => setConversionRate(Number(e.target.value))}
                  placeholder="0"
                  data-testid="input-conversion-rate"
                />
              </div>
            </div>

            <div className="bg-accent/5 border border-accent/20 rounded-lg p-6">
              <h4 className="font-bold mb-4">Projected Recovered Revenue:</h4>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-accent" data-testid="result-weekly">${weeklyRevenue.toFixed(0)}</div>
                  <div className="text-sm text-muted-foreground">Weekly</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent" data-testid="result-monthly">${monthlyRevenue.toFixed(0)}</div>
                  <div className="text-sm text-muted-foreground">Monthly</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent" data-testid="result-yearly">${yearlyRevenue.toFixed(0)}</div>
                  <div className="text-sm text-muted-foreground">Yearly</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Formula: Missed Calls × Avg Job Value × Conversion Rate
              </p>
            </div>
          </Card>

          <div className="mt-16 text-center">
            <Link href="/demo">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" data-testid="button-home-services-demo">
                Schedule a Demo for Home Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
