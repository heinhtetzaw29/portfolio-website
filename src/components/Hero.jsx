import { useState } from "react";
import { profile } from "../data";

export default function Hero() {
  const [imgFailed, setImgFailed] = useState(false);
  const hasPhoto = profile.headshotUrl && !imgFailed;

  return (
    <section
      id="hero"
      className="mx-auto grid max-w-editorial grid-cols-1 items-center gap-12 border-b border-line px-6 py-16 md:px-12 md:py-24 lg:grid-cols-12"
    >
      <div className="flex flex-col items-start gap-6 lg:col-span-7">
        <div className="flex max-w-3xl flex-col gap-2">
          <p className="text-label uppercase tracking-wider text-muted">{profile.heroLocation}</p>
          <h1 className="text-display-mobile leading-none tracking-tight text-ink md:text-display">
            {profile.name}
          </h1>
          <p className="mt-2 text-headline-sm font-medium tracking-tight text-accent">
            {profile.heroSubhead}
          </p>
        </div>

        <p className="max-w-3xl text-body-lg leading-relaxed text-muted">{profile.positioning}</p>

        <div className="flex flex-wrap items-center gap-4 pt-4">
          <a
            href="#work"
            className="inline-flex items-center gap-2 bg-ink px-6 py-3 text-label uppercase tracking-widest text-paper transition-colors hover:bg-accent"
          >
            View projects ↓
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-ink px-6 py-3 text-label uppercase tracking-widest text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            Download resume ⤓
          </a>
        </div>

        <div className="flex flex-wrap items-center gap-6 pt-4 text-label uppercase tracking-wider text-muted">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="underline decoration-line underline-offset-4 transition-colors hover:text-accent"
          >
            GitHub
          </a>
          <span className="select-none text-line">/</span>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="underline decoration-line underline-offset-4 transition-colors hover:text-accent"
          >
            LinkedIn
          </a>
          <span className="select-none text-line">/</span>
          <a
            href={`mailto:${profile.email}`}
            className="underline decoration-line underline-offset-4 transition-colors hover:text-accent"
          >
            Email ({profile.email})
          </a>
        </div>
      </div>

      <div className="lg:col-span-5">
        <div className="border border-line bg-card p-2">
          <div className="aspect-[4/5] w-full overflow-hidden bg-surface">
            {hasPhoto ? (
              <img
                src={profile.headshotUrl}
                alt={profile.name}
                onError={() => setImgFailed(true)}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-headline-lg text-muted">
                {profile.initials}
              </div>
            )}
          </div>
          <div className="flex items-center justify-between px-1 pt-2 text-label uppercase text-muted">
            <span>H. Zaw // USYD '25</span>
            <span>Sydney, Australia</span>
          </div>
        </div>
      </div>
    </section>
  );
}
