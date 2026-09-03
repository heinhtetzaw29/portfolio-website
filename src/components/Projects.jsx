import { Link } from "react-router-dom";
import { projects } from "../data";

function ProjectCard({ project }) {
  return (
    <article className="grid grid-cols-1 items-start gap-8 border border-line bg-card p-6 lg:grid-cols-12 md:p-8">
      <div className="flex h-full flex-col justify-between gap-8 lg:col-span-5">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between gap-2">
            <span className="text-label uppercase tracking-widest text-accent">{project.sysTag}</span>
            <span className="text-label uppercase text-muted">{project.contextTag}</span>
          </div>
          <h3 className="text-headline-sm font-semibold tracking-tight text-ink">{project.title}</h3>
          <p className="leading-relaxed text-body-md text-muted">{project.summary}</p>
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="border border-line bg-surface px-2 py-1 text-label uppercase text-ink"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="border-t border-line pt-4">
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 text-label font-semibold uppercase tracking-wider text-accent transition-colors hover:text-accent-deep"
          >
            View Case Study →
          </Link>
        </div>
      </div>
      <div className="overflow-hidden border border-line bg-surface lg:col-span-7">
        <img
          src={project.coverImage}
          alt={project.title}
          className="h-full w-full object-cover object-top"
        />
      </div>
    </article>
  );
}

function ComingSoonCard({ project }) {
  return (
    <article className="grid grid-cols-1 items-start gap-8 border border-dashed border-line bg-card p-6 lg:grid-cols-12 md:p-8">
      <div className="flex h-full flex-col justify-between gap-8 lg:col-span-5">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between gap-2">
            <span className="text-label uppercase tracking-widest text-accent">{project.sysTag}</span>
            <span className="text-label uppercase text-muted">{project.contextTag}</span>
          </div>
          <h3 className="text-headline-sm font-semibold tracking-tight text-muted">{project.title}</h3>
          <p className="leading-relaxed text-body-md text-muted">{project.summary}</p>
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="border border-line bg-surface px-2 py-1 text-label uppercase text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center border border-dashed border-line bg-surface lg:col-span-7 lg:min-h-[220px]">
        <span className="text-label uppercase tracking-widest text-muted">Coming Soon</span>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="work" className="mx-auto max-w-editorial border-b border-line px-6 py-16 md:px-12 md:py-24">
      <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-12">
        <div className="md:col-span-4">
          <span className="mb-1 block text-label uppercase tracking-widest text-muted">
            Portfolio Matrix
          </span>
          <h2 className="text-headline-md text-ink">01 / Selected Work</h2>
        </div>
        <div className="flex items-end md:col-span-8">
          <p className="max-w-xl text-body-md text-muted">
            Case studies in biomedical modelling, spatial analytics, and applied machine learning.
            Each project reflects reproducible pipeline design and real-world evaluation.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-16 md:gap-24">
        {projects.map((project) =>
          project.comingSoon ? (
            <ComingSoonCard key={project.slug} project={project} />
          ) : (
            <ProjectCard key={project.slug} project={project} />
          )
        )}
      </div>
    </section>
  );
}
