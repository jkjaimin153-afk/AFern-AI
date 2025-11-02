import { Link } from "wouter";
import { Twitter, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import fernLogo from "@assets/generated_images/Symmetric_fern_leaf_logo_35feb1f0.png";

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
    { name: "Product", href: "/product" },
    { name: "Industries", href: "/industries" },
    { name: "Demo", href: "/demo" },
    { name: "Resources", href: "/resources" },
  ];

  return (
    <footer className="relative border-t border-white/10" style={{ background: "rgba(10, 15, 30, 0.95)" }}>
      <div className="absolute inset-0 gradient-mesh opacity-20" />
      <div className="container mx-auto max-w-7xl px-6 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center glow-purple p-2">
                <img src={fernLogo} alt="Afern AI Fern Logo" className="h-full w-full object-contain" />
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">Afern AI</span>
            </div>
            <p className="text-muted-foreground text-lg mb-6 max-w-md">
              Enterprise-grade AI receptionist & outbound caller that answers, qualifies and books — 24/7.
            </p>
            <div className="flex space-x-2 mb-8">
              <Button variant="ghost" size="icon" className="glassmorphism border border-white/10 hover:border-primary/50" data-testid="link-twitter" aria-label="Twitter" asChild>
                <a href="https://twitter.com/afernai" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="glassmorphism border border-white/10 hover:border-primary/50" data-testid="link-linkedin" aria-label="LinkedIn" asChild>
                <a href="https://linkedin.com/company/afernai" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="glassmorphism border border-white/10 hover:border-primary/50" data-testid="link-github" aria-label="GitHub" asChild>
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
                className="glassmorphism border-white/10 h-12 text-base"
                data-testid="input-newsletter-email"
                aria-label="Newsletter email"
              />
              <Button 
                type="submit" 
                className="bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 h-12 px-6 font-semibold"
                disabled={newsletterMutation.isPending}
                data-testid="button-newsletter-submit"
              >
                {newsletterMutation.isPending ? "..." : "Subscribe"}
              </Button>
            </form>
          </div>

          <div className="lg:pl-12">
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-lg" 
                    data-testid={`link-footer-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-muted-foreground">
          <p className="text-sm">&copy; {new Date().getFullYear()} Afern AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
