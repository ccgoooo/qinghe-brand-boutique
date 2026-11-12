import { createFileRoute } from "@tanstack/react-router";
import { Layout, Placeholder, meta } from "@/components/site";

export const Route = createFileRoute("/about")({
  head: () => meta("About — Qinghe Atelier", "The story behind Qinghe Atelier, a fictional small studio."),
  component: () => (
    <Layout>
      <h1 className="font-display text-5xl">About the atelier</h1>
      <div className="mt-10 grid gap-10 md:grid-cols-2">
        <Placeholder label="Studio placeholder" className="aspect-square" />
        <div className="space-y-4 text-muted-foreground">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui.</p>
          <p>Maecenas faucibus mollis interdum. Cras mattis consectetur purus sit amet fermentum.</p>
        </div>
      </div>
    </Layout>
  ),
});
