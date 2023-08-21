import express from "express";
import { UserController } from "./user.controller";

const router = express.Router();

router.post("/create-user", UserController.createUser);
router.patch("/update-profile", UserController.createOrUpdateProfile);
router.get("/", UserController.getUsers);
router.get("/:id", UserController.getSingleUser);

export const UserRoutes = router;
