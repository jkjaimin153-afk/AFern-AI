import googleCalendarLogo from "@assets/image_1761794157605.png";
import salesforceLogo from "@assets/image_1761794193457.png";
import hubspotLogo from "@assets/image_1761794277306.png";
import twilioLogo from "@assets/image_1761794313036.png";

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
                <div className="w-20 h-20 rounded-xl bg-card border border-border flex items-center justify-center hover-elevate p-3">
                  <img src={integration.logo} alt={integration.name} className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="font-bold mb-1 text-accent">{integration.name}</h3>
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
