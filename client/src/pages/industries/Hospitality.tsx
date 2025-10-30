import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, AlertCircle } from "lucide-react";

export default function Hospitality() {
  const painPoints = [
    "Front desk staff overwhelmed during check-in rushes",
    "After-hours booking requests going unanswered",
    "Manual reservation management across multiple platforms",
  ];

  const solutions = [
    "24/7 automated check-in and reservation handling",
    "Seamless PMS integration for real-time availability",
    "Multilingual support for international guests",
  ];

  const integrations = ["Opera PMS", "Cloudbeds", "RoomRaccoon", "Google Calendar", "Stripe"];

  return (
    <div className="min-h-screen">
      <section className="py-20 md:py-32 bg-gradient-to-br from-background via-purple-500/5 to-background">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mb-16">
            <Link href="/industries">
              <Button variant="ghost" className="mb-6" data-testid="link-back-industries">
                ← Back to Industries
              </Button>
            </Link>
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6" data-testid="text-hospitality-title">
              AI Receptionist for <span className="text-purple-500">Hospitality</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Perfect for motels, boutique hotels, and vacation rentals that need round-the-clock guest support without the overhead.
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

            <Card className="p-8 bg-purple-500/5 border-purple-500/20">
              <div className="flex items-center gap-3 mb-6">
                <Check className="h-6 w-6 text-purple-500" />
                <h3 className="text-2xl font-bold">How InFlowCalls Helps</h3>
              </div>
              <ul className="space-y-4">
                {solutions.map((solution, idx) => (
                  <li key={idx} className="flex items-start gap-3" data-testid={`solution-${idx}`}>
                    <Check className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span>{solution}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <Card className="p-8 mb-16 bg-card/50 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6">Sample Check-in Call Flow</h3>
            <div className="space-y-4 font-mono text-sm">
              <div className="p-4 bg-purple-500/10 rounded-lg" data-testid="script-line-0">
                <span className="text-purple-500 font-bold">AI:</span> "Welcome to Deerfield Inn. How may I help you today?"
              </div>
              <div className="p-4 bg-muted rounded-lg" data-testid="script-line-1">
                <span className="text-muted-foreground font-bold">Guest:</span> "I'd like to book a room for this weekend."
              </div>
              <div className="p-4 bg-purple-500/10 rounded-lg" data-testid="script-line-2">
                <span className="text-purple-500 font-bold">AI:</span> "Certainly! What dates are you looking at?"
              </div>
              <div className="p-4 bg-muted rounded-lg" data-testid="script-line-3">
                <span className="text-muted-foreground font-bold">Guest:</span> "Friday and Saturday night, checking out Sunday."
              </div>
              <div className="p-4 bg-purple-500/10 rounded-lg" data-testid="script-line-4">
                <span className="text-purple-500 font-bold">AI:</span> "Perfect. We have availability. Would you like a king or two queens?"
              </div>
              <div className="p-4 bg-background rounded-lg border border-border mt-4">
                <span className="text-xs text-muted-foreground">
                  System checks PMS availability, captures guest details, processes payment, and sends confirmation with check-in code.
                </span>
              </div>
            </div>
          </Card>

          <Card className="p-8 mb-16">
            <h3 className="text-2xl font-bold mb-6">Required Integrations</h3>
            <div className="flex flex-wrap gap-3">
              {integrations.map((integration, idx) => (
                <div key={idx} className="px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-sm" data-testid={`integration-${idx}`}>
                  {integration}
                </div>
              ))}
            </div>
          </Card>

          <div className="mt-16 text-center">
            <Link href="/demo">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" data-testid="button-hospitality-demo">
                Schedule a Demo for Hospitality
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
