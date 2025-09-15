// src/components/Hero.tsx
"use client";

import dynamic from "next/dynamic";
import Section from "@/components/Section";
import { Github, Linkedin, Mail } from "lucide-react";


const Scene = dynamic(() => import("@/components/Scene"), { ssr: false });

export default function Hero({
  profile,
}: {
  profile: {
    name: string;
    title: string;
    email?: string;
    linkedin?: string;
    github?: string;
  };
}) {
  return (
    <div>
      <Section title={profile.name} subtitle={profile.title} />
      <div className="mt-6 flex flex-wrap gap-3">
        {profile.github && (
          <a className="badge" href={profile.github} target="_blank" rel="noreferrer">
            <Github className="w-4 h-4 mr-1" /> GitHub
          </a>
        )}
        {profile.linkedin && (
          <a className="badge" href={profile.linkedin} target="_blank" rel="noreferrer">
            <Linkedin className="w-4 h-4 mr-1" /> LinkedIn
          </a>
        )}
        {profile.email && (
          <a className="badge" href={`mailto:${profile.email}`}>
            <Mail className="w-4 h-4 mr-1" /> Email
          </a>
        )}
      </div>

      {/* Optional 3D scene; remove if not using */}
      <div className="mt-8">
        <Scene />
      </div>
    </div>
  );
}
