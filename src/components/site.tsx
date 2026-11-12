import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/contact", label: "Contact" },
] as const;

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-border">
        <div className="mx-auto max-w-5xl px-6 py-5 flex items-center justify-between">
          <Link to="/" className="font-display text-2xl tracking-wide">Qinghe Atelier</Link>
          <nav className="flex gap-6 text-sm">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} activeOptions={{ exact: true }}
                className="text-muted-foreground hover:text-foreground"
                activeProps={{ className: "text-foreground underline underline-offset-4" }}>
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main className="flex-1 mx-auto w-full max-w-5xl px-6 py-14">{children}</main>
      <footer className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © Qinghe Atelier — a fictional brand. All content is placeholder.
      </footer>
    </div>
  );
}

export function Placeholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div className={`flex items-center justify-center rounded-md bg-gradient-to-br from-secondary to-accent text-muted-foreground text-sm ${className}`}>
      {label}
    </div>
  );
}

export function meta(title: string, description: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  };
}
