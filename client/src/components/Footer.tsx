import { Link } from "wouter";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";

/**
 * Neo-brutalist Footer Component
 * Professional footer with quick links, contact info, social links, and legal
 * Design: Minimal, geometric, high-contrast
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-card/30 backdrop-blur-sm">
      <div className="container py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm font-bold">S</span>
              </div>
              <span className="font-bold text-foreground">SuffixSec</span>
            </div>
            <p className="text-sm text-secondary-foreground">
              Enterprise cybersecurity solutions that scale with your business.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wider">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/features">
                  <a className="text-sm text-secondary-foreground hover:text-accent transition-colors">
                    Features
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/plans">
                  <a className="text-sm text-secondary-foreground hover:text-accent transition-colors">
                    Pricing
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/faq">
                  <a className="text-sm text-secondary-foreground hover:text-accent transition-colors">
                    FAQ
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-secondary-foreground hover:text-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-secondary-foreground hover:text-accent transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-secondary-foreground hover:text-accent transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wider">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <a href="mailto:support@suffixsec.com" className="text-sm text-secondary-foreground hover:text-accent transition-colors">
                  support@suffixsec.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <a href="tel:+1234567890" className="text-sm text-secondary-foreground hover:text-accent transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-sm text-secondary-foreground">
                  San Francisco, CA
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-xs text-secondary-foreground">
            © {currentYear} SuffixSec. All rights reserved.
          </p>

          {/* Legal Links */}
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-secondary-foreground hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-secondary-foreground hover:text-accent transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-xs text-secondary-foreground hover:text-accent transition-colors">
              Security
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a href="#" className="p-2 hover:bg-secondary rounded-lg transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-4 h-4 text-secondary-foreground hover:text-accent" />
            </a>
            <a href="#" className="p-2 hover:bg-secondary rounded-lg transition-colors" aria-label="Twitter">
              <Twitter className="w-4 h-4 text-secondary-foreground hover:text-accent" />
            </a>
            <a href="#" className="p-2 hover:bg-secondary rounded-lg transition-colors" aria-label="GitHub">
              <Github className="w-4 h-4 text-secondary-foreground hover:text-accent" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
