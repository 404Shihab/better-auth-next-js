const features = [
  { title: "Easy Sign Up", text: "Kichu second e account khule felo." },
  { title: "Secure Login", text: "Session based authentication diye surokkhito access." },
  { title: "Fast Search", text: "Product khuje pao ek nimeshe." },
  { title: "Order Tracking", text: "Tomar order ekhon kothay, shob dekho." },
  { title: "Wishlist", text: "Pochondo er product save kore rakho." },
  { title: "Responsive Design", text: "Mobile, tablet, desktop, shob jaygay perfect." },
];

export default function FeaturesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">Features</h1>
        <p className="mt-3 text-foreground/70">
          404Shop tomake ki ki dey, ekbar dekho.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-separator p-6 transition-colors hover:bg-default/30"
          >
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm text-foreground/70">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}