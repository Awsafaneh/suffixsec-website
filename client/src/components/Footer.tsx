import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="border-t border-border bg-background">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-2">SuffixSec</h3>
            <p className="text-sm text-secondary-foreground">
              Enterprise-grade cybersecurity solutions for businesses that take security seriously.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {["Penetration Testing", "Security Audits", "Compliance Readiness"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-secondary-foreground hover:opacity-60 transition-opacity">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:support@suffixsec.com" className="text-sm text-secondary-foreground hover:opacity-60 transition-opacity">
                  support@suffixsec.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="text-sm text-secondary-foreground hover:opacity-60 transition-opacity">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-secondary-foreground">
            © {currentYear} SuffixSec. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a className="text-sm text-secondary-foreground hover:opacity-60 transition-opacity">
                  {link.label}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
