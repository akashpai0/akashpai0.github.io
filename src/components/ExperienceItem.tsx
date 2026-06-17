import type { ExperienceEntry } from "@/data/profile";

interface ExperienceItemProps {
  entry: ExperienceEntry;
}

export function ExperienceItem({ entry }: ExperienceItemProps) {
  return (
    <article className="mb-8 last:mb-0">
      <div className="mb-2">
        <h3 className="text-base font-medium text-neutral-900">
          {entry.title}
        </h3>
        <p className="text-sm text-neutral-600">
          {entry.organization} · {entry.dates}
        </p>
      </div>
      <ul className="list-inside list-disc space-y-1 text-sm leading-relaxed text-neutral-700">
        {entry.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
    </article>
  );
}
