import { useState } from "react";
import { profile } from "../data";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="mx-auto max-w-editorial px-6 py-16 md:px-12 md:py-24">
      <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-12">
        <div className="md:col-span-4">
          <span className="mb-1 block text-label uppercase tracking-widest text-muted">
            Inquiries
          </span>
          <h2 className="text-headline-md text-ink">05 / Contact</h2>
        </div>
      </div>

      <div className="flex max-w-4xl flex-col gap-8">
        <div>
          <span className="inline-flex items-center gap-2 border border-line bg-surface-high px-3 py-1 text-label uppercase tracking-widest text-ink">
            <span className="h-2 w-2 bg-accent" />
            {profile.availability}
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-label uppercase tracking-wider text-muted">
            Direct Communications
          </span>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="break-all text-headline-md tracking-tight text-ink underline decoration-line underline-offset-8 transition-colors hover:text-accent md:text-headline-lg"
            >
              {profile.email}
            </a>
            <button
              onClick={handleCopy}
              className="border border-ink px-3 py-2 text-label uppercase tracking-widest text-ink transition-colors hover:bg-ink hover:text-paper"
            >
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-6 border-t border-line pt-4 text-body-md sm:flex-row sm:gap-12">
          <div className="flex items-center gap-2">
            <span className="text-label uppercase text-muted">LinkedIn:</span>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-ink underline decoration-line underline-offset-4 transition-colors hover:text-accent"
            >
              linkedin.com/in/hzaw29
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-label uppercase text-muted">GitHub:</span>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="text-ink underline decoration-line underline-offset-4 transition-colors hover:text-accent"
            >
              github.com/heinhtetzaw29
            </a>
          </div>
        </div>

        <p className="text-label uppercase tracking-wider text-muted">
          {profile.location} · {profile.phone}
        </p>
      </div>
    </section>
  );
}
