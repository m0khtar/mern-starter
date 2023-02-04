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
import { Product } from "../../models/product";

interface Props {
  product: Product;
}

const ProductListItem = ({ product }: Props) => {
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
        title={product.title}
        subheader={product.category}
      />
      <CardMedia
        component="img"
        height="194"
        image={product.image}
        alt={product.title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="add to cart">
          <AddShoppingCartRounded />
        </IconButton>
        <IconButton
          aria-label="view item"
          component={Link}
          to={`/products/${product.id}`}
        >
          <InfoIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ProductListItem;
