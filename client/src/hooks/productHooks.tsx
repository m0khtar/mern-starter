import { useQuery } from "@tanstack/react-query";
import agent from "../api/agent";

export const useProduct = (id: string) => {
  return useQuery(
    ["product", id],
    async () => {
      return await agent.Products.details(id);
    },
    {
      refetchOnWindowFocus: false,
    }
  );
};

export const useProducts = () =>
  useQuery(
    ["products"],
    async () => {
      return await agent.Products.list();
    },
    {
      refetchOnWindowFocus: false,
    }
  );
