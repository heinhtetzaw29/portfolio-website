import { useState } from "react";
import { Link } from "react-router-dom";
import { profile } from "../data";

const links = [
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
  { href: profile.resumeUrl, label: "Resume", external: true },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-ink bg-paper">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-10">
        <Link
          to="/"
          className="flex h-9 w-9 items-center justify-center border border-ink font-bold text-body text-ink"
        >
          {profile.initials}
        </Link>

        <ul className="hidden items-center gap-6 md:flex">
          {links.map((link) =>
            link.external ? (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-label uppercase text-muted transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ) : (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-label uppercase text-muted transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            )
          )}
        </ul>

        <button
          className="text-ink md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className="text-label uppercase">{open ? "Close" : "Menu"}</span>
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-4 border-t border-ink px-5 py-6 md:hidden">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
                onClick={() => setOpen(false)}
                className="text-label uppercase text-muted hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
