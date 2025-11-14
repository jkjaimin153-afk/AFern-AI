import { SectionHeading } from "@/components/SectionHeading";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Building, Users, Target, Heart } from "lucide-react";

const VALUES = [
  {
    icon: Target,
    title: "Customer first",
    description:
      "We obsess over outcomes and build experiences that feel bespoke even when powered by automation.",
  },
  {
    icon: Heart,
    title: "Craft at scale",
    description: "Design, copy, and engineering work together so every touchpoint feels intentional and premium.",
  },
  {
    icon: Users,
    title: "Radical transparency",
    description: "We earn trust by sharing context, timelines, and learnings with partners and teammates.",
  },
  {
    icon: Building,
    title: "Reliability",
    description: "High-availability infrastructure and structured QA ensure clients can depend on us 24/7.",
  },
];

const FOUNDERS = [
  {
    name: "Sarah Chen",
    role: "CEO & Co-Founder",
    bio: "Former SaaS VP leading go-to-market and customer success teams that scaled to $300M ARR.",
  },
  {
    name: "Marcus Rodriguez",
    role: "CTO & Co-Founder",
    bio: "Ex-Google AI researcher specialising in speech, LLM orchestration, and production reliability.",
  },
];

const OPEN_ROLES = [
  { title: "Senior Backend Engineer", location: "Remote (AMER)", type: "Full-time" },
  { title: "AI/ML Engineer", location: "San Francisco, CA / Remote", type: "Full-time" },
  { title: "Product Designer", location: "New York, NY / Remote", type: "Full-time" },
  { title: "Customer Success Manager", location: "Remote (Global)", type: "Full-time" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 gradient-soft opacity-45" />
        <div className="absolute -top-24 right-12 h-72 w-72 orb-glow blur-3xl opacity-50" />

        <div className="container relative z-10 mx-auto max-w-6xl px-6">
          <SectionHeading
            align="left"
            eyebrow="About Afern"
            title="Reimagining the front office for modern operators."
            description="We design premium web experiences and conversational systems that keep your brand trustworthy, responsive, and conversion-ready."
            className="max-w-3xl"
          />

          <Card className="mt-14 border-border bg-white p-12 shadow-[0_28px_56px_-30px_rgba(15,23,42,0.16)]">
            <h2 className="font-serif text-3xl font-semibold text-foreground mb-6">Our story</h2>
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Afern launched after seeing too many teams patch together call centres, web agencies, and freelance
                automation—with experiences that felt anything but premium. We believed operators deserved a partner
                who could deliver both design craft and technical depth.
              </p>
              <p>
                Today we provide conversational AI, tailored websites, and revenue operations in unified sprints so
                our clients stay lean while scaling fast. From healthcare and legal to hospitality and retail, we help
                them meet every conversation with confidence.
              </p>
            </div>
          </Card>

          <div className="mt-20">
            <SectionHeading title="Our values" description="Principles guiding every launch and partnership." />
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {VALUES.map((value) => (
                <Card
                  key={value.title}
                  className="border-border bg-white px-6 py-8 text-center shadow-[0_24px_40px_-30px_rgba(15,23,42,0.15)]"
                  data-testid={`card-value-${value.title}`}
                >
                  <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100">
                    <value.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{value.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-20">
            <SectionHeading title="Leadership" description="Operators and builders who love sweating the details." />
            <div className="mt-10 grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
              {FOUNDERS.map((founder) => (
                <Card
                  key={founder.name}
                  className="border-border bg-white p-8 text-center shadow-[0_24px_40px_-30px_rgba(15,23,42,0.15)]"
                  data-testid={`card-founder-${founder.name}`}
                >
                  <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-gradient-to-br from-[#2563EB]/30 to-[#1F3557]/20" />
                  <h3 className="text-xl font-semibold text-foreground">{founder.name}</h3>
                  <p className="text-xs uppercase tracking-[0.35em] text-accent/80">{founder.role}</p>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{founder.bio}</p>
                </Card>
              ))}
            </div>
          </div>

          <div id="careers" className="scroll-mt-24 mt-20">
            <SectionHeading
              title="Join our team"
              description="We’re hiring designers, engineers, and operators who care about craft, curiosity, and outcomes."
            />
            <div className="mt-10 max-w-3xl mx-auto space-y-4">
              {OPEN_ROLES.map((role) => (
                <Card
                  key={role.title}
                  className="border-border bg-white px-6 py-6 shadow-[0_24px_40px_-30px_rgba(15,23,42,0.15)]"
                  data-testid={`card-role-${role.title}`}
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{role.title}</h3>
                      <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground/80">
                        {role.location} • {role.type}
                      </p>
                    </div>
                    <Button variant="ghost" className="rounded-full border border-border px-6" data-testid={`button-apply-${role.title}`}>
                      Apply now
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">Don’t see your role? We’re always meeting exceptional talent.</p>
              <Link href="/demo">
                <Button variant="ghost" className="mt-3 rounded-full border border-border px-6" data-testid="button-general-inquiry">
                  Send general inquiry
                </Button>
              </Link>
            </div>
          </div>

          <Card className="mt-20 border-border bg-white px-10 py-12 text-center shadow-[0_28px_56px_-30px_rgba(15,23,42,0.16)]">
            <h3 className="font-serif text-2xl font-semibold text-foreground">Partner with the Afern team.</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              We collaborate with founders, agencies, and growth leaders to deliver premium client experiences.
            </p>
            <Link href="/demo">
              <Button className="mt-6 h-12 rounded-full bg-gradient-to-r from-[#2563EB] to-[#1F3557] px-8 text-sm font-semibold text-white shadow-[0_20px_40px_-20px_rgba(31,41,55,0.28)] hover:opacity-95" data-testid="button-contact-team">
                Contact our team
              </Button>
            </Link>
          </Card>
        </div>
      </section>
    </div>
  );
}
