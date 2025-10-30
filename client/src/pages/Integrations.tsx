import { SiGooglecalendar, SiSalesforce, SiStripe, SiTwilio } from "react-icons/si";

export default function Integrations() {
  const integrations = [
    { name: "Google Calendar", icon: SiGooglecalendar, description: "Two-way calendar sync" },
    { name: "Salesforce", icon: SiSalesforce, description: "CRM integration" },
    { name: "Stripe", icon: SiStripe, description: "Payment processing" },
    { name: "Twilio", icon: SiTwilio, description: "Phone infrastructure" },
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
                <div className="w-20 h-20 rounded-xl bg-card border border-border flex items-center justify-center hover-elevate">
                  <integration.icon className="w-10 h-10 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">{integration.name}</h3>
                  <p className="text-sm text-muted-foreground">{integration.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-4">Need another integration?</p>
            <p className="text-sm text-muted-foreground">Contact us to discuss custom integrations</p>
          </div>
        </div>
      </section>
    </div>
  );
}
