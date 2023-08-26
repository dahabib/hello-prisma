import { Category, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createCategory = async (data: Category): Promise<Category> => {
  const result = await prisma.category.create({
    data,
  });

  return result;
};

// Get all categories
const getAllCategories = async () => {
  const result = await prisma.category.findMany({});
  return result;
};

// Get a single category
const getSingleCategory = async (id: number) => {
  const result = await prisma.category.findUnique({
    where: {
      id,
    },
  });
  return result;
};

// Update a category
const updateCategory = async (
  id: number,
  data: Partial<Category>
): Promise<Category> => {
  const result = await prisma.category.update({
    where: {
      id,
    },
    data,
  });
  return result;
};

// Delete a category
const deleteCategory = async (id: number) => {
  const result = await prisma.category.delete({
    where: {
      id,
    },
  });
  return result;
};

export const CategoryService = {
  createCategory,
  getAllCategories,
  getSingleCategory,
  updateCategory,
  deleteCategory,
};
