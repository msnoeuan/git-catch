import Link from "next/link";
import { Icon } from "@/components/ui/icon";

export function ProfileSettings() {
  return (
    <section className="mb-10">
      <h2 className="mb-4 text-[15px] font-bold text-gray-700">프로필</h2>
      <div className="rounded-xl border border-gray-200 p-6">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div className="flex items-center gap-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="User"
              className="h-16 w-16 rounded-full"
              src="https://i.pravatar.cc/100?img=11"
            />
            <div>
              <div className="text-[17px] font-bold text-gray-900">developer</div>
              <Link
                className="mt-2 inline-flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-1.5 text-[13px] text-gray-500 transition-colors hover:bg-gray-50"
                href="/login"
              >
                <Icon className="h-3.5 w-3.5" name="log-out" />
                로그아웃
              </Link>
            </div>
          </div>
          <div className="text-left sm:text-right">
            <div className="text-[13px] text-gray-500">developer@example.com</div>
            <div className="mt-1 text-[12px] text-gray-400">GitHub으로 로그인됨</div>
          </div>
        </div>
      </div>
    </section>
  );
}
