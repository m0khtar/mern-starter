import { Model, Schema, model } from "mongoose";

interface IUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

// Create a new Model type that knows about IUserMethods...
type UserModel = Model<IUser>;

// Define a schema
const userSchema = new Schema<IUser, UserModel>({
  id: String,
  email: String,
  firstName: String,
  lastName: String,
});

const User = model("User", userSchema);
export { User, IUser };
