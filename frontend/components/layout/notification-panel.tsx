"use client";

import { useState } from "react";
import Link from "next/link";
import { notifications as initialNotifications } from "@/features/notifications/data";
import { cn } from "@/lib/utils";

type NotificationPanelProps = {
  open: boolean;
  onClose: () => void;
};

export function NotificationPanel({ open, onClose }: NotificationPanelProps) {
  const [notifications, setNotifications] = useState(initialNotifications.slice(0, 3));

  if (!open) {
    return null;
  }

  const markAllRead = () => {
    setNotifications((items) => items.map((item) => ({ ...item, unread: false })));
  };

  return (
    <div className="absolute right-0 z-50 mt-2 w-80 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg">
      <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3">
        <span className="text-[14px] font-bold text-gray-900">알림</span>
        <button
          className="text-[12px] text-gray-400 transition-colors hover:text-gray-700"
          onClick={markAllRead}
          type="button"
        >
          모두 읽음
        </button>
      </div>

      <div className="max-h-80 overflow-y-auto">
        {notifications.map((notification) => (
          <button
            className={cn(
              "block w-full border-b border-gray-50 px-4 py-3 text-left transition-colors hover:bg-gray-50",
              notification.unread && "bg-neutral-50",
            )}
            key={`${notification.title}-${notification.createdAt}`}
            onClick={() =>
              setNotifications((items) =>
                items.map((item) =>
                  item === notification ? { ...item, unread: false } : item,
                ),
              )
            }
            type="button"
          >
            <div className="flex items-start gap-3">
              <div
                className={cn(
                  "mt-1.5 h-2 w-2 shrink-0 rounded-full",
                  notification.unread ? "bg-red-400" : "bg-transparent",
                )}
              />
              <div>
                <div
                  className={cn(
                    "text-[13px] font-medium",
                    notification.unread ? "text-gray-900" : "text-gray-500",
                  )}
                >
                  {notification.title}
                </div>
                <div
                  className={cn(
                    "mt-0.5 text-[12px]",
                    notification.unread ? "text-gray-500" : "text-gray-400",
                  )}
                >
                  {notification.description}
                </div>
                <div className="mt-1 text-[11px] text-gray-400">
                  {notification.createdAt}
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      <div className="border-t border-gray-100 px-4 py-2.5 text-center">
        <Link
          className="text-[12px] font-medium text-gray-500 transition-colors hover:text-gray-700"
          href="/notifications"
          onClick={onClose}
        >
          전체 보기
        </Link>
        <span className="mx-2 text-[12px] text-gray-300">·</span>
        <Link
          className="text-[12px] text-gray-400 transition-colors hover:text-gray-700"
          href="/settings"
          onClick={onClose}
        >
          알림 규칙 설정
        </Link>
      </div>
    </div>
  );
}
