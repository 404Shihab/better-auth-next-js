const stats = [
  { value: "1K+", label: "Happy Customers" },
  { value: "500+", label: "Products" },
  { value: "24/7", label: "Support" },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">About Us</h1>
        <p className="mt-3 text-foreground/70">404Shop er golpo.</p>
      </div>

      <div className="space-y-4 text-foreground/80">
        <p>
          404Shop ekta modern e-commerce platform, jekhane kena-kata hobe shohoj,
          druto ar nirapod. Amader lokkho holo prottek customer ke shera
          shopping experience dewa.
        </p>
        <p>
          Next.js diye toiri ei project ta amra continuously improve korchi, jate
          tumi ekdom smooth ekta experience pao.
        </p>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-3">
        {stats.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-separator p-6 text-center"
          >
            <p className="text-3xl font-bold text-accent">{item.value}</p>
            <p className="mt-1 text-sm text-foreground/70">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}