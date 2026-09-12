import type { Metadata } from "next";
import AchievementArchive from "../../components/AchievementArchive";

export const metadata: Metadata = {
  title: "Certifications | Lloyd Ryan Largo",
  description: "Information Technology Specialist certifications earned by Lloyd Ryan Largo.",
};

export default function AchievementsPage() {
  return <AchievementArchive />;
}
