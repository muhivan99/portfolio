"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import type { Work } from "@/content/works";
import Reveal from "./Reveal";

const isSvg = (src: string) => src.endsWith(".svg");

export default function WorkGrid({ works }: { works: Work[] }) {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(
    () => setActive((i) => (i === null ? i : (i - 1 + works.length) % works.length)),
    [works.length],
  );
  const next = useCallback(
    () => setActive((i) => (i === null ? i : (i + 1) % works.length)),
    [works.length],
  );

  // Keyboard + kunci scroll saat lightbox terbuka
  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [active, close, prev, next]);

  const current = active !== null ? works[active] : null;

  return (
    <>
      <ul className="columns-1 gap-x-6 sm:columns-2 lg:columns-3 xl:gap-x-8">
        {works.map((work, i) => (
          <li key={work.src} className="mb-10 break-inside-avoid sm:mb-14">
            <Reveal delay={(i % 3) * 80}>
              <button
                type="button"
                onClick={() => setActive(i)}
                className="group block w-full cursor-zoom-in text-left"
                aria-label={`Lihat ${work.title}`}
              >
                <div className="overflow-hidden bg-line">
                  <Image
                    src={work.src}
                    alt={`${work.title}${work.category ? ` — ${work.category}` : ""}`}
                    width={work.width}
                    height={work.height}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    priority={i < 3}
                    unoptimized={isSvg(work.src)}
                    className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <p className="mt-3 text-sm tracking-tight text-muted transition-colors duration-300 group-hover:text-fg">
                  {work.title}
                </p>
              </button>
            </Reveal>
          </li>
        ))}
      </ul>

      {current && (
        <div
          className="fade-in fixed inset-0 z-50 flex items-center justify-center bg-bg/95 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-5 top-5 text-sm transition-opacity hover:opacity-60 sm:right-10 sm:top-6"
          >
            Close
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-3 text-2xl transition-opacity hover:opacity-60 sm:left-8"
            aria-label="Sebelumnya"
          >
            ←
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-3 text-2xl transition-opacity hover:opacity-60 sm:right-8"
            aria-label="Berikutnya"
          >
            →
          </button>

          <figure
            className="flex max-h-[90vh] max-w-[90vw] flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              key={current.src}
              src={current.src}
              alt={current.title}
              width={current.width}
              height={current.height}
              sizes="90vw"
              unoptimized={isSvg(current.src)}
              className="fade-in max-h-[80vh] w-auto object-contain"
            />
            <figcaption className="mt-4 text-sm tracking-tight">
              {current.title}
              <span className="ml-3 text-muted">
                {(active ?? 0) + 1} / {works.length}
              </span>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
