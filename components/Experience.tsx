import { experiences } from "@/content/profile";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <ul>
      {experiences.map((exp, i) => (
        <li key={`${exp.company}-${exp.period}`} className="border-t border-line">
          <Reveal delay={i * 80}>
            <div className="grid gap-2 py-7 sm:grid-cols-[220px_1fr] sm:gap-10">
              <p className="text-sm tabular-nums text-muted">{exp.period}</p>
              <div>
                <h3 className="text-lg font-medium tracking-tight sm:text-xl">
                  {exp.role}
                </h3>
                <p className="mt-0.5 text-sm text-muted">{exp.company}</p>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
                  {exp.description}
                </p>
              </div>
            </div>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
