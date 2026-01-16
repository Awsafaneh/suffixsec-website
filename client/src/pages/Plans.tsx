import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedButton from "@/components/AnimatedButton";

export default function Plans() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");

  const plans = [
    {
      name: "Starter",
      subtitle: "For small teams and startups",
      monthlyPrice: 29.99,
      yearlyPrice: 254.92,
      features: [
        "Quarterly assessments",
        "Basic vulnerability scanning",
        "Email support",
        "Standard reporting",
        "Up to 5 assets",
        "Community access",
      ],
    },
    {
      name: "Pro",
      subtitle: "For growing businesses",
      monthlyPrice: 79.99,
      yearlyPrice: 679.92,
      features: [
        "Monthly assessments",
        "Advanced vulnerability scanning",
        "Priority email & phone support",
        "Executive reporting",
        "Up to 20 assets",
        "Dedicated account manager",
        "Compliance reporting",
        "Annual penetration test",
      ],
      highlight: true,
    },
    {
      name: "Enterprise",
      subtitle: "For large organizations",
      monthlyPrice: null,
      yearlyPrice: null,
      price: "Custom",
      features: [
        "Continuous monitoring",
        "Custom assessment frequency",
        "24/7 phone & email support",
        "Custom reporting",
        "Unlimited assets",
        "Dedicated security team",
        "Advanced compliance support",
        "Quarterly penetration tests",
        "Incident response included",
        "Custom integrations",
      ],
    },
  ];

  const comparisonFeatures = [
    "Assessment Frequency",
    "Support Level",
    "Number of Assets",
    "Reporting",
    "Penetration Testing",
    "Compliance Support",
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
      <section className="border-b border-border/40 bg-card/20 backdrop-blur-sm py-16">
        <div className="container">
          <AnimatedSection direction="up">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Simple, Transparent <span className="text-accent">Pricing</span>
            </motion.h1>
            <motion.p
              className="text-lg text-secondary-foreground max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Choose the plan that fits your organization's security needs. All plans include our core security services.
            </motion.p>
          </AnimatedSection>
        </div>
      </section>

      {/* Billing Toggle */}
      <section className="py-8">
        <div className="container">
          <motion.div
            className="flex items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                billingPeriod === "monthly"
                  ? "bg-accent text-accent-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Monthly
            </motion.button>
            <motion.button
              onClick={() => setBillingPeriod("yearly")}
              className={`px-6 py-2 rounded-lg font-semibold transition-all relative ${
                billingPeriod === "yearly"
                  ? "bg-accent text-accent-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Yearly
              {billingPeriod === "yearly" && (
                <motion.span
                  className="absolute -top-3 -right-3 bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded-full"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  Save 15%
                </motion.span>
              )}
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Plans Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {plans.map((plan, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`glass-card p-8 relative hover-lift ${
                  plan.highlight ? "ring-2 ring-accent md:scale-105" : ""
                }`}
                whileHover={{ y: -10, scale: plan.highlight ? 1.08 : 1.02 }}
              >
                {plan.highlight && (
                  <motion.div
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-bold"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Most Popular
                  </motion.div>
                )}

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-secondary-foreground text-sm mb-6">{plan.subtitle}</p>

                  <motion.div
                    className="mb-8"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {plan.price ? (
                      <div className="text-4xl font-bold text-accent">{plan.price}</div>
                    ) : (
                      <>
                        <div className="text-4xl font-bold text-accent">
                          ${billingPeriod === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
                        </div>
                        <div className="text-secondary-foreground text-sm">
                          per {billingPeriod === "monthly" ? "month" : "year"}
                        </div>
                      </>
                    )}
                  </motion.div>

                  <AnimatedButton
                    variant={plan.highlight ? "default" : "outline"}
                    className="w-full mb-8"
                  >
                    Get Started
                  </AnimatedButton>
                </motion.div>

                <motion.ul
                  className="space-y-4"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {plan.features.map((feature, fidx) => (
                    <motion.li
                      key={fidx}
                      variants={itemVariants}
                      className="flex items-start gap-3 hover-lift"
                      whileHover={{ x: 5 }}
                    >
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      </motion.div>
                      <span className="text-secondary-foreground text-sm">{feature}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 md:py-24 bg-card/20 backdrop-blur-sm border-y border-border/40">
        <div className="container">
          <AnimatedSection direction="left">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              Detailed <span className="text-accent">Comparison</span>
            </h2>
          </AnimatedSection>

          <motion.div
            className="overflow-x-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/40">
                  <th className="text-left py-4 px-6 font-bold">Feature</th>
                  {plans.map((plan) => (
                    <th key={plan.name} className="text-center py-4 px-6 font-bold text-accent">
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Assessment", starter: "Quarterly", pro: "Monthly", enterprise: "Continuous" },
                  { feature: "Support", starter: "Email", pro: "Priority Email & Phone", enterprise: "24/7 Dedicated" },
                  { feature: "Assets", starter: "Up to 5", pro: "Up to 20", enterprise: "Unlimited" },
                  { feature: "Reporting", starter: "Standard", pro: "Executive", enterprise: "Custom" },
                  { feature: "Penetration Testing", starter: "Included", pro: "Annual", enterprise: "Quarterly" },
                  { feature: "Compliance", starter: "Basic", pro: "Advanced", enterprise: "Full Support" },
                ].map((row, idx) => (
                  <motion.tr
                    key={idx}
                    className="border-b border-border/40 hover:bg-secondary/10 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <td className="py-4 px-6 font-semibold">{row.feature}</td>
                    <td className="text-center py-4 px-6 text-secondary-foreground">{row.starter}</td>
                    <td className="text-center py-4 px-6 text-secondary-foreground">{row.pro}</td>
                    <td className="text-center py-4 px-6 text-secondary-foreground">{row.enterprise}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <AnimatedSection direction="left">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              Pricing <span className="text-accent">FAQ</span>
            </h2>
          </AnimatedSection>

          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { q: "Can I change plans anytime?", a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle." },
              { q: "Do you offer discounts for annual billing?", a: "Yes, annual plans include a 15% discount compared to monthly billing." },
              { q: "What's included in 'assets'?", a: "Assets include servers, applications, networks, and any systems covered by your security assessment." },
              { q: "Is there a setup fee?", a: "No, there are no hidden fees. You only pay the monthly or annual subscription price." },
              { q: "Do you offer a free trial?", a: "Yes, we offer a 14-day free trial for new customers. No credit card required." },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="glass-card p-6 hover-lift"
                whileHover={{ x: 5 }}
              >
                <h3 className="font-bold text-lg mb-2">{item.q}</h3>
                <p className="text-secondary-foreground">{item.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-cyan-500/10 border-y border-border/40">
        <div className="container text-center">
          <AnimatedSection direction="up">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Ready to secure your business?
            </motion.h2>
            <motion.p
              className="text-lg text-secondary-foreground mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Start with a free 14-day trial. No credit card required.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <AnimatedButton className="bg-accent text-accent-foreground hover:bg-cyan-400 glow-cyan">
                Start Free Trial
              </AnimatedButton>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
