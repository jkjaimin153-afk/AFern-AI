import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingDemoButton } from "@/components/FloatingDemoButton";
import { useAnalytics } from "../hooks/use-analytics";
import { initGA } from "../lib/analytics";
import { useEffect } from "react";
import Home from "@/pages/Home";
import Product from "@/pages/Product";
import Industries from "@/pages/Industries";
import HomeServices from "@/pages/industries/HomeServices";
import Hospitality from "@/pages/industries/Hospitality";
import Healthcare from "@/pages/industries/Healthcare";
import Legal from "@/pages/industries/Legal";
import Salons from "@/pages/industries/Salons";
import Ecommerce from "@/pages/industries/Ecommerce";
import Demo from "@/pages/Demo";
import Integrations from "@/pages/Integrations";
import Pricing from "@/pages/Pricing";
import CaseStudies from "@/pages/CaseStudies";
import Developers from "@/pages/Developers";
import Security from "@/pages/Security";
import About from "@/pages/About";
import Resources from "@/pages/Resources";
import NotFound from "@/pages/not-found";

function Router() {
  useAnalytics();
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/product" component={Product} />
      <Route path="/industries" component={Industries} />
      <Route path="/industries/home-services" component={HomeServices} />
      <Route path="/industries/hospitality" component={Hospitality} />
      <Route path="/industries/healthcare" component={Healthcare} />
      <Route path="/industries/legal" component={Legal} />
      <Route path="/industries/salons" component={Salons} />
      <Route path="/industries/ecommerce" component={Ecommerce} />
      <Route path="/demo" component={Demo} />
      <Route path="/integrations" component={Integrations} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/case-studies" component={CaseStudies} />
      <Route path="/developers" component={Developers} />
      <Route path="/security" component={Security} />
      <Route path="/about" component={About} />
      <Route path="/resources" component={Resources} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  useEffect(() => {
    if (!import.meta.env.VITE_GA_MEASUREMENT_ID) {
      console.warn('Missing required Google Analytics key: VITE_GA_MEASUREMENT_ID');
    } else {
      initGA();
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            <Router />
          </main>
          <Footer />
          <FloatingDemoButton />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
