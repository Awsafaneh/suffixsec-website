import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Shield, CheckCircle, Zap } from "lucide-react";

export default function Home() {
  const services = [
    { 
      title: "Penetration Testing", 
      desc: "Identify vulnerabilities before attackers do",
      icon: Shield,
      colorClass: "service-card-1 icon-bg-1 icon-color-1"
    },
    { 
      title: "Security Audits", 
      desc: "Comprehensive infrastructure and compliance analysis",
      icon: CheckCircle,
      colorClass: "service-card-2 icon-bg-2 icon-color-2"
    },
    { 
      title: "Vulnerability Management", 
      desc: "Continuous identification and remediation",
      icon: Zap,
      colorClass: "service-card-3 icon-bg-3 icon-color-3"
    },
    { 
      title: "Incident Response", 
      desc: "24/7 rapid response to security threats",
      icon: Shield,
      colorClass: "service-card-4 icon-bg-4 icon-color-4"
    },
    { 
      title: "Compliance Readiness", 
      desc: "ISO 27001, PCI-DSS, HIPAA, SOC 2 certification",
      icon: CheckCircle,
      colorClass: "service-card-5 icon-bg-5 icon-color-5"
    },
    { 
      title: "DevSecOps Enablement", 
      desc: "Security integrated into your development pipeline",
      icon: Zap,
      colorClass: "service-card-6 icon-bg-6 icon-color-6"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="min-h-[85vh] flex items-center justify-center py-24 relative overflow-hidden">
        {/* Animated Background Gradients */}
        <div className="absolute inset-0 -z-10 opacity-40">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-indigo-300 to-purple-300 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-pink-300 to-rose-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-gradient-to-br from-amber-300 to-orange-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="container max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-block"
              >
                <div className="accent-line" />
              </motion.div>

              <motion.h1
                className="hero-text"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Security that scales with you
              </motion.h1>

              <motion.p
                className="section-subtitle max-w-3xl text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Enterprise-grade cybersecurity solutions designed for businesses that take security seriously. From penetration testing to compliance readiness, we've got you covered.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link href="/contact">
                <a className="btn-premium">
                  Get Started
                  <ArrowRight size={20} />
                </a>
              </Link>
              <Link href="/features">
                <a className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-accent/30 rounded-xl font-semibold hover:border-accent/60 hover:bg-accent/5 transition-all duration-300">
                  Learn More
                </a>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 border-t border-border relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="section-title mb-6">Our Services</h2>
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
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className={`card-premium group border-2 ${service.colorClass}`}
                  whileHover={{ y: -8 }}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`p-3 rounded-lg ${service.colorClass.split(' ')[1]}`}>
                      <Icon size={24} className={service.colorClass.split(' ')[2]} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-1 group-hover:opacity-80 transition-opacity">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-secondary-foreground leading-relaxed">{service.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-t border-border">
        <div className="container">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {[
              { number: "500+", label: "Businesses Secured", color: "from-indigo-500 to-purple-500" },
              { number: "99.9%", label: "Uptime Guarantee", color: "from-pink-500 to-rose-500" },
              { number: "24/7", label: "Expert Support", color: "from-amber-500 to-orange-500" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`text-5xl font-bold mb-3 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.number}
                </div>
                <p className="text-secondary-foreground text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 border-t border-border relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-300 to-purple-300 rounded-full blur-3xl" />
        </div>
        <div className="container max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <h2 className="section-title">Ready to secure your business?</h2>
              <p className="section-subtitle text-lg">
                Start with a free consultation. Our security experts are ready to help.
              </p>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/contact">
                <a className="btn-premium inline-flex">
                  Schedule a Call
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
