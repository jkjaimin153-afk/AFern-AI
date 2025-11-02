import { Card } from "@/components/ui/card";

export default function Resources() {
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
      answer: "Setup fees depend on your specific integration requirements and will be determined during the discovery call. We'll provide a transparent quote based on your needs.",
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes, all plans are month-to-month with no long-term contracts required. Enterprise plans have flexible terms.",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="py-20 md:py-32">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6" data-testid="text-resources-title">
              <span className="text-accent">Resources</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Frequently asked questions about InFlowCalls
            </p>
          </div>

          <div className="mb-16">
            <h2 className="font-serif text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, idx) => (
                <Card key={idx} className="p-6" data-testid={`card-faq-${idx}`}>
                  <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
