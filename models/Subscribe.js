import { DataTypes } from "sequelize";
import sequelize from "../lib/sequelize.js";

const Subscribe = sequelize.define("Subscribe", {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Subscribe;
