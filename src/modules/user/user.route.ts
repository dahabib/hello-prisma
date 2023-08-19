import express from "express";
import { UserController } from "./user.controller";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello, prisma!");
});

router.post("/create-user", UserController.createUser);
router.patch("/update-profile", UserController.createOrUpdateProfile);

export const UserRoutes = router;
