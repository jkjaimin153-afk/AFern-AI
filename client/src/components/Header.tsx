import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import afernLogo from "@assets/Afern Logo _1762221920984.jpg";

export function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Solutions", href: "/product" },
    { name: "Industries", href: "/industries" },
    { name: "Resources", href: "/resources" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-white/80 backdrop-blur-xl">
      <div className="container mx-auto max-w-7xl px-6 py-5">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 rounded-full px-3 py-2 transition-colors hover:bg-white/5" data-testid="link-home">
            <img src={afernLogo} alt="Afern AI Logo" className="h-14 w-auto rounded-md logo-tint" />
            <span className="text-[2.4rem] font-bold tracking-tight text-foreground">
              Afern AI
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            <nav className="flex items-center space-x-1">
              {navigation.map((item) => (
                <Button 
                  key={item.name}
                  variant="ghost"
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    location === item.href
                      ? "bg-white/10 text-white"
                      : "text-foreground/70 hover:text-foreground"
                  }`}
                  data-testid={`link-nav-${item.name.toLowerCase()}`}
                  asChild
                >
                  <Link href={item.href}>{item.name}</Link>
                </Button>
              ))}
            </nav>

            <Button className="ml-4 rounded-full bg-gradient-to-r from-[#2563EB] to-[#1F3557] text-white shadow-[0_18px_44px_-20px_rgba(31,41,55,0.28)] transition hover:opacity-95" data-testid="button-demo-header" asChild>
              <Link href="/demo">Request a demo</Link>
            </Button>
          </div>

          <button
            className="md:hidden p-2 rounded-md hover:bg-white/10 transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <div
          className={`md:hidden transition-all duration-300 ${mobileMenuOpen ? "opacity-100 translate-y-0" : "pointer-events-none -translate-y-4 opacity-0"}`}
        >
          <div className="pt-4 pb-6 border-t border-border mt-4">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Button 
                  key={item.name}
                  variant="ghost" 
                  className={`w-full justify-start rounded-full text-left ${
                    location === item.href ? "bg-white/10 text-white" : "text-foreground/80"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`link-mobile-${item.name.toLowerCase()}`}
                  asChild
                >
                  <Link href={item.href}>{item.name}</Link>
                </Button>
              ))}
              <Button className="w-full rounded-full bg-gradient-to-r from-[#2563EB] to-[#1F3557] text-white hover:opacity-90" onClick={() => setMobileMenuOpen(false)} data-testid="button-mobile-demo" asChild>
                <Link href="/demo">Request a demo</Link>
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
