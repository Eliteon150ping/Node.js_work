//! 1) Open server.js, we import mongoose and connect the app to MongoDB database.

const mongoose = require("mongoose");
const db = require("./models");

mongoose
    .connect("mongodb://localhost/bezkoder_db", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Successfully connect to MongoDB."))
    .catch(err => console.error("Connection error", err));

//! 2) Next, export the models in index.js.

/////////////////////////////////////////////////////////////

//! 4) Open server.js, add the code below:

//! 9) In server.js, add createComment function.

const createComment = function (tutorialId, comment) {
    return db.Comment.create(comment).then(docComment => {
        console.log("\n>> Created Comment:\n", docComment);

        return db.Tutorial.findByIdAndUpdate(
            tutorialId,
            { $push: { comments: docComment._id } },
            { new: true, useFindAndModify: false }
        );
    });
};

//! 10) Then modify run() function as the code below

const createTutorial = function (tutorial) {
    return db.Tutorial.create(tutorial).then(docTutorial => {
        console.log("\n>> Created Tutorial:\n", docTutorial);
        return docTutorial;
    });
};


const createImage = function (tutorialId, image) {        //! 6) We also need to change createImage() function in server.js:
    return db.Image.create(image).then(docImage => {
        console.log("\n>> Created Image:\n", docImage);
        return db.Tutorial.findByIdAndUpdate(
            tutorialId,
            {
                $push: {
                    images: {
                        _id: docImage._id,
                        url: docImage.url,
                        caption: docImage.caption
                    }
                }
            },
            { new: true, useFindAndModify: false }
        );
    });
};

//! 7) Let’s define Tutorial to make One-to-Many Relationship with Comments using References Data Model (Normalization).
//    First, we define Comment model in Comment.js.

// const createImage = function (tutorialId, image) {   
//     console.log("\n>> Add Image:\n", image);
//     return db.Tutorial.findByIdAndUpdate(
//         tutorialId,
//         {
//             $push: {
//                 images: {
//                     url: image.url,
//                     caption: image.caption
//                 }
//             }
//         },
//         { new: true, useFindAndModify: false }
//     );
// };

//! 11) This is the time to use populate() function to get full Tutorial data. 
//     Let’s create getTutorialWithPopulate() function like this:

const getTutorialWithPopulate = function (id) {
    return db.Tutorial.findById(id).populate("comments");
};

//! 14) We also need to define functions for creating Category and adding Tutorial to a Category
const createCategory = function (category) {
    return db.Category.create(category).then(docCategory => {
        console.log("\n>> Created Category:\n", docCategory);
        return docCategory;
    });
};

const addTutorialToCategory = function (tutorialId, categoryId) {
    return db.Tutorial.findByIdAndUpdate(
        tutorialId,
        { category: categoryId },
        { new: true, useFindAndModify: false }
    );
};

//! 16) Now let’s create a function for retrieving all Tutorials in a Category (with showing the Category’s name).

const getTutorialsInCategory = function (categoryId) {
    return db.Tutorial.find({ category: categoryId })
        .populate("category", "name -_id")
        .select("-comments -images -__v");
};

const run = async function () {
    var tutorial = await createTutorial({
        title: "Tutorial #1",
        author: "bezkoder"
    });

    var category = await createCategory({
        name: "Node.js",
        description: "Node.js tutorial"
    });

    await addTutorialToCategory(tutorial._id, category._id);

    var newTutorial = await createTutorial({
        title: "Tutorial #2",
        author: "bezkoder"
    });

    await addTutorialToCategory(newTutorial._id, category._id);

    var tutorials = await getTutorialsInCategory(category._id);
    console.log("\n>> all Tutorials in Cagetory:\n", tutorials);
};



//! 15) To test it, change run() function to this.

// const run = async function () {
//     var tutorial = await createTutorial({
//         title: "Tutorial #1",
//         author: "bezkoder"
//     });

//     var category = await createCategory({
//         name: "Node.js",
//         description: "Node.js tutorial"
//     });

//     tutorial = await addTutorialToCategory(tutorial._id, category._id);
//     console.log("\n>> Tutorial:\n", tutorial);
// };

// const run = async function () {
//     var tutorial = await createTutorial({
//         title: "Tutorial #1",
//         author: "bezkoder"
//     });

//     tutorial = await createComment(tutorial._id, {
//         username: "jack",
//         text: "This is a great tutorial.",
//         createdAt: Date.now()
//     });
//     console.log("\n>> Tutorial:\n", tutorial);

//     tutorial = await createComment(tutorial._id, {
//         username: "mary",
//         text: "Thank you, it helps me alot.",
//         createdAt: Date.now()
//     });
//     console.log("\n>> Tutorial:\n", tutorial);
//     // add this
//     tutorial = await getTutorialWithPopulate(tutorial._id);
//     console.log("\n>> populated Tutorial:\n", tutorial);

// };


// The last example is creating relationship between Category and its Tutorials.

//! 12) First we define Category model with 
//     2 fields: name & description.


mongoose
    .connect("mongodb://localhost/bezkoder_db", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Successfully connect to MongoDB."))
    .catch(err => console.error("Connection error", err));

run();


//! 5) Now, if we want to embed Images (with appropriate fields) in Tutorial document,
//    but also want to query Images on their own collections without necessarily querying for the Tutorials themselves,
//    we can define Image model in Image.js like this: