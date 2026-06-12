import type { BranchStatus } from "@/styles/tokens";
import { cn } from "@/lib/utils";
import { statusLabels } from "@/styles/tokens";
import { Icon } from "./icon";

type BadgeProps = {
  status: BranchStatus;
  label?: string;
  className?: string;
};

const badgeStyles: Record<BranchStatus, string> = {
  active: "border-[#85B7EB] bg-[#E6F1FB] text-[#185FA5]",
  conflict: "border-[#F09595] bg-[#FEF0F0] text-[#A32D2D]",
  ready: "border-gray-300 bg-gray-100 text-gray-700",
  stale: "border-gray-300 bg-gray-100 text-gray-400",
};

const badgeIcons: Record<BranchStatus, React.ComponentProps<typeof Icon>["name"]> = {
  active: "check-circle-2",
  conflict: "alert-circle",
  ready: "git-merge",
  stale: "clock",
};

export function Badge({ status, label, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border px-3 py-1 text-[13px] font-semibold",
        badgeStyles[status],
        className,
      )}
    >
      <Icon name={badgeIcons[status]} className="h-4 w-4" />
      {label ?? statusLabels[status]}
    </span>
  );
}
