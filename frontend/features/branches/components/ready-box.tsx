import { Icon } from "@/components/ui/icon";
import type { Branch } from "../data";

type ReadyBoxProps = {
  ready: NonNullable<Branch["ready"]>;
};

export function ReadyBox({ ready }: ReadyBoxProps) {
  return (
    <section className="mb-8">
      <h3 className="mb-3 flex items-center gap-2 text-[15px] font-bold text-[#0F6E56]">
        <Icon className="h-5 w-5" name="check-circle-2" />
        머지 체크리스트
      </h3>
      <div className="rounded-lg border-l-4 border-[#5DCAA5] bg-[#E1F5EE] p-5">
        {ready.checks.map((check) => (
          <div className="flex items-center gap-2 py-1 text-[13px] text-[#0F6E56]" key={check}>
            <Icon className="h-4 w-4" name="check" />
            {check}
          </div>
        ))}
      </div>
    </section>
  );
}
