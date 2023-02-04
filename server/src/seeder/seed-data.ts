import { seedUsers } from "./seed-users";

const seedData = async () => {
  await seedUsers();
};

export default seedData;
