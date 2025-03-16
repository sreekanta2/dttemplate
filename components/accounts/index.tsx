import Pagination from "@/components/PaginationComponents";
import SearchInput from "@/components/SearchInput";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Suspense } from "react";
import AccountsDetails from "./account-details";
import AccountsTabsContents from "./AccountsTabsContents";
import RefundsTabsContents from "./RefundsTabsContents";

const AccountPageView = () => {
  return (
    <div className="space-y-6   p-4 rounded-md bg-card">
      <AccountsDetails />
      <div className="my-8">
        <Tabs defaultValue="accounts">
          <TabsList className=" space-x-4 bg-transparent">
            <TabsTrigger
              value="accounts"
              className="h-10 px-4 bg-primary/10  hover:text-blue-500    data-[state=active]:bg-primary  data-[state=active]:text-primary-foreground "
            >
              Accounts
            </TabsTrigger>
            <TabsTrigger
              value="refunds"
              className="h-10 px-4 bg-primary/10  hover:text-blue-500    data-[state=active]:bg-primary  data-[state=active]:text-primary-foreground "
            >
              Refunds
            </TabsTrigger>
          </TabsList>
          <Suspense>
            <SearchInput searchParamKey="q" className="my-4" />
          </Suspense>
          <AccountsTabsContents />
          <RefundsTabsContents />
        </Tabs>
        <Pagination currentPage={1} totalPages={10} />
      </div>
    </div>
  );
};

export default AccountPageView;
