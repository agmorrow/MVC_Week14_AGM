const { Model, DataTypes, UUIDV4 } = require('sequelize');
const sequelize = require('../config')

class Comment extends Model {}
Comment.init({
    id: {
        type: DataTypes.INTEGER,
        defaultValue: UUIDV4,
        primaryKey: true,
        },
    text: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    dateCreated: {
        type: DataTypes.DATE,
        defaultValue: Date.now,
    },
    blogId: {
        type: DataTypes.INTEGER,
		references: {
			model: 'post',
			key: 'id',
		},
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            }
        }
    },
  }, 
  {
    sequelize,
	freezeTableName: true,
	modelName: 'comment'
});
module.exports = Comment;