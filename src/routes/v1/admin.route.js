const express = require("express");
const router = express.Router();

const {
  getUsers,
  removeUser,
  getVideos,
  removeVideo,
} = require("../../controllers/admin.controller");
const { isAuthonticated, isAdmin } = require("../../middlewares/auth");

router.route("/users").get(isAuthonticated, isAdmin, getUsers);
router.route("/users/:username").delete(isAuthonticated, isAdmin, removeUser);
router.route("/videos").get(isAuthonticated, isAdmin, getVideos);
router.route("/videos/:id").delete(isAuthonticated, isAdmin, removeVideo);

module.exports = router;
