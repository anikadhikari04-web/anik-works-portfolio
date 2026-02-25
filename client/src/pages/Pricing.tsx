import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const plans = [
  {
    title: "BASIC PLAN",
    price: "₹500",
    period: "month",
    features: [
      "Basic Website",
      "No Custom Domain ( like-.com or .in )",
      "Minimal Customization",
      "5 Hours/Day Customer Support",
    ],
    highlight: false,
    delay: 0
  },
  {
    title: "STANDARD PLAN",
    price: "₹1500",
    period: "month",
    features: [
      "Standard Website",
      "No Custom Domain ( like-.com or .in )",
      "Fully Customizable",
      "8 Hours/day Customer Support",
      "Animations Included",
    ],
    highlight: true,
    delay: 0.1
  },
  {
    title: "PREMIUM PLAN",
    price: "₹5000",
    period: "month",
    features: [
      "Premium Website",
      "Custom Domain Included",
      "Maximum Customizable",
      "24/7 Customer Support",
      "Animations Included",
      "SEO Optimized",
      "No Page Limit",
    ],
    highlight: false,
    delay: 0.2
  }
];

export default function Pricing() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Website Building <span className="text-gradient">Pricing</span></h1>
          <p className="text-muted-foreground text-lg">
            Choose the perfect plan for your professional online presence. High-quality websites tailored to your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <PricingCard key={plan.title} {...plan} />
          ))}
        </div>
      </div>
    </div>
  );
}

function PricingCard({ title, price, period, features, highlight, delay }: any) {
  const handleBuy = () => {
    const url = "https://wa.me/919434190516";
    window.open(url, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className={`pricing-card-glow p-8 rounded-3xl flex flex-col ${
        highlight ? "scale-105 z-10 border-primary" : ""
      }`}
    >
      {highlight && (
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-pink-600 to-violet-700 text-white border-none px-4 py-1">
          Most Popular
        </Badge>
      )}

      <div className="mb-8">
        <h3 className="text-xl font-bold text-white/70 mb-4">{title}</h3>
        <div className="flex items-baseline gap-1">
          <span className="text-5xl font-black text-white">{price}</span>
          <span className="text-white/50">/{period}</span>
        </div>
      </div>

      <ul className="space-y-4 mb-10 flex-1">
        {features.map((feature: string, i: number) => (
          <li key={i} className="flex items-start gap-3 text-sm font-medium text-white/80">
            <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
              <div className="w-2 h-2 rounded-full bg-primary" />
            </div>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button 
        onClick={handleBuy}
        className="btn-premium w-full text-lg uppercase tracking-wider"
      >
        Contact to Buy
      </button>
    </motion.div>
  );
}
