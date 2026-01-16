import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedButton from "@/components/AnimatedButton";

export default function Features() {
  const services = [
    {
      title: "Penetration Testing",
      description: "Comprehensive security assessments to identify vulnerabilities before attackers do.",
      icon: "🔍",
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
      icon: "📋",
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
      icon: "🛡️",
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
      icon: "🚨",
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
      icon: "✓",
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
      icon: "⚙️",
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

      {/* Page Header */}
      <section className="border-b border-border/40 bg-card/20 backdrop-blur-sm py-16">
        <div className="container">
          <AnimatedSection direction="up">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Comprehensive Security <span className="text-accent">Solutions</span>
            </motion.h1>
            <motion.p
              className="text-lg text-secondary-foreground max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              From penetration testing to compliance readiness, we provide enterprise-grade security services tailored to your needs.
            </motion.p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            className="space-y-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-start ${idx % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
              >
                {/* Content */}
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="inline-block px-3 py-1 bg-accent/10 rounded-full mb-4"
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(34, 211, 238, 0.2)" }}
                    >
                      <span className="text-xs font-bold text-accent uppercase tracking-wider">
                        Service {String(idx + 1).padStart(2, "0")}
                      </span>
                    </motion.div>
                    <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                    <p className="text-lg text-secondary-foreground mb-6">
                      {service.description}
                    </p>
                  </motion.div>

                  {/* Features List */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="font-bold text-sm uppercase tracking-wider text-accent mb-4">
                      What You Get
                    </h3>
                    <motion.ul
                      className="space-y-3"
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {service.features.map((feature, fidx) => (
                        <motion.li
                          key={fidx}
                          variants={itemVariants}
                          className="flex items-start gap-3 hover-lift"
                          whileHover={{ x: 5 }}
                        >
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          </motion.div>
                          <span className="text-secondary-foreground">{feature}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>

                  {/* Outcomes */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="font-bold text-sm uppercase tracking-wider text-purple-500 mb-4">
                      Expected Outcomes
                    </h3>
                    <motion.div
                      className="space-y-2"
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {service.outcomes.map((outcome, oidx) => (
                        <motion.div
                          key={oidx}
                          variants={itemVariants}
                          className="flex items-center gap-2 hover-lift"
                          whileHover={{ x: 5 }}
                        >
                          <motion.span
                            className="w-1.5 h-1.5 bg-purple-500 rounded-full"
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          />
                          <span className="text-secondary-foreground text-sm">{outcome}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                </div>

                {/* Visual */}
                <motion.div
                  className="glass-card p-8 h-96 flex items-center justify-center rounded-lg overflow-hidden"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(34, 211, 238, 0.3)" }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="text-center"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <motion.div
                      className="text-6xl mb-4"
                      animate={{ scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {service.icon}
                    </motion.div>
                    <p className="text-secondary-foreground">
                      {service.title}
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Engagement Workflow */}
      <section className="py-16 md:py-24 bg-card/20 backdrop-blur-sm border-y border-border/40">
        <div className="container">
          <AnimatedSection direction="left">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              Our <span className="text-accent">Engagement Workflow</span>
            </h2>
          </AnimatedSection>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { step: "Consultation", desc: "Understand your needs" },
              { step: "Planning", desc: "Define scope and timeline" },
              { step: "Execution", desc: "Conduct assessment" },
              { step: "Analysis", desc: "Analyze findings" },
              { step: "Delivery", desc: "Present recommendations" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="relative"
                whileHover={{ scale: 1.05 }}
              >
                <div className="glass-card p-6 text-center hover-lift">
                  <motion.div
                    className="text-2xl font-bold text-accent mb-2"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: idx * 0.1 }}
                  >
                    {idx + 1}
                  </motion.div>
                  <h3 className="font-bold mb-1">{item.step}</h3>
                  <p className="text-xs text-secondary-foreground">{item.desc}</p>
                </div>
                {idx < 4 && (
                  <motion.div
                    className="hidden md:block absolute top-1/2 -right-2 transform translate-x-full"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="w-4 h-0.5 bg-gradient-to-r from-accent to-transparent" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container text-center">
          <AnimatedSection direction="up">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Ready to get started?
            </motion.h2>
            <motion.p
              className="text-lg text-secondary-foreground mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Contact our team to discuss which services are right for your organization.
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
                    Schedule a Consultation
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
