import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, AlertCircle } from "lucide-react";

export default function Ecommerce() {
  const painPoints = [
    "Customer service calls overwhelming small teams",
    "Order status inquiries taking up valuable time",
    "Return and pickup coordination requiring manual effort",
  ];

  const solutions = [
    "Automated order status and tracking updates",
    "Seamless return authorization and pickup scheduling",
    "Integration with Shopify for real-time inventory info",
  ];

  return (
    <div className="min-h-screen">
      <section className="py-20 md:py-32 bg-gradient-to-br from-background via-cyan-500/5 to-background">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mb-16">
            <Link href="/industries">
              <Button variant="ghost" className="mb-6" data-testid="link-back-industries">
                ← Back to Industries
              </Button>
            </Link>
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6" data-testid="text-ecommerce-title">
              AI Receptionist for <span className="text-cyan-500">E-commerce & Retail</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Built for online stores, local retail, and pickup services that need efficient customer support automation.
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

            <Card className="p-8 bg-cyan-500/5 border-cyan-500/20">
              <div className="flex items-center gap-3 mb-6">
                <Check className="h-6 w-6 text-cyan-500" />
                <h3 className="text-2xl font-bold">How Afern AI Helps</h3>
              </div>
              <ul className="space-y-4">
                {solutions.map((solution, idx) => (
                  <li key={idx} className="flex items-start gap-3" data-testid={`solution-${idx}`}>
                    <Check className="h-5 w-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                    <span>{solution}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <Card className="p-8 mb-16 bg-card/50 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6">Sample Order Status Call</h3>
            <div className="space-y-4 font-mono text-sm">
              <div className="p-4 bg-cyan-500/10 rounded-lg" data-testid="script-line-0">
                <span className="text-cyan-500 font-bold">AI:</span> "Thanks for calling Urban Threads. How can I help you today?"
              </div>
              <div className="p-4 bg-muted rounded-lg" data-testid="script-line-1">
                <span className="text-muted-foreground font-bold">Customer:</span> "I need to check on my order status."
              </div>
              <div className="p-4 bg-cyan-500/10 rounded-lg" data-testid="script-line-2">
                <span className="text-cyan-500 font-bold">AI:</span> "I can help with that. May I have your order number or email address?"
              </div>
              <div className="p-4 bg-muted rounded-lg" data-testid="script-line-3">
                <span className="text-muted-foreground font-bold">Customer:</span> "My email is sarah@example.com"
              </div>
              <div className="p-4 bg-cyan-500/10 rounded-lg" data-testid="script-line-4">
                <span className="text-cyan-500 font-bold">AI:</span> "Found it! Your order shipped yesterday and should arrive Thursday. Tracking number sent to your email."
              </div>
              <div className="p-4 bg-background rounded-lg border border-border mt-4">
                <span className="text-xs text-muted-foreground">
                  System queries Shopify API, retrieves order details, sends tracking info via SMS and email.
                </span>
              </div>
            </div>
          </Card>

          <div className="mt-16 text-center">
            <Link href="/demo">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" data-testid="button-ecommerce-demo">
                Schedule a Demo for E-commerce
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
