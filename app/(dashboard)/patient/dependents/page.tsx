import Pagination from "@/components/PaginationComponents";
import SearchInput from "@/components/SearchInput";
import { getPatients } from "@/config/patients/config";
import { DependentsForm } from "./components/dependents-form";
import DependantsCard from "./components/DependentsCard";

const DependentsPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) => {
  const page = parseInt(searchParams?.page || "1", 10);
  const depands = await getPatients({ page, limit: 5 });
  return (
    <div className="space-y-6  bg-card p-6 rounded-md">
      <div className="flex items-center justify-between border-none pb-0">
        <h1 className="text-2xl"> Dependents </h1>

        <SearchInput searchParamKey="search" />
        <DependentsForm />
      </div>
      <hr className="my-2" />

      <div className=" space-y-4 ">
        {depands?.data?.map((depands) => (
          <DependantsCard key={depands.id} depands={depands} />
        ))}
        {depands?.pagination?.totalRecords > depands?.pagination?.perPage && (
          <div className="mt-4">
            <Pagination
              currentPage={depands?.pagination?.currentPage}
              totalPages={depands?.pagination?.totalPages}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default DependentsPage;
