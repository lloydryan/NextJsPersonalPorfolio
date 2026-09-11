"use client";

import { useEffect } from "react";
import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";

export default function ClientShell({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [pathname]);

  return (
    <>
      <ScrollToTop />
      <Navbar key={pathname} />
      <main>{children}</main>
    </>
  );
}
