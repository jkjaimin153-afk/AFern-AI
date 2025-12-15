import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/SectionHeading";
import { Link } from "wouter";
import { HeartPulse, Hotel, Scale, Scissors, ShoppingBag, Wrench } from "lucide-react";

const INDUSTRY_DECK = [
  {
    name: "Home Services",
    icon: Wrench,
    description: "Emergency dispatch, outbound follow-up, and after-hours triage for HVAC, plumbing, and field teams.",
    href: "/industries/home-services",
  },
  {
    name: "Hospitality",
    icon: Hotel,
    description: "Concierge-grade guest communications across phone, SMS, and web chat for hotels and vacation rentals.",
    href: "/industries/hospitality",
  },
  {
    name: "Healthcare & Wellness",
    icon: HeartPulse,
    description: "HIPAA-conscious scheduling, intake, and reminder workflows for clinics, dental, and wellness practices.",
    href: "/industries/healthcare",
  },
  {
    name: "Legal & Professional Services",
    icon: Scale,
    description: "Qualification, intake, and conflict checks for boutique law firms, accountants, and consultants.",
    href: "/industries/legal",
  },
  {
    name: "Beauty & Personal Care",
    icon: Scissors,
    description: "Smart booking, deposits, and membership management for salons, spas, and studios.",
    href: "/industries/salons",
  },
  {
    name: "Retail & E-commerce",
    icon: ShoppingBag,
    description: "Omnichannel support, curbside fulfilment, and VIP retention programs for modern retail.",
    href: "/industries/ecommerce",
  },
];

export default function Industries() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 gradient-soft opacity-50" />
        <div className="absolute -left-16 top-10 h-64 w-64 orb-glow blur-3xl opacity-50" />

        <div className="container relative z-10 mx-auto max-w-6xl px-6">
          <SectionHeading
            title="Solutions for Every Industry"
            description="Managed customer communication services tailored to your industry. Select a vertical to explore how we handle phone, chat, web, and automation for businesses like yours."
            className="space-y-6"
          />

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {INDUSTRY_DECK.map((industry) => (
              <Link key={industry.name} href={industry.href}>
                <Card className="group h-full cursor-pointer border-border bg-white shadow-[0_24px_40px_-30px_rgba(15,23,42,0.15)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_32px_60px_-32px_rgba(15,23,42,0.2)]">
                  <CardHeader className="space-y-5">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-slate-100">
                      <industry.icon className="h-7 w-7 text-accent" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-foreground">{industry.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {industry.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="rounded-3xl border border-border bg-white p-12 text-center shadow-[0_28px_56px_-30px_rgba(15,23,42,0.16)]">
            <SectionHeading
              title="Need Enterprise Solutions or Custom Integrations?"
              description="Our team builds custom communication systems and connects to proprietary booking systems, data warehouses, and CRMs for enterprise clients."
              align="center"
              className="max-w-3xl text-center"
            >
              <div className="mt-10 flex justify-center">
                <Link href="/demo">
                  <Button className="h-15 w-full max-w-sm rounded-full bg-gradient-to-r from-[#2563EB] to-[#1F3557] px-14 text-lg font-semibold text-white shadow-[0_24px_48px_-20px_rgba(31,41,55,0.28)] hover:opacity-95">
                    Book a Strategy Call
                  </Button>
                </Link>
              </div>
            </SectionHeading>
          </div>
        </div>
      </section>
    </div>
  );
}
