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
      className={`relative pricing-card-glow p-8 pt-12 rounded-3xl flex flex-col ${
        highlight ? "scale-105 z-10 border-primary" : ""
      }`}
    >
      {highlight && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Badge className="bg-gradient-to-r from-pink-600 to-violet-700 text-white border-none px-4 py-1">
            Most Popular
          </Badge>
        </div>
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
