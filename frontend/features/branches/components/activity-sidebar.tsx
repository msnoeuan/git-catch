import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/utils";

type ActivitySidebarProps = {
  open: boolean;
  onToggle: () => void;
};

const activities = [
  {
    time: "1 hr ago",
    title: "feat/payment 푸시됨",
    description: "David Lee 님이 파일 1개 수정",
  },
  {
    time: "2 hrs ago",
    title: "충돌 위험 감지됨",
    conflict: true,
  },
  {
    time: "3 hrs ago",
    title: "feat/user-auth 푸시됨",
    description: "msnoeuan 님이 파일 4개 수정",
  },
  {
    time: "5 hrs ago",
    title: "fix/api-error 머지됨",
    description: "main 브랜치에 병합 완료",
  },
];

export function ActivitySidebar({ open, onToggle }: ActivitySidebarProps) {
  return (
    <>
      <button
        className={cn(
          "fixed top-[30%] right-0 z-40 flex h-16 w-8 -translate-y-1/2 items-center justify-center rounded-l-xl border border-r-0 border-gray-200 bg-white shadow-[-4px_0_12px_rgba(0,0,0,0.05)] transition-[right,background-color] duration-300 hover:bg-gray-50",
          open && "right-[320px]",
        )}
        onClick={onToggle}
        type="button"
      >
        <Icon
          className="h-5 w-5 text-gray-500"
          name={open ? "chevron-right" : "chevron-left"}
        />
      </button>

      <aside
        className={cn(
          "fixed top-16 right-0 z-30 flex h-[calc(100vh-64px)] w-[320px] flex-col border-l border-gray-200 bg-white shadow-2xl transition-transform duration-300 ease-in-out",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="border-b border-gray-200 bg-white p-6">
          <h3 className="text-[15px] font-bold text-gray-900">팀 활동 기록</h3>
          <p className="mt-1 text-xs text-gray-500">실시간 이벤트 타임라인</p>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          <div className="relative ml-2 space-y-7 border-l border-gray-200">
            {activities.map((activity) => (
              <div className="relative pl-5" key={`${activity.time}-${activity.title}`}>
                <div
                  className={cn(
                    "absolute top-1 -left-[5.5px] h-2.5 w-2.5 rounded-full ring-4 ring-white",
                    activity.conflict ? "bg-[#C4899A]" : "bg-gray-400",
                  )}
                />
                <div className="mb-1 font-mono text-[11px] text-gray-400">
                  {activity.time}
                </div>
                <div
                  className={cn(
                    "mb-1 text-[13px] font-bold",
                    activity.conflict ? "text-[#A32D2D]" : "text-gray-900",
                  )}
                >
                  {activity.title}
                </div>
                {activity.conflict ? (
                  <div className="space-y-1.5">
                    <div className="rounded border border-[#F09595] bg-[#FEF0F0] px-2.5 py-2 font-mono text-[11px] text-[#A32D2D]">
                      feat/dashboard-ui
                    </div>
                    <div className="rounded border border-gray-200 bg-gray-50 px-2.5 py-2 font-mono text-[11px] text-gray-600">
                      feat/user-auth
                    </div>
                  </div>
                ) : (
                  <p className="text-xs text-gray-500">{activity.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}
