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
    return !isContentLongerThanMax && <p>{content}</p>;
  }
  return (
    <>
      {isContentTruncated && (
        <>
          <p>{truncatedContent}</p> <p className="font-medium">"más..."</p>
        </>
      )}
      {!isContentTruncated && <p>{content}</p>}
    </>
  );
};

export default ShowTruncatedText;
