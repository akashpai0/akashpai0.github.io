import { Header } from "@/components/Header";
import { Section } from "@/components/Section";
import { ExperienceItem } from "@/components/ExperienceItem";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-prose px-6 py-16">
        <header className="mb-20">
          <h1 className="mb-2 text-4xl font-medium tracking-tight text-neutral-900">
            {profile.name}
          </h1>
          <p className="mb-1 text-neutral-600">{profile.tagline}</p>
          <p className="mb-4 text-sm text-neutral-500">{profile.location}</p>
          <p className="text-neutral-700">{profile.oneLiner}</p>
        </header>

        <div className="space-y-16">
          <Section id="about" label="About">
            <div className="space-y-3 text-sm leading-relaxed text-neutral-700">
              {profile.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Section>

          <Section id="experience" label="Experience">
            {profile.experience.map((entry) => (
              <ExperienceItem key={entry.organization} entry={entry} />
            ))}
          </Section>

          <Section id="education" label="Education">
            <div className="text-sm leading-relaxed text-neutral-700">
              <p className="font-medium text-neutral-900">
                {profile.education.school}
              </p>
              <p className="text-neutral-600">
                {profile.education.program} · {profile.education.dates}
              </p>
              <ul className="mt-3 space-y-1">
                {profile.education.stats.map((stat) => (
                  <li key={stat}>{stat}</li>
                ))}
              </ul>
              <p className="mt-3 text-neutral-600">
                {profile.education.apScores}
              </p>
            </div>
          </Section>

          <Section id="skills" label="Skills">
            <p className="text-sm text-neutral-700">
              {profile.skills.join(" · ")}
            </p>
          </Section>

          <Section id="contact" label="Contact">
            <div className="flex flex-col gap-2">
              {profile.contact.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-neutral-700 underline decoration-neutral-300 underline-offset-4 transition-colors hover:text-neutral-900 hover:decoration-neutral-500"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </Section>
        </div>
      </main>
    </>
  );
}
