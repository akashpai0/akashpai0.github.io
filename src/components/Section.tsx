interface SectionProps {
  id: string;
  label: string;
  children: React.ReactNode;
}

export function Section({ id, label, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-16">
      <h2 className="mb-4 text-xs font-medium uppercase tracking-widest text-neutral-500">
        {label}
      </h2>
      {children}
    </section>
  );
}
