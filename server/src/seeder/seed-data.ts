import { seedProducts } from "./seed-products";
import { seedUsers } from "./seed-users";

const seedData = async () => {
  await seedUsers();
  await seedProducts();
};

export default seedData;
