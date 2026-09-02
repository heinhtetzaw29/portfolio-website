import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl border-t border-ink px-5 py-12 md:px-10 md:py-16">
      <h2 className="text-center text-section uppercase text-ink">Skills</h2>

      <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-3">
        {skills.map((group) => (
          <div key={group.category}>
            <h3 className="text-body font-semibold text-ink">{group.category}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item} className="border border-ink px-3 py-1 text-label uppercase text-ink">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
