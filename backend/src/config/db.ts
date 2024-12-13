import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";

dotenv.config();

export const db = new Sequelize(process.env.DATABASE_URL, {
  models: [__dirname + "/../models/**/*"],
  logging: false, // Elimina el codigo SQL de la consola.
  dialectOptions: {
    ssl: {
      require: false,
    },
  },
});
