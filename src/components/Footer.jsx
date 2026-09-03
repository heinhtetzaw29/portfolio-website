import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="mt-24 w-full border-t border-line">
      <div className="mx-auto flex max-w-editorial flex-col items-start justify-between gap-6 px-6 py-12 md:flex-row md:items-center md:px-12">
        <div className="flex flex-col gap-1">
          <p className="text-body-sm text-ink">
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p className="text-label uppercase tracking-wider text-muted">Sydney, NSW (AEST)</p>
        </div>
        <div className="flex items-center gap-6 text-label uppercase tracking-wider">
          <a href={`mailto:${profile.email}`} className="text-muted transition-colors hover:text-accent">
            Email
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-muted transition-colors hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="text-muted transition-colors hover:text-accent"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
