//! 3) create Tutorial model with mongoose.Schema() constructor function.
//!    In models/Tutorial.js, define Tutorial with 3 fields: title, author, images.

// const mongoose = require("mongoose");  // 8) In Tutorial.js, add comments array like this:

// const Tutorial = mongoose.model(
//   "Tutorial",
//   new mongoose.Schema({
//     title: String,
//     author: String,
//     images: [],
//     comments: [
//       {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Comment"
//       }
//     ]
//   })
// );

// module.exports = Tutorial;

//!  13) Next, we add a Parent Reference to Category in Tutorial model.
const mongoose = require("mongoose");

const Tutorial = mongoose.model(
  "Tutorial",
  new mongoose.Schema({
    title: String,
    author: String,
    images: [],
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
      }
    ],
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category"
    }
  })
);

module.exports = Tutorial;

//! 4) Open server.js, add the code below:

//! 9) In server.js, add createComment function.