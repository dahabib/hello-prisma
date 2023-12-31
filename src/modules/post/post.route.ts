import express from "express";
import { PostController } from "./post.controller";

const router = express.Router();

router.post("/create-post", PostController.createPost);
router.get("/", PostController.getAllPost);
router.get("/:id", PostController.getSinglePost);
router.delete("/:id", PostController.deletePost);
router.patch("/:id", PostController.updatePost);

export const PostRoutes = router;
