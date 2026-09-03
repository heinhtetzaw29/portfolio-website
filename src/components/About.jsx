import { useState } from "react";
import { profile } from "../data";

export default function About() {
  const [imgFailed, setImgFailed] = useState(false);
  const hasPhoto = profile.headshotUrl && !imgFailed;

  return (
    <section id="about" className="mx-auto max-w-editorial border-b border-line px-6 py-16 md:px-12 md:py-24">
      <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-12">
        <div className="md:col-span-4">
          <span className="mb-1 block text-label uppercase tracking-widest text-muted">
            Perspective
          </span>
          <h2 className="text-headline-md text-ink">04 / About</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="border border-line bg-card p-2">
            <div className="aspect-[4/3] w-full overflow-hidden bg-surface">
              {hasPhoto ? (
                <img
                  src={profile.headshotUrl}
                  alt={profile.name}
                  onError={() => setImgFailed(true)}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-headline-sm text-muted">
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

        <div className="flex flex-col gap-6 text-body-lg leading-relaxed text-muted lg:col-span-7">
          {profile.aboutParagraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}

          <div className="grid grid-cols-2 gap-6 border-t border-line pt-6">
            <div>
              <span className="mb-1 block text-label uppercase text-muted">Education</span>
              <p className="text-body-md font-medium text-ink">{profile.education.degree}</p>
              <p className="text-body-sm text-muted">{profile.education.institution}</p>
            </div>
            <div>
              <span className="mb-1 block text-label uppercase text-muted">Location & Status</span>
              <p className="text-body-md font-medium text-ink">{profile.locationStatus.value}</p>
              <p className="text-body-sm text-accent">{profile.locationStatus.note}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
