import { Request, Response } from "express";
import { UserService } from "./user.service";

const createUser = async (req: Request, res: Response) => {
  try {
    const result = await UserService.createUser(req.body);
    return res.send({
      success: true,
      message: "User created successfully!",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const createOrUpdateProfile = async (req: Request, res: Response) => {
  try {
    const result = UserService.createOrUpdateProfile(req.body);
    return res.send({
      success: true,
      message: "Profile updated successfully!",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const getUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserService.getUsers();
    return res.send({
      success: true,
      message: "Users fetched successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

// get a single user

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const result = await UserService.getSingleUser(parseInt(req.params.id));
    return res.send({
      success: true,
      message: "User fetched successfully!",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

export const UserController = {
  createUser,
  createOrUpdateProfile,
  getUsers,
  getSingleUser,
};
