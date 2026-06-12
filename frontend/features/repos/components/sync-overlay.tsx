"use client";

import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/utils";

type SyncOverlayProps = {
  open: boolean;
  step: number;
  done: boolean;
};

const steps = ["GitHub 연결 중...", "브랜치 데이터 수집 중...", "충돌 위험 분석 중..."];

export function SyncOverlay({ open, step, done }: SyncOverlayProps) {
  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-900/20 backdrop-blur-sm">
      <div
        className={cn(
          "w-full rounded-xl border border-gray-200 bg-white shadow-lg transition-all duration-500",
          done ? "max-w-[260px] px-8 py-6" : "max-w-[360px] p-8",
        )}
      >
        <div
          className={cn(
            "flex items-center justify-center gap-3 transition-all duration-300",
            done ? "mb-0" : "mb-8",
          )}
        >
          <div className="relative h-6 w-6 shrink-0">
            {done ? (
              <Icon className="h-6 w-6 text-green-500" name="check-circle-2" />
            ) : (
              <svg
                aria-hidden="true"
                className="h-6 w-6 animate-spin text-gray-900"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M21 12a9 9 0 1 1-6.219-8.56" />
              </svg>
            )}
          </div>
          <span className="text-lg font-bold text-gray-900">
            {done ? "동기화 완료!" : "저장소 동기화 중"}
          </span>
        </div>

        {!done ? (
          <>
            <div className="mb-8 space-y-5">
              {steps.map((label, index) => {
                const active = step === index;
                const completed = step > index;

                return (
                  <div
                    className={cn(
                      "flex items-center gap-3 text-[13px] transition-colors",
                      active ? "text-gray-900" : "text-gray-400",
                    )}
                    key={label}
                  >
                    <div className="h-4 w-4 shrink-0">
                      {completed ? (
                        <Icon className="h-4 w-4 text-green-500" name="check-circle-2" />
                      ) : active ? (
                        <svg
                          aria-hidden="true"
                          className="h-4 w-4 animate-spin text-gray-900"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                        </svg>
                      ) : (
                        <span className="block h-4 w-4 rounded-full border-2 border-gray-300" />
                      )}
                    </div>
                    <span className="font-medium">{label}</span>
                  </div>
                );
              })}
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
              <div
                className="h-full bg-black transition-all duration-500 ease-out"
                style={{ width: `${step >= 3 ? 100 : step * 33}%` }}
              />
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}
