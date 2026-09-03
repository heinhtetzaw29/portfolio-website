import { useState } from "react";
import { Link } from "react-router-dom";
import { profile } from "../data";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#skills", label: "Skills" },
  { href: "/#experience", label: "Experience" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-paper">
      <div className="mx-auto flex h-16 max-w-editorial items-center justify-between px-6 md:px-12">
        <div className="flex items-baseline gap-2">
          <Link to="/" className="text-headline-sm tracking-tight text-ink hover:text-accent">
            {profile.name}
          </Link>
          <span className="hidden text-label uppercase tracking-wider text-muted sm:inline-block">
            {profile.mastheadTag}
          </span>
        </div>

        <div className="flex items-center gap-6">
          <nav className="hidden items-center gap-6 md:flex">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="py-1 text-body-sm text-muted transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden border border-ink px-3 py-1 text-label uppercase tracking-wider text-ink transition-colors hover:bg-ink hover:text-paper sm:inline-block"
            >
              Resume
            </a>
            <button
              className="text-ink md:hidden"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              <span className="text-label uppercase">{open ? "Close" : "Menu"}</span>
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="flex flex-col gap-4 border-t border-line px-6 py-6 md:hidden">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-body-sm text-muted hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="text-label uppercase tracking-wider text-ink"
          >
            Resume
          </a>
        </div>
      )}
    </header>
  );
}
