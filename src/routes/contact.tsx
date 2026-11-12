import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { Layout, meta } from "@/components/site";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

export const Route = createFileRoute("/contact")({
  head: () => meta("Contact — Qinghe Atelier", "Send a message to the fictional Qinghe Atelier (demo form)."),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const r = schema.safeParse(data);
    if (!r.success) {
      setErrors(Object.fromEntries(r.error.issues.map((i) => [String(i.path[0]), i.message])));
      return;
    }
    setErrors({});
    setSent(true); // Demo only: nothing is stored or sent anywhere.
  }

  const field = "mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring";
  return (
    <Layout>
      <h1 className="font-display text-5xl">Contact</h1>
      <p className="mt-3 text-muted-foreground">This is a demo form — submissions are not stored or sent.</p>
      {sent ? (
        <div role="status" className="mt-10 max-w-lg rounded-md border border-primary/40 bg-secondary p-6">
          <h2 className="font-display text-2xl">Thank you!</h2>
          <p className="mt-2 text-sm text-muted-foreground">Your message was received (demo only).</p>
          <button onClick={() => setSent(false)} className="mt-4 text-sm underline">Send another</button>
        </div>
      ) : (
        <form onSubmit={onSubmit} noValidate className="mt-10 max-w-lg space-y-5">
          {(["name", "email"] as const).map((f) => (
            <label key={f} className="block text-sm capitalize">{f}
              <input name={f} type={f === "email" ? "email" : "text"} className={field} />
              {errors[f] && <span className="text-xs text-destructive">{errors[f]}</span>}
            </label>
          ))}
          <label className="block text-sm">Message
            <textarea name="message" rows={5} className={field} />
            {errors["message"] && <span className="text-xs text-destructive">{errors["message"]}</span>}
          </label>
          <button type="submit" className="rounded-md bg-primary px-5 py-2.5 text-sm text-primary-foreground hover:opacity-90">Send message</button>
        </form>
      )}
    </Layout>
  );
}
