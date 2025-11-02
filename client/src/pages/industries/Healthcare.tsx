import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, AlertCircle } from "lucide-react";

export default function Healthcare() {
  const painPoints = [
    "Patient privacy concerns with traditional call centers",
    "High no-show rates impacting scheduling efficiency",
    "Staff spending too much time on appointment confirmations",
  ];

  const solutions = [
    "HIPAA-ready secure call handling and recording",
    "Automated appointment reminders reducing no-shows by 60%",
    "Intelligent triage routing urgent cases appropriately",
  ];

  return (
    <div className="min-h-screen">
      <section className="py-20 md:py-32 bg-gradient-to-br from-background via-green-500/5 to-background">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mb-16">
            <Link href="/industries">
              <Button variant="ghost" className="mb-6" data-testid="link-back-industries">
                ← Back to Industries
              </Button>
            </Link>
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6" data-testid="text-healthcare-title">
              AI Receptionist for <span className="text-green-500">Healthcare & Wellness</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Designed for chiropractors, dentists, small clinics, and wellness centers with strict compliance requirements.
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

            <Card className="p-8 bg-green-500/5 border-green-500/20">
              <div className="flex items-center gap-3 mb-6">
                <Check className="h-6 w-6 text-green-500" />
                <h3 className="text-2xl font-bold">How InFlowCalls Helps</h3>
              </div>
              <ul className="space-y-4">
                {solutions.map((solution, idx) => (
                  <li key={idx} className="flex items-start gap-3" data-testid={`solution-${idx}`}>
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{solution}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <Card className="p-8 mb-16 bg-card/50 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6">Sample Appointment Booking</h3>
            <div className="space-y-4 font-mono text-sm">
              <div className="p-4 bg-green-500/10 rounded-lg" data-testid="script-line-0">
                <span className="text-green-500 font-bold">AI:</span> "Thank you for calling Wellness Chiropractic. How can I assist you?"
              </div>
              <div className="p-4 bg-muted rounded-lg" data-testid="script-line-1">
                <span className="text-muted-foreground font-bold">Patient:</span> "I need to schedule an adjustment."
              </div>
              <div className="p-4 bg-green-500/10 rounded-lg" data-testid="script-line-2">
                <span className="text-green-500 font-bold">AI:</span> "Of course. Are you a returning patient?"
              </div>
              <div className="p-4 bg-muted rounded-lg" data-testid="script-line-3">
                <span className="text-muted-foreground font-bold">Patient:</span> "Yes, my name is John Smith."
              </div>
              <div className="p-4 bg-green-500/10 rounded-lg" data-testid="script-line-4">
                <span className="text-green-500 font-bold">AI:</span> "Great to hear from you again, John. We have openings Tuesday at 2PM or Thursday at 10AM. Which works better?"
              </div>
              <div className="p-4 bg-background rounded-lg border border-border mt-4">
                <span className="text-xs text-muted-foreground">
                  System verifies patient in EHR, checks availability, books appointment, and sends reminder with intake forms.
                </span>
              </div>
            </div>
          </Card>

          <div className="mt-16 text-center">
            <Link href="/demo">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" data-testid="button-healthcare-demo">
                Schedule a Demo for Healthcare
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
