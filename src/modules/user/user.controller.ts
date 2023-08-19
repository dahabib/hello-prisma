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

export const UserController = {
  createUser,
  createOrUpdateProfile,
};
