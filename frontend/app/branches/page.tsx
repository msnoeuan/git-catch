import { BranchDetail } from "@/features/branches/components/branch-detail";
import { getBranchByName } from "@/features/branches/data";

type BranchesPageProps = {
  searchParams: Promise<{
    name?: string;
  }>;
};

export default async function BranchesPage({
  searchParams,
}: BranchesPageProps) {
  const { name } = await searchParams;
  const branch = getBranchByName(name);

  return <BranchDetail branch={branch} />;
}
