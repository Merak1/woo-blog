"use client";
import { useState } from "react";
import Entry, { EntryProps } from "./Entry";
import { Paginate } from "@/app/utils/paginate";

interface ShowAllEntriesProps {
  entries: EntryProps | any;
}
// interface ShowAllEntriesProps extends Array<EntryProps> {}

const ShowAllEntries: React.FC<ShowAllEntriesProps> = ({ entries }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 3;

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  let paginatedUsers = Paginate(entries, currentPage, pageSize);

  const totalPages = Math.ceil(entries.length / pageSize);
  const pages = Array.from({ length: totalPages }, (value, index) => index + 1);

  return (
    <div className="flex flex-col w-full p-3 ">
      {paginatedUsers.map((entry: any) => {
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
        {pages.map((page: any) => {
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
        })}
      </div>
    </div>
  );
};

export default ShowAllEntries;
