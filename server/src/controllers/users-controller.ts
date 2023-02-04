import { NextFunction, Request, Response } from "express";
import { NotFoundError } from "../common/errors/not-found-error";
import { User } from "../models/user";

export const getUsers = async (req: Request, res: Response) => {
  const users = await User.find();
  res.send(users);
};

export const getUserById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let user;
  try {
    user = await User.findById(req.params.id);
  } catch (error) {
    return next(error);
  }

  if (!user) {
    const error = new NotFoundError();
    return next(error);
  }

  res.send(user.toObject({ getters: true }));
};
