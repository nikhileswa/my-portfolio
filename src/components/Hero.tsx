// src/components/Hero.tsx
"use client";

import dynamic from "next/dynamic";
import Section from "@/components/Section";
import { Github, Linkedin, Mail } from "lucide-react";

const Scene = dynamic(() => import("@/components/Scene"), { ssr: false }); // safe for Vercel

export default function Hero({
  profile,
}: {
  profile: {
    name: string;
    title: string;
    location?: string;
    email?: string;
    linkedin?: string;
    github?: string;
  };
}) {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <Section title={profile.name} subtitle={profile.title} />
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          I build data products, analytics, and ML pipelines that turn raw data into decisions.
        </p>

        <div className="mt-6 flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
          {profile.location && <span className="badge">{profile.location}</span>}
        </div>

        <div className="mt-6 flex gap-3">
          {profile.github && (
            <a className="badge" href={profile.github} target="_blank" rel="noreferrer">
              <Github className="mr-2 h-4 w-4" /> GitHub
            </a>
          )}
          {profile.linkedin && (
            <a className="badge" href={profile.linkedin} target="_blank" rel="noreferrer">
              <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
            </a>
          )}
          {profile.email && (
            <a className="badge" href={`mailto:${profile.email}`}>
              <Mail className="mr-2 h-4 w-4" /> Email
            </a>
          )}
        </div>
      </div>

      <div className="card p-4">
        {/* If you don't want 3D, you can remove <Scene /> and use an <Image> instead */}
        <div className="h-[340px] w-full">
          <Scene />
        </div>
      </div>
    </div>
  );
}
