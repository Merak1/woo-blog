import { maxCharValue } from "./constants";
export const truncateText = (str: string) => {
  return str.substring(0, maxCharValue);
};
