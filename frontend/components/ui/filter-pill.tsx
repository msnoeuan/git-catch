import { cn } from "@/lib/utils";

type FilterPillProps = {
  active?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
};

export function FilterPill({ active, children, onClick }: FilterPillProps) {
  return (
    <button
      className={cn(
        "rounded-full px-5 py-2 text-[14px] transition-colors",
        active
          ? "bg-gray-900 font-bold text-white hover:bg-gray-900"
          : "border border-gray-200 bg-white font-medium text-gray-600 hover:bg-gray-100",
      )}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}
