import { Link } from "wouter";
import { Twitter, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import afernLogo from "@assets/Afern Logo _1762221920984.jpg";

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
    { name: "Solutions", href: "/product" },
    { name: "Industries", href: "/industries" },
    { name: "Resources", href: "/resources" },
    { name: "Data & Privacy", href: "/security" },
    { name: "Request Demo", href: "/demo" },
  ];

  return (
    <footer className="relative border-t border-border bg-white overflow-hidden">
      <div className="absolute inset-0 gradient-soft opacity-30" />
      <div className="absolute -top-32 right-16 h-64 w-64 orb-glow blur-3xl opacity-40 animate-soft-glow" />
      <div className="container mx-auto max-w-7xl px-6 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center gap-3">
              <img src={afernLogo} alt="Afern AI Logo" className="h-14 w-auto rounded-md logo-tint" />
              <div>
                <p className="text-[2.4rem] font-semibold tracking-tight text-foreground">Afern AI</p>
              </div>
            </div>
            <p className="text-muted-foreground text-base md:text-lg mb-4 max-w-xl">
              Modern automation designed to move your business forward.
            </p>
            <p className="text-muted-foreground text-lg mb-6">
              Contact us: <a href="mailto:admin@afernai.com" className="text-primary hover:text-accent transition-colors font-semibold" data-testid="link-footer-email">admin@afernai.com</a>
            </p>
            <div className="flex space-x-2 mb-8">
              <Button variant="ghost" size="icon" className="glassmorphism border border-border hover:border-accent/30" data-testid="link-twitter" aria-label="Twitter" asChild>
                <a href="https://twitter.com/afernai" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="glassmorphism border border-border hover:border-accent/30" data-testid="link-linkedin" aria-label="LinkedIn" asChild>
                <a href="https://linkedin.com/company/afernai" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="glassmorphism border border-border hover:border-accent/30" data-testid="link-github" aria-label="GitHub" asChild>
                <a href="https://github.com/afernai" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
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
