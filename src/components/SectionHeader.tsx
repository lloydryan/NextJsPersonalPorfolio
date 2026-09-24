import type { ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  action?: ReactNode;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  action,
}: SectionHeaderProps) {
  return (
    <header className="section-heading !grid-cols-1 !gap-2 min-[901px]:!grid-cols-[minmax(230px,0.8fr)_minmax(240px,1fr)_auto] min-[1181px]:!grid-cols-[minmax(260px,0.9fr)_minmax(280px,1.1fr)_auto] min-[901px]:!gap-6 min-[1181px]:!gap-8">
      <div className="section-title-block">
        <p className="section-kicker">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {description ? <p className="section-description">{description}</p> : null}
      {action ? <div className="section-action">{action}</div> : null}
    </header>
  );
}
