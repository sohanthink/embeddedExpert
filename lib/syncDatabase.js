// lib/syncDatabase.js

import sequelize from "./sequelize.js";
import Contact from "../models/Contact.js";
import Affiliate from "../models/Affiliate.js";

const syncDatabase = async () => {
  try {
    await sequelize.sync({ force: false }); // You can set force: true in development to reset tables
    console.log("Database synced successfully");
  } catch (error) {
    console.error("Error syncing database:", error);
  }
};

// Sync the database
syncDatabase();

export default syncDatabase;
