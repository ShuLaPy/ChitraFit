const express = require("express");
const authRoute = require("./auth.route");
const userRoute = require("./user.route");
const videoRoute = require("./video.route");
const adminRoute = require("./admin.route");

const router = express.Router();

const defaultRoutes = [
  {
    path: "/auth",
    route: authRoute,
  },
  {
    path: "/users",
    route: userRoute,
  },
  {
    path: "/videos",
    route: videoRoute,
  },
  {
    path: "/admin",
    route: adminRoute,
  }
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
