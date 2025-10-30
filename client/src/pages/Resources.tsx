import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Resources() {
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

  return (
    <div className="min-h-screen">
      <section className="py-20 md:py-32">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6" data-testid="text-resources-title">
              <span className="text-accent">Resources</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Guides and insights to help you get the most out of InFlowCalls
            </p>
          </div>

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
      </section>
    </div>
  );
}
