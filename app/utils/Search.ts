export const Search = (data: any, searchQuery: string, searchBy: string) => {
  const searchedData = data.filter((element: any) => {
    if (searchBy === "title") {
      return element.title.toLowerCase().includes(searchQuery.toLowerCase());
    }
    if (searchBy === "user") {
      return element.user.toLowerCase().includes(searchQuery.toLowerCase());
    }
    if (searchBy === "content") {
      return element.content.toLowerCase().includes(searchQuery.toLowerCase());
    }
  });
  return searchedData;
};
