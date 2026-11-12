import { createFileRoute } from "@tanstack/react-router";
import { Layout, Placeholder, meta } from "@/components/site";

const items = ["Celadon Cup", "Linen Wrap", "River Stone Dish", "Ink Notebook", "Bamboo Tray", "Mist Candle"];

export const Route = createFileRoute("/products")({
  head: () => meta("Products — Qinghe Atelier", "Browse placeholder products from the fictional Qinghe Atelier."),
  component: () => (
    <Layout>
      <h1 className="font-display text-5xl">Products</h1>
      <p className="mt-3 text-muted-foreground">Sample items for display only — not for sale.</p>
      <div className="mt-10 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {items.map((name) => (
          <div key={name}>
            <Placeholder label="Product image" className="aspect-square" />
            <h3 className="font-display text-xl mt-3">{name}</h3>
            <p className="text-sm text-muted-foreground">Placeholder description.</p>
          </div>
        ))}
      </div>
    </Layout>
  ),
});
