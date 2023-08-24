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
    const result = await PostService.getSinglePost(parseInt(req.params.id));
    res.send({
      success: true,
      message: "Post fetched successfully!",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

// Update post
const updatePost = async (req: Request, res: Response) => {
  const updatedData = req.body;
  const postId = req.params.id;
  try {
    const result = await PostService.updatePost(parseInt(postId), updatedData);
    res.send({
      success: true,
      message: "Post updated successfully!",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

// Delete a post

const deletePost = async (req: Request, res: Response) => {
  try {
    const result = await PostService.deletePost(parseInt(req.params.id));
    res.send({
      success: true,
      message: "Post deleted successfully!",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

export const PostController = {
  createPost,
  getAllPost,
  getSinglePost,
  deletePost,
  updatePost,
};
