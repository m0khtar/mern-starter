import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import agent from "../api/agent";
import { Product } from "../models/product";
import { User } from "../models/user";

export const useUser = (id: string) => {
  return useQuery(
    ["user", id],
    async () => {
      return await agent.Users.details(id);
      // return await axios
      //   .get<User>(`http://localhost:5000/api/users/${id}`)
      //   .then((res) => res.data);
    },
    {
      refetchOnWindowFocus: false,
    }
  );
};

export const useUsers = () =>
  useQuery(
    ["users"],
    async () => {
      return await agent.Users.list();
    },
    {
      refetchOnWindowFocus: false,
    }
  );
