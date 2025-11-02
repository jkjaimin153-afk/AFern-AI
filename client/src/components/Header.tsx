import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import fernLogo from "@assets/generated_images/Symmetric_fern_leaf_logo_35feb1f0.png";

export function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Product", href: "/product" },
    { name: "Industries", href: "/industries" },
    { name: "Demo", href: "/demo" },
    { name: "Resources", href: "/resources" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 backdrop-blur-xl" style={{ background: "rgba(10, 15, 30, 0.8)" }}>
      <div className="container mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 hover-elevate active-elevate-2 rounded-lg px-3 py-2" data-testid="link-home">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center glow-purple p-1.5">
              <img src={fernLogo} alt="Afern AI Fern Logo" className="h-full w-full object-contain" />
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">Afern AI</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            <nav className="flex items-center space-x-1">
              {navigation.map((item) => (
                <Button 
                  key={item.name}
                  variant="ghost"
                  className={location === item.href ? "bg-primary/10 text-primary border border-primary/20" : "text-foreground/80 hover:text-foreground"}
                  data-testid={`link-nav-${item.name.toLowerCase()}`}
                  asChild
                >
                  <Link href={item.href}>{item.name}</Link>
                </Button>
              ))}
            </nav>

            <Button className="bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 glow-purple font-semibold ml-2" data-testid="button-demo-header" asChild>
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
          <div className="md:hidden pt-4 pb-2 border-t border-white/10 mt-4">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Button 
                  key={item.name}
                  variant="ghost" 
                  className={`w-full justify-start ${location === item.href ? "bg-primary/10 text-primary" : ""}`}
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`link-mobile-${item.name.toLowerCase()}`}
                  asChild
                >
                  <Link href={item.href}>{item.name}</Link>
                </Button>
              ))}
              <Button className="w-full bg-gradient-to-r from-primary to-accent text-white hover:opacity-90" onClick={() => setMobileMenuOpen(false)} data-testid="button-mobile-demo" asChild>
                <Link href="/demo">Request Demo</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
