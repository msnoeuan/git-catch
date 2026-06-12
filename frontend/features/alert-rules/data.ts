export type AlertRule = {
  eventType: "CONFLICT" | "STALE" | "READY_TO_MERGE";
  branchPattern: string;
  enabled: boolean;
};

export const alertRules: AlertRule[] = [
  { eventType: "CONFLICT", branchPattern: "feat/*", enabled: true },
  { eventType: "STALE", branchPattern: "*", enabled: true },
  { eventType: "READY_TO_MERGE", branchPattern: "*", enabled: true },
];
