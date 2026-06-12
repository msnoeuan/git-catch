import Link from "next/link";
import { Icon } from "@/components/ui/icon";
import { ProfileSettings } from "@/features/auth/components/profile-settings";
import { AlertRuleList } from "./alert-rule-list";

export function SettingsPageContent() {
  return (
    <main className="min-h-[calc(100vh-64px)] overflow-y-auto bg-white px-4 pt-8 pb-16">
      <div className="mx-auto w-full max-w-2xl">
        <Link
          className="mb-6 flex items-center gap-2 text-[13px] text-gray-400 transition-colors hover:text-gray-900"
          href="/dashboard"
        >
          <Icon className="h-4 w-4" name="arrow-left" />
          대시보드로 돌아가기
        </Link>

        <h1 className="mb-8 text-2xl font-bold tracking-tight text-gray-900">설정</h1>

        <ProfileSettings />
        <AlertRuleList />
      </div>
    </main>
  );
}
