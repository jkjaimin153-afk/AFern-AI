import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { trackEvent } from "../../lib/analytics";

export default function Integrations() {
  const [formData, setFormData] = useState({
    integration: "",
    priority: "",
    notes: "",
    email: "",
  });

  const { toast } = useToast();

  const requestMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      return await apiRequest("POST", "/api/integration-requests", data);
    },
    onSuccess: () => {
      toast({
        title: "Request Submitted!",
        description: "We'll evaluate your integration request and get back to you soon.",
      });
      setFormData({ integration: "", priority: "", notes: "", email: "" });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to submit request. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackEvent('integration_request', 'Integrations', formData.integration);
    requestMutation.mutate(formData);
  };

  const handleIntegrationClick = (integrationName: string, category: string) => {
    trackEvent('integration_click', 'Integrations', `${category}: ${integrationName}`);
  };

  const integrations = {
    crm: [
      { name: "HubSpot", description: "Create contacts & log call transcripts automatically" },
      { name: "Salesforce", description: "Sync leads and update records in real-time" },
      { name: "Zoho CRM", description: "Automatic contact creation and activity logging" },
      { name: "Pipedrive", description: "Add deals and update pipeline from calls" },
    ],
    scheduling: [
      { name: "Google Calendar", description: "Two-way sync for appointment booking" },
      { name: "Office 365", description: "Microsoft calendar integration" },
      { name: "Calendly", description: "Automated scheduling link sharing" },
      { name: "Acuity", description: "Advanced appointment management" },
    ],
    telephony: [
      { name: "Twilio", description: "Programmable voice and SMS infrastructure" },
      { name: "RingCentral", description: "Enterprise phone system integration" },
      { name: "Vonage", description: "Cloud communications platform" },
      { name: "Bandwidth", description: "Voice API and SIP trunking" },
    ],
    payments: [
      { name: "Stripe", description: "Secure payment processing on calls" },
      { name: "PayPal", description: "Accept PayPal payments during calls" },
      { name: "Square", description: "Point of sale and payment integration" },
      { name: "Authorize.net", description: "Payment gateway integration" },
    ],
    fieldService: [
      { name: "ServiceTitan", description: "Complete field service management sync" },
      { name: "Housecall Pro", description: "Job booking and dispatch integration" },
      { name: "Jobber", description: "Work order and scheduling sync" },
      { name: "FieldEdge", description: "Service automation platform" },
    ],
    legal: [
      { name: "Clio", description: "Legal practice management & conflict checks" },
      { name: "MyCase", description: "Case management and client intake" },
      { name: "PracticePanther", description: "Law firm management system" },
    ],
    workflow: [
      { name: "Zapier", description: "Connect to 5000+ apps with automation" },
      { name: "Make", description: "Advanced workflow automation" },
      { name: "n8n", description: "Self-hosted workflow automation" },
    ],
  };

  return (
    <div className="min-h-screen">
      <section className="py-20 md:py-32 bg-gradient-to-br from-background via-primary/5 to-background">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6" data-testid="text-integrations-title">
              Seamless <span className="text-accent">Integrations</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Connect InFlowCalls with your existing tools. Native integrations and webhook support for custom workflows.
            </p>
          </div>

          <div className="space-y-12 mb-16">
            <div>
              <h2 className="font-serif text-3xl font-bold mb-6">CRM & Sales</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {integrations.crm.map((int, idx) => (
                  <Card 
                    key={idx} 
                    className="p-6 hover-elevate active-elevate-2 transition-all cursor-pointer" 
                    data-testid={`card-crm-${idx}`}
                    onClick={() => handleIntegrationClick(int.name, 'CRM')}
                  >
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      <span className="text-xs font-bold text-accent">{int.name.slice(0, 2)}</span>
                    </div>
                    <h3 className="font-bold mb-2">{int.name}</h3>
                    <p className="text-sm text-muted-foreground">{int.description}</p>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-serif text-3xl font-bold mb-6">Scheduling</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {integrations.scheduling.map((int, idx) => (
                  <Card key={idx} className="p-6 hover-elevate active-elevate-2 transition-all" data-testid={`card-scheduling-${idx}`}>
                    <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                      <span className="text-xs font-bold text-blue-500">{int.name.slice(0, 2)}</span>
                    </div>
                    <h3 className="font-bold mb-2">{int.name}</h3>
                    <p className="text-sm text-muted-foreground">{int.description}</p>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-serif text-3xl font-bold mb-6">Telephony</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {integrations.telephony.map((int, idx) => (
                  <Card key={idx} className="p-6 hover-elevate active-elevate-2 transition-all" data-testid={`card-telephony-${idx}`}>
                    <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                      <span className="text-xs font-bold text-purple-500">{int.name.slice(0, 2)}</span>
                    </div>
                    <h3 className="font-bold mb-2">{int.name}</h3>
                    <p className="text-sm text-muted-foreground">{int.description}</p>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-serif text-3xl font-bold mb-6">Payments</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {integrations.payments.map((int, idx) => (
                  <Card key={idx} className="p-6 hover-elevate active-elevate-2 transition-all" data-testid={`card-payments-${idx}`}>
                    <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center mb-4">
                      <span className="text-xs font-bold text-green-500">{int.name.slice(0, 2)}</span>
                    </div>
                    <h3 className="font-bold mb-2">{int.name}</h3>
                    <p className="text-sm text-muted-foreground">{int.description}</p>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-serif text-3xl font-bold mb-6">Field Service & PMS</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {integrations.fieldService.map((int, idx) => (
                  <Card key={idx} className="p-6 hover-elevate active-elevate-2 transition-all" data-testid={`card-field-service-${idx}`}>
                    <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4">
                      <span className="text-xs font-bold text-orange-500">{int.name.slice(0, 2)}</span>
                    </div>
                    <h3 className="font-bold mb-2">{int.name}</h3>
                    <p className="text-sm text-muted-foreground">{int.description}</p>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-serif text-3xl font-bold mb-6">Legal Practice Management</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {integrations.legal.map((int, idx) => (
                  <Card key={idx} className="p-6 hover-elevate active-elevate-2 transition-all" data-testid={`card-legal-${idx}`}>
                    <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center mb-4">
                      <span className="text-xs font-bold text-amber-500">{int.name.slice(0, 2)}</span>
                    </div>
                    <h3 className="font-bold mb-2">{int.name}</h3>
                    <p className="text-sm text-muted-foreground">{int.description}</p>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-serif text-3xl font-bold mb-6">Workflow Automation</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {integrations.workflow.map((int, idx) => (
                  <Card key={idx} className="p-6 hover-elevate active-elevate-2 transition-all" data-testid={`card-workflow-${idx}`}>
                    <div className="w-12 h-12 rounded-lg bg-pink-500/10 flex items-center justify-center mb-4">
                      <span className="text-xs font-bold text-pink-500">{int.name.slice(0, 2)}</span>
                    </div>
                    <h3 className="font-bold mb-2">{int.name}</h3>
                    <p className="text-sm text-muted-foreground">{int.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <Card className="p-8 max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl font-bold mb-6">Request an Integration</h2>
            <p className="text-muted-foreground mb-6">
              Don't see what you need? Let us know and we'll prioritize building it.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="integration">Integration Name *</Label>
                <Input
                  id="integration"
                  value={formData.integration}
                  onChange={(e) => setFormData({ ...formData, integration: e.target.value })}
                  required
                  placeholder="e.g., ServiceNow"
                  data-testid="input-integration-name"
                />
              </div>
              <div>
                <Label htmlFor="priority">Priority *</Label>
                <Select value={formData.priority} onValueChange={(value) => setFormData({ ...formData, priority: value })} required>
                  <SelectTrigger id="priority" data-testid="select-integration-priority">
                    <SelectValue placeholder="Select priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="critical">Critical - Blocking our adoption</SelectItem>
                    <SelectItem value="high">High - Would improve our workflow significantly</SelectItem>
                    <SelectItem value="medium">Medium - Nice to have</SelectItem>
                    <SelectItem value="low">Low - Future consideration</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="notes">Additional Details</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  rows={4}
                  placeholder="Tell us how you plan to use this integration..."
                  data-testid="textarea-integration-notes"
                />
              </div>
              <div>
                <Label htmlFor="email-integration">Your Email (optional)</Label>
                <Input
                  id="email-integration"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="To receive updates on this request"
                  data-testid="input-integration-email"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                disabled={requestMutation.isPending}
                data-testid="button-submit-integration-request"
              >
                {requestMutation.isPending ? "Submitting..." : "Submit Request"}
              </Button>
            </form>
          </Card>
        </div>
      </section>
    </div>
  );
}
