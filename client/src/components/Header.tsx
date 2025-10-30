import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Product", href: "/product" },
    { name: "Industries", href: "/industries" },
    { name: "Demo", href: "/demo" },
    { name: "Integrations", href: "/integrations" },
    { name: "Pricing", href: "/pricing" },
    { name: "Resources", href: "/resources" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" style={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}>
      <div className="container mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 hover-elevate active-elevate-2 rounded-lg px-3 py-2" data-testid="link-home">
            <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center">
              <Phone className="h-5 w-5 text-orange-400" />
            </div>
            <span className="font-serif text-2xl font-bold text-foreground">InFlowCalls</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Button 
                key={item.name}
                variant="ghost"
                size="lg"
                className={`text-lg ${location === item.href ? "bg-accent/10 text-accent" : ""}`}
                data-testid={`link-nav-${item.name.toLowerCase()}`}
                asChild
              >
                <Link href={item.href}>{item.name}</Link>
              </Button>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-3">
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90" data-testid="button-demo-header" asChild>
              <Link href="/demo">Request Demo</Link>
            </Button>
          </div>

          <button
            className="md:hidden p-2 hover-elevate active-elevate-2 rounded-md"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 border-t border-border mt-4">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Button 
                  key={item.name}
                  variant="ghost" 
                  className={`w-full justify-start ${location === item.href ? "bg-accent/10 text-accent" : ""}`}
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`link-mobile-${item.name.toLowerCase()}`}
                  asChild
                >
                  <Link href={item.href}>{item.name}</Link>
                </Button>
              ))}
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90" onClick={() => setMobileMenuOpen(false)} data-testid="button-mobile-demo" asChild>
                <Link href="/demo">Request Demo</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
