import { TablePagination } from "@mui/material";

type Props = {
  total: number;
  page: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  onPageSizeChange: (size: number) => void;
};

export const Pagination = ({
  total,
  page,
  pageSize,
  onPageChange,
  onPageSizeChange,
}: Props) => {
  return (
    <TablePagination
      component="div"
      count={total}
      page={page}
      rowsPerPage={pageSize}
      onPageChange={(_, newPage) => onPageChange(newPage)}
      onRowsPerPageChange={(e) =>
        onPageSizeChange(Number(e.target.value))
      }
    />
  );
};