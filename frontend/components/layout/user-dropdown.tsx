"use client";

import Link from "next/link";
import { Icon } from "@/components/ui/icon";

type UserDropdownProps = {
  open: boolean;
};

export function UserDropdown({ open }: UserDropdownProps) {
  if (!open) {
    return null;
  }

  return (
    <div className="absolute right-0 z-50 mt-2 flex w-48 flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg">
      <div className="border-b border-gray-100 bg-gray-50 px-4 py-3">
        <p className="text-sm font-semibold text-gray-900">developer</p>
      </div>
      <div className="py-1">
        <Link
          className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-gray-100"
          href="/notifications"
        >
          <Icon className="h-4 w-4 text-gray-500" name="bell" />
          알림
        </Link>
        <Link
          className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-gray-100"
          href="/settings"
        >
          <Icon className="h-4 w-4 text-gray-500" name="settings" />
          설정
        </Link>
        <Link
          className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm font-medium text-red-600 hover:bg-red-50"
          href="/login"
        >
          <Icon className="h-4 w-4" name="log-out" />
          로그아웃
        </Link>
      </div>
    </div>
  );
}
