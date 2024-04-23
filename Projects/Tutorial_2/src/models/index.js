//! 2) Next, export the models in index.js.

module.exports = {
    Tutorial: require("./Tutorial"),
    Image: require("./Image"),
    Comment: require("./Comment"),
    Category: require("./Category")
};

// create appropriate models and use mongoose to interact with MongoDB database.
// There are three cases that we will apply three types of one-to-many relationships:

//? Tutorial-Images: One-to-Few
//? Tutorial-Comments: One-to-Many
//? Category-Tutorials: One-to-aLot

//! 3) create Tutorial model with mongoose.Schema() constructor function.
//!    In models/Tutorial.js, define Tutorial with 3 fields: title, author, images.