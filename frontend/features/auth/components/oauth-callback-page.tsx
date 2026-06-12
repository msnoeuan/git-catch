"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function OAuthCallbackPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = window.setTimeout(() => {
      router.push("/repos");
    }, 2000);

    return () => window.clearTimeout(timer);
  }, [router]);

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center overflow-y-auto bg-white px-4">
      <div className="flex flex-col items-center text-center">
        <svg
          aria-hidden="true"
          className="mb-6 h-10 w-10 animate-spin text-gray-900"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        </svg>
        <h2 className="mb-2 text-[18px] font-bold text-gray-900">
          GitHub 인증 처리 중
        </h2>
        <p className="text-[14px] text-gray-500">잠시만 기다려주세요...</p>
      </div>
    </main>
  );
}
