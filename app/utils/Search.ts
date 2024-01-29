export const Search = (data: any, searchQuery: string, searchBy: string) => {
  // console.log("data 🌹", data);
  const searchedData = data.filter((element: any) => {
    if (searchBy === "title") {
      // console.log("title 🌔");
      return element.title.includes(searchQuery);
    }
    if (searchBy === "user") {
      // console.log("user 🚗");
      return element.user.includes(searchQuery);
    }
    if (searchBy === "content") {
      // console.log("content 🦍");
      return element.content.includes(searchQuery);
    }
  });
  return searchedData;
};
