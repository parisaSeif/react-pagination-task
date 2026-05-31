import axios from "axios";
import type { ItemsResponse } from "../types/type";


export const api = axios.create({
  baseURL: "http://localhost:3020",
});

export const getItems = async (
  skip: number,
  take: number
): Promise<ItemsResponse> => {
  const res = await api.get(
    `/items?skip=${skip}&take=${take}`
  );

  return res.data;
};