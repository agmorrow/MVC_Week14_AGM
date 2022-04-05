const {
  Model,
  DataTypes,
  Sequelize
} = require('sequelize');
const sequelize = require('../config');

class Post extends Model {}

Post.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  comment: {
    type: DataTypes.STRING,
    allowNull: false
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'user',
      key: 'id'
    }
  },

}, {
  sequelize,
  freezeTableName: true,
  underscored: true,
  timestamps: true,
  modelName: 'post'
});

module.exports = Post;