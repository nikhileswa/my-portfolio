// src/app/page.tsx
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import { profile, skills, projects, experience, education } from "@/content/data";

export default function Home() {
  return (
    <main className="container">
      <section className="section" id="hero">
        <Hero profile={profile} />
      </section>

      <section className="section" id="skills">
        <Skills items={skills} />
      </section>

      <section className="section" id="projects">
        <Projects items={projects} />
      </section>

      <section className="section" id="experience">
        <Experience items={experience} />
      </section>

      <section className="section" id="education">
        <Education items={education} />
      </section>

      <section className="section" id="contact">
        <Contact email={profile.email} />
      </section>
    </main>
  );
}
