import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const services = [
    { title: "Penetration Testing", desc: "Identify vulnerabilities before attackers do" },
    { title: "Security Audits", desc: "Comprehensive infrastructure and compliance analysis" },
    { title: "Vulnerability Management", desc: "Continuous identification and remediation" },
    { title: "Incident Response", desc: "24/7 rapid response to security threats" },
    { title: "Compliance Readiness", desc: "ISO 27001, PCI-DSS, HIPAA, SOC 2 certification" },
    { title: "DevSecOps Enablement", desc: "Security integrated into your development pipeline" },
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

      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center py-20">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.h1
                className="hero-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                Security that scales with you
              </motion.h1>

              <motion.p
                className="section-subtitle max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Enterprise-grade cybersecurity solutions designed for businesses that take security seriously. From penetration testing to compliance readiness, we've got you covered.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Link href="/contact">
                <a className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-foreground text-background rounded-lg font-medium hover:opacity-80 transition-opacity">
                  Get Started
                  <ArrowRight size={18} />
                </a>
              </Link>
              <Link href="/features">
                <a className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-border rounded-lg font-medium hover:bg-secondary transition-colors">
                  Learn More
                </a>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 border-t border-border">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="section-title mb-4">Our Services</h2>
            <p className="section-subtitle max-w-2xl">
              Comprehensive security solutions tailored to your organization's needs
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="card-minimal group"
                whileHover={{ borderColor: "rgba(0, 0, 0, 0.5)" }}
              >
                <h3 className="font-bold text-lg mb-2 group-hover:opacity-70 transition-opacity">
                  {service.title}
                </h3>
                <p className="text-secondary-foreground text-sm">{service.desc}</p>
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
              <h2 className="section-title">Ready to secure your business?</h2>
              <p className="section-subtitle">
                Start with a free consultation. Our security experts are ready to help.
              </p>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/contact">
                <a className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-foreground text-background rounded-lg font-medium hover:opacity-80 transition-opacity">
                  Schedule a Call
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
