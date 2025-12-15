import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

export function FloatingDemoButton() {
  return (
    <Button
      className="fixed bottom-6 right-6 z-40 bg-accent text-accent-foreground hover:bg-accent/90 shadow-2xl h-14 px-6 rounded-full hover:scale-105 transition-transform"
      data-testid="button-floating-demo"
      aria-label="Book a strategy call"
      asChild
    >
      <Link href="/demo">
        <Calendar className="h-5 w-5 mr-2" />
        Book Strategy Call
      </Link>
    </Button>
  );
}
