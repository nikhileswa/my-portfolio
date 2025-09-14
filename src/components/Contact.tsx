// src/components/Contact.tsx
import Section from "@/components/Section";

export default function Contact({ email }: { email?: string }) {
  return (
    <div>
      <Section title="Contact" subtitle="I’m open to roles and collaborations" />
      <div className="card p-5">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          The fastest way to reach me is email.
        </p>
        {email && (
          <a className="mt-3 inline-block badge" href={`mailto:${email}`}>
            Email me
          </a>
        )}
      </div>
    </div>
  );
}
