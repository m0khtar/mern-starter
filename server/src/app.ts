import express from "express";
import { json } from "body-parser";
import cors from "cors";

import { errorHandler } from "./common/middlewares/error-handler";
import colors from "colors";

const userRoutes = require("../src/routes/user-routes");
const productRoutes = require("../src/routes/product-routes");

const app = express();
app.use(json());
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

// middlewares
colors.enable();
// app.all("*", async (req, res) => {
//   throw new NotFoundError();
// });

app.use(errorHandler);

export { app };
