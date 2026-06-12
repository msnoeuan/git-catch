import { StatCard } from "@/components/ui/stat-card";

const stats = [
  {
    label: "Active",
    value: 2,
    description: "7일 이내 커밋",
    color: "#378ADD",
  },
  {
    label: "Stale",
    value: 1,
    description: "7일 초과",
    color: "#9ca3af",
  },
  {
    label: "Conflict Risk",
    value: 1,
    description: "충돌 위험 감지",
    color: "#E24B4A",
  },
  {
    label: "Ready to Merge",
    value: 1,
    description: "머지 가능",
    color: "#1D9E75",
  },
];

export function SummaryBar() {
  return (
    <div className="mb-10 grid grid-cols-2 gap-5 md:grid-cols-4">
      {stats.map((stat) => (
        <StatCard {...stat} key={stat.label} />
      ))}
    </div>
  );
}
