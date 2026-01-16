import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

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
      icon: "🔍",
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
      icon: "📋",
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
      icon: "🛡️",
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
      icon: "🚨",
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
      icon: "✓",
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
      icon: "⚙️",
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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Page Header */}
      <section className="py-24 border-b border-border">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="accent-line" />
            <h1 className="section-title">Our Services</h1>
            <p className="section-subtitle text-lg">
              Comprehensive security solutions tailored to your organization's needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32">
        <div className="container">
          <motion.div
            className="space-y-24"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
              >
                <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="space-y-8">
                    <div>
                      <div className="text-sm font-semibold text-secondary-foreground mb-4 uppercase tracking-wider">
                        Service {String(idx + 1).padStart(2, "0")}
                      </div>
                      <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">{service.title}</h2>
                      <p className="text-lg text-secondary-foreground leading-relaxed">{service.description}</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg mb-6">What's Included</h3>
                      <ul className="space-y-4">
                        {service.features.map((feature, fidx) => (
                          <li key={fidx} className="flex items-start gap-4">
                            <div className="flex-shrink-0 mt-1">
                              <Check size={20} className="text-foreground" />
                            </div>
                            <span className="text-secondary-foreground text-base leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <motion.div
                  className="card-premium h-96 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-center">
                    <div className="text-8xl mb-6">{service.icon}</div>
                    <p className="font-semibold text-lg">{service.title}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 border-t border-border">
        <div className="container max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <h2 className="section-title">Ready to get started?</h2>
              <p className="section-subtitle text-lg">
                Contact our team to discuss which services are right for your organization.
              </p>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/contact">
                <a className="btn-premium inline-flex">
                  Schedule a Consultation
                  <ArrowRight size={20} />
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
