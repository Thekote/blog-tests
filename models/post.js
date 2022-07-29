"use strict";
const { Model } = require("sequelize");
const post = require("./post");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {}
  }
  Post.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      created_at: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Post",
      tableName: "Posts",
    }
  );
  return Post;
};
