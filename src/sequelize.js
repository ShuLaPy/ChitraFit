const pg = require("pg");
const { Sequelize, DataTypes } = require("sequelize");

pg.defaults.ssl = true;
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

module.exports = {
    sequelize,
    DataTypes
}