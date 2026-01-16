import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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
      <section className="py-20 border-b border-border">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h1 className="section-title">Our Services</h1>
            <p className="section-subtitle">
              Comprehensive security solutions tailored to your organization's needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container">
          <motion.div
            className="space-y-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
              >
                <div className="space-y-6">
                  <div>
                    <div className="text-sm font-medium text-secondary-foreground mb-2">
                      Service {String(idx + 1).padStart(2, "0")}
                    </div>
                    <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                    <p className="text-secondary-foreground">{service.description}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-4">What's Included</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, fidx) => (
                        <li key={fidx} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0" />
                          <span className="text-secondary-foreground text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <motion.div
                  className="card-minimal h-96 flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-center">
                    <div className="text-6xl mb-4">
                      {["🔍", "📋", "🛡️", "🚨", "✓", "⚙️"][idx]}
                    </div>
                    <p className="font-medium">{service.title}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-border">
        <div className="container max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="section-title">Ready to get started?</h2>
              <p className="section-subtitle">
                Contact our team to discuss which services are right for your organization.
              </p>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/contact">
                <a className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-foreground text-background rounded-lg font-medium hover:opacity-80 transition-opacity">
                  Schedule a Consultation
                  <ArrowRight size={18} />
                </a>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
