import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, Placeholder, meta } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => meta("Qinghe Atelier — Quiet, handmade goods", "A fictional small atelier making calm, handmade objects for everyday life."),
  component: Home,
});

function Home() {
  return (
    <Layout>
      <section className="grid gap-10 md:grid-cols-2 items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Small batch · Handmade</p>
          <h1 className="font-display text-5xl mt-4 leading-tight">Objects made slowly, like clear water.</h1>
          <p className="mt-5 text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
          <Link to="/products" className="inline-block mt-8 rounded-md bg-primary px-5 py-2.5 text-sm text-primary-foreground hover:opacity-90">View products</Link>
        </div>
        <Placeholder label="Placeholder image" className="aspect-[4/5]" />
      </section>
      <section className="mt-20 grid gap-6 md:grid-cols-3">
        {["Considered materials", "Made by hand", "Built to last"].map((t) => (
          <div key={t} className="border-t border-border pt-4">
            <h3 className="font-display text-xl">{t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">Placeholder text describing this value in a sentence or two.</p>
          </div>
        ))}
      </section>
    </Layout>
  );
}
