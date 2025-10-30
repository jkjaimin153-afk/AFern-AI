import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BookOpen, FileText, Video, Search } from "lucide-react";
import { useState } from "react";

export default function Resources() {
  const [searchQuery, setSearchQuery] = useState("");

  const blogPosts = [
    {
      title: "How AI Receptionists Save Small Businesses",
      category: "Industry Insights",
      date: "March 15, 2024",
      readTime: "5 min read",
      excerpt: "Discover the ROI of AI-powered call handling and how businesses are recovering lost revenue.",
    },
    {
      title: "Setting Up InFlowCalls with ServiceTitan",
      category: "Integration Guide",
      date: "March 10, 2024",
      readTime: "8 min read",
      excerpt: "Step-by-step guide to connecting InFlowCalls with your ServiceTitan account for seamless field service management.",
    },
    {
      title: "Best Practices for AI Call Scripts",
      category: "Best Practices",
      date: "March 5, 2024",
      readTime: "6 min read",
      excerpt: "Learn how to optimize your AI call flows for better customer experience and higher conversion rates.",
    },
    {
      title: "HIPAA Compliance for Healthcare Providers",
      category: "Compliance",
      date: "February 28, 2024",
      readTime: "10 min read",
      excerpt: "Everything you need to know about using InFlowCalls in a HIPAA-compliant manner.",
    },
  ];

  const kbCategories = [
    {
      icon: BookOpen,
      title: "Getting Started",
      count: 12,
      topics: ["Initial setup", "Phone number configuration", "First call flows"],
    },
    {
      icon: FileText,
      title: "Integrations",
      count: 24,
      topics: ["CRM connections", "Calendar sync", "Payment processing"],
    },
    {
      icon: Video,
      title: "Troubleshooting",
      count: 18,
      topics: ["Call quality issues", "Integration errors", "Billing questions"],
    },
    {
      icon: Search,
      title: "API Reference",
      count: 32,
      topics: ["Webhooks", "REST endpoints", "Authentication"],
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="py-20 md:py-32 bg-gradient-to-br from-background via-primary/5 to-background">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6" data-testid="text-resources-title">
              Resources & <span className="text-accent">Knowledge Base</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Guides, tutorials, and documentation to help you get the most out of InFlowCalls.
            </p>
          </div>

          <Card className="p-6 mb-16 max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search articles, guides, and documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
                data-testid="input-search-resources"
              />
            </div>
          </Card>

          <div className="mb-20">
            <h2 className="font-serif text-3xl font-bold mb-8">Latest Blog Posts</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {blogPosts.map((post, idx) => (
                <Card key={idx} className="p-6 hover-elevate active-elevate-2 transition-all cursor-pointer" data-testid={`card-blog-${idx}`}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-xs font-semibold text-accent">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                  <h3 className="font-bold text-xl mb-2">{post.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                    <Button variant="ghost" size="sm" data-testid={`button-read-blog-${idx}`}>
                      Read More →
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="font-serif text-3xl font-bold mb-8">Knowledge Base</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {kbCategories.map((category, idx) => (
                <Card key={idx} className="p-6 hover-elevate active-elevate-2 transition-all cursor-pointer" data-testid={`card-kb-${idx}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <category.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold">{category.title}</h3>
                      <p className="text-xs text-muted-foreground">{category.count} articles</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {category.topics.map((topic, tidx) => (
                      <li key={tidx} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-accent"></span>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <BookOpen className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="font-bold mb-2">Getting Started Guide</h3>
              <p className="text-sm text-muted-foreground mb-4">
                New to InFlowCalls? Start here for a complete onboarding experience.
              </p>
              <Button variant="outline" className="w-full" data-testid="button-getting-started">
                View Guide
              </Button>
            </Card>

            <Card className="p-6 text-center">
              <FileText className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="font-bold mb-2">API Documentation</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Comprehensive docs for developers building custom integrations.
              </p>
              <Button variant="outline" className="w-full" data-testid="button-api-docs">
                View Docs
              </Button>
            </Card>

            <Card className="p-6 text-center">
              <Video className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="font-bold mb-2">Video Tutorials</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Watch step-by-step videos to master InFlowCalls features.
              </p>
              <Button variant="outline" className="w-full" data-testid="button-video-tutorials">
                Watch Now
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
