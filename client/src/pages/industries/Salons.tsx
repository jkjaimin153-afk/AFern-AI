import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, AlertCircle } from "lucide-react";

export default function Salons() {
  const painPoints = [
    "Stylists interrupted mid-service to answer phones",
    "Last-minute cancellations leaving gaps in schedule",
    "No-deposit bookings leading to revenue loss",
  ];

  const solutions = [
    "AI handles all booking calls while you focus on clients",
    "Automated deposit collection at time of booking",
    "Smart reminder system reduces no-shows by 70%",
  ];

  return (
    <div className="min-h-screen">
      <section className="py-20 md:py-32 bg-gradient-to-br from-background via-pink-500/5 to-background">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mb-16">
            <Link href="/industries">
              <Button variant="ghost" className="mb-6" data-testid="link-back-industries">
                ← Back to Industries
              </Button>
            </Link>
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6" data-testid="text-salons-title">
              AI Receptionist for <span className="text-pink-500">Salons & Spas</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Perfect for hair salons, nail spas, and beauty professionals who want to focus on clients, not phones.
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

            <Card className="p-8 bg-pink-500/5 border-pink-500/20">
              <div className="flex items-center gap-3 mb-6">
                <Check className="h-6 w-6 text-pink-500" />
                <h3 className="text-2xl font-bold">How InFlowCalls Helps</h3>
              </div>
              <ul className="space-y-4">
                {solutions.map((solution, idx) => (
                  <li key={idx} className="flex items-start gap-3" data-testid={`solution-${idx}`}>
                    <Check className="h-5 w-5 text-pink-500 mt-0.5 flex-shrink-0" />
                    <span>{solution}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <Card className="p-8 mb-16 bg-card/50 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6">Sample Appointment Call</h3>
            <div className="space-y-4 font-mono text-sm">
              <div className="p-4 bg-pink-500/10 rounded-lg" data-testid="script-line-0">
                <span className="text-pink-500 font-bold">AI:</span> "Thank you for calling Serenity Salon. How can I help you today?"
              </div>
              <div className="p-4 bg-muted rounded-lg" data-testid="script-line-1">
                <span className="text-muted-foreground font-bold">Caller:</span> "I'd like to book a haircut and color."
              </div>
              <div className="p-4 bg-pink-500/10 rounded-lg" data-testid="script-line-2">
                <span className="text-pink-500 font-bold">AI:</span> "Perfect! Do you have a preferred stylist?"
              </div>
              <div className="p-4 bg-muted rounded-lg" data-testid="script-line-3">
                <span className="text-muted-foreground font-bold">Caller:</span> "Yes, with Maria if possible."
              </div>
              <div className="p-4 bg-pink-500/10 rounded-lg" data-testid="script-line-4">
                <span className="text-pink-500 font-bold">AI:</span> "Maria has availability Friday at 1PM. The service takes 3 hours. We require a $25 deposit — may I collect that now?"
              </div>
              <div className="p-4 bg-background rounded-lg border border-border mt-4">
                <span className="text-xs text-muted-foreground">
                  System checks stylist calendar, processes deposit via Square, books appointment, sends confirmation with prep instructions.
                </span>
              </div>
            </div>
          </Card>

          <div className="mt-16 text-center">
            <Link href="/demo">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" data-testid="button-salons-demo">
                Schedule a Demo for Salons
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
