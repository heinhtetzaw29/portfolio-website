import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="w-full border-t border-ink">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-6 text-label uppercase text-muted md:flex-row md:px-10">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <div className="flex gap-6">
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-ink">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-ink">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="hover:text-ink">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
