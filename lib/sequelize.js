import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: "mysql",
  host: process.env.DB_HOST || "localhost",
  username: process.env.DB_USER,
  password: process.env.DB_PASS || "",
  database: process.env.DB_NAME,
  logging: true,
});

// const sequelize = new Sequelize("embeddedexpert", "root", "", {
//   host: process.env.DB_HOST || "localhost",
//   dialect: "mysql",
// });

const dbConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

dbConnection();

export default sequelize;
