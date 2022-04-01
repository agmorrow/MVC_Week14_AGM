const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post, {
    foreignKey: 'userId',
    onDelete: 'CASCADE',
});
Post.belongsTo(User, {
    foreignKey: 'userId',
});
Post.hasMany(Comment, {
    foreignKey: 'blogId',
    onDelete: 'CASCADE',
});
Comment.belongsTo(Post, {
    foreignKey: 'blogId',
});
User.hasMany(Comment, {
    foreignKey: 'userId',
    onDelete: 'CASCADE',
});
Comment.belongsTo(User, {
    foreignKey: 'userId',
})
module.exports = {
    User,
    Post,
    Comment
}