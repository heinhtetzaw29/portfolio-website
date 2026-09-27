import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-editorial border-b border-line px-6 py-16 md:px-12 md:py-24">
      <div className="mb-12">
        <h2 className="text-headline-md text-ink">02 / Technical Skills</h2>
      </div>

      <div className="grid grid-cols-1 border border-line bg-card md:grid-cols-3">
        {skills.map((group, i) => (
          <div
            key={group.category}
            className={`flex flex-col gap-6 p-8 ${
              i < skills.length - 1 ? "border-b border-line md:border-b-0 md:border-r" : ""
            }`}
          >
            <h3 className="text-headline-sm text-ink">{group.category}</h3>
            <ul className="flex flex-col divide-y divide-line">
              {group.items.map((item) => (
                <li key={item.name} className="py-3">
                  <span className="text-body-md text-ink">{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
