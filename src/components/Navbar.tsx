// src/components/Navbar.tsx
"use client";

export default function Navbar() {
  const items = [
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-gray-950/70 border-b border-gray-200/60 dark:border-gray-800/60">
      <nav className="container flex h-14 items-center justify-between">
        <a href="#" className="font-semibold">Nikhileswar RC</a>
        <ul className="flex gap-4 text-sm">
          {items.map((it) => (
            <li key={it.href}>
              <a href={it.href} className="hover:underline underline-offset-2">{it.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
