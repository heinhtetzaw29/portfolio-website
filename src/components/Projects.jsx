import { Link } from "react-router-dom";
import { projects } from "../data";

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl px-5 pb-12 pt-4 md:px-10 md:pb-16 md:pt-8"
    >
      <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-x-16 md:gap-y-12">
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
                className="h-full w-full object-cover object-top transition-all duration-500 group-hover:grayscale group-hover:scale-[1.02]"
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
