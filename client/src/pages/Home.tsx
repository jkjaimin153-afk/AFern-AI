import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, Check, Phone, Calendar, TrendingUp, Brain, Shield, Clock } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export default function Home() {
  const [audioModalOpen, setAudioModalOpen] = useState(false);

  const integrations = [
    { name: "Google Calendar", logo: "GC" },
    { name: "HubSpot", logo: "HS" },
    { name: "Stripe", logo: "ST" },
    { name: "Twilio", logo: "TW" },
    { name: "ServiceTitan", logo: "SV" },
    { name: "Clio", logo: "CL" },
  ];

  const features = [
    {
      icon: Brain,
      title: "Natural Language Understanding",
      description: "Understands caller intent, context, and urgency — so the right action happens every time.",
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "Two-way calendar sync — prevent double bookings and auto-confirm in real time.",
    },
    {
      icon: Shield,
      title: "Payment Processing",
      description: "Accept deposits and payments on the call with PCI-compliant flows.",
    },
  ];

  const benefits = [
    "Never miss a potential customer call",
    "Book appointments automatically 24/7",
    "Reduce front desk costs by up to 80%",
    "Integrate with your existing tools",
    "HIPAA-ready and SOC2-compliant options",
    "Multilingual support out of the box",
  ];

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-background py-20 md:py-32">
        <div className="container mx-auto max-w-7xl px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="font-serif text-5xl md:text-6xl font-bold leading-tight text-foreground" data-testid="text-hero-title">
                Never Miss A Call. <span className="text-accent">Turn Conversations Into Customers.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                InFlowCalls is an enterprise-grade AI receptionist & outbound caller that answers, qualifies and books — 24/7 — integrated with your calendar, CRM, and POS.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/demo">
                  <Button 
                    size="lg" 
                    className="bg-accent text-accent-foreground hover:bg-accent/90 h-14 px-8 text-lg hover:scale-105 transition-transform"
                    data-testid="button-request-demo-hero"
                  >
                    Request a 5-Min Demo
                  </Button>
                </Link>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="h-14 px-8 text-lg border-accent/50 hover:bg-accent/10"
                  onClick={() => setAudioModalOpen(true)}
                  data-testid="button-listen-demo"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Listen to demo call
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl flex items-center justify-center backdrop-blur-sm border border-accent/20">
                <button 
                  onClick={() => setAudioModalOpen(true)}
                  className="w-24 h-24 rounded-full bg-accent text-accent-foreground flex items-center justify-center hover:scale-110 transition-transform shadow-2xl"
                  data-testid="button-play-waveform"
                  aria-label="Play demo"
                >
                  <Play className="h-12 w-12 ml-1" />
                </button>
              </div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
            </div>
          </div>

          <div className="mt-16 pt-12 border-t border-border">
            <div className="flex flex-wrap items-center justify-center gap-8 mb-4">
              {integrations.map((integration, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center justify-center w-16 h-16 rounded-lg bg-card border border-card-border hover-elevate"
                  data-testid={`logo-integration-${idx}`}
                  title={integration.name}
                >
                  <span className="text-xs font-bold text-muted-foreground">{integration.logo}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground">
              HIPAA-ready option • SOC2-ready
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 bg-secondary/10 border-y border-secondary/20">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div data-testid="kpi-answered" className="relative">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full gradient-coral-peach mb-3 shadow-lg">
                <span className="text-3xl font-bold font-serif text-white">0%</span>
              </div>
              <p className="text-foreground font-medium">Answered calls automatically</p>
            </div>
            <div data-testid="kpi-booking" className="relative">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary shadow-lg mb-3">
                <span className="text-2xl font-bold font-serif text-white">0m</span>
              </div>
              <p className="text-foreground font-medium">Avg time to booking</p>
            </div>
            <div data-testid="kpi-businesses" className="relative">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full gradient-logo shadow-lg mb-3">
                <span className="text-3xl font-bold font-serif text-white">0+</span>
              </div>
              <p className="text-foreground font-medium">Businesses onboarded</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6" data-testid="text-features-title">
              Enterprise-Grade Intelligence, <span className="text-accent">Effortless Setup</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Powered by advanced AI that understands context, handles complex conversations, and integrates seamlessly with your existing workflow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <Card key={idx} className="p-8 hover-elevate active-elevate-2 transition-all cursor-pointer" data-testid={`card-feature-${idx}`}>
                <feature.icon className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 to-background">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6" data-testid="text-benefits-title">
                Built for Modern Businesses
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3" data-testid={`benefit-${idx}`}>
                    <div className="mt-1 flex-shrink-0">
                      <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center">
                        <Check className="h-4 w-4 text-accent" />
                      </div>
                    </div>
                    <p className="text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/product">
                  <Button size="lg" variant="outline" className="border-accent/50" data-testid="button-explore-features">
                    Explore All Features
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <Card className="p-8 bg-card/50 backdrop-blur-sm">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <Phone className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <div className="h-2 bg-accent/20 rounded-full w-3/4 mb-2" />
                      <div className="h-2 bg-accent/10 rounded-full w-1/2" />
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Calendar className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="h-2 bg-primary/20 rounded-full w-2/3 mb-2" />
                      <div className="h-2 bg-primary/10 rounded-full w-1/3" />
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <div className="h-2 bg-accent/20 rounded-full w-4/5 mb-2" />
                      <div className="h-2 bg-accent/10 rounded-full w-2/5" />
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="container mx-auto max-w-7xl px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Calling Experience?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses automating their phone operations with InFlowCalls.
          </p>
          <Link href="/demo">
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 h-14 px-12 text-lg"
              data-testid="button-cta-bottom"
            >
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>

      <Dialog open={audioModalOpen} onOpenChange={setAudioModalOpen}>
        <DialogContent className="max-w-2xl" data-testid="modal-audio-demo">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl">Demo Call Examples</DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <div className="space-y-3">
              <h4 className="font-semibold">Booking Call Example</h4>
              <div className="bg-muted rounded-lg p-4">
                <p className="text-sm text-muted-foreground italic">
                  Audio player placeholder - Booking scenario
                </p>
                <div className="mt-4 p-4 bg-background rounded border border-border">
                  <p className="text-xs text-muted-foreground mb-2">Sample transcript:</p>
                  <p className="text-sm">"Thanks for calling QuickFix Plumbing, this is InFlow — how can I help today?"</p>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold">Payment Capture Example</h4>
              <div className="bg-muted rounded-lg p-4">
                <p className="text-sm text-muted-foreground italic">
                  Audio player placeholder - Payment scenario
                </p>
                <div className="mt-4 p-4 bg-background rounded border border-border">
                  <p className="text-xs text-muted-foreground mb-2">Sample transcript:</p>
                  <p className="text-sm">"I can help secure your appointment with a deposit. May I collect your payment information?"</p>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
