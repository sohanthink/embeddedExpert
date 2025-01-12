import { DataTypes } from "sequelize";
import sequelize from "../lib/sequelize.js";

const Affiliate = sequelize.define("Affiliate", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isNumeric: true,
    },
  },
  courseType: {
    type: DataTypes.JSON, // Store course types as an array
    allowNull: false,
  },
});

export default Affiliate;
