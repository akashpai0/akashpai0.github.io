import { profile } from "@/data/profile";

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-neutral-200 bg-white/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-prose flex-wrap items-center justify-between gap-x-4 gap-y-2 px-6 py-4">
        <a href="#" className="text-sm font-medium text-neutral-900 no-underline">
          {profile.name}
        </a>
        <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-neutral-600">
          {profile.nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="no-underline transition-colors hover:text-neutral-900"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
