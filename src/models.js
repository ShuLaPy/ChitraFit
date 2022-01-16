const { sequelize, DataTypes } = require("./sequelize");
const UserModel = require("./models/User");
const VideoModel = require("./models/Video");
const SubscriptionModel = require("./models/Subscription");

const User = UserModel(sequelize, DataTypes);
const Video = VideoModel(sequelize, DataTypes);
const Subscription = SubscriptionModel(sequelize, DataTypes);

Video.belongsTo(User, { foreignKey: "userId" });

User.hasMany(Subscription, {
  foreignKey: "subscribeTo",
});

module.exports = {
  User,
  Video,
  Subscription,
};
