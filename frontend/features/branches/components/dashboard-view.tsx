"use client";

import { useState } from "react";
import Link from "next/link";
import { AppFooter } from "@/components/layout/app-footer";
import type { BranchStatus } from "@/styles/tokens";
import { FilterPill } from "@/components/ui/filter-pill";
import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/utils";
import { branches } from "../data";
import { ActivitySidebar } from "./activity-sidebar";
import { BranchCard } from "./branch-card";
import { SummaryBar } from "./summary-bar";

type Filter = "all" | BranchStatus;

const filters: Array<{ label: string; value: Filter }> = [
  { label: "전체", value: "all" },
  { label: "Active", value: "active" },
  { label: "Conflict", value: "conflict" },
  { label: "Ready", value: "ready" },
  { label: "Stale", value: "stale" },
];

export function DashboardView() {
  const [filter, setFilter] = useState<Filter>("all");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const filteredBranches =
    filter === "all"
      ? branches
      : branches.filter((branch) => branch.cardStatus === filter);

  return (
    <div className="relative flex min-h-[calc(100vh-64px)] flex-col bg-white">
      <main className="relative flex min-h-0 flex-1 overflow-hidden bg-white">
        <div
          className={cn(
            "flex flex-1 flex-col overflow-y-auto px-8 py-10 transition-[padding] duration-300 lg:px-24",
            sidebarOpen && "lg:pr-[320px]",
          )}
        >
          <div className="mx-auto w-full max-w-6xl">
            <div className="mb-10 flex items-center gap-2">
              <Link
                className="mr-2 text-gray-400 transition-colors hover:text-gray-900"
                href="/repos"
              >
                <Icon className="h-5 w-5" name="arrow-left" />
              </Link>
              <h1 className="text-2xl font-bold tracking-tight text-gray-900">
                team-project/git-catch
              </h1>
            </div>

            <SummaryBar />

            <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <h2 className="text-lg font-bold">브랜치 현황</h2>
              <div className="scrollbar-hide flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
                {filters.map((item) => (
                  <FilterPill
                    active={filter === item.value}
                    key={item.value}
                    onClick={() => setFilter(item.value)}
                  >
                    {item.label}
                  </FilterPill>
                ))}
              </div>
            </div>

            <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-2">
              {filteredBranches.map((branch) => (
                <BranchCard branch={branch} key={branch.key} />
              ))}
            </div>
          </div>
        </div>

        <ActivitySidebar
          onToggle={() => setSidebarOpen((open) => !open)}
          open={sidebarOpen}
        />
      </main>
      <AppFooter />
    </div>
  );
}
