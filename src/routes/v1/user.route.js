const express = require("express");
const router = express.Router();

const {
  editUser,
  getProfile,
  recommendChannels,
  getLikedVideos,
  getHistory,
  getFeed,
  searchUser,
  toggleSubscribe,
} = require("../../controllers/user.controller");
const { isAuthonticated } = require("../../middlewares/auth");

router.route("/").put(isAuthonticated, editUser);
router.route("/").get(isAuthonticated, recommendChannels);
router.route("/likedVideos").get(isAuthonticated, getLikedVideos);
router.route("/history").get(isAuthonticated, getHistory);
router.route("/feed").get(isAuthonticated, getFeed);
router.route("/search").get(isAuthonticated, searchUser);
router.route("/:id").get(isAuthonticated, getProfile);
router.route("/:id/togglesubscribe").get(isAuthonticated, toggleSubscribe);

module.exports = router;
