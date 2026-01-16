import { Link } from "wouter";
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Features", href: "/features" },
    { label: "Plans", href: "/plans" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <a className="text-2xl font-bold tracking-tight hover:opacity-70 transition-opacity duration-300">
              SuffixSec
            </a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-12">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a className="text-sm font-medium text-secondary-foreground hover:text-foreground transition-colors duration-300">
                  {item.label}
                </a>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.div
            className="hidden md:block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/contact">
              <a className="px-6 py-2.5 bg-foreground text-background rounded-lg font-semibold hover:opacity-90 transition-opacity duration-300 shadow-lg hover:shadow-xl">
                Get Started
              </a>
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors duration-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.nav
            className="md:hidden mt-6 pb-6 space-y-4 border-t border-border pt-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  className="block text-sm font-medium text-secondary-foreground hover:text-foreground transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </Link>
            ))}
            <Link href="/contact">
              <a
                className="block px-6 py-2.5 bg-foreground text-background rounded-lg font-semibold text-center hover:opacity-90 transition-opacity duration-300 shadow-lg"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </a>
            </Link>
          </motion.nav>
        )}
      </div>
    </header>
  );
}
