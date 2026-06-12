"use client";

import { usePathname } from "next/navigation";
import { AppHeader } from "./app-header";

type AppShellProps = {
  children: React.ReactNode;
};

const headerlessPaths = new Set(["/", "/login", "/oauth/callback"]);

export function AppShell({ children }: AppShellProps) {
  const pathname = usePathname();
  const hideHeader = headerlessPaths.has(pathname);

  return (
    <>
      {hideHeader ? null : <AppHeader />}
      {children}
    </>
  );
}
