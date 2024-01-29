export const Paginate = (data: any, currentPage: number, pageSize: number) => {
  const startIndex = (currentPage - 1) * pageSize;

  return data.slice(startIndex, startIndex + pageSize);
};
