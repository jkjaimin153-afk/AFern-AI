import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Lock, Eye, FileCheck, Download } from "lucide-react";

export default function Security() {
  const features = [
    {
      icon: Lock,
      title: "End-to-End Encryption",
      description: "All call data encrypted in transit using TLS 1.3 and at rest using AES-256",
    },
    {
      icon: Shield,
      title: "SOC 2 Type II",
      description: "Certified for security, availability, and confidentiality controls",
    },
    {
      icon: FileCheck,
      title: "HIPAA Ready",
      description: "Business Associate Agreement (BAA) available for healthcare providers",
    },
    {
      icon: Eye,
      title: "Data Residency",
      description: "Choose where your data is stored - US, EU, or other regions",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="py-20 md:py-32 bg-gradient-to-br from-background via-primary/5 to-background">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6" data-testid="text-security-title">
              Enterprise-Grade <span className="text-accent">Security</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your data security is our top priority. We maintain the highest standards of compliance and protection.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, idx) => (
              <Card key={idx} className="p-8 text-center" data-testid={`card-security-feature-${idx}`}>
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>

          <div className="space-y-8 mb-16">
            <Card className="p-8">
              <h2 className="font-serif text-3xl font-bold mb-6">SOC 2 Compliance</h2>
              <p className="text-muted-foreground mb-4">
                Afern AI has achieved SOC 2 Type II certification, demonstrating our commitment to the highest standards of security, availability, processing integrity, confidentiality, and privacy.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Shield className="h-3 w-3 text-accent" />
                  </div>
                  <span className="text-sm">Annual third-party audits by independent auditors</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Shield className="h-3 w-3 text-accent" />
                  </div>
                  <span className="text-sm">Comprehensive security controls and monitoring</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Shield className="h-3 w-3 text-accent" />
                  </div>
                  <span className="text-sm">Continuous compliance and improvement processes</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-green-500/5 border-green-500/20">
              <h2 className="font-serif text-3xl font-bold mb-6">HIPAA Compliance</h2>
              <p className="text-muted-foreground mb-4">
                Healthcare providers can obtain a Business Associate Agreement (BAA) to ensure full HIPAA compliance for protected health information (PHI).
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FileCheck className="h-3 w-3 text-green-500" />
                  </div>
                  <span className="text-sm">Encrypted call recordings and transcripts</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FileCheck className="h-3 w-3 text-green-500" />
                  </div>
                  <span className="text-sm">Access controls and audit logging</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FileCheck className="h-3 w-3 text-green-500" />
                  </div>
                  <span className="text-sm">Data retention and destruction policies</span>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground">
                Contact us at <a href="mailto:security@afernai.com" className="text-accent hover:underline">security@afernai.com</a> to request a BAA.
              </p>
            </Card>

            <Card className="p-8">
              <h2 className="font-serif text-3xl font-bold mb-6">GDPR & Privacy</h2>
              <p className="text-muted-foreground mb-4">
                We are fully compliant with GDPR and CCPA regulations, giving you and your customers complete control over personal data.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Eye className="h-3 w-3 text-accent" />
                  </div>
                  <span className="text-sm">Data subject access requests processed within 30 days</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Eye className="h-3 w-3 text-accent" />
                  </div>
                  <span className="text-sm">Right to erasure and data portability</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Eye className="h-3 w-3 text-accent" />
                  </div>
                  <span className="text-sm">Transparent data processing and consent management</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <h2 className="font-serif text-3xl font-bold mb-6">Data Retention & Deletion</h2>
              <p className="text-muted-foreground mb-4">
                Flexible retention policies to meet your compliance requirements:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FileCheck className="h-3 w-3 text-accent" />
                  </div>
                  <span className="text-sm">Configurable retention periods (30 days to 7 years)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FileCheck className="h-3 w-3 text-accent" />
                  </div>
                  <span className="text-sm">Automated data deletion after retention period</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FileCheck className="h-3 w-3 text-accent" />
                  </div>
                  <span className="text-sm">Secure deletion with cryptographic verification</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <h2 className="font-serif text-3xl font-bold mb-6">Encryption & Security</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold mb-3">Data in Transit</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• TLS 1.3 encryption</li>
                    <li>• Perfect forward secrecy</li>
                    <li>• Certificate pinning</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-3">Data at Rest</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• AES-256 encryption</li>
                    <li>• Encrypted database storage</li>
                    <li>• Encrypted backups</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center">
            <h2 className="font-serif text-3xl font-bold mb-6">Download Security Documentation</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="outline" data-testid="button-download-whitepaper">
                <Download className="mr-2 h-4 w-4" />
                Security Whitepaper (PDF)
              </Button>
              <Button variant="outline" data-testid="button-download-hipaa">
                <Download className="mr-2 h-4 w-4" />
                HIPAA Info Sheet (PDF)
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              For security inquiries, contact <a href="mailto:security@afernai.com" className="text-accent hover:underline">security@afernai.com</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
