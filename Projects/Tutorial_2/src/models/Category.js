//! 12) First we define Category model with 
//!     2 fields: name & description.

const mongoose = require("mongoose");

const Category = mongoose.model(
  "Category",
  new mongoose.Schema({
    name: String,
    description: String
  })
);

module.exports = Category;


//! 13) Next, we add a Parent Reference to Category in Tutorial model.

