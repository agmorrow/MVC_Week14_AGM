const { Model, DataTypes, UUIDV4} = require('sequelize');
const sequelize = require('../config');

class Post extends Model {}
Post.init({
    id: {
        type: DataTypes.INTEGER,
        defaultValue: UUIDV4,
        primaryKey: true,
        },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    dateCreated: {
        type: DataTypes.DATE,
        defaultValue: Date.now,
    },
    userId: {
        type: DataTypes.UUID,
        references: {
            model: 'user',
            key: 'id',
            }
    },
}, {
    sequelize,
	timestamps: false,
	freezeTableName: true,
	modelName: 'post'
});
module.exports = Post;