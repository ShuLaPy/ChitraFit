const {sequelize, DataTypes} = require("./sequelize")
const UserModel = require("./models/User");
const VideoModel = require("./models/Video");

const User = UserModel(sequelize, DataTypes);
const Video = VideoModel(sequelize, DataTypes);

Video.belongsTo(User, { foreignKey: "userId" });

module.exports = {
  User,
  Video,
};
