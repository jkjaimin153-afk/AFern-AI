import googleCalendarLogo from "@assets/image_1761794157605.png";
import salesforceLogo from "@assets/512px-Salesforce.com_logo.svg_1761794725607.png";
import hubspotLogo from "@assets/image_1761794546960.png";
import twilioLogo from "@assets/1024px-Twilio_logo_1761794782516.png";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Integrations() {
  const integrations = [
    { name: "Google Calendar", logo: googleCalendarLogo, description: "Two-way calendar sync" },
    { name: "Salesforce", logo: salesforceLogo, description: "CRM integration" },
    { name: "HubSpot", logo: hubspotLogo, description: "Marketing automation" },
    { name: "Twilio", logo: twilioLogo, description: "Phone infrastructure" },
  ];

  return (
    <div className="min-h-screen">
      <section className="py-20 md:py-32">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="text-center mb-16">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6" data-testid="text-integrations-title">
              <span className="text-accent">Integrations</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect with the tools you already use
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {integrations.map((integration, idx) => (
              <div key={idx} className="flex flex-col items-center text-center space-y-4" data-testid={`integration-${idx}`}>
                <div className="w-28 h-28 rounded-xl bg-card border border-border flex items-center justify-center hover-elevate p-4">
                  <img src={integration.logo} alt={integration.name} className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="font-bold mb-1 text-accent text-xl">{integration.name}</h3>
                  <p className="text-base text-muted-foreground">{integration.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <Card className="max-w-md w-full p-8 text-center">
              <h3 className="font-bold text-xl mb-2">Need another integration?</h3>
              <p className="text-muted-foreground mb-6">
                Contact us to discuss custom integrations for your business
              </p>
              <Link href="/demo">
                <Button size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent border border-accent-border" data-testid="button-request-demo">
                  Book a Strategy Call
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
