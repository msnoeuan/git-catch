import type { BranchStatus } from "@/styles/tokens";

export type Commit = {
  msg: string;
  hash: string;
  when: string;
};

export type ChangedFile = {
  name: string;
  badge: "A" | "M";
  plus: number;
  minus: number;
};

export type Branch = {
  key: string;
  name: string;
  cardStatus: BranchStatus;
  detailStatus: BranchStatus;
  author: string;
  authorImg: string;
  lastActivity: string;
  message: string;
  aheadMain: number;
  behindMain: number;
  commits: Commit[];
  files: ChangedFile[];
  conflict?: {
    files: string[];
    with: string;
  };
  ready?: {
    checks: string[];
  };
};

export const branches: Branch[] = [
  {
    key: "dashboard-ui-active",
    name: "feat/dashboard-ui",
    cardStatus: "active",
    detailStatus: "active",
    author: "김개발",
    authorImg: "https://i.pravatar.cc/100?img=5",
    lastActivity: "3시간 전",
    message: "Add branch status cards and filtering",
    aheadMain: 4,
    behindMain: 0,
    commits: [
      { msg: "Add branch status cards and filtering", hash: "a3f2c1d", when: "3시간 전" },
      { msg: "feat: 대시보드 레이아웃 구현", hash: "b7e4a09", when: "5시간 전" },
      { msg: "feat: 필터 컴포넌트 추가", hash: "c1d8f3e", when: "어제" },
      { msg: "chore: shadcn/ui 설치", hash: "d9a0b2c", when: "어제" },
    ],
    files: [
      { name: "src/components/BranchCard.tsx", badge: "M", plus: 34, minus: 8 },
      { name: "src/pages/Dashboard.tsx", badge: "A", plus: 95, minus: 0 },
      { name: "src/components/FilterBar.tsx", badge: "A", plus: 28, minus: 0 },
    ],
  },
  {
    key: "conflict-detection",
    name: "feat/conflict-detection",
    cardStatus: "conflict",
    detailStatus: "conflict",
    author: "이코더",
    authorImg: "https://i.pravatar.cc/100?img=12",
    lastActivity: "5시간 전",
    message: "Implement file overlap detection logic",
    aheadMain: 5,
    behindMain: 2,
    commits: [
      { msg: "Implement file overlap detection logic", hash: "e5f1a2b", when: "5시간 전" },
      { msg: "feat: GitHub Compare API 연동", hash: "f8c3d4e", when: "7시간 전" },
      { msg: "feat: 브랜치 비교 서비스 구현", hash: "g2a5b7c", when: "어제" },
      { msg: "chore: RestTemplate 설정 추가", hash: "h4d6e8f", when: "어제" },
      { msg: "feat: ConflictService 기본 구조", hash: "i1b3c5d", when: "2일 전" },
    ],
    files: [
      { name: "src/services/github.ts", badge: "M", plus: 48, minus: 12 },
      { name: "src/utils/branch.ts", badge: "M", plus: 22, minus: 6 },
      { name: "src/services/ConflictService.java", badge: "A", plus: 65, minus: 0 },
      { name: "src/controller/ConflictController.java", badge: "A", plus: 34, minus: 0 },
    ],
    conflict: {
      files: ["src/services/github.ts", "src/utils/branch.ts"],
      with: "feat/dashboard-ui",
    },
  },
  {
    key: "api-error",
    name: "fix/api-error-handling",
    cardStatus: "ready",
    detailStatus: "ready",
    author: "박프론트",
    authorImg: "https://i.pravatar.cc/100?img=33",
    lastActivity: "2일 전",
    message: "Add error boundary for API failures",
    aheadMain: 3,
    behindMain: 0,
    commits: [
      { msg: "Add error boundary for API failures", hash: "j7e9f1a", when: "2일 전" },
      { msg: "fix: Rate Limit 초과 시 재시도 로직", hash: "k3b5d7e", when: "2일 전" },
      { msg: "test: API 에러 핸들링 테스트 추가", hash: "l9c1a3b", when: "3일 전" },
    ],
    files: [
      { name: "src/services/GitHubApiService.java", badge: "M", plus: 38, minus: 12 },
      { name: "src/exception/ApiExceptionHandler.java", badge: "A", plus: 45, minus: 0 },
      { name: "src/test/GitHubApiServiceTest.java", badge: "A", plus: 67, minus: 0 },
    ],
    ready: {
      checks: ["충돌 위험 없음", "마지막 커밋 후 24시간 이상 경과", "main 대비 변경 커밋 3개"],
    },
  },
  {
    key: "db-schema",
    name: "refactor/db-schema",
    cardStatus: "stale",
    detailStatus: "stale",
    author: "최백엔드",
    authorImg: "https://i.pravatar.cc/100?img=60",
    lastActivity: "9일 전",
    message: "Update user_repos table structure",
    aheadMain: 1,
    behindMain: 5,
    commits: [{ msg: "Update user_repos table structure", hash: "p6c8e0a", when: "9일 전" }],
    files: [
      { name: "src/resources/db/migration/V3__alter_user_repos.sql", badge: "A", plus: 15, minus: 0 },
      { name: "src/entity/UserRepo.java", badge: "M", plus: 8, minus: 12 },
    ],
  },
];

export function getBranchByName(name?: string) {
  if (!name) {
    return branches[0];
  }

  return branches.find((branch) => branch.name === name) ?? branches[0];
}
