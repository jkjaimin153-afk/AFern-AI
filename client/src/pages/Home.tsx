import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Phone, Calendar, TrendingUp, Brain, Shield, Clock } from "lucide-react";
import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

export default function Home() {

  const integrations = [
    { name: "Google Calendar", logo: "GC" },
    { name: "HubSpot", logo: "HS" },
    { name: "Stripe", logo: "ST" },
    { name: "Twilio", logo: "TW" },
    { name: "ServiceTitan", logo: "SV" },
    { name: "Clio", logo: "CL" },
  ];

  const features = [
    {
      icon: Brain,
      title: "Natural Language Understanding",
      description: "Understands caller intent, context, and urgency — so the right action happens every time.",
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "Two-way calendar sync — prevent double bookings and auto-confirm in real time.",
    },
    {
      icon: Shield,
      title: "Payment Processing",
      description: "Accept deposits and payments on the call with PCI-compliant flows.",
    },
  ];

  const benefits = [
    "Never miss a potential customer call",
    "Book appointments automatically 24/7",
    "Reduce front desk costs by up to 80%",
    "Integrate with your existing tools",
    "Multilingual support out of the box",
  ];

  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 0.95]);
  const heroY = useTransform(scrollY, [0, 300], [0, -50]);

  return (
    <div className="min-h-screen">
      <motion.section 
        className="relative overflow-hidden py-16 md:py-24"
        style={{ opacity: heroOpacity }}
      >
        <motion.div 
          className="absolute inset-0 gradient-mesh opacity-50"
          style={{ y: useTransform(scrollY, [0, 500], [0, 150]) }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        
        <div className="container mx-auto max-w-5xl px-6 relative z-10">
          <motion.div 
            className="text-center space-y-8"
            style={{ scale: heroScale, y: heroY }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight tracking-tight" 
              data-testid="text-hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Stop losing leads to missed calls,{" "}
              </motion.span>
              <motion.span 
                className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              >
                let AI handle your customers 24/7
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              AI-powered receptionist that answers calls and books appointments automatically.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            >
              <Link href="/demo">
                <Button 
                  size="lg" 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-10 text-lg font-semibold glow-purple transition-all duration-300 hover:scale-105"
                  data-testid="button-request-demo-hero"
                >
                  Request a 5-Min Demo
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </motion.section>

      <section className="py-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" />
        <div className="container mx-auto max-w-7xl px-6 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { value: "98%", label: "Calls answered automatically", testid: "kpi-answered", gradient: "from-primary to-accent" },
              { value: "5 min", label: "Avg time to booking", testid: "kpi-booking", gradient: "from-secondary to-primary" },
              { value: "15+", label: "Businesses onboarded", testid: "kpi-businesses", gradient: "from-accent to-secondary" }
            ].map((stat, idx) => (
              <div
                key={idx}
                data-testid={stat.testid}
                className="relative group"
              >
                <div className={`text-6xl md:text-7xl font-bold bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent mb-3`}>
                  {stat.value}
                </div>
                <p className="text-lg text-foreground/90 font-medium">{stat.label}</p>
                <div className="absolute inset-0 -z-10 bg-primary/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 relative">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-semibold mb-6" data-testid="text-features-title">
              Enterprise-Grade Intelligence,{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Effortless Setup
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Powered by advanced AI that understands context, handles complex conversations, and integrates seamlessly with your existing workflow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <div 
                key={idx} 
                className="group relative p-8 rounded-2xl glassmorphism border border-white/10 hover-elevate transition-all cursor-pointer" 
                data-testid={`card-feature-${idx}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 glow-purple transition-transform duration-300 group-hover:scale-110">
                    <feature.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 gradient-mesh opacity-30"
          style={{ y: useTransform(scrollY, [0, 2000], [0, 200]) }}
        />
        <div className="container mx-auto max-w-5xl px-6 relative">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-5xl md:text-6xl font-semibold mb-12" data-testid="text-benefits-title">
              Built for{" "}
              <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                Modern Businesses
              </span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {benefits.map((benefit, idx) => (
                <motion.div 
                  key={idx} 
                  className="flex items-start gap-4 group text-left p-6 rounded-xl glassmorphism border border-white/10 hover-elevate" 
                  data-testid={`benefit-${idx}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                >
                  <div className="mt-1 flex-shrink-0">
                    <motion.div 
                      className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center glow-purple"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Check className="h-5 w-5 text-white" />
                    </motion.div>
                  </div>
                  <p className="text-lg text-foreground/90 group-hover:text-foreground transition-colors duration-300">{benefit}</p>
                </motion.div>
              ))}
            </div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Link href="/product">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-primary/30 glassmorphism h-12 px-8 text-lg font-semibold transition-all duration-300 hover:scale-105"
                  data-testid="button-explore-features"
                >
                  Explore All Features
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        
        <div className="container mx-auto max-w-4xl px-6 text-center relative z-10">
          <div className="relative p-12 md:p-16 rounded-3xl glassmorphism border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 rounded-3xl" />
            <div className="relative">
              <h2 className="text-5xl md:text-6xl font-semibold mb-6">
                Ready to Transform Your{" "}
                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  Calling Experience?
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Join hundreds of businesses automating their phone operations with Afern AI.
              </p>
              <Link href="/demo">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 h-16 px-12 text-xl font-semibold glow-purple transition-all duration-300 hover:scale-110"
                  data-testid="button-cta-bottom"
                >
                  Get Started Today
                </Button>
              </Link>
            </div>
          </div>
          <div className="absolute -inset-8 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 rounded-3xl blur-3xl -z-10 opacity-50" />
        </div>
      </section>
    </div>
  );
}
