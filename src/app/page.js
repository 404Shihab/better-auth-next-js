import Link from "next/link";

const highlights = [
  { title: "Fast Delivery", text: "Order koro, amra pouche dibo druto." },
  { title: "Secure Payment", text: "Tomar payment shob somoy surokkhito." },
  { title: "Best Prices", text: "Shera dame shera product." },
];

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <section className="flex flex-col items-center gap-6 py-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Welcome to 404<span className="text-accent">Shop</span>
        </h1>
        <p className="max-w-xl text-lg text-foreground/70">
          Tomar pochondo er shob product ekhane, shohoj kena-kata, druto delivery.
        </p>
        <div className="flex gap-3">
          <Link
            href="/features"
            className="rounded-lg bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            Explore Features
          </Link>
          <Link
            href="/pricing"
            className="rounded-lg border border-separator px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-default/40"
          >
            View Pricing
          </Link>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        {highlights.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-separator p-6"
          >
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm text-foreground/70">{item.text}</p>
          </div>
        ))}
      </section>
    </div>
  );
}