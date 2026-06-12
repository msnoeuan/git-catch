import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@/components/ui/icon";
import type { Branch } from "../data";
import { CommitHistory } from "./commit-history";
import { ConflictBox } from "./conflict-box";
import { FileList } from "./file-list";
import { ReadyBox } from "./ready-box";

type BranchDetailProps = {
  branch: Branch;
};

export function BranchDetail({ branch }: BranchDetailProps) {
  return (
    <main className="min-h-[calc(100vh-64px)] overflow-y-auto bg-white px-4 pt-8 pb-16">
      <div className="mx-auto w-full max-w-3xl">
        <Link
          className="mb-6 flex items-center gap-2 text-[13px] text-gray-400 transition-colors hover:text-gray-900"
          href="/dashboard"
        >
          <Icon className="h-4 w-4" name="arrow-left" />
          대시보드로 돌아가기
        </Link>

        <div className="mb-8 flex items-start justify-between gap-4">
          <div>
            <div className="mb-2 flex items-center gap-3">
              <Icon className="h-6 w-6 text-gray-400" name="git-branch" />
              <h1 className="text-[22px] font-bold text-gray-900">{branch.name}</h1>
            </div>
            <div className="flex items-center gap-4 text-[13px] text-gray-500">
              <div className="flex items-center gap-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt={`${branch.author} avatar`}
                  className="h-5 w-5 rounded-full"
                  src={branch.authorImg}
                />
                {branch.author}
              </div>
              <div className="flex items-center gap-1">
                <Icon className="h-3.5 w-3.5" name="clock" />
                {branch.lastActivity}
              </div>
            </div>
          </div>
          <Badge className="shrink-0" status={branch.detailStatus} />
        </div>

        <div className="mb-8 flex items-center gap-3">
          <span className="rounded-lg bg-gray-100 px-3 py-1.5 text-[13px] font-semibold text-gray-600">
            ↑ main보다 {branch.aheadMain}커밋 앞
          </span>
          <span className="rounded-lg bg-gray-50 px-3 py-1.5 text-[13px] font-semibold text-gray-400">
            ↓ main보다 {branch.behindMain}커밋 뒤
          </span>
        </div>

        {branch.conflict ? <ConflictBox conflict={branch.conflict} /> : null}
        {branch.ready ? <ReadyBox ready={branch.ready} /> : null}

        <CommitHistory commits={branch.commits} />
        <FileList files={branch.files} />
      </div>
    </main>
  );
}
