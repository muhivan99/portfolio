import { site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-6 px-5 py-12 sm:flex-row sm:items-end sm:justify-between sm:px-10">
        <div>
          <p className="text-sm text-muted">Let’s work together</p>
          <a
            href={`mailto:${site.email}`}
            className="mt-1 inline-block text-2xl tracking-tight underline-offset-4 hover:underline sm:text-3xl"
          >
            {site.email}
          </a>
        </div>

        <ul className="flex gap-6 text-sm">
          {site.socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted transition-colors hover:text-fg"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className="mx-auto max-w-[1600px] px-5 pb-8 text-xs text-muted sm:px-10">
        © {new Date().getFullYear()} {site.name}
      </p>
    </footer>
  );
}
