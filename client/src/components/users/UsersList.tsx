import { Grid } from "@mui/material";
import { User } from "../../models/user";
import UserListItem from "./UserListItem";

interface Props {
  users: User[];
}

const UsersList = ({ users }: Props) => {
  return (
    <Grid container spacing={6}>
      {users.map((user) => (
        <Grid item key={user.id}>
          <UserListItem user={user} />
        </Grid>
      ))}
    </Grid>
  );
};

export default UsersList;
