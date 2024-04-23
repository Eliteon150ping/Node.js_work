//! 7) Let’s define Tutorial to make One-to-Many Relationship with Comments using References Data Model (Normalization).
//!    First, we define Comment model in Comment.js.

const mongoose = require("mongoose");

const Comment = mongoose.model(
    "Comment",
    new mongoose.Schema({
        username: String,
        text: String,
        createdAt: Date
    })
);

module.exports = Comment;

//! 8) In Tutorial.js, add comments array like this: