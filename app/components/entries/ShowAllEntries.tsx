"use client";
import Entry from "./Entry";
import { useWooBlog } from "@/hooks/useWooBlog";
import { pageSize } from "@/app/utils/constants";
import Image from "next/image";
import not_found from "@/public/not_found.png";

const ShowAllEntries = () => {
  const {
    entries,
    handlePageChange,
    paginatedEntries,
    noResultsFound,
    entrySearchResult,
    currentPage,
    handleRefreshEntries,
    totalPages,
  } = useWooBlog();

  const onPageChange = (page: number) => {
    handlePageChange(page);
  };

  const pages = Array.from({ length: totalPages }, (value, index) => index + 1);

  return (
    <div className="flex flex-col w-full p-3 ">
      {entries &&
        paginatedEntries?.map((entry: any) => {
          const { id, user, content, title, createdAt } = entry;
          return (
            <Entry
              id={id}
              user={user}
              content={content}
              title={title}
              createdAt={createdAt}
              key={id}
            />
          );
        })}
      <div className="flex flex-row text-center w-1/10 justify-center">
        {noResultsFound ? (
          <div>
            <div className="text-5xl  text-slate-700  text-center">
              Not Found{" "}
            </div>
            <Image
              src={not_found}
              width={300}
              height={300}
              alt="Picture of the author"
            />

            <button
              className="bg-teal-600 text-1xl
            tracking-wider text-white p-4 rounded-lg"
              onClick={handleRefreshEntries}
            >
              Retry
            </button>
          </div>
        ) : (
          pages.map((page: any) => {
            return (
              <div
                className={`cursor-pointer rounded-sm m-2 w-[30px] h-[30px] ${
                  page === currentPage
                    ? "bg-sky-600 text-slate-50 "
                    : "bg-sky-700 text-slate-200"
                }`}
                onClick={() => onPageChange(page)}
                key={page}
              >
                {page}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default ShowAllEntries;
