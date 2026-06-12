import { Icon } from "@/components/ui/icon";
import type { Branch } from "../data";

type ConflictBoxProps = {
  conflict: NonNullable<Branch["conflict"]>;
};

export function ConflictBox({ conflict }: ConflictBoxProps) {
  return (
    <section className="mb-8">
      <h3 className="mb-3 flex items-center gap-2 text-[15px] font-bold text-[#A32D2D]">
        <Icon className="h-5 w-5" name="alert-circle" />
        충돌 상세
      </h3>
      <div className="rounded-lg border-l-4 border-[#F09595] bg-[#FEF0F0] p-5">
        <p className="mb-3 text-[14px] font-semibold text-[#A32D2D]">
          <span className="font-bold">{conflict.with}</span> 브랜치와 아래 파일이
          겹칩니다:
        </p>
        {conflict.files.map((file) => (
          <div className="py-1 font-mono text-[13px] text-[#A32D2D]" key={file}>
            {file}
          </div>
        ))}
        <p className="mt-3 border-t border-[#F09595] pt-3 text-[13px] text-gray-500">
          같은 파일을 수정 중입니다. 팀원과 확인이 필요합니다.
        </p>
      </div>
    </section>
  );
}
