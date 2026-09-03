import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { projects } from "../data";
import Lightbox from "./Lightbox";

const linkable = projects.filter((p) => !p.comingSoon);

export default function CaseStudy() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const [lightbox, setLightbox] = useState(null);

  if (!project || !project.caseStudy) return <Navigate to="/" replace />;

  const cs = project.caseStudy;
  const index = linkable.findIndex((p) => p.slug === slug);
  const prev = linkable[(index - 1 + linkable.length) % linkable.length];
  const next = linkable[(index + 1) % linkable.length];

  return (
    <main className="mx-auto flex max-w-editorial flex-col gap-16 px-6 pb-24 pt-24 md:px-12 md:pt-32">
      {/* Breadcrumb */}
      <nav className="flex flex-col gap-4 sm:flex-row sm:items-baseline sm:justify-between">
        <Link
          to="/#work"
          className="group inline-flex items-center gap-2 text-body-sm text-accent transition-colors hover:text-accent-deep"
        >
          <span>←</span>
          <span className="underline decoration-line underline-offset-4 group-hover:decoration-accent">
            Back to all projects
          </span>
        </Link>
        <div className="flex items-center gap-3">
          <span className="h-1.5 w-1.5 bg-accent" />
          <span className="text-label uppercase tracking-wider text-subtle">
            {project.classification}
          </span>
        </div>
      </nav>

      {/* Title block */}
      <header className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <span className="text-label uppercase tracking-widest text-muted">{project.sysTag}</span>
          <h1 className="max-w-4xl text-headline-lg-mobile tracking-tight text-ink md:text-headline-lg">
            {project.title}
          </h1>
        </div>
        <p className="max-w-4xl text-body-lg leading-relaxed text-muted">{project.abstract}</p>
      </header>

      {/* Hero image */}
      <section className="flex flex-col gap-4">
        <div className="w-full border border-line bg-card p-2 md:p-4">
          <img
            src={cs.heroImage}
            alt={cs.heroCaption}
            onClick={() => setLightbox({ src: cs.heroImage, alt: cs.heroCaption })}
            className="block h-auto w-full cursor-zoom-in object-cover transition-opacity hover:opacity-90"
          />
        </div>
        <p className="px-1 text-label uppercase tracking-wider text-subtle">{cs.heroCaption}</p>
      </section>

      {/* Metadata spec bar */}
      <section className="grid grid-cols-1 gap-4 bg-surface p-6 md:grid-cols-4 md:p-8">
        {cs.specBar.map((item) => (
          <div key={item.label} className="flex flex-col gap-1">
            <span className="text-label uppercase tracking-wider text-subtle">{item.label}</span>
            <p className="text-body-md font-medium text-ink">{item.value}</p>
            <span className="text-label text-muted">{item.sub}</span>
          </div>
        ))}
      </section>

      {/* Alternating narrative sections */}
      <article className="flex flex-col gap-16 md:gap-24">
        {cs.sections.map((s) => (
          <div key={s.heading} className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
            <div className="flex flex-col gap-2 lg:sticky lg:top-24 lg:col-span-4">
              <span className="text-label uppercase tracking-widest text-accent">{s.index}</span>
              <h2 className="text-headline-md tracking-tight text-ink">{s.heading}</h2>
            </div>
            <div className="flex flex-col gap-6 lg:col-span-8">
              <p className="leading-relaxed text-body-md text-muted">{s.body}</p>

              {s.callouts && (
                <div className="my-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {s.callouts.map((c) => (
                    <div key={c.label} className="flex flex-col gap-2 bg-surface p-6">
                      <span className="text-label uppercase tracking-wider text-subtle">
                        {c.label}
                      </span>
                      <span className="text-headline-lg-mobile tracking-tight text-accent">
                        {c.value}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {s.image && (
                <figure className="border border-line bg-card p-2">
                  <img
                    src={s.image}
                    alt={s.imageCaption}
                    onClick={() => setLightbox({ src: s.image, alt: s.imageCaption })}
                    className="w-full cursor-zoom-in object-contain transition-opacity hover:opacity-90"
                  />
                  {s.imageCaption && (
                    <figcaption className="mt-2 px-1 pb-1 text-label uppercase tracking-wider text-subtle">
                      {s.imageCaption}
                    </figcaption>
                  )}
                </figure>
              )}
            </div>
          </div>
        ))}
      </article>

      {/* Results */}
      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-2 bg-ink p-8 text-paper md:p-12">
          <span className="text-label uppercase tracking-widest text-paper/60">
            {cs.results.statLabel}
          </span>
          <span className="text-display-mobile leading-none tracking-tight md:text-display">
            {cs.results.stat}
          </span>
          <p className="max-w-xl pt-2 text-body-md text-paper/80">{cs.results.statDescription}</p>
        </div>
        <p className="max-w-4xl text-body-md leading-relaxed text-ink">{cs.results.insight}</p>
      </section>

      {/* Dashboard gallery */}
      {cs.dashboardImages && (
        <section className="flex flex-col gap-8">
          <h2 className="text-headline-sm text-ink">Dashboard</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {cs.dashboardImages.map((img) => (
              <figure key={img.src} className="border border-line bg-card p-2">
                <img
                  src={img.src}
                  alt={img.caption}
                  onClick={() => setLightbox({ src: img.src, alt: img.caption })}
                  className="w-full cursor-zoom-in object-contain transition-opacity hover:opacity-90"
                />
                <figcaption className="mt-2 px-1 pb-1 text-label uppercase tracking-wider text-subtle">
                  {img.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      {/* Synthesis */}
      {cs.synthesis && (
        <section className="flex flex-col gap-8 bg-surface p-8 md:p-12">
          <div className="flex flex-col gap-2">
            <span className="text-label uppercase tracking-widest text-accent">
              Project Synthesis
            </span>
            <h3 className="text-headline-sm text-ink">Measurable Outcomes</h3>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {cs.synthesis.map((item) => (
              <div key={item.label} className="flex flex-col gap-2">
                <span className="text-label uppercase text-subtle">{item.label}</span>
                <p className="text-headline-sm text-ink">{item.value}</p>
                <p className="text-body-sm text-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Pagination */}
      {linkable.length === 2 && (
        <nav className="pt-8">
          <Link
            to={`/projects/${next.slug}`}
            className="group block bg-surface p-6 transition-colors hover:bg-surface-high"
          >
            <span className="mb-1 block text-label uppercase tracking-wider text-subtle">
              Other Case Study →
            </span>
            <span className="block text-body-md font-medium text-ink transition-colors group-hover:text-accent">
              {next.title}
            </span>
          </Link>
        </nav>
      )}
      {linkable.length > 2 && (
        <nav className="flex flex-col items-stretch justify-between gap-4 pt-8 sm:flex-row">
          <Link
            to={`/projects/${prev.slug}`}
            className="group flex-1 bg-surface p-6 transition-colors hover:bg-surface-high"
          >
            <span className="mb-1 block text-label uppercase tracking-wider text-subtle">
              ← Previous Study
            </span>
            <span className="block text-body-md font-medium text-ink transition-colors group-hover:text-accent">
              {prev.title}
            </span>
          </Link>
          <Link
            to={`/projects/${next.slug}`}
            className="group flex-1 bg-surface p-6 text-left transition-colors hover:bg-surface-high sm:text-right"
          >
            <span className="mb-1 block text-label uppercase tracking-wider text-subtle">
              Next Study →
            </span>
            <span className="block text-body-md font-medium text-ink transition-colors group-hover:text-accent">
              {next.title}
            </span>
          </Link>
        </nav>
      )}

      {(project.githubUrl || project.liveUrl) && (
        <section className="flex gap-4 border-t border-line pt-8">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="border border-ink px-8 py-3 text-label uppercase tracking-wider text-ink transition-colors hover:bg-ink hover:text-paper"
            >
              View Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="border border-ink px-8 py-3 text-label uppercase tracking-wider text-ink transition-colors hover:bg-ink hover:text-paper"
            >
              View Live
            </a>
          )}
        </section>
      )}

      {lightbox && (
        <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />
      )}
    </main>
  );
}
