import { Post, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Create Post
const createPost = async (data: Post): Promise<Post> => {
  const result = await prisma.post.create({
    data,
  });
  return result;
};

// Get All Posts

const getAllPost = async (options: any) => {
  const { sortBy, sortOrder, searchTerm, page, limit } = options;
  const skip = parseInt(limit) * parseInt(page) - parseInt(limit);
  const take = parseInt(limit) || 10;

  return await prisma.$transaction(async (tx) => {
    const result = await tx.post.findMany({
      skip,
      take,
      include: {
        author: true,
        category: true,
      },
      orderBy:
        sortBy && sortOrder
          ? {
              [sortBy]: sortOrder,
            }
          : {
              createdAt: "desc",
            },
      where: {
        OR: [
          {
            title: {
              contains: searchTerm,
              mode: "insensitive",
            },
          },
          {
            author: {
              name: {
                contains: searchTerm,
                mode: "insensitive",
              },
            },
          },
        ],
      },
    });

    const total = await tx.post.count();
    return { data: result, total };
  });
};

// Get a single post
const getSinglePost = async (id: number) => {
  const result = await prisma.post.findUnique({
    where: {
      id,
    },
  });
  return result;
};

export const PostService = {
  createPost,
  getAllPost,
  getSinglePost,
};
