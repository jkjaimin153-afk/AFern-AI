import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { Wrench, Hotel, HeartPulse, Scale, Scissors, ShoppingBag } from "lucide-react";

export default function Industries() {
  const industries = [
    {
      name: "Home Services",
      icon: Wrench,
      description: "Plumbers, HVAC, electricians, and field service professionals",
      href: "/industries/home-services",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      name: "Hospitality",
      icon: Hotel,
      description: "Motels, boutique hotels, and vacation rentals",
      href: "/industries/hospitality",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
    {
      name: "Healthcare & Wellness",
      icon: HeartPulse,
      description: "Chiropractors, dentists, small clinics, and wellness centers",
      href: "/industries/healthcare",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      name: "Legal & Professional Services",
      icon: Scale,
      description: "Law firms, accountants, and professional consultants",
      href: "/industries/legal",
      color: "text-amber-500",
      bgColor: "bg-amber-500/10",
    },
    {
      name: "Salons & Spas",
      icon: Scissors,
      description: "Hair salons, nail spas, and beauty professionals",
      href: "/industries/salons",
      color: "text-pink-500",
      bgColor: "bg-pink-500/10",
    },
    {
      name: "E-commerce & Retail",
      icon: ShoppingBag,
      description: "Online stores, local retail, and pickup services",
      href: "/industries/ecommerce",
      color: "text-cyan-500",
      bgColor: "bg-cyan-500/10",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="py-20 md:py-32 bg-gradient-to-br from-background via-primary/5 to-background">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6" data-testid="text-industries-title">
              Built for <span className="text-accent">Your Industry</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tailored AI solutions designed to meet the unique challenges of your business. Select your industry to see how InFlowCalls can transform your operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, idx) => (
              <Link key={idx} href={industry.href}>
                <Card className="p-8 hover-elevate active-elevate-2 transition-all cursor-pointer h-full" data-testid={`card-industry-${idx}`}>
                  <div className={`w-16 h-16 rounded-2xl ${industry.bgColor} flex items-center justify-center mb-6`}>
                    <industry.icon className={`h-8 w-8 ${industry.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 font-serif">{industry.name}</h3>
                  <p className="text-muted-foreground">{industry.description}</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
