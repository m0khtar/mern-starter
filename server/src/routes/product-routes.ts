import expres from "express";
import {
  getProducts,
  getProductById,
} from "../controllers/products-controller";

const router = expres.Router();

router.get("/", getProducts);

router.get("/:id", getProductById);

module.exports = router;
