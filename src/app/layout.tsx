import type { Metadata } from "next";
import type { ReactNode } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import "../styles/index.css";
import "../styles/navbar.css";
import "../styles/Home.css";
import "../styles/About.css";
import "../styles/Work.css";
import "../styles/Achievements.css";
import "../styles/Connect.css";
import ClientShell from "./client-shell";

export const metadata: Metadata = {
  title: "Lloyd Ryan Largo | Portfolio",
  description: "Full Stack Developer and UI/UX Designer portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
