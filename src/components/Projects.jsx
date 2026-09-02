import { Link } from "react-router-dom";
import { projects } from "../data";

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl border-t border-ink px-5 py-12 md:px-10 md:py-16"
    >
      <h2 className="text-center text-section uppercase text-ink">Projects</h2>

      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
        {projects.map((project) => (
          <Link
            key={project.slug}
            to={`/projects/${project.slug}`}
            className="group flex flex-col"
          >
            <div className="mb-4 aspect-[4/3] overflow-hidden border border-ink bg-white">
              <img
                src={project.coverImage}
                alt={project.title}
                className="h-full w-full object-cover object-top grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-[1.02]"
              />
            </div>
            <h3 className="text-section text-ink group-hover:underline decoration-1 underline-offset-4">
              {project.title}
            </h3>
            <p className="mt-2 text-body text-subtle">{project.summary}</p>
            <p className="mt-4 text-label uppercase text-muted">{project.tags.join(" • ")}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
