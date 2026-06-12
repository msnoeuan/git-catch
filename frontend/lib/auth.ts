export function getGithubLoginUrl() {
  return `${process.env.NEXT_PUBLIC_API_BASE_URL ?? ""}/auth/github`;
}
