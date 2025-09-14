// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="py-10 border-t border-gray-200/60 dark:border-gray-800/60">
      <div className="container text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Nikhileswar Reddy Chirra — All rights reserved.
      </div>
    </footer>
  );
}
