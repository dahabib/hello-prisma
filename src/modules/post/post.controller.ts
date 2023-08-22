import { Request, Response } from "express";
import { PostService } from "./post.service";

// Create Post
const createPost = async (req: Request, res: Response) => {
  try {
    const result = await PostService.createPost(req.body);
    res.send({
      success: true,
      message: "Post created successfully.",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

// Fetch All Posts
const getAllPost = async (req: Request, res: Response) => {
  const options = req.query;
  try {
    const result = await PostService.getAllPost(options);
    res.send({
      success: true,
      message: "Posts fetched successfully.",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

// Fetch a single post
const getSinglePost = async (req: Request, res: Response) => {
  try {
    const result = await PostService;
  } catch (error) {
    res.send(error);
  }
};

export const PostController = {
  createPost,
  getAllPost,
};
