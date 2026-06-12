"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Icon } from "@/components/ui/icon";
import { repositories } from "../data";
import { SyncOverlay } from "./sync-overlay";

export function RepoList() {
  const router = useRouter();
  const [syncing, setSyncing] = useState(false);
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!syncing) {
      return;
    }

    const timers = [
      window.setTimeout(() => setStep(1), 1000),
      window.setTimeout(() => setStep(2), 2200),
      window.setTimeout(() => setStep(3), 3400),
      window.setTimeout(() => setDone(true), 4300),
      window.setTimeout(() => router.push("/dashboard"), 5600),
    ];

    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, [router, syncing]);

  const startLoading = () => {
    setStep(0);
    setDone(false);
    setSyncing(true);
  };

  return (
    <>
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        {repositories.map((repo) => (
          <button
            className="group flex w-full items-center justify-between border-b border-gray-100 p-5 text-left transition-colors last:border-b-0 hover:bg-gray-50"
            key={`${repo.owner}/${repo.name}`}
            onClick={startLoading}
            type="button"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-gray-100 text-gray-600 transition-colors group-hover:bg-white">
                <Icon className="h-5 w-5" name="folder-git-2" />
              </div>
              <div>
                <h3 className="mb-1 text-[15px] font-semibold text-gray-900 transition-colors group-hover:text-blue-600">
                  {repo.owner}/{repo.name}
                </h3>
                <p className="font-mono text-xs text-gray-500">{repo.updatedAt}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-500">
                <span className={`h-2.5 w-2.5 rounded-full ${repo.languageColor}`} />
                {repo.language}
              </div>
              <Icon
                className="h-5 w-5 text-gray-300 transition-colors group-hover:text-gray-600"
                name="chevron-right"
              />
            </div>
          </button>
        ))}
      </div>

      <SyncOverlay done={done} open={syncing} step={step} />
    </>
  );
}
