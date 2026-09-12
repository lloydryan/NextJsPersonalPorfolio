import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import ClientShell from "./client-shell";

export const metadata: Metadata = {
  title: "Lloyd Ryan Largo | Portfolio",
  description:
    "College Instructor at the University of Mindanao, Full Stack Developer, and UI/UX Designer portfolio.",
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
