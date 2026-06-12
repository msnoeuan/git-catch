export function AppFooter() {
  return (
    <footer className="mt-auto border-t border-gray-100 px-6 py-6">
      <div className="mx-auto flex max-w-5xl items-center justify-between text-[12px] text-gray-400">
        <span>Git-Catch</span>
        <div className="flex gap-6">
          <a className="transition-colors hover:text-gray-700" href="#">
            이용약관
          </a>
          <a className="transition-colors hover:text-gray-700" href="#">
            개인정보처리방침
          </a>
          <a className="transition-colors hover:text-gray-700" href="#">
            문의
          </a>
        </div>
      </div>
    </footer>
  );
}
