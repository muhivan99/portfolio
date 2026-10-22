import { site } from "@/content/site";
import { works } from "@/content/works";
import WorkGrid from "@/components/WorkGrid";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <div className="mx-auto max-w-[1600px] px-5 sm:px-10">
      {/* Hero: nama dan jabatan */}
      <section className="pb-20 pt-32 sm:pb-28 sm:pt-44">
        <p className="fade-up text-sm text-muted">Portfolio</p>
        <h1
          className="fade-up mt-4 text-5xl font-semibold leading-[0.95] tracking-tighter sm:text-7xl lg:text-8xl xl:text-9xl"
          style={{ animationDelay: "80ms" }}
        >
          {site.name}
        </h1>
        <p
          className="fade-up mt-5 text-xl tracking-tight sm:text-3xl"
          style={{ animationDelay: "160ms" }}
        >
          {site.role}
        </p>
        <p
          className="fade-up mt-8 max-w-xl text-base leading-relaxed text-muted"
          style={{ animationDelay: "240ms" }}
        >
          {site.intro}
        </p>
      </section>

      {/* Karya */}
      <section
        id="work"
        aria-label="Karya"
        className="scroll-mt-20 pb-24 sm:pb-32"
      >
        <WorkGrid works={works} />
      </section>

      {/* Skill dan pengalaman */}
      <section id="about" className="scroll-mt-20 pb-24 sm:pb-32">
        <Reveal>
          <h2 className="mb-12 text-3xl font-medium tracking-tight sm:text-5xl">
            Skills
          </h2>
        </Reveal>
        <Skills />

        <Reveal>
          <h2 className="mb-12 mt-24 text-3xl font-medium tracking-tight sm:mt-32 sm:text-5xl">
            Experience
          </h2>
        </Reveal>
        <Experience />
      </section>
    </div>
  );
}
