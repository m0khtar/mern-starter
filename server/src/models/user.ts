import { Model, Schema, model } from "mongoose";

interface IUser {
  email: string;
  firstname: string;
  lastname: string;
}

// Create a new Model type that knows about IUserMethods...
type UserModel = Model<IUser>;

// Define a schema
const userSchema = new Schema<IUser, UserModel>(
  {
    email: String,
    firstname: String,
    lastname: String,
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  }
);

const User = model("User", userSchema);
export { User, IUser };
