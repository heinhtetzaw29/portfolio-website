import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-editorial border-b border-line px-6 py-16 md:px-12 md:py-24">
      <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-12">
        <div className="md:col-span-4">
          <span className="mb-1 block text-label uppercase tracking-widest text-muted">
            Capability Matrix
          </span>
          <h2 className="text-headline-md text-ink">02 / Technical Skills</h2>
        </div>
        <div className="flex items-end md:col-span-8">
          <p className="max-w-xl text-body-md text-muted">
            Disciplined focus on production data tooling, statistical validation, and reproducible
            pipelines. Free of vanity metrics and percentage scales.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 border border-line bg-card md:grid-cols-3">
        {skills.map((group, i) => (
          <div
            key={group.category}
            className={`flex flex-col gap-6 p-8 ${
              i < skills.length - 1 ? "border-b border-line md:border-b-0 md:border-r" : ""
            }`}
          >
            <div className="flex items-center gap-2">
              <span className="text-label font-bold uppercase tracking-widest text-accent">
                {group.tag}
              </span>
              <h3 className="text-headline-sm text-ink">{group.category}</h3>
            </div>
            <ul className="flex flex-col divide-y divide-line">
              {group.items.map((item) => (
                <li key={item.name} className="flex items-center justify-between gap-4 py-3">
                  <span className="text-body-md text-ink">{item.name}</span>
                  <span className="whitespace-nowrap text-label uppercase text-muted">
                    {item.tag}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
