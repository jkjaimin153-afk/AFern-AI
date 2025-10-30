import { Card } from "@/components/ui/card";
import { Brain, Calendar, Phone, CreditCard, Users, Wrench, MessageSquare, UserCheck, Shield, Globe, Code, Zap } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Product() {
  const features = [
    {
      icon: Brain,
      title: "Natural Language Understanding (NLU)",
      description: "Our AI understands caller intent, context, and urgency — not just keywords. Advanced slot-filling ensures accurate data capture every time.",
      benefits: [
        "Context-aware conversation flows",
        "Intent recognition with 95%+ accuracy",
      ],
    },
    {
      icon: Calendar,
      title: "Two-way Calendar Sync & Scheduling",
      description: "Seamlessly sync with Google Calendar, Office365, and Calendly. Prevent double bookings and auto-confirm appointments in real-time.",
      benefits: [
        "Real-time availability checking",
        "Automatic confirmation emails and SMS",
      ],
    },
    {
      icon: Phone,
      title: "Outbound Calling & Reminders",
      description: "Automated appointment confirmations, follow-ups, and no-show recovery. Reduce missed appointments by up to 70%.",
      benefits: [
        "Customizable reminder schedules",
        "Intelligent rescheduling workflows",
      ],
    },
    {
      icon: CreditCard,
      title: "Payments on Call",
      description: "Accept deposits and payments directly during calls with PCI-compliant Stripe and PayPal integration. Increase show-up rates with prepayment.",
      benefits: [
        "Secure payment capture",
        "Automated invoicing and receipts",
      ],
    },
    {
      icon: Users,
      title: "CRM Sync & Lead Creation",
      description: "Automatically create contacts and log interactions in HubSpot, Salesforce, Zoho, and Clio. Never lose a lead again.",
      benefits: [
        "Bidirectional data sync",
        "Custom field mapping",
      ],
    },
    {
      icon: Wrench,
      title: "PMS & Field Service Integrations",
      description: "Native integrations with ServiceTitan, Housecall Pro, and major hotel property management systems for seamless operations.",
      benefits: [
        "Work order creation",
        "Guest check-in automation",
      ],
    },
    {
      icon: MessageSquare,
      title: "Conversation Intelligence & Transcription",
      description: "Every call is transcribed, summarized, and analyzed for sentiment. Get actionable insights from your phone interactions.",
      benefits: [
        "Sentiment analysis and alerts",
        "Searchable transcripts with highlights",
      ],
    },
    {
      icon: UserCheck,
      title: "Human Escalation / Live Agent Handoff",
      description: "Hybrid model with SLA options. Complex calls automatically transfer to your team with full context and conversation history.",
      benefits: [
        "Intelligent escalation rules",
        "Warm transfers with context",
      ],
    },
    {
      icon: Shield,
      title: "Compliance & Security",
      description: "TLS encryption, secure call recordings, data residency options, and HIPAA BAA available for healthcare providers.",
      benefits: [
        "SOC2 Type II certified",
        "GDPR and CCPA compliant",
      ],
    },
    {
      icon: Globe,
      title: "Multi-language Auto-detect & Support",
      description: "Automatically detect caller language and respond in 50+ languages. Expand your market reach without hiring multilingual staff.",
      benefits: [
        "Real-time language detection",
        "Natural accent handling",
      ],
    },
    {
      icon: Code,
      title: "API & Webhooks + Developer Console",
      description: "Full REST API, real-time webhooks, and a powerful developer console for custom integrations and workflows.",
      benefits: [
        "Comprehensive API documentation",
        "Webhook event streaming",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="py-20 md:py-32 bg-gradient-to-br from-background via-primary/5 to-background">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6" data-testid="text-product-title">
              Everything You Need to <span className="text-accent">Automate Calls</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Enterprise-grade features designed for small businesses. No setup fees, no hidden costs — just powerful AI that works.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <Card key={idx} className="p-8 hover-elevate active-elevate-2 transition-all" data-testid={`card-product-feature-${idx}`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{feature.description}</p>
                <ul className="space-y-2">
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
