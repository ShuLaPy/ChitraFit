const express = require("express");
const router = express.Router();

const { recommendedVideos } = require("../../controllers/user.controller");
const {
  newVideo,
  searchVideo,
  getVideo,
  likeVideo,
  dislikeVideo,
  addComment,
  newView,
} = require("../../controllers/video.controller");
const { isAuthonticated } = require("../../middlewares/auth");

router.route("/").post(isAuthonticated, newVideo).get(recommendedVideos);
router.route("/search").get(isAuthonticated, searchVideo);
router.route("/:id").get(isAuthonticated, getVideo);
router.route("/:id/like").get(isAuthonticated, likeVideo);
router.route("/:id/dislike").get(isAuthonticated, dislikeVideo);
router.route("/:id/comment").post(isAuthonticated, addComment);
router.route("/:id/view").get(isAuthonticated, newView);

module.exports = router;
