import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: "What types of security assessments do you offer?", a: "We offer penetration testing, security audits, vulnerability management, incident response, compliance readiness, and DevSecOps enablement." },
    { q: "How long does a typical security assessment take?", a: "Assessment duration varies based on scope and complexity, typically ranging from 1-4 weeks. We provide a detailed timeline during the planning phase." },
    { q: "Can you assess our cloud infrastructure?", a: "Yes, we assess AWS, Azure, Google Cloud, and hybrid cloud environments. We have expertise across all major cloud platforms." },
    { q: "Do you provide remediation services?", a: "We provide detailed remediation guidance and can assist with implementation. For Enterprise plans, we include hands-on remediation support." },
    { q: "Can I change plans anytime?", a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle." },
    { q: "Do you offer discounts for annual billing?", a: "Yes, annual plans include a 15% discount compared to monthly billing." },
    { q: "What's included in 'assets'?", a: "Assets include servers, applications, networks, and any systems covered by your security assessment." },
    { q: "Is there a setup fee?", a: "No, there are no hidden fees. You only pay the monthly or annual subscription price." },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
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
            <h1 className="section-title">Frequently Asked Questions</h1>
            <p className="section-subtitle">
              Find answers to common questions about our services and pricing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20">
        <div className="container max-w-3xl">
          <motion.div
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="card-minimal"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full flex items-center justify-between py-2"
                  aria-expanded={openIndex === idx}
                >
                  <h3 className="font-semibold text-left">{faq.q}</h3>
                  <motion.div
                    animate={{ rotate: openIndex === idx ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={20} className="flex-shrink-0" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="pt-4 border-t border-border"
                    >
                      <p className="text-secondary-foreground">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
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
              <h2 className="section-title">Still have questions?</h2>
              <p className="section-subtitle">
                Our team is here to help. Reach out to us directly.
              </p>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/contact">
                <a className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-foreground text-background rounded-lg font-medium hover:opacity-80 transition-opacity">
                  Contact Our Team
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
