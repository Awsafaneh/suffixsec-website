import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast.success("Thank you! We'll be in touch soon.");
      setFormData({ name: "", email: "", company: "", service: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const services = [
    "Penetration Testing",
    "Security Audits",
    "Vulnerability Management",
    "Incident Response",
    "Compliance Readiness",
    "DevSecOps Enablement",
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
            <h1 className="section-title">Get in Touch</h1>
            <p className="section-subtitle">
              Have questions? Our team is ready to help you secure your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-semibold mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground"
                      placeholder="Your name"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-semibold mb-2">Work Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground"
                      placeholder="your@company.com"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-semibold mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground"
                    placeholder="Your company name"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-semibold mb-2">Service Needed</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-semibold mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground resize-none"
                    placeholder="Tell us about your security needs..."
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.35 }}
                  viewport={{ once: true }}
                >
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-3 bg-foreground text-background rounded-lg font-medium hover:opacity-80 transition-opacity disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </motion.div>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              className="space-y-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                {
                  icon: Mail,
                  title: "Email",
                  content: "support@suffixsec.com",
                  href: "mailto:support@suffixsec.com",
                },
                {
                  icon: Phone,
                  title: "Phone",
                  content: "+1 (234) 567-890",
                  href: "tel:+1234567890",
                },
                {
                  icon: MapPin,
                  title: "Location",
                  content: "123 Security Street\nSan Francisco, CA 94105",
                },
                {
                  icon: Clock,
                  title: "Business Hours",
                  content: "Monday - Friday\n9:00 AM - 6:00 PM PST",
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="card-minimal"
                  >
                    <div className="flex items-start gap-4">
                      <Icon size={24} className="flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-2">{item.title}</h3>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-secondary-foreground hover:opacity-60 transition-opacity"
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-secondary-foreground whitespace-pre-line text-sm">{item.content}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
