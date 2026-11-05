import Link from "next/link";

const plans = [
  {
    name: "Free",
    price: "৳0",
    period: "/month",
    features: ["Basic access", "5 orders per month", "Email support"],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "৳499",
    period: "/month",
    features: ["Unlimited orders", "Priority delivery", "Order tracking", "Chat support"],
    highlighted: true,
  },
  {
    name: "Business",
    price: "৳1499",
    period: "/month",
    features: ["Everything in Pro", "Bulk orders", "Dedicated manager", "24/7 support"],
    highlighted: false,
  },
];

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">Pricing</h1>
        <p className="mt-3 text-foreground/70">Tomar jonno shothik plan bechhe nao.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`flex flex-col rounded-2xl border p-6 ${
              plan.highlighted ? "border-accent" : "border-separator"
            }`}
          >
            <h3 className="text-lg font-semibold">{plan.name}</h3>
            <p className="mt-4">
              <span className="text-4xl font-bold">{plan.price}</span>
              <span className="text-sm text-foreground/70">{plan.period}</span>
            </p>
            <ul className="mt-6 flex flex-1 flex-col gap-2 text-sm text-foreground/80">
              {plan.features.map((feature) => (
                <li key={feature}>✓ {feature}</li>
              ))}
            </ul>
            <Link
              href="/auth/signup"
              className={`mt-8 rounded-lg px-4 py-2 text-center text-sm font-medium transition-opacity hover:opacity-90 ${
                plan.highlighted
                  ? "bg-accent text-accent-foreground"
                  : "border border-separator text-foreground"
              }`}
            >
              Get Started
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}