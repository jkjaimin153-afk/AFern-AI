import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Building, Users, Target, Heart } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Customer First",
      description: "Every decision we make starts with our customers' success in mind.",
    },
    {
      icon: Heart,
      title: "Innovation",
      description: "We continuously push the boundaries of what AI can do for small businesses.",
    },
    {
      icon: Users,
      title: "Transparency",
      description: "Open communication and honest relationships with our customers and partners.",
    },
    {
      icon: Building,
      title: "Reliability",
      description: "Building systems you can count on, 24/7/365.",
    },
  ];

  const founders = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      bio: "Former VP of Product at leading SaaS company. 15+ years building tools for small businesses.",
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Co-Founder",
      bio: "Ex-Google AI researcher with expertise in natural language processing and voice recognition.",
    },
  ];

  const openRoles = [
    {
      title: "Senior Backend Engineer",
      location: "Remote",
      type: "Full-time",
    },
    {
      title: "AI/ML Engineer",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
    },
    {
      title: "Customer Success Manager",
      location: "Remote",
      type: "Full-time",
    },
    {
      title: "Product Designer",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="py-20 md:py-32 bg-gradient-to-br from-background via-primary/5 to-background">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6" data-testid="text-about-title">
              Empowering Businesses with <span className="text-accent">AI</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our mission is to make enterprise-grade AI accessible to every small business.
            </p>
          </div>

          <Card className="p-12 mb-16">
            <h2 className="font-serif text-3xl font-bold mb-6">Our Story</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-4">
                Afern AI was founded in 2023 when we realized that small businesses were missing out on the AI revolution. While large enterprises had dedicated teams and budgets for automation, mom-and-pop shops were still manually answering every call, often missing crucial customer inquiries during busy hours.
              </p>
              <p className="mb-4">
                We built Afern AI to level the playing field. Our platform combines cutting-edge natural language AI with simple, affordable pricing that works for businesses of any size.
              </p>
              <p>
                Today, we're proud to serve hundreds of businesses across healthcare, home services, hospitality, and more — helping them never miss a call and turn every conversation into a customer.
              </p>
            </div>
          </Card>

          <div className="mb-16">
            <h2 className="font-serif text-3xl font-bold mb-8 text-center">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, idx) => (
                <Card key={idx} className="p-6 text-center" data-testid={`card-value-${idx}`}>
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-bold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="font-serif text-3xl font-bold mb-8 text-center">Meet the Team</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {founders.map((founder, idx) => (
                <Card key={idx} className="p-8" data-testid={`card-founder-${idx}`}>
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 mx-auto mb-4"></div>
                  <h3 className="font-bold text-xl text-center mb-1">{founder.name}</h3>
                  <p className="text-sm text-accent text-center mb-4">{founder.role}</p>
                  <p className="text-sm text-muted-foreground text-center">{founder.bio}</p>
                </Card>
              ))}
            </div>
          </div>

          <div id="careers" className="scroll-mt-24">
            <h2 className="font-serif text-3xl font-bold mb-8 text-center">Join Our Team</h2>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're building the future of AI-powered communications. Join us in making enterprise technology accessible to every business.
            </p>

            <div className="max-w-3xl mx-auto space-y-4 mb-8">
              {openRoles.map((role, idx) => (
                <Card key={idx} className="p-6 hover-elevate active-elevate-2 transition-all" data-testid={`card-role-${idx}`}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="font-bold text-lg mb-1">{role.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {role.location} • {role.type}
                      </p>
                    </div>
                    <Button variant="outline" data-testid={`button-apply-${idx}`}>
                      Apply Now
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <p className="text-muted-foreground mb-4">
                Don't see the right role? We're always looking for exceptional talent.
              </p>
              <Link href="/demo">
                <Button variant="outline" data-testid="button-general-inquiry">
                  Send General Inquiry
                </Button>
              </Link>
            </div>
          </div>

          <Card className="mt-16 p-8 bg-gradient-to-br from-accent/5 to-primary/5 border-accent/20 text-center">
            <h3 className="font-serif text-2xl font-bold mb-4">Want to learn more?</h3>
            <p className="text-muted-foreground mb-6">
              Get in touch with our team to see how Afern AI can transform your business.
            </p>
            <Link href="/demo">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90" data-testid="button-contact-team">
                Contact Our Team
              </Button>
            </Link>
          </Card>
        </div>
      </section>
    </div>
  );
}
