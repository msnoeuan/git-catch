import { AppFooter } from "@/components/layout/app-footer";
import { Icon } from "@/components/ui/icon";
import { RepoList } from "./repo-list";

export function ReposPageContent() {
  return (
    <div className="flex min-h-[calc(100vh-64px)] flex-col bg-white">
      <main className="flex-1 overflow-y-auto px-4 pt-16 pb-16">
        <div className="mx-auto w-full max-w-3xl">
          <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            저장소 선택
          </h1>

          <div className="relative mb-6 overflow-hidden rounded-lg border border-gray-200 shadow-sm">
            <Icon
              className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
              name="search"
            />
            <input
              className="w-full bg-white py-3.5 pr-4 pl-12 text-[15px] text-gray-900 outline-none transition-shadow placeholder:text-gray-400 focus:ring-2 focus:ring-gray-900"
              placeholder="저장소 검색"
              type="text"
            />
          </div>

          <RepoList />
        </div>
      </main>
      <AppFooter />
    </div>
  );
}
