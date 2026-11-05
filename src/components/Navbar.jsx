'use client';
import { useSession, signOut } from "@/lib/auth-client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
];

const Navbar = () => {
  const { data, isPending } = useSession();
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  if (isPending) {
    return <div className="h-16" />;
  }

  const user = data?.user;

  const linkClass = (href) =>
    `rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-default/40 ${
      pathname === href ? "text-foreground" : "text-foreground/70"
    }`;

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      <header className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="text-lg font-bold tracking-tight">
          404<span className="text-accent">Shop</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((item) => (
            <li key={item.label}>
              <Link href={item.href} className={linkClass(item.href)}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          {user ? (
            <>
              <p className="px-2 text-sm font-medium text-foreground">
                Welcome, {user.name}!
              </p>
              <button
                type="button"
                onClick={() => signOut()}
                className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link
                href="/auth/signin"
                className="rounded-lg px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-default/40"
              >
                Sign In
              </Link>
              <Link
                href="/auth/signup"
                className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-default/40 md:hidden"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </header>

      {open && (
        <div className="border-t border-separator px-4 pb-4 pt-2 md:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block ${linkClass(item.href)}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex flex-col gap-2">
            {user ? (
              <>
                <p className="px-1 text-sm font-medium text-foreground">
                  Welcome, {user.name}!
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    signOut();
                  }}
                  className="rounded-lg bg-accent px-4 py-2 text-center text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <div className="flex gap-2">
                <Link
                  href="/auth/signin"
                  onClick={() => setOpen(false)}
                  className="flex-1 rounded-lg border border-separator px-4 py-2 text-center text-sm font-medium text-foreground transition-colors hover:bg-default/40"
                >
                  Sign In
                </Link>
                <Link
                  href="/auth/signup"
                  onClick={() => setOpen(false)}
                  className="flex-1 rounded-lg bg-accent px-4 py-2 text-center text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;