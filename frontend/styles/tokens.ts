export const colors = {
  background: "#ffffff",
  surface: "#f9fafb",
  border: "#e5e7eb",
  textMain: "#111827",
  textMuted: "#6b7280",
  active: {
    bg: "#E6F1FB",
    text: "#185FA5",
    border: "#85B7EB",
    accent: "#378ADD",
  },
  stale: {
    bg: "#f3f4f6",
    text: "#9ca3af",
    border: "#d1d5db",
    accent: "#9ca3af",
  },
  conflict: {
    bg: "#FEF0F0",
    text: "#A32D2D",
    border: "#F09595",
    accent: "#E24B4A",
  },
  ready: {
    bg: "#E1F5EE",
    text: "#0F6E56",
    border: "#5DCAA5",
    accent: "#1D9E75",
  },
} as const;

export type BranchStatus = "active" | "stale" | "conflict" | "ready";

export const statusLabels: Record<BranchStatus, string> = {
  active: "Active",
  stale: "Stale",
  conflict: "Conflict Risk",
  ready: "Ready to Merge",
};
