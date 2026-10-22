import Link from "next/link";
import { site } from "@/content/site";

const nav = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: `mailto:${site.email}` },
];

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 mix-blend-difference text-white">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-5 sm:px-10">
        <Link
          href="/"
          className="text-sm font-medium tracking-tight transition-opacity hover:opacity-60"
        >
          {site.name}
        </Link>
        <nav aria-label="Utama">
          <ul className="flex gap-5 text-sm tracking-tight sm:gap-8">
            {nav.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="transition-opacity hover:opacity-60"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
