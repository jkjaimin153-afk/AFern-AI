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

export default function Demo() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    website: "",
    industry: "",
    message: "",
  });

  const { toast } = useToast();

  const demoMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      return await apiRequest("POST", "/api/demo-requests", data);
    },
    onSuccess: () => {
      toast({
        title: "Demo Requested!",
        description: "We'll be in touch within 24 hours to schedule your demo.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        business: "",
        website: "",
        industry: "",
        message: "",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to submit demo request. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackEvent('demo_request', 'Demo', `Industry: ${formData.industry}`);
    demoMutation.mutate(formData);
  };

  return (
    <div className="min-h-screen">
      <section className="py-20 md:py-32 bg-gradient-to-br from-background via-primary/5 to-background">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h1 className="font-serif text-5xl md:text-6xl font-semibold mb-6" data-testid="text-demo-title">
              See <span className="text-accent">Afern AI</span> in Action
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
              Schedule a personalized demo to see how our AI receptionist can transform your business communications.
            </p>
            <p className="text-lg text-muted-foreground">
              Or reach us directly at <a href="mailto:admin@afernai.com" className="text-primary hover:text-accent transition-colors font-semibold" data-testid="link-contact-email">admin@afernai.com</a>
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="p-8">
                <h2 className="font-serif text-3xl font-bold mb-6">Request a Live Demo</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      data-testid="input-demo-name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      data-testid="input-demo-email"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      data-testid="input-demo-phone"
                    />
                  </div>
                  <div>
                    <Label htmlFor="business">Business Name</Label>
                    <Input
                      id="business"
                      value={formData.business}
                      onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                      data-testid="input-demo-business"
                    />
                  </div>
                  <div>
                    <Label htmlFor="website">Website</Label>
                    <Input
                      id="website"
                      type="url"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      data-testid="input-demo-website"
                    />
                  </div>
                  <div>
                    <Label htmlFor="industry">Industry</Label>
                    <Select value={formData.industry} onValueChange={(value) => setFormData({ ...formData, industry: value })}>
                      <SelectTrigger id="industry" data-testid="select-demo-industry">
                        <SelectValue placeholder="Select your industry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="home-services">Home Services</SelectItem>
                        <SelectItem value="hospitality">Hospitality</SelectItem>
                        <SelectItem value="healthcare">Healthcare & Wellness</SelectItem>
                        <SelectItem value="legal">Legal & Professional</SelectItem>
                        <SelectItem value="salons">Salons & Spas</SelectItem>
                        <SelectItem value="ecommerce">E-commerce & Retail</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="message">Tell us about your needs</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      data-testid="textarea-demo-message"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                    disabled={demoMutation.isPending}
                    data-testid="button-submit-demo"
                  >
                    {demoMutation.isPending ? "Submitting..." : "Request a 5-Min Demo"}
                  </Button>
                </form>
              </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
