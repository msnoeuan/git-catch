import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import type { Branch } from "../data";

type BranchCardProps = {
  branch: Branch;
};

export function BranchCard({ branch }: BranchCardProps) {
  const branchHref = `/branches?name=${encodeURIComponent(branch.name)}`;

  return (
    <Link href={branchHref}>
      <Card className="flex h-full cursor-pointer flex-col justify-start p-6 hover:-translate-y-0.5 hover:shadow-lg">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div className="flex min-w-0 items-center gap-2 text-[18px] font-bold text-gray-900">
            <Icon className="h-5 w-5 shrink-0 text-gray-400" name="git-branch" />
            <span className="truncate">{branch.name}</span>
          </div>
          <Badge
            className="shrink-0"
            label={branch.cardStatus === "conflict" || branch.cardStatus === "ready" ? "Active" : undefined}
            status={branch.cardStatus === "conflict" || branch.cardStatus === "ready" ? "active" : branch.cardStatus}
          />
        </div>

        <div className="mb-6 flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt={`${branch.author} avatar`}
            className="h-9 w-9 rounded-full bg-gray-100 object-cover"
            src={branch.authorImg}
          />
          <div>
            <div className="text-[15px] font-bold text-gray-900">{branch.author}</div>
            <div className="mt-0.5 text-[13px] text-gray-500">{branch.lastActivity}</div>
          </div>
        </div>

        <p className="line-clamp-2 text-[15px] text-gray-600">{branch.message}</p>

        {branch.conflict ? (
          <div className="mt-4 flex items-center gap-2 rounded-lg border border-[#F09595] bg-[#FEF0F0] px-3 py-2.5 text-[13px] font-semibold text-[#A32D2D]">
            <Icon className="h-4 w-4 shrink-0" name="alert-circle" />
            {branch.conflict.files.length}개 파일에서 충돌 위험 — 팀원과 확인 필요
          </div>
        ) : null}

        {branch.ready ? (
          <div className="mt-4 flex items-center gap-2 rounded-lg border border-[#5DCAA5] bg-[#E1F5EE] px-3 py-2.5 text-[13px] font-semibold text-[#0F6E56]">
            <Icon className="h-4 w-4 shrink-0" name="git-merge" />
            충돌 없음 · 작업 안정화됨 — 머지를 검토해보세요
          </div>
        ) : null}
      </Card>
    </Link>
  );
}
