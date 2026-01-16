import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check } from "lucide-react";
import { useState } from "react";

/**
 * Plans Page - Pricing and Comparison
 * Design: Clear comparison table, highlighted recommended plan
 */

export default function Plans() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");

  const plans = [
    {
      name: "Starter",
      description: "For small teams and startups",
      monthlyPrice: 2999,
      yearlyPrice: 29990,
      features: [
        "Quarterly assessments",
        "Basic vulnerability scanning",
        "Email support",
        "Standard reporting",
        "Up to 5 assets",
        "Community access",
      ],
      cta: "Get Started",
      highlight: false,
    },
    {
      name: "Pro",
      description: "For growing businesses",
      monthlyPrice: 7999,
      yearlyPrice: 79990,
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
      cta: "Get Started",
      highlight: true,
    },
    {
      name: "Enterprise",
      description: "For large organizations",
      monthlyPrice: null,
      yearlyPrice: null,
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
      cta: "Talk to Sales",
      highlight: false,
    },
  ];

  const comparisonFeatures = [
    { category: "Assessment", items: ["Quarterly", "Monthly", "Continuous"] },
    { category: "Support", items: ["Email", "Priority Email & Phone", "24/7 Dedicated"] },
    { category: "Assets", items: ["Up to 5", "Up to 20", "Unlimited"] },
    { category: "Reporting", items: ["Standard", "Executive", "Custom"] },
    { category: "Penetration Testing", items: ["Included", "Annual", "Quarterly"] },
    { category: "Compliance", items: ["Basic", "Advanced", "Full Support"] },
  ];

  const faqItems = [
    {
      question: "Can I change plans anytime?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle.",
    },
    {
      question: "Do you offer discounts for annual billing?",
      answer: "Yes, annual plans include a 15% discount compared to monthly billing.",
    },
    {
      question: "What's included in 'assets'?",
      answer: "Assets include servers, applications, networks, and any systems covered by your security assessment.",
    },
    {
      question: "Is there a setup fee?",
      answer: "No, there are no hidden fees. You only pay the monthly or annual subscription price.",
    },
    {
      question: "Do you offer a free trial?",
      answer: "Yes, we offer a 14-day free trial for new customers. No credit card required.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Page Header */}
      <section className="border-b border-border/40 bg-card/20 backdrop-blur-sm py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, Transparent <span className="text-accent">Pricing</span>
          </h1>
          <p className="text-lg text-secondary-foreground max-w-2xl">
            Choose the plan that fits your organization's security needs. All plans include our core security services.
          </p>
        </div>
      </section>

      {/* Billing Toggle */}
      <section className="py-8 border-b border-border/40">
        <div className="container flex justify-center">
          <div className="glass-card p-1 inline-flex rounded-lg">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                billingPeriod === "monthly"
                  ? "bg-accent text-accent-foreground"
                  : "text-secondary-foreground hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod("yearly")}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                billingPeriod === "yearly"
                  ? "bg-accent text-accent-foreground"
                  : "text-secondary-foreground hover:text-foreground"
              }`}
            >
              Yearly <span className="text-xs ml-1 text-accent">Save 15%</span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, idx) => {
              const price = billingPeriod === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;
              return (
                <div
                  key={idx}
                  className={`glass-card p-8 hover-lift relative flex flex-col ${
                    plan.highlight ? "ring-2 ring-accent md:scale-105" : ""
                  }`}
                >
                  {plan.highlight && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-xs font-bold">
                      Most Popular
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-secondary-foreground text-sm">{plan.description}</p>
                  </div>

                  <div className="mb-8">
                    {price !== null ? (
                      <>
                        <div className="text-4xl font-bold text-accent">
                          ${(price / 100).toLocaleString()}
                        </div>
                        <p className="text-secondary-foreground text-sm mt-2">
                          per {billingPeriod === "monthly" ? "month" : "year"}
                        </p>
                      </>
                    ) : (
                      <div className="text-2xl font-bold text-accent">Custom Pricing</div>
                    )}
                  </div>

                  <Button
                    size="lg"
                    className={`w-full mb-8 ${
                      plan.highlight
                        ? "bg-accent text-accent-foreground hover:bg-cyan-400"
                        : "border-accent text-accent hover:bg-accent/10"
                    }`}
                    variant={plan.highlight ? "default" : "outline"}
                  >
                    {plan.cta}
                  </Button>

                  <div className="space-y-3 flex-1">
                    {plan.features.map((feature, fidx) => (
                      <div key={fidx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-secondary-foreground text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 md:py-24 bg-card/20 backdrop-blur-sm border-y border-border/40">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Detailed <span className="text-accent">Comparison</span>
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/40">
                  <th className="text-left py-4 px-4 font-bold text-foreground">Feature</th>
                  <th className="text-center py-4 px-4 font-bold text-foreground">Starter</th>
                  <th className="text-center py-4 px-4 font-bold text-accent">Pro</th>
                  <th className="text-center py-4 px-4 font-bold text-foreground">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, idx) => (
                  <tr key={idx} className="border-b border-border/20 hover:bg-secondary/20 transition-colors">
                    <td className="py-4 px-4 font-semibold text-foreground">{feature.category}</td>
                    {feature.items.map((item, iidx) => (
                      <td key={iidx} className="py-4 px-4 text-center text-secondary-foreground text-sm">
                        {item}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Pricing <span className="text-accent">FAQ</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqItems.map((item, idx) => (
              <div key={idx} className="glass-card p-6">
                <h3 className="font-bold text-lg mb-3">{item.question}</h3>
                <p className="text-secondary-foreground">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-cyan-500/10 border-y border-border/40">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to secure your business?
          </h2>
          <p className="text-lg text-secondary-foreground mb-8 max-w-2xl mx-auto">
            Start with a free 14-day trial. No credit card required.
          </p>
          <Link href="/contact">
            <a>
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-cyan-400 glow-cyan">
                Start Free Trial
              </Button>
            </a>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
