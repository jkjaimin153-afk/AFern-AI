import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, AlertCircle } from "lucide-react";

export default function HomeServices() {

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
