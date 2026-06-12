"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/icon";
import { Toggle } from "@/components/ui/toggle";
import { cn } from "@/lib/utils";
import { alertRules, type AlertRule } from "../data";

export function AlertRuleList() {
  const [rules, setRules] = useState(alertRules);
  const [eventType, setEventType] = useState<AlertRule["eventType"]>("CONFLICT");
  const [branchPattern, setBranchPattern] = useState("");

  const addRule = () => {
    const pattern = branchPattern.trim() || "*";

    setRules((current) => [
      ...current,
      { eventType, branchPattern: pattern, enabled: true },
    ]);
    setBranchPattern("");
  };

  const removeRule = (index: number) => {
    setRules((current) => current.filter((_, ruleIndex) => ruleIndex !== index));
  };

  return (
    <section className="mb-10">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-[15px] font-bold text-gray-700">알림 규칙</h2>
        <span className="text-[12px] text-gray-400">서버가 5분마다 자동 체크</span>
      </div>

      <div className="mb-4 rounded-xl border border-dashed border-gray-300 bg-gray-50/50 p-5">
        <div className="flex flex-wrap items-end gap-3">
          <label className="flex min-w-[160px] flex-col gap-1.5">
            <span className="text-[12px] font-medium text-gray-500">이벤트 타입</span>
            <select
              className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-[13px] text-gray-700 outline-none focus:border-gray-400"
              onChange={(event) =>
                setEventType(event.target.value as AlertRule["eventType"])
              }
              value={eventType}
            >
              <option value="CONFLICT">Conflict Risk 감지</option>
              <option value="STALE">Stale 브랜치 감지</option>
              <option value="READY_TO_MERGE">Ready to Merge 감지</option>
            </select>
          </label>

          <label className="flex min-w-[160px] flex-1 flex-col gap-1.5">
            <span className="text-[12px] font-medium text-gray-500">
              브랜치 패턴 (비워두면 전체)
            </span>
            <input
              className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-[13px] text-gray-700 outline-none focus:border-gray-400"
              onChange={(event) => setBranchPattern(event.target.value)}
              placeholder="예: feat/* 또는 fix/api-*"
              type="text"
              value={branchPattern}
            />
          </label>

          <button
            className="whitespace-nowrap rounded-lg bg-gray-900 px-4 py-2 text-[13px] font-semibold text-white transition-colors hover:bg-gray-800"
            onClick={addRule}
            type="button"
          >
            규칙 추가
          </button>
        </div>
      </div>

      <div className="space-y-3">
        {rules.map((rule, index) => (
          <div
            className="flex items-center justify-between gap-4 rounded-xl border border-gray-200 p-4"
            key={`${rule.eventType}-${rule.branchPattern}-${index}`}
          >
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <RuleBadge eventType={rule.eventType} />
                <span className="text-[14px] font-semibold text-gray-900">
                  {rule.branchPattern}
                </span>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-3">
              <Toggle defaultChecked={rule.enabled} />
              <button
                className="text-[12px] text-gray-400 transition-colors hover:text-gray-700"
                onClick={() => removeRule(index)}
                type="button"
              >
                <Icon className="h-4 w-4" name="trash-2" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function RuleBadge({ eventType }: { eventType: AlertRule["eventType"] }) {
  return (
    <span
      className={cn(
        "rounded-full border px-2 py-0.5 text-[11px] font-semibold",
        eventType === "CONFLICT" &&
          "border-[#F09595] bg-[#FEF0F0] text-[#A32D2D]",
        eventType === "STALE" && "border-gray-200 bg-gray-100 text-gray-600",
        eventType === "READY_TO_MERGE" &&
          "border-[#5DCAA5] bg-[#E1F5EE] text-[#0F6E56]",
      )}
    >
      {eventType}
    </span>
  );
}
