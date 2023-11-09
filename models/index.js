const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
const Category = require('./Category');

// User has many Posts && Post belongs to User
User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
});


// Post has many comments && Comments belong to post
Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE',
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
});


// User has many comments && Comment belongs to User
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
});


// Category has many Posts && Post belongs to Category
Category.hasMany(Post, {
    foreignKey: 'category_id',
    onDelete: 'SET NULL',
});

Post.belongsTo(Category, {
    foreignKey: 'category_id',
});


module.exports = { User, Post, Comment, Category };