import { PrismaClient, Profile, User } from "@prisma/client";

const prisma = new PrismaClient();

const createUser = async (data: User): Promise<User> => {
  const result = prisma.user.create({
    data,
  });
  return result;
};

const createOrUpdateProfile = async (
  data: Profile
): Promise<Profile | undefined> => {
  const isExists = await prisma.profile.findUnique({
    where: {
      userId: data.userId,
    },
  });

  if (isExists) {
    const result = await prisma.profile.update({
      where: {
        userId: data.userId,
      },
      data: {
        bio: data.bio,
      },
    });
    return result;
  } else {
    const result = await prisma.profile.create({
      data,
    });
  }
};

// get user service
const getUsers = async () => {
  const result = await prisma.user.findMany({
    include: {
      profile: true,
    },
  });
  return result;
};

// get a single user
const getSingleUser = async (id: number) => {
  const result = await prisma.user.findUnique({
    where: {
      id,
    },
    include: {
      profile: true,
    },
  });
  return result;
};

export const UserService = {
  createUser,
  createOrUpdateProfile,
  getUsers,
  getSingleUser,
};
