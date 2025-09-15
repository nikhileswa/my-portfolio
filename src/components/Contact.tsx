// src/components/Contact.tsx
import Section from "@/components/Section";

export default function Contact({ email }: { email?: string }) {
  return (
    <div>
      <Section title="Contact" subtitle="Let’s get in touch" />
      <div className="mt-4 card">
        {email ? (
          <a href={`mailto:${email}`} className="underline underline-offset-2">
            {email}
          </a>
        ) : (
          <p className="text-sm text-gray-600 dark:text-gray-400">Add your email in <code>src/content/data.ts</code>.</p>
        )}
      </div>
    </div>
  );
}
