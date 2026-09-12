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
    <header className="section-heading">
      <div className="section-title-block">
        <p className="section-kicker">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {description ? <p className="section-description">{description}</p> : null}
      {action ? <div className="section-action">{action}</div> : null}
    </header>
  );
}
