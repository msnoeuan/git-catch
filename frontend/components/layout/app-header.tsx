"use client";

import { useState } from "react";
import Link from "next/link";
import { GithubLogo } from "@/components/ui/github-logo";
import { Icon } from "@/components/ui/icon";
import { NotificationPanel } from "./notification-panel";
import { UserDropdown } from "./user-dropdown";

export function AppHeader() {
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);

  const unread = true;

  return (
    <header className="sticky top-0 z-50 flex h-16 shrink-0 items-center justify-between border-b border-gray-200 bg-white px-6">
      <Link
        className="flex items-center gap-3 text-gray-900"
        href="/repos"
        onClick={() => {
          setNotificationsOpen(false);
          setUserOpen(false);
        }}
      >
        <GithubLogo className="h-6 w-6" />
        <span className="text-lg font-bold tracking-tight">Git-Catch</span>
      </Link>

      <div className="flex items-center gap-5">
        <div className="relative">
          <button
            className="relative text-gray-500 transition-colors hover:text-gray-900"
            onClick={() => {
              setNotificationsOpen((open) => !open);
              setUserOpen(false);
            }}
            type="button"
          >
            <Icon className="h-5 w-5" name="bell" />
            {unread ? (
              <span className="absolute right-0 top-0 h-2 w-2 rounded-full border border-white bg-red-500" />
            ) : null}
          </button>
          <NotificationPanel
            onClose={() => setNotificationsOpen(false)}
            open={notificationsOpen}
          />
        </div>

        <div className="relative">
          <button
            className="flex items-center gap-2 focus:outline-none"
            onClick={() => {
              setUserOpen((open) => !open);
              setNotificationsOpen(false);
            }}
            type="button"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="User"
              className="h-9 w-9 rounded-full bg-gray-100 object-cover transition-all hover:ring-2 hover:ring-gray-200"
              src="https://i.pravatar.cc/100?img=11"
            />
            <Icon className="hidden h-4 w-4 text-gray-500 sm:block" name="chevron-down" />
          </button>
          <UserDropdown open={userOpen} />
        </div>
      </div>
    </header>
  );
}
