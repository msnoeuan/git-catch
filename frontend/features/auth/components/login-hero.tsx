import Link from "next/link";
import { AppFooter } from "@/components/layout/app-footer";
import { GithubLogo } from "@/components/ui/github-logo";
import { Icon } from "@/components/ui/icon";

const features = [
  {
    icon: "git-branch" as const,
    title: "브랜치 현황",
    description: "활성 상태, 마지막 커밋, 작업자를 한눈에",
  },
  {
    icon: "shield-alert" as const,
    title: "충돌 사전 감지",
    description: "같은 파일 수정 중인 브랜치 자동 탐지",
  },
  {
    icon: "bell" as const,
    title: "맞춤 알림",
    description: "Stale, 충돌, 머지 가능 상태 규칙 알림",
  },
];

type LoginHeroProps = {
  showFooter?: boolean;
};

export function LoginHero({ showFooter = false }: LoginHeroProps) {
  return (
    <div className="flex min-h-screen w-full flex-col overflow-y-auto bg-white">
      <main className="flex flex-1 flex-col items-center justify-center px-4">
        <div className="mx-auto grid w-full max-w-5xl grid-cols-1 items-center gap-12 py-16 lg:min-h-[calc(100vh-120px)] lg:grid-cols-2 lg:py-0">
          <section>
          <div className="mb-8 flex items-center gap-3">
            <GithubLogo className="h-8 w-8 text-gray-900" />
            <span className="text-[22px] font-bold tracking-tight text-gray-900">
              Git-Catch
            </span>
          </div>

          <h1 className="mb-5 text-[38px] font-bold leading-tight tracking-tight text-gray-900">
            브랜치 충돌,
            <br />
            머지 전에 잡으세요
          </h1>
          <p className="mb-10 max-w-md text-[16px] leading-relaxed text-gray-500">
            GitHub 저장소의 브랜치 현황을 실시간으로 모니터링하고, 충돌
            위험을 사전에 감지하는 협업 대시보드
          </p>

          <div className="mb-10 space-y-4">
            {features.map((feature) => (
              <div className="flex items-center gap-3" key={feature.title}>
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-100">
                  <Icon className="h-4 w-4 text-gray-500" name={feature.icon} />
                </div>
                <div>
                  <span className="text-[14px] font-semibold text-gray-900">
                    {feature.title}
                  </span>
                  <span className="ml-2 text-[13px] text-gray-400">
                    {feature.description}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <Link
            className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#0a0a0a] px-8 py-4 text-[16px] font-semibold text-white transition-all hover:bg-gray-800"
            href="/oauth/callback"
          >
            <GithubLogo className="h-5 w-5 text-white" />
            GitHub로 시작하기
          </Link>
          <p className="mt-4 text-[12px] text-gray-400">
            GitHub 계정으로 로그인하면 저장소 접근 권한을 허용하게 됩니다.
          </p>
          </section>

          <DashboardPreview />
        </div>
      </main>
      {showFooter ? <AppFooter /> : null}
    </div>
  );
}

function DashboardPreview() {
  return (
    <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div className="flex items-center gap-2 border-b border-gray-100 bg-gray-50/80 px-4 py-3">
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-gray-300" />
          <div className="h-2.5 w-2.5 rounded-full bg-gray-300" />
          <div className="h-2.5 w-2.5 rounded-full bg-gray-300" />
        </div>
        <div className="mx-6 flex-1">
          <div className="rounded-md bg-gray-100 px-3 py-1 text-center text-[11px] text-gray-400">
            git-catch.app/dashboard
          </div>
        </div>
      </div>

      <div className="select-none p-5">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 rounded-full bg-gray-200" />
            <div className="h-3 w-20 rounded bg-gray-200" />
          </div>
          <div className="flex gap-2">
            <div className="h-5 w-12 rounded-full border border-gray-200 bg-gray-100" />
            <div className="h-5 w-12 rounded-full border border-gray-200 bg-gray-100" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <MiniBranchCard tone="conflict" titleWidth="w-24" />
          <MiniBranchCard tone="ready" titleWidth="w-20" />
          <MiniBranchCard titleWidth="w-28" />
          <MiniBranchCard muted titleWidth="w-16" />
        </div>
      </div>
    </section>
  );
}

function MiniBranchCard({
  muted,
  titleWidth,
  tone,
}: {
  muted?: boolean;
  titleWidth: string;
  tone?: "conflict" | "ready";
}) {
  return (
    <div className={`rounded-lg border border-gray-200 p-3 ${muted ? "opacity-60" : ""}`}>
      <div className="mb-3 flex items-center justify-between">
        <div className={`h-3 rounded ${muted ? "bg-gray-100" : "bg-gray-200"} ${titleWidth}`} />
        <div className="rounded-full border border-[#85B7EB] bg-[#E6F1FB] px-2 py-0.5">
          <div className="h-2 w-8 rounded bg-[#85B7EB]" />
        </div>
      </div>
      <div className="mb-2 flex items-center gap-2">
        <div className="h-4 w-4 rounded-full bg-gray-100" />
        <div className="h-2 w-16 rounded bg-gray-100" />
        <div className="h-2 w-10 rounded bg-gray-100" />
      </div>
      {tone === "conflict" ? (
        <div className="flex items-center gap-1.5 rounded-md border border-[#F09595] bg-[#FEF0F0] px-2 py-1.5">
          <div className="h-2 w-2 rounded-full bg-[#E24B4A]" />
          <div className="h-2 w-20 rounded bg-[#F09595]" />
        </div>
      ) : null}
      {tone === "ready" ? (
        <div className="flex items-center gap-1.5 rounded-md border border-[#5DCAA5] bg-[#E1F5EE] px-2 py-1.5">
          <div className="h-2 w-2 rounded-full bg-[#1D9E75]" />
          <div className="h-2 w-16 rounded bg-[#5DCAA5]" />
        </div>
      ) : null}
      {!tone ? <div className="h-4" /> : null}
    </div>
  );
}
