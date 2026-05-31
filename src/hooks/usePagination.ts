import { useEffect, useState } from "react";

export const usePagination = () => {
  const [page, setPage] = useState(() => {
    return Number(localStorage.getItem("page")) || 0;
  });

  const [pageSize, setPageSize] = useState(() => {
    return Number(localStorage.getItem("pageSize")) || 10;
  });

  useEffect(() => {
    localStorage.setItem("page", page.toString());
    localStorage.setItem("pageSize", pageSize.toString());
  }, [page, pageSize]);

  return {
    page,
    setPage,
    pageSize,
    setPageSize,
  };
};