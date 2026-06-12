import { Icon } from "@/components/ui/icon";
import type { Commit } from "../data";

type CommitHistoryProps = {
  commits: Commit[];
};

export function CommitHistory({ commits }: CommitHistoryProps) {
  return (
    <section className="mb-8">
      <h3 className="mb-3 flex items-center gap-2 text-[15px] font-bold text-gray-700">
        <Icon className="h-5 w-5 text-gray-400" name="git-commit-horizontal" />
        커밋 이력 ({commits.length})
      </h3>
      <div className="overflow-hidden rounded-xl border border-gray-200">
        {commits.map((commit) => (
          <div
            className="flex items-start gap-3 border-b border-gray-100 px-5 py-3.5 last:border-b-0"
            key={commit.hash}
          >
            <div className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-gray-300" />
            <div className="min-w-0 flex-1">
              <div className="text-[14px] font-medium text-gray-900">{commit.msg}</div>
              <div className="font-mono text-[12px] text-gray-400">{commit.hash}</div>
            </div>
            <div className="shrink-0 text-[12px] text-gray-400">{commit.when}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
