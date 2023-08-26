import { Request, Response } from "express";
import { CategoryService } from "./category.service";

// Create a category
const createCategory = async (req: Request, res: Response) => {
  try {
    const result = await CategoryService.createCategory(req.body);
    res.send({
      success: true,
      message: "Category created successfully!",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

// Get all Categories
const getAllCategories = async (req: Request, res: Response) => {
  try {
    const result = await CategoryService.getAllCategories();
    res.send({
      success: true,
      message: "Categories fetched successfully.",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

// Get a single category
const getSingleCategory = async (req: Request, res: Response) => {
  const categoryId = parseInt(req.params.id);
  try {
    const result = await CategoryService.getSingleCategory(categoryId);
    res.send({
      success: true,
      message: "Category fetched successfully.",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

// Update a category
const updateCategory = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const updatedData = req.body;
  try {
    const result = await CategoryService.updateCategory(id, updatedData);
    res.send({
      success: true,
      message: "Category updated successfully.",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

// Delete a category
const deleteCategory = async (req: Request, res: Response) => {
  try {
    const result = await CategoryService.deleteCategory(
      parseInt(req.params.id)
    );
    res.send({
      success: true,
      message: "Category deleted successfully.",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

export const CategoryController = {
  createCategory,
  getAllCategories,
  getSingleCategory,
  updateCategory,
  deleteCategory,
};
