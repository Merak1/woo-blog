"use client";
import { truncateText } from "@/app/utils/truncateText";
import { useState } from "react";
import ShowTruncatedText from "./ShowTruncatedText";
export interface EntryProps {
  id: string;
  user: string;
  title: string;
  content: string;
  createdAt: string;
}

const Entry: React.FC<EntryProps> = ({
  id,
  user,
  title,
  content,
  createdAt,
}) => {
  const [isContentTruncated, setIsContentTruncated] = useState<boolean>(true);

  const truncatedContent = truncateText(content);

  return (
    <div className="py-2 px-5  my-2 w-full flex flex-row bg-slate-100 pt-5">
      <div className="w-2/5 flex flex-col ">
        <p className="font-bold">Title : {title}</p>
        <p className=" font-medium">User: {user}</p>
        <p>{createdAt}</p>
      </div>
      <div
        className={`
        w-3/5 flex flex-col break-words 
        border-solid border-slate-400 
        hover:bg-slate-200 
        transition cursor-pointer  ${
          isContentTruncated ? "  border-slate-500" : "border-slate-200"
        }
          `}
        onClick={() => setIsContentTruncated((prevCheck) => !prevCheck)}
      >
        <p className="cursor-pointer">
          <ShowTruncatedText
            isContentTruncated={isContentTruncated}
            truncatedContent={truncatedContent}
            content={content}
          />
        </p>
      </div>
    </div>
  );
};

export default Entry;
