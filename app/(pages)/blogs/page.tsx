import { getBlogs } from "@/app/api/blogs/blogs.config";
import Pagination from "@/components/PaginationComponents";
import ArticleCard from "./components/article-card";
import BlogsSidebar from "./components/blogs-sidebar";
import BlogsHero from "./components/hero";

export default async function Blogs({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  // If searchParams is a plain object, get the page param
  const page = parseInt(searchParams.page || "1", 10);
  const limit = 10;
  const blogs = await getBlogs({ page, limit });
  return (
    <div>
      <BlogsHero />
      {/* blogs card and filtering side bar */}
      <div className="bg-background py-8">
        <div className="container  ">
          <div className="   flex    flex-col lg:flex-row gap-8 ">
            <div className="w-full max-w-4xl ">
              <div className=" flex flex-col gap-8">
                {blogs?.data?.length > 0 &&
                  blogs?.data?.map((blog: any) => (
                    <ArticleCard key={blog.id} blog={blog} />
                  ))}
              </div>
              {blogs?.pagination?.totalRecords > blogs?.pagination?.perPage && (
                <div className="mt-8">
                  <Pagination
                    currentPage={blogs?.pagination?.currentPage}
                    totalPages={blogs?.pagination?.totalPages}
                  />
                </div>
              )}
            </div>
            <div className="w-full lg:max-w-md  space-y-8   h-fit lg:sticky top-20 right-0 ">
              <BlogsSidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
