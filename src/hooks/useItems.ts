import { useQuery } from "@tanstack/react-query";
import { getItems } from "../api/api";


export const useItems = (skip: number, take: number) => {
  return useQuery({
    queryKey: ["items", skip, take],
    queryFn: () => getItems(skip, take),
  });
};