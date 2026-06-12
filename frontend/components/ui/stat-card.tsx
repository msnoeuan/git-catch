import { Card } from "./card";

type StatCardProps = {
  label: string;
  value: number;
  description: string;
  color: string;
};

export function StatCard({ label, value, description, color }: StatCardProps) {
  return (
    <Card className="p-6">
      <div className="text-sm font-medium text-gray-500">{label}</div>
      <div className="mt-2 mb-1 text-[32px] font-bold leading-none" style={{ color }}>
        {value}
      </div>
      <div className="text-xs text-gray-400">{description}</div>
    </Card>
  );
}
