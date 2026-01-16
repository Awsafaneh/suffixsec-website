import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Plans() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");

  const plans = [
    {
      name: "Starter",
      monthlyPrice: 29.99,
      yearlyPrice: 254.92,
      features: [
        "Quarterly assessments",
        "Basic vulnerability scanning",
        "Email support",
        "Standard reporting",
        "Up to 5 assets",
      ],
    },
    {
      name: "Pro",
      monthlyPrice: 79.99,
      yearlyPrice: 679.92,
      features: [
        "Monthly assessments",
        "Advanced vulnerability scanning",
        "Priority support",
        "Executive reporting",
        "Up to 20 assets",
        "Dedicated account manager",
      ],
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: [
        "Continuous monitoring",
        "Custom assessment frequency",
        "24/7 support",
        "Custom reporting",
        "Unlimited assets",
        "Dedicated security team",
      ],
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
            <h1 className="section-title">Simple, Transparent Pricing</h1>
            <p className="section-subtitle">
              Choose the plan that fits your organization's security needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Billing Toggle */}
      <section className="py-12 border-b border-border">
        <div className="container">
          <motion.div
            className="flex items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                billingPeriod === "monthly"
                  ? "bg-foreground text-background"
                  : "border border-border hover:border-foreground/50"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod("yearly")}
              className={`px-6 py-2 rounded-lg font-medium transition-all relative ${
                billingPeriod === "yearly"
                  ? "bg-foreground text-background"
                  : "border border-border hover:border-foreground/50"
              }`}
            >
              Yearly
              {billingPeriod === "yearly" && (
                <span className="absolute -top-3 -right-3 text-xs font-bold px-2 py-1 rounded-full">
                  Save 15%
                </span>
              )}
            </button>
          </motion.div>
        </div>
      </section>

      {/* Plans Grid */}
      <section className="py-20">
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
                className={`card-minimal ${plan.highlight ? "ring-2 ring-foreground md:scale-105" : ""}`}
                whileHover={{ scale: 1.02 }}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-foreground text-background px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="text-3xl font-bold">
                      {plan.price ? (
                        plan.price
                      ) : (
                        <>
                          ${billingPeriod === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
                          <span className="text-sm text-secondary-foreground font-normal">
                            /{billingPeriod === "monthly" ? "mo" : "yr"}
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  <Link href="/contact">
                    <a className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-foreground text-background rounded-lg font-medium hover:opacity-80 transition-opacity">
                      Get Started
                      <ArrowRight size={18} />
                    </a>
                  </Link>

                  <ul className="space-y-3">
                    {plan.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-start gap-3">
                        <Check size={18} className="flex-shrink-0 mt-0.5" />
                        <span className="text-secondary-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
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
              <h2 className="section-title">Start your free trial</h2>
              <p className="section-subtitle">
                14 days free. No credit card required.
              </p>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/contact">
                <a className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-foreground text-background rounded-lg font-medium hover:opacity-80 transition-opacity">
                  Start Free Trial
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
