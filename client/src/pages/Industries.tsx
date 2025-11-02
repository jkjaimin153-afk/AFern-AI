import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { Wrench, Hotel, HeartPulse, Scale, Scissors, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import googleCalendarLogo from "@assets/image_1761794157605.png";
import salesforceLogo from "@assets/512px-Salesforce.com_logo.svg_1761794725607.png";
import hubspotLogo from "@assets/image_1761794546960.png";
import twilioLogo from "@assets/1024px-Twilio_logo_1761794782516.png";

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

  const integrations = [
    { name: "Google Calendar", logo: googleCalendarLogo, description: "Two-way calendar sync" },
    { name: "Salesforce", logo: salesforceLogo, description: "CRM integration" },
    { name: "HubSpot", logo: hubspotLogo, description: "Marketing automation" },
    { name: "Twilio", logo: twilioLogo, description: "Phone infrastructure" },
  ];

  return (
    <div className="min-h-screen">
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-30" />
        <div className="container mx-auto max-w-7xl px-6 relative">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6" data-testid="text-industries-title">
              Built for{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Your Industry
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tailored AI solutions designed to meet the unique challenges of your business. Select your industry to see how Afern AI can transform your operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, idx) => (
              <Link key={idx} href={industry.href}>
                <div className="group relative p-8 rounded-2xl glassmorphism border border-white/10 hover-elevate transition-all cursor-pointer h-full" data-testid={`card-industry-${idx}`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className={`w-16 h-16 rounded-xl ${industry.bgColor} flex items-center justify-center mb-6`}>
                      <industry.icon className={`h-8 w-8 ${industry.color}`} />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{industry.name}</h3>
                    <p className="text-muted-foreground">{industry.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 relative">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-integrations-title">
              Seamless{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Integrations
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect with the tools you already use
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {integrations.map((integration, idx) => (
              <div key={idx} className="flex flex-col items-center text-center space-y-4 group" data-testid={`integration-${idx}`}>
                <div className="w-28 h-28 rounded-xl glassmorphism border border-white/10 flex items-center justify-center hover-elevate p-4 group-hover:border-primary/30 transition-colors">
                  <img src={integration.logo} alt={integration.name} className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="font-bold mb-1 text-primary text-xl">{integration.name}</h3>
                  <p className="text-base text-muted-foreground">{integration.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <div className="relative max-w-md w-full p-8 text-center rounded-2xl glassmorphism border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl" />
              <div className="relative">
                <h3 className="font-bold text-2xl mb-3">Need another integration?</h3>
                <p className="text-muted-foreground mb-6 text-lg">
                  Contact us to discuss custom integrations for your business
                </p>
                <Link href="/demo">
                  <Button 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 h-12 font-semibold" 
                    data-testid="button-request-demo"
                  >
                    Request Demo
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
