const { sequelize, DataTypes } = require("./sequelize");
const UserModel = require("./models/User");
const VideoModel = require("./models/Video");
const SubscriptionModel = require("./models/Subscription");
const CommentModel = require("./models/Comment");
const VideoLikeModel = require("./models/VideoLike");
const ViewModel = require("./models/View");

const User = UserModel(sequelize, DataTypes);
const Video = VideoModel(sequelize, DataTypes);
const Subscription = SubscriptionModel(sequelize, DataTypes);
const Comment = CommentModel(sequelize, DataTypes);
const VideoLike = VideoLikeModel(sequelize, DataTypes);
const View = ViewModel(sequelize, DataTypes);

Video.belongsTo(User, { foreignKey: "userId" });

User.hasMany(Subscription, {
  foreignKey: "subscribeTo",
});

User.belongsToMany(Video, { through: VideoLike, foreignKey: "userId" });

Video.belongsToMany(User, { through: VideoLike, foreignKey: "videoId" });

User.hasMany(Comment, {
  foreignKey: "userId",
});

Comment.belongsTo(User, { foreignKey: "userId" });

Video.hasMany(Comment, {
  foreignKey: "videoId",
});

User.belongsToMany(Video, { through: View, foreignKey: "userId" });

Video.belongsToMany(User, { through: View, foreignKey: "videoId" });

module.exports = {
  User,
  Video,
  Subscription,
  Comment,
  VideoLike,
  View
};
