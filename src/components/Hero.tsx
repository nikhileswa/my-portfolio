// src/components/Hero.tsx
"use client";

import Section from "@/components/Section";

export default function Hero({
  profile,
}: {
  profile: {
    name: string;
    title: string;
    summary?: string;
    email?: string;
    linkedin?: string;
    github?: string;
  };
}) {
  return (
    <div className="card">
      <Section title={profile.name} subtitle={profile.title} />
      {profile.summary && <p className="mt-4 text-gray-700 dark:text-gray-300">{profile.summary}</p>}

      <div className="mt-6 flex flex-wrap gap-3">
        {profile.github && (
          <a className="badge" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
        )}
        {profile.linkedin && (
          <a className="badge" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        )}
        {profile.email && (
          <a className="badge" href={`mailto:${profile.email}`}>Email</a>
        )}
      </div>
    </div>
  );
}
