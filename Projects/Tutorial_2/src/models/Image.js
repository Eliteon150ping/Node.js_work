//! 5) Now, if we want to embed Images (with appropriate fields) in Tutorial document, 
//!    but also want to query Images on their own collections without necessarily querying for the Tutorials themselves, 
//!    we can define Image model in Image.js like this:

const mongoose = require("mongoose");

const Image = mongoose.model(
  "Image",
  new mongoose.Schema({
    path: String,
    url: String,
    caption: String,
    createdAt: Date
  })
);

module.exports = Image;

//! 6) We also need to change createImage() function in server.js: