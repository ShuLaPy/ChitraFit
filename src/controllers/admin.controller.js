const httpStatus = require("http-status");
const { Video, User } = require("../models");
const catchAsync = require("../utils/catchAsync");

exports.getUsers = catchAsync(async (req, res, next) => {
  const users = await User.findAll({
    attributes: ["id", "firstname", "lastname", "username", "email"],
  });

  res.status(httpStatus.OK).json({ success: true, data: users });
});

exports.removeUser = catchAsync(async (req, res, next) => {
  await User.destroy({
    where: { username: req.params.username },
  });

  res.status(httpStatus.OK).json({ success: true, data: {} });
});

exports.removeVideo = catchAsync(async (req, res, next) => {
  await Video.destroy({
    where: { id: req.params.id },
  });

  res.status(httpStatus.OK).json({ success: true, data: {} });
});

exports.getVideos = catchAsync(async (req, res, next) => {
  const videos = await Video.findAll({
    attributes: ["id", "title", "description", "url", "thumbnail", "userId"],
  });

  res.status(httpStatus.OK).json({ success: true, data: videos });
});
