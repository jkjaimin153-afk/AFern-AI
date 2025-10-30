import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, Check, Phone, Calendar, TrendingUp, Brain, Shield, Clock } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

export default function Home() {
  const [audioModalOpen, setAudioModalOpen] = useState(false);

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
              className="text-6xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tight" 
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
                Never Miss A Call.{" "}
              </motion.span>
              <motion.span 
                className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              >
                Turn Conversations Into Customers.
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              InFlowCalls is an enterprise-grade AI receptionist & outbound caller that answers, qualifies and books — 24/7 — integrated with your calendar, CRM, and POS.
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
              <Button 
                size="lg" 
                variant="outline" 
                className="h-14 px-10 text-lg font-semibold glassmorphism border-white/10 transition-all duration-300 hover:scale-105 hover:border-primary/30"
                onClick={() => setAudioModalOpen(true)}
                data-testid="button-listen-demo"
              >
                <Play className="mr-2 h-5 w-5" />
                Listen to demo call
              </Button>
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
              { value: "98%", label: "Answered calls automatically", testid: "kpi-answered", gradient: "from-primary to-accent" },
              { value: "5", label: "Avg time to booking", testid: "kpi-booking", gradient: "from-secondary to-primary" },
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
            <h2 className="text-5xl md:text-6xl font-bold mb-6" data-testid="text-features-title">
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
        <div className="container mx-auto max-w-7xl px-6 relative">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-8" data-testid="text-benefits-title">
                Built for{" "}
                <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                  Modern Businesses
                </span>
              </h2>
              <div className="space-y-6">
                {benefits.map((benefit, idx) => (
                  <motion.div 
                    key={idx} 
                    className="flex items-start gap-4 group" 
                    data-testid={`benefit-${idx}`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
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
                    <p className="text-lg md:text-xl text-foreground/90 group-hover:text-foreground transition-colors duration-300">{benefit}</p>
                  </motion.div>
                ))}
              </div>
              <motion.div 
                className="mt-10"
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

            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="relative p-8 rounded-2xl glassmorphism border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl" />
                <div className="relative space-y-8">
                  {[
                    { icon: Phone, gradient: "from-accent to-accent/60", width1: "w-3/4", width2: "w-1/2", delay: 0 },
                    { icon: Calendar, gradient: "from-primary to-primary/60", width1: "w-2/3", width2: "w-1/3", delay: 0.2 },
                    { icon: TrendingUp, gradient: "from-secondary to-secondary/60", width1: "w-4/5", width2: "w-2/5", delay: 0.4 }
                  ].map((item, idx) => (
                    <motion.div 
                      key={idx}
                      className="flex items-center gap-5"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: item.delay }}
                    >
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center glow-purple flex-shrink-0`}>
                        <item.icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1 space-y-3">
                        <motion.div 
                          className={`h-3 bg-gradient-to-r from-accent/40 to-transparent rounded-full ${item.width1}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: item.delay + 0.3 }}
                        />
                        <motion.div 
                          className={`h-3 bg-gradient-to-r from-accent/20 to-transparent rounded-full ${item.width2}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: item.delay + 0.5 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 rounded-3xl blur-2xl -z-10 opacity-50" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        
        <div className="container mx-auto max-w-4xl px-6 text-center relative z-10">
          <div className="relative p-12 md:p-16 rounded-3xl glassmorphism border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 rounded-3xl" />
            <div className="relative">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Ready to Transform Your{" "}
                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  Calling Experience?
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Join hundreds of businesses automating their phone operations with InFlowCalls.
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

      <Dialog open={audioModalOpen} onOpenChange={setAudioModalOpen}>
        <DialogContent className="max-w-2xl" data-testid="modal-audio-demo">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl">Demo Call Examples</DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <div className="space-y-3">
              <h4 className="font-semibold">Booking Call Example</h4>
              <div className="bg-muted rounded-lg p-4">
                <p className="text-sm text-muted-foreground italic">
                  Audio player placeholder - Booking scenario
                </p>
                <div className="mt-4 p-4 bg-background rounded border border-border">
                  <p className="text-xs text-muted-foreground mb-2">Sample transcript:</p>
                  <p className="text-sm">"Thanks for calling QuickFix Plumbing, this is InFlow — how can I help today?"</p>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold">Payment Capture Example</h4>
              <div className="bg-muted rounded-lg p-4">
                <p className="text-sm text-muted-foreground italic">
                  Audio player placeholder - Payment scenario
                </p>
                <div className="mt-4 p-4 bg-background rounded border border-border">
                  <p className="text-xs text-muted-foreground mb-2">Sample transcript:</p>
                  <p className="text-sm">"I can help secure your appointment with a deposit. May I collect your payment information?"</p>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
