"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/utils";
import { notifications as initialNotifications, type Notification } from "../data";

export function NotificationsPageContent() {
  const [notifications, setNotifications] = useState(initialNotifications);

  const markAllRead = () => {
    setNotifications((items) => items.map((item) => ({ ...item, unread: false })));
  };

  const markRead = (target: Notification) => {
    setNotifications((items) =>
      items.map((item) => (item === target ? { ...item, unread: false } : item)),
    );
  };

  return (
    <div className="flex min-h-[calc(100vh-64px)] flex-col bg-white">
      <main className="flex-1 overflow-y-auto px-4 pt-8 pb-16">
        <div className="mx-auto w-full max-w-2xl">
          <Link
            className="mb-6 flex items-center gap-2 text-[13px] text-gray-400 transition-colors hover:text-gray-900"
            href="/dashboard"
          >
            <Icon className="h-4 w-4" name="arrow-left" />
            대시보드로 돌아가기
          </Link>

          <div className="mb-8 flex items-center justify-between">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">알림</h1>
            <button
              className="text-[13px] text-gray-400 transition-colors hover:text-gray-700"
              onClick={markAllRead}
              type="button"
            >
              모두 읽음
            </button>
          </div>

          <div className="space-y-2">
            {notifications.map((notification) => (
              <NotificationRow
                key={`${notification.title}-${notification.createdAt}`}
                notification={notification}
                onClick={() => markRead(notification)}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

function NotificationRow({
  notification,
  onClick,
}: {
  notification: Notification;
  onClick: () => void;
}) {
  return (
    <button
      className="flex w-full items-start gap-4 rounded-xl p-4 text-left transition-colors hover:bg-gray-50"
      onClick={onClick}
      type="button"
    >
      <NotificationIcon type={notification.type} />
      <div className="min-w-0 flex-1">
        <div className="mb-1 flex items-center gap-2">
          <span
            className={cn(
              "text-[14px]",
              notification.unread
                ? "font-semibold text-gray-900"
                : "font-medium text-gray-500",
            )}
          >
            {notification.title}
          </span>
          {notification.unread ? (
            <span className="h-2 w-2 shrink-0 rounded-full bg-red-400" />
          ) : null}
        </div>
        <p
          className={cn(
            "text-[13px]",
            notification.unread ? "text-gray-500" : "text-gray-400",
          )}
        >
          {notification.description}
        </p>
        <p className="mt-1 text-[12px] text-gray-400">
          {notification.createdAt} · {notification.repo}
        </p>
      </div>
    </button>
  );
}

function NotificationIcon({ type }: { type: Notification["type"] }) {
  if (type === "conflict") {
    return (
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#FEF0F0]">
        <Icon className="h-4 w-4 text-[#E24B4A]" name="alert-circle" />
      </div>
    );
  }

  if (type === "ready") {
    return (
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#E1F5EE]">
        <Icon className="h-4 w-4 text-[#1D9E75]" name="git-merge" />
      </div>
    );
  }

  return (
    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-100">
      <Icon className="h-4 w-4 text-gray-400" name="clock" />
    </div>
  );
}
