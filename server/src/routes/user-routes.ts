import expres from "express";
import { getUsers, getUserById } from "../controllers/users-controller";

const router = expres.Router();

router.get("/", getUsers);

router.get("/:id", getUserById);

module.exports = router;
