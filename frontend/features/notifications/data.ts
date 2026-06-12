export type Notification = {
  title: string;
  description: string;
  createdAt: string;
  unread: boolean;
  repo: string;
  type: "conflict" | "ready" | "stale";
};

export const notifications: Notification[] = [
  {
    title: "Conflict Risk 감지",
    description: "feat/conflict-detection 브랜치에서 main과 3개 파일 충돌",
    createdAt: "2시간 전",
    unread: true,
    repo: "team-project/git-catch",
    type: "conflict",
  },
  {
    title: "Ready to Merge",
    description: "feat/db-schema 브랜치가 머지 가능 상태입니다",
    createdAt: "5시간 전",
    unread: true,
    repo: "team-project/git-catch",
    type: "ready",
  },
  {
    title: "Stale 브랜치 감지",
    description: "fix/api-error 브랜치 12일간 커밋 없음",
    createdAt: "1일 전",
    unread: false,
    repo: "team-project/git-catch",
    type: "stale",
  },
  {
    title: "Conflict Risk 해소",
    description: "feat/dashboard-ui 브랜치의 충돌이 해소되었습니다",
    createdAt: "3일 전",
    unread: false,
    repo: "team-project/git-catch",
    type: "conflict",
  },
  {
    title: "Ready to Merge",
    description: "fix/api-error-handling 브랜치가 머지 가능 상태입니다",
    createdAt: "5일 전",
    unread: false,
    repo: "team-project/git-catch",
    type: "ready",
  },
];
