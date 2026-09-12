import type { ReactNode } from "react";
import Navbar from "../components/Navbar";
import PortfolioChatbot from "../components/PortfolioChatbot";
import ScrollToTop from "../components/ScrollToTop";

export default function ClientShell({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <ScrollToTop />
      <PortfolioChatbot />
    </>
  );
}
