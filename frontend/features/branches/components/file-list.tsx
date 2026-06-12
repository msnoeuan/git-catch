import { Icon } from "@/components/ui/icon";
import type { ChangedFile } from "../data";

type FileListProps = {
  files: ChangedFile[];
};

export function FileList({ files }: FileListProps) {
  return (
    <section className="mb-8">
      <h3 className="mb-3 flex items-center gap-2 text-[15px] font-bold text-gray-700">
        <Icon className="h-5 w-5 text-gray-400" name="file-text" />
        변경 파일 ({files.length})
      </h3>
      <div className="overflow-hidden rounded-xl border border-gray-200">
        {files.map((file) => (
          <div
            className="flex items-center gap-3 border-b border-gray-100 px-5 py-3 font-mono text-[13px] last:border-b-0"
            key={file.name}
          >
            <span className="rounded bg-gray-100 px-2 py-0.5 text-[11px] font-bold text-gray-600">
              {file.badge}
            </span>
            <span className="flex-1 truncate text-gray-700">{file.name}</span>
            <span className="shrink-0 text-gray-500">+{file.plus}</span>
            <span className="shrink-0 text-gray-400">-{file.minus}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
