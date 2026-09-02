import { useState } from "react";
import { profile } from "../data";

export default function Hero() {
  const [imgFailed, setImgFailed] = useState(false);
  const hasPhoto = profile.headshotUrl && !imgFailed;

  return (
    <section className="flex flex-col items-center justify-center px-5 pb-16 pt-24 text-center md:pb-20 md:pt-32">
      <h1 className="text-[44px] font-bold leading-none tracking-[-0.04em] text-ink md:text-display">
        {profile.name.toUpperCase()}
      </h1>
      <h2 className="mt-4 text-section text-muted">{profile.role}</h2>

      <div className="mt-10 h-40 w-40 border border-ink bg-white">
        {hasPhoto ? (
          <img
            src={profile.headshotUrl}
            alt={profile.name}
            onError={() => setImgFailed(true)}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-section text-muted">
            {profile.initials}
          </div>
        )}
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <a
          href="#projects"
          className="border border-ink px-8 py-3 text-label uppercase text-ink transition-colors hover:bg-ink hover:text-paper"
        >
          Projects
        </a>
        <a
          href={profile.resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="border border-ink px-8 py-3 text-label uppercase text-ink transition-colors hover:bg-ink hover:text-paper"
        >
          Resume
        </a>
      </div>
    </section>
  );
}
