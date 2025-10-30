import { Card } from "@/components/ui/card";
import { Brain, Calendar, Zap, Globe } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Product() {
  const features = [
    {
      icon: Brain,
      title: "AI Call Receptionist",
      description: "Human-like conversations powered by advanced AI. Understands caller intent, context, and urgency to provide natural interactions that feel just like talking to a real person.",
      benefits: [
        "Natural language understanding with 95%+ accuracy",
        "Context-aware conversation flows",
        "Intelligent call routing and escalation",
      ],
    },
    {
      icon: Calendar,
      title: "Smart Scheduling & Reminders",
      description: "Automated calendar management with two-way sync. Books appointments in real-time, sends reminder calls, and reduces no-shows by up to 70%.",
      benefits: [
        "Real-time availability checking across calendars",
        "Automated reminder calls and confirmations",
        "Intelligent rescheduling workflows",
      ],
    },
    {
      icon: Globe,
      title: "Integration & Intelligence",
      description: "Connect with your tools, collect customer info, and communicate in 50+ languages with AI chatbots across all channels. Seamlessly sync data between platforms for a unified customer experience.",
      benefits: [
        "PMS & CRM integrations",
        "Multi-language support",
        "AI chatbot deployment",
        "Automatic data collection",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="py-20 md:py-32 bg-gradient-to-br from-background via-primary/5 to-background">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6" data-testid="text-product-title">
              Everything You Need to <span className="text-accent">Automate Your Communication</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Enterprise-grade features designed for small businesses. No setup fees, no hidden costs — just powerful AI that works.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, idx) => (
              <Card key={idx} className="p-8 hover-elevate active-elevate-2 transition-all h-full flex flex-col" data-testid={`card-product-feature-${idx}`}>
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold font-serif">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground mb-6 text-center">{feature.description}</p>
                <ul className="space-y-3 flex-1">
                  {feature.benefits.map((benefit, bidx) => (
                    <li key={bidx} className="flex items-start gap-2 text-sm">
                      <Zap className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="/demo">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" data-testid="button-product-demo">
                See It In Action
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
