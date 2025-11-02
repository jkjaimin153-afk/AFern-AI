import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, AlertCircle } from "lucide-react";

export default function Legal() {
  const painPoints = [
    "Potential clients calling outside business hours",
    "Complex intake forms delaying case evaluation",
    "Conflict checks slowing down new client onboarding",
  ];

  const solutions = [
    "24/7 initial consultation scheduling",
    "Automated conflict checks via Clio integration",
    "Detailed intake form completion during call",
  ];

  return (
    <div className="min-h-screen">
      <section className="py-20 md:py-32 bg-gradient-to-br from-background via-amber-500/5 to-background">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mb-16">
            <Link href="/industries">
              <Button variant="ghost" className="mb-6" data-testid="link-back-industries">
                ← Back to Industries
              </Button>
            </Link>
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6" data-testid="text-legal-title">
              AI Receptionist for <span className="text-amber-500">Legal & Professional Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Built for law firms, accountants, and professional consultants who need secure, professional client intake.
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

            <Card className="p-8 bg-amber-500/5 border-amber-500/20">
              <div className="flex items-center gap-3 mb-6">
                <Check className="h-6 w-6 text-amber-500" />
                <h3 className="text-2xl font-bold">How Afern AI Helps</h3>
              </div>
              <ul className="space-y-4">
                {solutions.map((solution, idx) => (
                  <li key={idx} className="flex items-start gap-3" data-testid={`solution-${idx}`}>
                    <Check className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span>{solution}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <Card className="p-8 mb-16 bg-card/50 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6">Sample Client Intake Call</h3>
            <div className="space-y-4 font-mono text-sm">
              <div className="p-4 bg-amber-500/10 rounded-lg" data-testid="script-line-0">
                <span className="text-amber-500 font-bold">AI:</span> "Thank you for calling Parker & Associates. How may I direct your call?"
              </div>
              <div className="p-4 bg-muted rounded-lg" data-testid="script-line-1">
                <span className="text-muted-foreground font-bold">Caller:</span> "I need help with a contract dispute."
              </div>
              <div className="p-4 bg-amber-500/10 rounded-lg" data-testid="script-line-2">
                <span className="text-amber-500 font-bold">AI:</span> "I can help schedule a consultation. May I have your name and the other party's name for a conflict check?"
              </div>
              <div className="p-4 bg-muted rounded-lg" data-testid="script-line-3">
                <span className="text-muted-foreground font-bold">Caller:</span> "Sarah Johnson. The other party is ABC Corporation."
              </div>
              <div className="p-4 bg-amber-500/10 rounded-lg" data-testid="script-line-4">
                <span className="text-amber-500 font-bold">AI:</span> "Thank you. I've confirmed no conflicts. Our next available consultation is Tuesday at 3PM. Does that work?"
              </div>
              <div className="p-4 bg-background rounded-lg border border-border mt-4">
                <span className="text-xs text-muted-foreground">
                  System runs conflict check in Clio, creates intake form, schedules consultation, and emails confidentiality agreement.
                </span>
              </div>
            </div>
          </Card>

          <div className="mt-16 text-center">
            <Link href="/demo">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" data-testid="button-legal-demo">
                Schedule a Demo for Legal Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
