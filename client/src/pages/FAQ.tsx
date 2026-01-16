import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqCategories = [
    {
      category: "Services",
      items: [
        { q: "What types of security assessments do you offer?", a: "We offer penetration testing, security audits, vulnerability management, incident response, compliance readiness, and DevSecOps enablement." },
        { q: "How long does a typical security assessment take?", a: "Assessment duration varies based on scope and complexity, typically ranging from 1-4 weeks. We provide a detailed timeline during the planning phase." },
        { q: "Can you assess our cloud infrastructure?", a: "Yes, we assess AWS, Azure, Google Cloud, and hybrid cloud environments. We have expertise across all major cloud platforms." },
        { q: "Do you provide remediation services?", a: "We provide detailed remediation guidance and can assist with implementation. For Enterprise plans, we include hands-on remediation support." },
      ],
    },
    {
      category: "Pricing",
      items: [
        { q: "Can I change plans anytime?", a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle." },
        { q: "Do you offer discounts for annual billing?", a: "Yes, annual plans include a 15% discount compared to monthly billing." },
        { q: "What's included in 'assets'?", a: "Assets include servers, applications, networks, and any systems covered by your security assessment." },
        { q: "Is there a setup fee?", a: "No, there are no hidden fees. You only pay the monthly or annual subscription price." },
        { q: "Do you offer a free trial?", a: "Yes, we offer a 14-day free trial for new customers. No credit card required." },
      ],
    },
    {
      category: "Process",
      items: [
        { q: "How do you get started?", a: "Schedule a consultation with our team to discuss your needs. We'll provide a custom proposal and timeline." },
        { q: "What happens during the discovery phase?", a: "We gather information about your infrastructure, systems, and security objectives to tailor our assessment." },
        { q: "How detailed is the final report?", a: "Our reports include executive summaries, technical findings, risk ratings, and detailed remediation recommendations." },
        { q: "Do you provide training?", a: "Yes, we offer security awareness training and can provide technical training for your team." },
      ],
    },
    {
      category: "Security",
      items: [
        { q: "How do you protect our data during assessments?", a: "We follow strict data protection protocols, sign NDAs, and comply with all applicable regulations including GDPR and HIPAA." },
        { q: "Are your assessments non-destructive?", a: "Yes, our assessments are designed to identify vulnerabilities without causing damage or disruption to your systems." },
        { q: "Do you test in production?", a: "We work with you to determine the appropriate testing environment. We can test staging or production based on your preferences." },
        { q: "How do you handle sensitive findings?", a: "Critical findings are reported immediately. All findings are documented securely and shared only with authorized personnel." },
      ],
    },
  ];

  const allItems = faqCategories.flatMap((cat) => cat.items);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Page Header */}
      <section className="border-b border-border/40 bg-card/20 backdrop-blur-sm py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="text-accent">Questions</span>
          </h1>
          <p className="text-lg text-secondary-foreground max-w-2xl">
            Find answers to common questions about our services, pricing, and security practices.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <div className="space-y-4">
            {allItems.map((item, idx) => (
              <div key={idx} className="glass-card overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-secondary/20 transition-colors"
                  aria-expanded={openIndex === idx}
                >
                  <h3 className="font-bold text-left text-foreground">{item.q}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-accent flex-shrink-0 transition-transform ${
                      openIndex === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === idx && (
                  <div className="px-6 py-4 border-t border-border/40 bg-secondary/10">
                    <p className="text-secondary-foreground leading-relaxed">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Breakdown */}
      <section className="py-16 md:py-24 bg-card/20 backdrop-blur-sm border-y border-border/40">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Browse by <span className="text-accent">Category</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {faqCategories.map((cat, idx) => (
              <div key={idx} className="glass-card p-6 hover-lift">
                <h3 className="font-bold text-lg mb-4 text-accent">{cat.category}</h3>
                <ul className="space-y-2">
                  {cat.items.map((item, iidx) => (
                    <li key={iidx} className="text-sm text-secondary-foreground hover:text-foreground transition-colors cursor-pointer">
                      {item.q}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 md:py-24">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Still have questions?</h2>
          <p className="text-lg text-secondary-foreground mb-8 max-w-2xl mx-auto">
            Our team is here to help. Reach out to us directly for more information.
          </p>
          <Link href="/contact">
            <a>
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-cyan-400 glow-cyan">
                Contact Our Team
              </Button>
            </a>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
