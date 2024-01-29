export const Search = (data: any, searchQuery: string, searchBy: string) => {
  const searchedData = data.filter((element: any) => {
    if (searchBy === "title") {
      return element.title.includes(searchQuery);
    }
    if (searchBy === "user") {
      return element.user.includes(searchQuery);
    }
    if (searchBy === "content") {
      return element.content.includes(searchQuery);
    }
  });
  return searchedData;
};
