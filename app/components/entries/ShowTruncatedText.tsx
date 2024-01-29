import { maxCharValue } from "@/app/utils/constants";
import React from "react";

interface ShowTruncatedTextProps {
  isContentTruncated: boolean;
  truncatedContent: string;
  content: string;
}

const ShowTruncatedText: React.FC<ShowTruncatedTextProps> = ({
  isContentTruncated,
  truncatedContent,
  content,
}) => {
  const isContentLongerThanMax = content.length > maxCharValue;

  if (!isContentLongerThanMax) {
    return <>{!isContentLongerThanMax && <p>{content}</p>}</>;
  }
  return (
    <div
      className={`
        border-solid border-slate-400 
        hover:bg-slate-200 
        transition cursor-pointer  ${
          isContentTruncated ? "  border-slate-500" : "border-slate-200"
        }
          `}
    >
      {isContentTruncated && (
        <>
          <p>{truncatedContent}</p>
          <span className="font-medium">"más..."</span>
        </>
      )}
      {!isContentTruncated && <p>{content}</p>}
    </div>
  );
};

export default ShowTruncatedText;
