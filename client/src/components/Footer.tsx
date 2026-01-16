import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Contact", href: "/contact" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
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
    <footer className="border-t border-border bg-background">
      <div className="container py-20">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-bold">SuffixSec</h3>
            <p className="text-secondary-foreground leading-relaxed">
              Enterprise-grade cybersecurity solutions for businesses that take security seriously.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="font-semibold text-lg">Services</h4>
            <ul className="space-y-3">
              {["Penetration Testing", "Security Audits", "Compliance Readiness"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-secondary-foreground hover:text-foreground transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="font-semibold text-lg">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:support@suffixsec.com" className="text-secondary-foreground hover:text-foreground transition-colors duration-300">
                  support@suffixsec.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="text-secondary-foreground hover:text-foreground transition-colors duration-300">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="divider-subtle my-12" />

        {/* Bottom */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-secondary-foreground">
            © {currentYear} SuffixSec. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a className="text-sm text-secondary-foreground hover:text-foreground transition-colors duration-300">
                  {link.label}
                </a>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
