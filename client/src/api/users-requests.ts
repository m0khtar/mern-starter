import { User } from "../models/user";
import { requests } from "./generic-requests";

const path = "/users";

export const Users = {
  list: () => requests.get<User[]>(path),
  details: (id: string) => requests.get<User>(`${path}/${id}`),
  create: (user: User) => requests.post<void>(path, user),
  update: (user: User) => requests.put<void>(`${path}/${user.id}`, user),
  delete: (id: string) => requests.delete<void>(`${path}/${id}`),
};
