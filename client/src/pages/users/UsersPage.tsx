import { Grid } from "@mui/material";
import UsersList from "../../components/users/UsersList";
import { useUsers } from "../../hooks/userHooks";
import ErrorComponent from "../../layout/ErrorComponent";
import LoadingComponent from "../../layout/LoadingComponent";

const UsersPage = () => {
  const { data: users, isLoading, isError } = useUsers();

  return (
    <Grid container spacing={{ xs: 2, md: 3 }}>
      <Grid item xs={2}>
        filters
      </Grid>
      <Grid item xs={10}>
        {isLoading && <LoadingComponent />}
        {isError && <ErrorComponent />}
        {users && <UsersList users={users} />}
      </Grid>
    </Grid>
  );
};

export default UsersPage;
