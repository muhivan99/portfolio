import { skillGroups } from "@/content/profile";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <div className="grid gap-12 md:grid-cols-2 md:gap-16">
      {skillGroups.map((group, g) => (
        <Reveal key={group.title} delay={g * 100}>
          <h3 className="mb-6 text-sm text-muted">{group.title}</h3>
          <ul className="space-y-5">
            {group.items.map((skill, i) => (
              <li key={skill.name}>
                <div className="mb-2 flex items-baseline justify-between text-sm tracking-tight">
                  <span>{skill.name}</span>
                  <span className="tabular-nums text-muted">{skill.level}%</span>
                </div>
                <div
                  className="h-[3px] w-full bg-line"
                  role="img"
                  aria-label={`${skill.name}: ${skill.level} dari 100`}
                >
                  <div
                    className="bar-fill h-full bg-fg"
                    style={
                      {
                        "--level": skill.level / 100,
                        "--d": `${i * 90}ms`,
                      } as React.CSSProperties
                    }
                  />
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      ))}
    </div>
  );
}
