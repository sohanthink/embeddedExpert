// lib/syncDatabase.js

import sequelize from "./sequelize.js";
// import Contact from "../models/Contact.js";
// import Affiliate from "../models/Affiliate.js";
import Subscribe from "../models/Subscribe.js";

const syncDatabase = async () => {
  try {
    // Test the connection
    await sequelize.authenticate();
    console.log("Database connection established.");

    // Sync the models
    await sequelize.sync({ force: false });
    console.log("Database synced successfully.");
  } catch (error) {
    console.error("Error syncing database:", error);
  } finally {
    // Close the connection
    await sequelize.close();
  }
};

// Sync the database
syncDatabase();

export default syncDatabase;
