import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Zap, BarChart3, Lock, AlertCircle, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedButton from "@/components/AnimatedButton";

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

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
            <AnimatedSection direction="left">
              <div className="space-y-6">
                <div className="space-y-4">
                  <motion.h1
                    className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                  >
                    Security that <span className="text-accent animate-glow-text">scales with you</span>
                  </motion.h1>
                  <motion.p
                    className="text-lg text-secondary-foreground leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                  >
                    Enterprise-grade cybersecurity solutions designed for businesses that take security seriously. From penetration testing to compliance readiness.
                  </motion.p>
                </div>
                <motion.div
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                >
                  <Link href="/contact">
                    <a>
                      <AnimatedButton className="bg-accent text-accent-foreground hover:bg-cyan-400 glow-cyan w-full sm:w-auto">
                        Book a Security Call
                      </AnimatedButton>
                    </a>
                  </Link>
                  <Link href="/plans">
                    <a>
                      <AnimatedButton variant="outline" className="border-accent text-accent hover:bg-accent/10 w-full sm:w-auto">
                        View Plans
                      </AnimatedButton>
                    </a>
                  </Link>
                </motion.div>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="hidden md:block relative h-96">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg blur-3xl"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.img
                  src="/images/security-icon-pattern.png"
                  alt="Security pattern"
                  className="relative w-full h-full object-contain"
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="border-y border-border/40 bg-card/20 backdrop-blur-sm">
        <div className="container py-12">
          <motion.p
            className="text-center text-secondary-foreground mb-8 text-sm uppercase tracking-wider"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Trusted by leading organizations
          </motion.p>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {["TechCorp", "FinServe", "HealthNet", "RetailPro"].map((company, idx) => (
              <motion.div key={company} variants={itemVariants} className="glass-card p-6 flex items-center justify-center hover-lift">
                <span className="text-secondary-foreground font-semibold">{company}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Highlights Slider */}
      <section className="py-16 md:py-24">
        <div className="container">
          <AnimatedSection direction="left">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
              <motion.div
                className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              />
            </div>
          </AnimatedSection>
          <div className="relative">
            <motion.div
              className="glass-card p-8 md:p-12 min-h-64 flex flex-col justify-center"
              key={activeSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="text-4xl mb-4"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.6 }}
              >
                {slides[activeSlide].icon}
              </motion.div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">{slides[activeSlide].title}</h3>
              <p className="text-lg text-secondary-foreground mb-8">{slides[activeSlide].description}</p>
            </motion.div>
            <motion.div
              className="flex items-center justify-between mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.button
                onClick={() => setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
                className="p-2 hover:bg-secondary rounded-lg transition-colors"
                whileHover={{ scale: 1.2, rotate: -10 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Previous slide"
              >
                ←
              </motion.button>
              <div className="flex gap-2">
                {slides.map((_, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => setActiveSlide(idx)}
                    className={`h-2 rounded-full transition-all ${idx === activeSlide ? "bg-accent w-8" : "bg-border w-2 hover:bg-secondary"}`}
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
              <motion.button
                onClick={() => setActiveSlide((prev) => (prev + 1) % slides.length)}
                className="p-2 hover:bg-secondary rounded-lg transition-colors"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Next slide"
              >
                →
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-16 md:py-24 bg-card/20 backdrop-blur-sm border-y border-border/40">
        <div className="container">
          <AnimatedSection direction="left">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose SuffixSec</h2>
              <motion.div
                className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              />
            </div>
          </AnimatedSection>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="glass-card p-6 hover-lift group"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="mb-4 p-3 bg-accent/10 rounded-lg w-fit group-hover:bg-accent/20 transition-colors"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  >
                    <Icon className="w-6 h-6 text-accent" />
                  </motion.div>
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-secondary-foreground text-sm">{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <AnimatedSection direction="left">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
              <motion.div
                className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              />
            </div>
          </AnimatedSection>
          <div className="relative">
            <img src="/images/process-timeline-bg.png" alt="Process background" className="absolute inset-0 w-full h-full object-cover opacity-20 rounded-lg" />
            <motion.div
              className="relative grid grid-cols-1 md:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { step: "01", title: "Discovery", desc: "Understand your environment" },
                { step: "02", title: "Testing", desc: "Comprehensive security assessment" },
                { step: "03", title: "Report", desc: "Detailed findings and recommendations" },
                { step: "04", title: "Validation", desc: "Verify fixes and improvements" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="glass-card p-6 hover-lift"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className="text-3xl font-bold text-accent mb-3"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {item.step}
                  </motion.div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-secondary-foreground text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Plans Teaser */}
      <section className="py-16 md:py-24 bg-card/20 backdrop-blur-sm border-y border-border/40">
        <div className="container">
          <AnimatedSection direction="left">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Flexible Plans</h2>
              <motion.div
                className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              />
            </div>
          </AnimatedSection>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { name: "Starter", price: "$2,999", features: ["Quarterly Assessments", "Basic Reporting", "Email Support"] },
              { name: "Pro", price: "$7,999", features: ["Monthly Assessments", "Advanced Reporting", "Priority Support"], highlight: true },
              { name: "Enterprise", price: "Custom", features: ["Continuous Monitoring", "Custom Solutions", "24/7 Support"] },
            ].map((plan, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`glass-card p-8 hover-lift relative ${plan.highlight ? "ring-2 ring-accent" : ""}`}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                {plan.highlight && (
                  <motion.div
                    className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Most Popular
                  </motion.div>
                )}
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-accent mb-6">{plan.price}</div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fidx) => (
                    <motion.li
                      key={fidx}
                      className="flex items-center gap-2 text-secondary-foreground text-sm"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: fidx * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <motion.span
                        className="w-1.5 h-1.5 bg-accent rounded-full"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
                <AnimatedButton variant={plan.highlight ? "default" : "outline"} className="w-full">
                  Get Started
                </AnimatedButton>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Link href="/plans">
              <a>
                <AnimatedButton variant="outline" size="lg">
                  View All Plans
                </AnimatedButton>
              </a>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Mini FAQ */}
      <section className="py-16 md:py-24">
        <div className="container">
          <AnimatedSection direction="left">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Common Questions</h2>
              <motion.div
                className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              />
            </div>
          </AnimatedSection>
          <motion.div
            className="space-y-4 mb-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {faqItems.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="glass-card p-6 hover-lift"
                whileHover={{ x: 10 }}
              >
                <h3 className="font-bold text-lg mb-2">{item.question}</h3>
                <p className="text-secondary-foreground">{item.answer}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Link href="/faq">
              <a>
                <AnimatedButton variant="outline" size="lg">
                  View All FAQs
                </AnimatedButton>
              </a>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-cyan-500/10 border-y border-border/40">
        <div className="container text-center">
          <AnimatedSection direction="up">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Ready to harden your security posture?
            </motion.h2>
            <motion.p
              className="text-lg text-secondary-foreground mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let our experts assess your current security infrastructure and create a roadmap for improvement.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link href="/contact">
                <a>
                  <AnimatedButton className="bg-accent text-accent-foreground hover:bg-cyan-400 glow-cyan">
                    Book a Security Call Today
                  </AnimatedButton>
                </a>
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
