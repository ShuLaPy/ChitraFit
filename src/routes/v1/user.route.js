const express = require("express");
const router = express.Router();

const { editUser, getProfile } = require("../../controllers/user.controller");
const { isAuthonticated } = require("../../middlewares/auth");

router.route("/").put(isAuthonticated, editUser);
router.route("/:id").get(isAuthonticated, getProfile);

module.exports = router;