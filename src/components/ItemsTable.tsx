
import { usePagination } from "../hooks/usePagination";
import { useItems } from "../hooks/useItems";
import { ItemsTable } from "../components/ItemsTable/ItemsTable";
import { Pagination } from "../components/Pagination/TablePagination";
import { CircularProgress, Alert } from "@mui/material";

const ItemsPage = () => {
  const { page, setPage, pageSize, setPageSize } = usePagination();

  const skip = page * pageSize;

  const { data, isLoading, error } = useItems(skip, pageSize);

  if (isLoading) return <CircularProgress />;

  if (error) return <Alert severity="error">Error loading data</Alert>;

  return (
    <div>
      <ItemsTable items={data?.data || []} />

      <Pagination
        total={data?.total || 0}
        page={page}
        pageSize={pageSize}
        onPageChange={setPage}
        onPageSizeChange={setPageSize}
      />
    </div>
  );
};

export default ItemsPage;