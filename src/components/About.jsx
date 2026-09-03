import { profile } from "../data";

export default function About() {
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
        <div className="flex flex-col gap-6 text-body-lg leading-relaxed text-muted lg:col-span-8">
          {profile.aboutParagraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        <div className="flex flex-col gap-6 border-t border-line pt-6 lg:col-span-4 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
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
    </section>
  );
}
