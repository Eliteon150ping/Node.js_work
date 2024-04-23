const express = require('express');
const path = require("path");
const app = new express();
const ejs = require("ejs");
const mongoose = require("mongoose");                                                 // Call mongoose
const BlogPost = require('./models/BlogPost');                                        // new
mongoose.connect('mongodb://localhost/my_database', { useUnifiedTopology: true, useNewUrlParser: true }); // new      
app.set("view engine", "ejs");
app.use(express.static("public"));

// BlogPost.find({}, (error, blogspot) => {

//     console.log(error, blogspot)

// });

// BlogPost.find({

//     title: "The Mythbuster's Guide to Saving Money on Energy Bill's"

// }, (error, blogspot) => {

//     console.log(error, blogspot)

// });

// BlogPost.find({

//     title: /The/
// }, (error, blogspot) => {

//     console.log(error, blogspot)

// });

// let id = "5cb436980b33147489eadfbb";
// BlogPost.findById(id, (error, blogspot) => {

//     console.log(error, blogspot)

// });

// BlogPost.findByIdAndUpdate(id, {

//     title: 'Updated title'

// }, (error, blogspot) => {

//     console.log(error, blogspot)

// });

// BlogPost.findByIdAndDelete(id, (error, blogspot) => {

//     console.log(error, blogspot)

// });

app.listen(4000, () => {

    console.log('App listening on port 4000')

});


app.get("/", (req, res) => {

    //res.sendFile(path.resolve(__dirname, "pages/index.html"))
    res.render("index")

});

app.get("/about", (req, res) => {

    //res.sendFile(path.resolve(__dirname, "pages/about.html"))
    res.render("about")
});

app.get("/post", (req, res) => {

    //res.sendFile(path.resolve(__dirname, "pages/post.html"))
    res.render("post")

});

app.get("/contact", (req, res) => {

    //res.sendFile(path.resolve(__dirname, "pages/contact.html"))
    res.render("contact")

});