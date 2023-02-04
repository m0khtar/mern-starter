import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InfoIcon from "@mui/icons-material/Info";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddShoppingCartRounded from "@mui/icons-material/AddShoppingCartRounded";
import { red } from "@mui/material/colors";
import { User } from "../../models/user";

interface Props {
  user: User;
}

const UserListItem = ({ user }: Props) => {
  return (
    <Card sx={{ maxWidth: 275, height: "100%" }}>
      <CardHeader
        style={{ height: "10%" }}
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={`${user.firstname} ${user.lastname}`}
        subheader={user.email}
      />
      {/* <CardMedia
        component="img"
        height="194"
        image={user.pictureUrl}
        alt={user.name}
      /> */}
      <CardContent>
        {/* <Typography variant="body2" color="text.secondary">
          {user.description}
        </Typography> */}
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="view user"
          component={Link}
          to={`/users/${user.id}`}
        >
          <InfoIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default UserListItem;
