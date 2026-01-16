import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle } from "lucide-react";

/**
 * Features Page - Detailed Service Descriptions
 * Design: Structured sections with clear information hierarchy
 */

export default function Features() {
  const services = [
    {
      title: "Penetration Testing",
      description: "Comprehensive security assessments to identify vulnerabilities before attackers do.",
      features: [
        "External and internal network testing",
        "Application security assessment",
        "Social engineering evaluation",
        "Physical security assessment",
        "Detailed vulnerability analysis",
      ],
      outcomes: ["Identify critical vulnerabilities", "Prioritized remediation roadmap", "Executive summary report"],
    },
    {
      title: "Security Audits",
      description: "In-depth analysis of your systems, processes, and compliance posture.",
      features: [
        "Infrastructure review",
        "Access control assessment",
        "Data protection evaluation",
        "Incident response procedures",
        "Security policy review",
      ],
      outcomes: ["Compliance gap analysis", "Security posture score", "Improvement recommendations"],
    },
    {
      title: "Vulnerability Management",
      description: "Continuous identification and remediation of security weaknesses.",
      features: [
        "Automated vulnerability scanning",
        "Risk prioritization",
        "Patch management guidance",
        "Remediation tracking",
        "Compliance reporting",
      ],
      outcomes: ["Reduced attack surface", "Faster patch cycles", "Compliance evidence"],
    },
    {
      title: "Incident Response",
      description: "24/7 rapid response to security incidents with expert remediation.",
      features: [
        "24/7 incident hotline",
        "Rapid response team",
        "Forensic investigation",
        "Threat containment",
        "Recovery assistance",
      ],
      outcomes: ["Minimized breach impact", "Root cause analysis", "Prevention strategies"],
    },
    {
      title: "Compliance Readiness",
      description: "Achieve and maintain ISO 27001, PCI-DSS, HIPAA, and SOC 2 compliance.",
      features: [
        "Compliance framework selection",
        "Gap assessment",
        "Control implementation",
        "Audit preparation",
        "Ongoing compliance monitoring",
      ],
      outcomes: ["Certification achievement", "Audit readiness", "Regulatory confidence"],
    },
    {
      title: "DevSecOps Enablement",
      description: "Integrate security into your development and deployment processes.",
      features: [
        "Security pipeline integration",
        "Code scanning and SAST",
        "Dependency management",
        "Container security",
        "Infrastructure as code review",
      ],
      outcomes: ["Faster secure releases", "Reduced production incidents", "Developer training"],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Page Header */}
      <section className="border-b border-border/40 bg-card/20 backdrop-blur-sm py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Comprehensive Security <span className="text-accent">Solutions</span>
          </h1>
          <p className="text-lg text-secondary-foreground max-w-2xl">
            From penetration testing to compliance readiness, we provide enterprise-grade security services tailored to your needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="space-y-16">
            {services.map((service, idx) => (
              <div key={idx} className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-start ${idx % 2 === 1 ? "md:grid-cols-2 md:[&>*:first-child]:order-2" : ""}`}>
                {/* Content */}
                <div className="space-y-6">
                  <div>
                    <div className="inline-block px-3 py-1 bg-accent/10 rounded-full mb-4">
                      <span className="text-xs font-bold text-accent uppercase tracking-wider">
                        Service {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                    <p className="text-lg text-secondary-foreground mb-6">
                      {service.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <div>
                    <h3 className="font-bold text-sm uppercase tracking-wider text-accent mb-4">
                      What You Get
                    </h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, fidx) => (
                        <li key={fidx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-secondary-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Outcomes */}
                  <div>
                    <h3 className="font-bold text-sm uppercase tracking-wider text-purple-500 mb-4">
                      Expected Outcomes
                    </h3>
                    <div className="space-y-2">
                      {service.outcomes.map((outcome, oidx) => (
                        <div key={oidx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                          <span className="text-secondary-foreground text-sm">{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Visual */}
                <div className="glass-card p-8 h-96 flex items-center justify-center rounded-lg overflow-hidden">
                  <div className="text-center">
                    <div className="text-6xl mb-4">
                      {["🔍", "📋", "🛡️", "🚨", "✓", "⚙️"][idx]}
                    </div>
                    <p className="text-secondary-foreground">
                      {service.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Workflow */}
      <section className="py-16 md:py-24 bg-card/20 backdrop-blur-sm border-y border-border/40">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Our <span className="text-accent">Engagement Workflow</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
            {[
              { step: "Consultation", desc: "Understand your needs" },
              { step: "Planning", desc: "Define scope and timeline" },
              { step: "Execution", desc: "Conduct assessment" },
              { step: "Analysis", desc: "Analyze findings" },
              { step: "Delivery", desc: "Present recommendations" },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="glass-card p-6 text-center">
                  <div className="text-2xl font-bold text-accent mb-2">
                    {idx + 1}
                  </div>
                  <h3 className="font-bold mb-1">{item.step}</h3>
                  <p className="text-xs text-secondary-foreground">{item.desc}</p>
                </div>
                {idx < 4 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 transform translate-x-full">
                    <div className="w-4 h-0.5 bg-gradient-to-r from-accent to-transparent" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to get started?
          </h2>
          <p className="text-lg text-secondary-foreground mb-8 max-w-2xl mx-auto">
            Contact our team to discuss which services are right for your organization.
          </p>
          <Link href="/contact">
            <a>
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-cyan-400 glow-cyan">
                Schedule a Consultation
              </Button>
            </a>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
