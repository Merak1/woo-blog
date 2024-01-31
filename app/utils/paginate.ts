export const Paginate = (data: any, currentPage: number, pageSize: number) => {
  const startIndex = (currentPage - 1) * pageSize;

  if (data.status === 500) {
    return null;
  }
  return data.slice(startIndex, startIndex + pageSize);
};
