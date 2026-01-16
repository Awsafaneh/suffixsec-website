import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { useState } from "react";

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
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Page Header */}
      <section className="py-24 border-b border-border">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="accent-line" />
            <h1 className="section-title">Simple, Transparent Pricing</h1>
            <p className="section-subtitle text-lg">
              Choose the plan that fits your organization's security needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Billing Toggle */}
      <section className="py-16 border-b border-border">
        <div className="container">
          <motion.div
            className="flex items-center justify-center gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                billingPeriod === "monthly"
                  ? "bg-foreground text-background shadow-lg"
                  : "border-2 border-border hover:border-foreground/50"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod("yearly")}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 relative ${
                billingPeriod === "yearly"
                  ? "bg-foreground text-background shadow-lg"
                  : "border-2 border-border hover:border-foreground/50"
              }`}
            >
              Yearly
              {billingPeriod === "yearly" && (
                <span className="absolute -top-4 -right-4 text-xs font-bold px-3 py-1 rounded-full bg-foreground text-background">
                  Save 15%
                </span>
              )}
            </button>
          </motion.div>
        </div>
      </section>

      {/* Plans Grid */}
      <section className="py-32">
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
                className={`card-premium relative ${plan.highlight ? "ring-2 ring-foreground md:scale-105 md:-my-6" : ""}`}
                whileHover={{ y: -12 }}
              >
                {plan.highlight && (
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-foreground text-background px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    Most Popular
                  </div>
                )}

                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                    <div className="text-5xl font-bold mb-2">
                      {plan.price ? (
                        plan.price
                      ) : (
                        <>
                          ${billingPeriod === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
                          <span className="text-lg text-secondary-foreground font-normal">
                            /{billingPeriod === "monthly" ? "mo" : "yr"}
                          </span>
                        </>
                      )}
                    </div>
                    <p className="text-secondary-foreground text-sm">
                      {billingPeriod === "yearly" && !plan.price && "Billed annually"}
                    </p>
                  </div>

                  <Link href="/contact">
                    <a className="btn-premium w-full justify-center">
                      Get Started
                      <ArrowRight size={18} />
                    </a>
                  </Link>

                  <ul className="space-y-4">
                    {plan.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-start gap-3">
                        <Check size={20} className="flex-shrink-0 mt-0.5 text-foreground" />
                        <span className="text-secondary-foreground text-sm leading-relaxed">{feature}</span>
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
      <section className="py-32 border-t border-border">
        <div className="container max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <h2 className="section-title">Start your free trial</h2>
              <p className="section-subtitle text-lg">
                14 days free. No credit card required.
              </p>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/contact">
                <a className="btn-premium inline-flex">
                  Start Free Trial
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
