import { faker } from "@faker-js/faker";
import { IUser, User } from "../models/user";

const createRandomUser = (): IUser => {
  return {
    email: faker.internet.email(),
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName(),
  };
};

export const seedUsers = async () => {
  if (process.env.NODE_ENV === "development") {
    // seed users
    if ((await User.find()).length !== 0) return;
    console.log("seeding users...".cyan);
    const users: Array<IUser> = [];
    Array.from({ length: 10 }).forEach(() => {
      users.push(createRandomUser());
    });

    await User.collection.insertMany(users);
  }
};
