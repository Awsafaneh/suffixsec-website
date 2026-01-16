import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Zap, BarChart3, Lock, AlertCircle, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      title: "Penetration Testing",
      description: "Comprehensive security assessments to identify vulnerabilities before attackers do.",
      icon: "🎯",
    },
    {
      title: "Security Audits",
      description: "In-depth analysis of your systems, processes, and compliance posture.",
      icon: "📋",
    },
    {
      title: "Incident Response",
      description: "24/7 rapid response to security incidents with expert remediation.",
      icon: "🚨",
    },
    {
      title: "Compliance Readiness",
      description: "Achieve and maintain ISO 27001, PCI-DSS, HIPAA, and SOC 2 compliance.",
      icon: "✓",
    },
  ];

  const features = [
    { title: "Real-time Monitoring", description: "Continuous threat detection and response", icon: Shield },
    { title: "Expert Team", description: "Certified security professionals with 15+ years experience", icon: Zap },
    { title: "Detailed Reporting", description: "Actionable insights with clear remediation paths", icon: BarChart3 },
    { title: "Enterprise Grade", description: "Trusted by Fortune 500 companies worldwide", icon: Lock },
    { title: "Compliance Focus", description: "Meet regulatory requirements with confidence", icon: AlertCircle },
    { title: "Proactive Defense", description: "Stay ahead of emerging threats and vulnerabilities", icon: CheckCircle },
  ];

  const faqItems = [
    { question: "How quickly can you respond to security incidents?", answer: "Our enterprise clients receive 24/7 support with initial response within 1 hour." },
    { question: "What compliance standards do you cover?", answer: "We specialize in ISO 27001, PCI-DSS, HIPAA, SOC 2, and GDPR compliance." },
    { question: "Do you offer ongoing security monitoring?", answer: "Yes, all plans include continuous monitoring and threat intelligence updates." },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src="/images/hero-bg.png" alt="Hero background" className="w-full h-full object-cover" />
        </div>
        <div className="relative container py-20 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Security that <span className="text-accent">scales with you</span>
                </h1>
                <p className="text-lg text-secondary-foreground leading-relaxed">
                  Enterprise-grade cybersecurity solutions designed for businesses that take security seriously. From penetration testing to compliance readiness.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <a>
                    <Button size="lg" className="bg-accent text-accent-foreground hover:bg-cyan-400 glow-cyan w-full sm:w-auto">
                      Book a Security Call
                    </Button>
                  </a>
                </Link>
                <Link href="/plans">
                  <a>
                    <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10 w-full sm:w-auto">
                      View Plans
                    </Button>
                  </a>
                </Link>
              </div>
            </div>
            <div className="hidden md:block relative h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg blur-3xl" />
              <img src="/images/security-icon-pattern.png" alt="Security pattern" className="relative w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="border-y border-border/40 bg-card/20 backdrop-blur-sm">
        <div className="container py-12">
          <p className="text-center text-secondary-foreground mb-8 text-sm uppercase tracking-wider">Trusted by leading organizations</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["TechCorp", "FinServe", "HealthNet", "RetailPro"].map((company) => (
              <div key={company} className="glass-card p-6 flex items-center justify-center hover-lift">
                <span className="text-secondary-foreground font-semibold">{company}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Slider */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full" />
          </div>
          <div className="relative">
            <div className="glass-card p-8 md:p-12 min-h-64 flex flex-col justify-center">
              <div className="text-4xl mb-4">{slides[activeSlide].icon}</div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">{slides[activeSlide].title}</h3>
              <p className="text-lg text-secondary-foreground mb-8">{slides[activeSlide].description}</p>
            </div>
            <div className="flex items-center justify-between mt-8">
              <button onClick={() => setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))} className="p-2 hover:bg-secondary rounded-lg transition-colors" aria-label="Previous slide">
                ←
              </button>
              <div className="flex gap-2">
                {slides.map((_, idx) => (
                  <button key={idx} onClick={() => setActiveSlide(idx)} className={`h-2 rounded-full transition-all ${idx === activeSlide ? "bg-accent w-8" : "bg-border w-2 hover:bg-secondary"}`} aria-label={`Go to slide ${idx + 1}`} />
                ))}
              </div>
              <button onClick={() => setActiveSlide((prev) => (prev + 1) % slides.length)} className="p-2 hover:bg-secondary rounded-lg transition-colors" aria-label="Next slide">
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-16 md:py-24 bg-card/20 backdrop-blur-sm border-y border-border/40">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose SuffixSec</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="glass-card p-6 hover-lift group">
                  <div className="mb-4 p-3 bg-accent/10 rounded-lg w-fit group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-secondary-foreground text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full" />
          </div>
          <div className="relative">
            <img src="/images/process-timeline-bg.png" alt="Process background" className="absolute inset-0 w-full h-full object-cover opacity-20 rounded-lg" />
            <div className="relative grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Discovery", desc: "Understand your environment" },
                { step: "02", title: "Testing", desc: "Comprehensive security assessment" },
                { step: "03", title: "Report", desc: "Detailed findings and recommendations" },
                { step: "04", title: "Validation", desc: "Verify fixes and improvements" },
              ].map((item, idx) => (
                <div key={idx} className="glass-card p-6">
                  <div className="text-3xl font-bold text-accent mb-3">{item.step}</div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-secondary-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Plans Teaser */}
      <section className="py-16 md:py-24 bg-card/20 backdrop-blur-sm border-y border-border/40">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Flexible Plans</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { name: "Starter", price: "$2,999", features: ["Quarterly Assessments", "Basic Reporting", "Email Support"] },
              { name: "Pro", price: "$7,999", features: ["Monthly Assessments", "Advanced Reporting", "Priority Support"], highlight: true },
              { name: "Enterprise", price: "Custom", features: ["Continuous Monitoring", "Custom Solutions", "24/7 Support"] },
            ].map((plan, idx) => (
              <div key={idx} className={`glass-card p-8 hover-lift relative ${plan.highlight ? "ring-2 ring-accent" : ""}`}>
                {plan.highlight && <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold">Most Popular</div>}
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-accent mb-6">{plan.price}</div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center gap-2 text-secondary-foreground text-sm">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant={plan.highlight ? "default" : "outline"} className="w-full">
                  Get Started
                </Button>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/plans">
              <a>
                <Button variant="outline" size="lg">
                  View All Plans
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Mini FAQ */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Common Questions</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full" />
          </div>
          <div className="space-y-4 mb-8">
            {faqItems.map((item, idx) => (
              <div key={idx} className="glass-card p-6">
                <h3 className="font-bold text-lg mb-2">{item.question}</h3>
                <p className="text-secondary-foreground">{item.answer}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/faq">
              <a>
                <Button variant="outline" size="lg">
                  View All FAQs
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-cyan-500/10 border-y border-border/40">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to harden your security posture?</h2>
          <p className="text-lg text-secondary-foreground mb-8 max-w-2xl mx-auto">
            Let our experts assess your current security infrastructure and create a roadmap for improvement.
          </p>
          <Link href="/contact">
            <a>
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-cyan-400 glow-cyan">
                Book a Security Call Today
              </Button>
            </a>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
