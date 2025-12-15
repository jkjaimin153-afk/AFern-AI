import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "wouter";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
import { trackEvent } from "../../lib/analytics";

export default function Pricing() {
  const [callsPerMonth, setCallsPerMonth] = useState(0);
  const [seatsNeeded, setSeatsNeeded] = useState(0);

  useEffect(() => {
    trackEvent('pricing_page_view', 'Pricing', 'Pricing page visited');
  }, []);

  useEffect(() => {
    if (callsPerMonth > 0 || seatsNeeded > 0) {
      trackEvent('pricing_calculator_use', 'Pricing', `Calls: ${callsPerMonth}, Seats: ${seatsNeeded}`);
    }
  }, [callsPerMonth, seatsNeeded]);

  const tiers = [
    {
      name: "Starter",
      price: "0",
      description: "Perfect for small businesses just getting started",
      features: [
        "Up to 100 calls/month",
        "Basic calendar integration",
        "Email support",
        "Standard AI responses",
        "Call recordings & transcripts",
      ],
    },
    {
      name: "Growth",
      price: "0",
      description: "For growing businesses that need more capacity",
      features: [
        "Up to 500 calls/month",
        "Advanced calendar sync",
        "Priority email support",
        "Custom AI training",
        "CRM integrations",
        "Payment processing",
        "Analytics dashboard",
      ],
      popular: true,
    },
    {
      name: "Pro",
      price: "0",
      description: "For established businesses with high volume",
      features: [
        "Up to 2,000 calls/month",
        "All Growth features",
        "Phone & chat support",
        "Advanced workflow automation",
        "Multiple phone numbers",
        "Custom integrations",
        "Dedicated account manager",
        "SLA guarantee",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for large organizations",
      features: [
        "Unlimited calls",
        "All Pro features",
        "24/7 premium support",
        "White-label options",
        "Custom AI model training",
        "On-premise deployment option",
        "HIPAA BAA included",
        "Custom SLA",
        "Dedicated infrastructure",
      ],
    },
  ];

  const faqs = [
    {
      question: "How accurate is the AI?",
      answer: "Our AI handles 98%+ of routine calls with high accuracy. For complex situations, calls are seamlessly transferred to your team with full context.",
    },
    {
      question: "Do you integrate with my PMS/CRM?",
      answer: "We integrate natively with common systems like HubSpot, Salesforce, ServiceTitan, and more. For others, we support integration via Zapier and custom webhooks.",
    },
    {
      question: "What happens if the AI can't handle a call?",
      answer: "Calls are intelligently escalated to your team with complete conversation history and context, ensuring a smooth handoff.",
    },
    {
      question: "Is there a setup fee?",
      answer: "No setup fees. You can get started immediately with our simple onboarding process.",
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes, all plans are month-to-month with no long-term contracts required. Enterprise plans have flexible terms.",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="py-20 md:py-32 bg-gradient-to-br from-background via-primary/5 to-background">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6" data-testid="text-pricing-title">
              Simple, <span className="text-accent">Transparent Pricing</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
              Choose the plan that fits your business. All prices shown as placeholders — contact sales for current rates.
            </p>
            <p className="text-sm text-muted-foreground">
              Pricing temporarily hidden — contact sales for a custom quote
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {tiers.map((tier, idx) => (
              <Card
                key={idx}
                className={`p-8 relative ${tier.popular ? "border-accent shadow-xl scale-105" : ""}`}
                data-testid={`card-tier-${idx}`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                )}
                <h3 className="font-serif text-2xl font-bold mb-2">{tier.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">${tier.price}</span>
                  {tier.price !== "Custom" && <span className="text-muted-foreground">/month</span>}
                </div>
                <p className="text-sm text-muted-foreground mb-6">{tier.description}</p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/demo">
                  <Button
                    className={`w-full ${tier.popular ? "bg-accent text-accent-foreground hover:bg-accent/90" : ""}`}
                    variant={tier.popular ? "default" : "outline"}
                    data-testid={`button-tier-${idx}`}
                  >
                    {tier.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                  </Button>
                </Link>
              </Card>
            ))}
          </div>

          <Card className="p-8 mb-16 max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-bold mb-6">Pricing Calculator</h2>
            <p className="text-muted-foreground mb-6">
              Estimate your monthly cost based on usage (rates currently zeroed for placeholder)
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <Label htmlFor="calls">Expected calls per month</Label>
                <Input
                  id="calls"
                  type="number"
                  value={callsPerMonth}
                  onChange={(e) => setCallsPerMonth(Number(e.target.value))}
                  placeholder="0"
                  data-testid="input-calls-per-month"
                />
              </div>
              <div>
                <Label htmlFor="seats">Number of team seats</Label>
                <Input
                  id="seats"
                  type="number"
                  value={seatsNeeded}
                  onChange={(e) => setSeatsNeeded(Number(e.target.value))}
                  placeholder="0"
                  data-testid="input-seats-needed"
                />
              </div>
            </div>

            <div className="bg-accent/5 border border-accent/20 rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-muted-foreground">Per-call cost:</span>
                <span className="font-bold">$0.00</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-muted-foreground">Per-seat cost:</span>
                <span className="font-bold">$0.00/month</span>
              </div>
              <div className="border-t border-border pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">Estimated monthly total:</span>
                  <span className="text-3xl font-bold text-accent" data-testid="result-total-cost">$0.00</span>
                </div>
              </div>
            </div>
          </Card>

          <div className="mb-16">
            <h2 className="font-serif text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, idx) => (
                <Card key={idx} className="p-6" data-testid={`card-faq-${idx}`}>
                  <h3 className="font-bold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h2 className="font-serif text-3xl font-bold mb-4">Need Enterprise Solutions or Custom Integrations?</h2>
            <p className="text-muted-foreground mb-8">
              Talk to our team about enterprise service tiers, custom communication systems, volume discounts, and SLA options.
            </p>
            <Link href="/demo">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" data-testid="button-enterprise-contact">
                Book a Strategy Call
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
