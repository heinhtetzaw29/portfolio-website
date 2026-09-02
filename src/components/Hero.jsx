import { profile } from "../data";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center px-5 pb-16 pt-24 text-center md:pb-20 md:pt-32">
      <h1 className="text-[44px] font-bold leading-none tracking-[-0.04em] text-ink md:text-display">
        {profile.name.toUpperCase()}
      </h1>
      <h2 className="mt-4 text-section text-muted">{profile.role}</h2>
    </section>
  );
}
