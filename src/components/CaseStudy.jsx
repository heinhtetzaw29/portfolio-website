import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { projects } from "../data";
import Lightbox from "./Lightbox";

export default function CaseStudy() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const [lightbox, setLightbox] = useState(null);

  if (!project) return <Navigate to="/" replace />;

  const cs = project.caseStudy;

  return (
    <main className="mx-auto max-w-6xl px-5 pb-16 pt-12 md:px-10">
      <Link to="/#projects" className="text-label uppercase text-muted hover:text-ink">
        ← All Projects
      </Link>

      {/* Header */}
      <section className="mt-8 grid grid-cols-1 gap-8 border-b border-ink pb-16 md:grid-cols-12">
        <div className="md:col-span-12">
          <p className="mb-4 text-label uppercase text-muted">
            Case Study // {project.caseStudyNumber}
          </p>
          <h1 className="max-w-4xl text-[32px] font-semibold leading-tight tracking-[-0.02em] text-ink md:text-h1">
            {project.title}
          </h1>
        </div>
        <div className="md:col-span-8">
          <p className="max-w-2xl text-body text-subtle">{project.description}</p>
        </div>
        <div className="flex flex-col gap-6 border-t border-ink pt-6 md:col-span-3 md:col-start-10 md:border-l md:border-t-0 md:pl-6 md:pt-0">
          <div>
            <h3 className="mb-1 text-label uppercase text-muted">Domain</h3>
            <p className="text-body text-ink">{cs.domain}</p>
          </div>
          <div>
            <h3 className="mb-1 text-label uppercase text-muted">Methods</h3>
            <p className="text-body text-ink">{cs.methods}</p>
          </div>
          <div>
            <h3 className="mb-1 text-label uppercase text-muted">Timeline</h3>
            <p className="text-body text-ink">{cs.timeline}</p>
          </div>
        </div>
      </section>

      {/* Hero image */}
      <section className="mt-12">
        <div className="relative w-full overflow-hidden border border-ink bg-white">
          <img
            src={cs.heroImage}
            alt={cs.heroCaption}
            onClick={() => setLightbox({ src: cs.heroImage, alt: cs.heroCaption })}
            className="w-full cursor-zoom-in object-contain transition-opacity hover:opacity-90"
          />
        </div>
        <p className="mt-3 text-label uppercase text-muted">{cs.heroCaption}</p>
      </section>

      {/* Methodology */}
      <section className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <h2 className="text-section uppercase text-ink md:sticky md:top-24">Methodology</h2>
        </div>
        <div className="flex flex-col gap-16 md:col-span-8">
          {cs.sections.map((s) => (
            <div key={s.heading}>
              <h3 className="mb-4 inline-block border-b border-ink pb-2 text-section text-ink">
                {s.heading}
              </h3>
              <p className="mb-6 text-body text-subtle">{s.body}</p>
              {s.image && (
                <figure className="border border-ink bg-white p-2">
                  <img
                    src={s.image}
                    alt={s.imageCaption}
                    onClick={() => setLightbox({ src: s.image, alt: s.imageCaption })}
                    className="w-full cursor-zoom-in object-contain transition-opacity hover:opacity-90"
                  />
                  {s.imageCaption && (
                    <figcaption className="mt-2 px-1 pb-1 text-label uppercase text-muted">
                      {s.imageCaption}
                    </figcaption>
                  )}
                </figure>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Results */}
      <section className="mt-14">
        <div className="mb-12 border-b border-ink pb-4">
          <h2 className="text-section uppercase text-ink">Results</h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
          <div className="flex flex-col justify-between bg-ink p-8 text-paper md:col-span-8">
            <span className="text-label uppercase text-paper/60">{cs.results.statLabel}</span>
            <div>
              <h3 className="mb-2 text-[44px] leading-none md:text-display">{cs.results.stat}</h3>
              <p className="max-w-md text-body text-paper/80">{cs.results.statDescription}</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 md:col-span-4">
            {cs.results.secondaryStats.map((stat) => (
              <div key={stat.label} className="flex flex-1 flex-col justify-between border border-ink p-6">
                <span className="text-label uppercase text-muted">{stat.label}</span>
                <h4 className="text-section text-ink">{stat.value}</h4>
              </div>
            ))}
          </div>

          <div className="flex items-center border-b border-t border-ink py-8 md:col-span-12">
            <p className="max-w-4xl text-body text-ink">{cs.results.insight}</p>
          </div>
        </div>
      </section>

      {/* Dashboard gallery */}
      {cs.dashboardImages && (
        <section className="mt-14">
          <h2 className="mb-8 text-section uppercase text-ink">Dashboard</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {cs.dashboardImages.map((img) => (
              <figure key={img.src} className="border border-ink bg-white p-2">
                <img
                  src={img.src}
                  alt={img.caption}
                  onClick={() => setLightbox({ src: img.src, alt: img.caption })}
                  className="w-full cursor-zoom-in object-contain transition-opacity hover:opacity-90"
                />
                <figcaption className="mt-2 px-1 pb-1 text-label uppercase text-muted">
                  {img.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      {/* Links */}
      {(project.githubUrl || project.liveUrl) && (
        <section className="mt-12 flex gap-4 border-t border-ink pt-8">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="border border-ink px-8 py-3 text-label uppercase text-ink transition-colors hover:bg-ink hover:text-paper"
            >
              View Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="border border-ink px-8 py-3 text-label uppercase text-ink transition-colors hover:bg-ink hover:text-paper"
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
