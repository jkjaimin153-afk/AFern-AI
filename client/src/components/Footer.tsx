import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import afernLogo from "@assets/ChatGPT Image Nov 3, 2025, 07_54_54 PM.png";

export function Footer() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const newsletterMutation = useMutation({
    mutationFn: async (email: string) => {
      return await apiRequest("POST", "/api/newsletter", { email });
    },
    onSuccess: () => {
      toast({
        title: "Subscribed!",
        description: "You've been added to our newsletter.",
      });
      setEmail("");
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      newsletterMutation.mutate(email);
    }
  };

  const quickLinks = [
    { name: "Services", href: "/product" },
    { name: "Industries", href: "/industries" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Resources", href: "/resources" },
    { name: "Data & Privacy", href: "/security" },
    { name: "Book a Strategy Call", href: "/demo" },
  ];

  return (
    <footer className="relative border-t border-border bg-white overflow-hidden">
      <div className="absolute inset-0 gradient-soft opacity-30" />
      <div className="absolute -top-32 right-16 h-64 w-64 orb-glow blur-3xl opacity-40 animate-soft-glow" />
      <div className="container mx-auto max-w-7xl px-6 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center gap-3">
              <img src={afernLogo} alt="Afern AI Logo" className="h-14 w-auto" />
              <div>
                <p className="text-[2.4rem] font-semibold tracking-tight text-foreground">Afern AI</p>
              </div>
            </div>
            <p className="text-muted-foreground text-base md:text-lg mb-4 max-w-xl">
              Managed Customer Communication Services for modern businesses.
            </p>
            <p className="text-muted-foreground text-lg mb-6">
              Contact us: <a href="mailto:info@afernai.com" className="text-primary hover:text-accent transition-colors font-semibold" data-testid="link-footer-email">info@afernai.com</a>
            </p>
            <div className="flex space-x-2 mb-8">
              <a 
                href="https://linkedin.com/company/afern-ai/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-14 h-14 rounded-md border border-border hover:border-accent/30 transition-colors bg-white p-2"
                data-testid="link-linkedin"
                aria-label="LinkedIn"
              >
                <img 
                  src="https://static.vecteezy.com/system/resources/previews/018/930/587/non_2x/linkedin-logo-linkedin-icon-transparent-free-png.png" 
                  alt="LinkedIn" 
                  className="h-10 w-10 object-contain"
                  onError={(e) => {
                    // Fallback to SVG if image fails to load
                    e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%230077B5'%3E%3Cpath d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'/%3E%3C/svg%3E";
                  }}
                />
              </a>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="glassmorphism border-border h-12 text-base"
                data-testid="input-newsletter-email"
                aria-label="Newsletter email"
              />
              <Button
                type="submit"
                className="h-12 px-6 font-semibold rounded-full bg-gradient-to-r from-[#2563EB] to-[#1F3557] text-white hover:opacity-90"
                disabled={newsletterMutation.isPending}
                data-testid="button-newsletter-submit"
              >
                {newsletterMutation.isPending ? "..." : "Subscribe"}
              </Button>
            </form>
          </div>

          <div className="lg:pl-12">
            <h3 className="text-xl font-semibold mb-6 text-foreground">Navigation</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-base" 
                    data-testid={`link-footer-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p className="text-sm">&copy; {new Date().getFullYear()} Afern AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
