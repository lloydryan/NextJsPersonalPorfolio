import type { ReactNode } from "react";
import Navbar from "../components/Navbar";

export default function ClientShell({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
