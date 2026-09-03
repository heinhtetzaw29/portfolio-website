import { useState } from "react";
import { profile } from "../data";

export default function Contact() {
  const [imgFailed, setImgFailed] = useState(false);
  const hasPhoto = profile.headshotUrl && !imgFailed;

  return (
    <section
      id="contact"
      className="mx-auto flex max-w-3xl flex-col items-center border-t border-ink px-5 py-12 text-center md:py-16"
    >
      <div className="h-28 w-28 overflow-hidden rounded-full border border-ink bg-white md:h-32 md:w-32">
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

      <p className="mt-8 max-w-xl text-body italic text-ink opacity-90">{profile.about}</p>

      <h2 className="mt-10 text-section uppercase text-ink">Get in Touch</h2>
      <p className="mt-4 max-w-xl text-body text-subtle">
        Have a project in mind, or a question about my work? I'm open to internships, graduate
        roles, and interesting projects.
      </p>

      <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
        <a
          href={`mailto:${profile.email}`}
          className="border border-ink px-8 py-3 text-label uppercase text-ink transition-colors hover:bg-ink hover:text-paper"
        >
          Email
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="border border-ink px-8 py-3 text-label uppercase text-ink transition-colors hover:bg-ink hover:text-paper"
        >
          LinkedIn
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="border border-ink px-8 py-3 text-label uppercase text-ink transition-colors hover:bg-ink hover:text-paper"
        >
          GitHub
        </a>
      </div>

      <p className="mt-8 text-label text-muted">
        {profile.location} · {profile.phone}
      </p>
    </section>
  );
}
