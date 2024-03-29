"use client";
import { truncateText } from "@/app/utils/truncateText";
import { useState } from "react";
import ShowTruncatedText from "./ShowTruncatedText";
import { EntryProps } from "@/app/types/entryType";

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
      <div className="w-2/5 flex flex-col p-2 ">
        <p className="font-bold">Título: {title}</p>
        <p className=" font-medium">Autor: {user}</p>
        <p>{createdAt}</p>
      </div>
      <div
        className="w-3/5 flex flex-col break-words"
        onClick={() => setIsContentTruncated((prevCheck) => !prevCheck)}
      >
        <div className="">
          <ShowTruncatedText
            isContentTruncated={isContentTruncated}
            truncatedContent={truncatedContent}
            content={content}
          />
        </div>
      </div>
    </div>
  );
};

export default Entry;
