export type Repository = {
  owner: string;
  name: string;
  updatedAt: string;
  language: string;
  languageColor: string;
};

export const repositories: Repository[] = [
  {
    owner: "team-project",
    name: "git-catch",
    updatedAt: "Updated 10 minutes ago",
    language: "JavaScript",
    languageColor: "bg-yellow-400",
  },
  {
    owner: "team-alpha",
    name: "ecommerce-api",
    updatedAt: "Updated 2 hours ago",
    language: "Java",
    languageColor: "bg-orange-500",
  },
];
