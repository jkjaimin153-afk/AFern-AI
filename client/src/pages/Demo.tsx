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
import { Play, ChevronDown, ChevronUp } from "lucide-react";
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

  const [expandedDemo, setExpandedDemo] = useState<number | null>(null);
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

  const handlePlayDemo = (demoTitle: string) => {
    trackEvent('audio_play', 'Demo', demoTitle);
  };

  const demos = [
    {
      title: "Inbound Booking Call",
      scenario: "Customer calling to schedule a service appointment",
      transcript: [
        { speaker: "AI", text: "Thanks for calling QuickFix Plumbing, this is InFlow — how can I help today?" },
        { speaker: "Caller", text: "I have a burst pipe in the kitchen." },
        { speaker: "AI", text: "I'm sorry to hear that. Is anyone in immediate danger or is the leak contained?" },
        { speaker: "Caller", text: "No danger, just lots of water." },
        { speaker: "AI", text: "I can book an emergency visit. What's the address and preferred time?" },
      ],
      howItWorked: "AI detected urgency, collected address, checked calendar availability, booked appointment in ServiceTitan, sent confirmation SMS.",
    },
    {
      title: "Payment Capture Call",
      scenario: "Collecting deposit for appointment confirmation",
      transcript: [
        { speaker: "AI", text: "I can secure your appointment with a $50 deposit. May I collect payment now?" },
        { speaker: "Caller", text: "Yes, that works." },
        { speaker: "AI", text: "Great. I'll need your card number, expiration, and CVV." },
        { speaker: "Caller", text: "[Provides payment info]" },
        { speaker: "AI", text: "Payment processed. You're all set! Confirmation sent to your email." },
      ],
      howItWorked: "AI initiated PCI-compliant payment flow via Stripe, processed deposit securely, updated booking status, sent receipt.",
    },
    {
      title: "Outbound Reminder Call",
      scenario: "Automated appointment reminder",
      transcript: [
        { speaker: "AI", text: "Hi, this is InFlow for Deerfield Inn. Reminder of your 2PM check-in tomorrow." },
        { speaker: "Guest", text: "Thanks! I'll be there." },
        { speaker: "AI", text: "Perfect! Reply 'YES' to confirm or press 1 to change your reservation." },
        { speaker: "Guest", text: "YES" },
        { speaker: "AI", text: "Confirmed. See you tomorrow at 2PM!" },
      ],
      howItWorked: "System triggered outbound call 24h before check-in, confirmed attendance, updated PMS, avoided no-show.",
    },
    {
      title: "Multilingual Call",
      scenario: "Auto-detection and response in caller's language",
      transcript: [
        { speaker: "AI", text: "Thank you for calling. ¿Prefiere español? Press 1. For English, press 2." },
        { speaker: "Caller", text: "[Presses 1]" },
        { speaker: "AI", text: "Perfecto. ¿Cómo puedo ayudarle hoy?" },
        { speaker: "Caller", text: "Necesito hacer una reservación." },
        { speaker: "AI", text: "Claro, ¿para cuántas personas y qué fecha?" },
      ],
      howItWorked: "AI auto-detected Spanish preference, switched language seamlessly, completed booking in Spanish, sent confirmation in caller's language.",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="py-20 md:py-32 bg-gradient-to-br from-background via-primary/5 to-background">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6" data-testid="text-demo-title">
              Experience <span className="text-accent">InFlowCalls</span> in Action
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Listen to real call scenarios and see how our AI handles complex conversations with natural language understanding.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="font-serif text-3xl font-bold mb-8">Interactive Demo Library</h2>
              <div className="space-y-4">
                {demos.map((demo, idx) => (
                  <Card key={idx} className="overflow-hidden" data-testid={`card-demo-${idx}`}>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold text-lg">{demo.title}</h3>
                        <button
                          onClick={() => {
                        setExpandedDemo(expandedDemo === idx ? null : idx);
                        if (expandedDemo !== idx) {
                          handlePlayDemo(demo.title);
                        }
                      }}
                          className="p-2 hover-elevate active-elevate-2 rounded-md"
                          data-testid={`button-toggle-demo-${idx}`}
                          aria-label="Toggle demo details"
                        >
                          {expandedDemo === idx ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                        </button>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">{demo.scenario}</p>
                      <div className="bg-muted rounded-lg p-4">
                        <audio 
                          controls 
                          className="w-full" 
                          data-testid={`audio-demo-${idx}`}
                          style={{ height: '40px' }}
                        >
                          <source src={`/demo-audio-${idx + 1}.mp3`} type="audio/mpeg" />
                          Your browser does not support the audio element.
                        </audio>
                      </div>
                    </div>
                    
                    {expandedDemo === idx && (
                      <div className="px-6 pb-6 space-y-4">
                        <div className="bg-background rounded-lg p-4 space-y-3">
                          <p className="text-xs text-muted-foreground font-semibold">TRANSCRIPT</p>
                          {demo.transcript.map((line, lidx) => (
                            <div key={lidx} className={`p-3 rounded ${line.speaker === "AI" ? "bg-accent/10" : "bg-muted"}`}>
                              <span className="font-bold text-sm">{line.speaker}:</span> <span className="text-sm">{line.text}</span>
                            </div>
                          ))}
                        </div>
                        <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
                          <p className="text-xs text-accent font-semibold mb-2">HOW IT WORKED</p>
                          <p className="text-sm">{demo.howItWorked}</p>
                        </div>
                      </div>
                    )}
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <Card className="p-8 sticky top-24">
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
        </div>
      </section>
    </div>
  );
}
