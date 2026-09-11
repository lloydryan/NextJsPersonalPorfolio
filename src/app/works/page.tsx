import type { Metadata } from "next";
import ProjectArchive from "../../components/portfolio/ProjectArchive";

export const metadata: Metadata = {
  title: "Projects | Lloyd Ryan Largo",
  description: "Projects by Lloyd Ryan Largo across web and mobile development.",
};

export default function WorksPage() {
  return <ProjectArchive />;
}
