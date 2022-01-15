require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const {sequelize} = require("./sequelize")

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(compression());

const PORT = process.env.PORT || 5500;

(async () => {
  try {
    await sequelize.sync({ alter: true });
    app.listen(PORT, () => {
      console.log(`🚀 ChitraFit server running on - ${PORT} `);
    });
  } catch (error) {
    console.log("Unable to connect database");
  }
})();
