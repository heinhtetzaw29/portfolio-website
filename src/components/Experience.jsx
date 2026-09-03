import { experience } from "../data";

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-editorial border-b border-line px-6 py-16 md:px-12 md:py-24"
    >
      <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-12">
        <div className="md:col-span-4">
          <span className="mb-1 block text-label uppercase tracking-widest text-muted">
            Career Timeline
          </span>
          <h2 className="text-headline-md text-ink">03 / Experience & Background</h2>
        </div>
        <div className="flex items-end md:col-span-8">
          <p className="max-w-xl text-body-md text-muted">
            A track record in community broadcast journalism, commercial operations analysis, and
            physical coaching.
          </p>
        </div>
      </div>

      <div className="ml-3 flex flex-col gap-12 border-l border-line pl-6 md:ml-4 md:pl-12">
        {experience.map((job) => (
          <div key={job.title} className="relative flex flex-col gap-2">
            <div className="absolute -left-[31px] top-1.5 h-3 w-3 border-2 border-ink bg-paper md:-left-[55px]" />
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-headline-sm font-semibold text-ink">{job.title}</h3>
              <span className="text-label uppercase tracking-wider text-muted">{job.period}</span>
            </div>
            <p className="text-body-sm font-medium text-accent">
              {job.org} · {job.location}
            </p>
            <ul className="mt-2 list-outside list-disc space-y-2 pl-4 text-body-md text-muted">
              {job.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
