const mongoose = require("mongoose");

//Model is a JS object that holds all of the functionality to interact with a specifc type of document within database

const taskSchema = new mongoose.Schema({
    title: {type: String }, //required: true can be used to make field required 
    description: {type: String},
    code: {type: String}
}, {
    timestamps: true //will tell us when snippet was created or updated
});

const Task = mongoose.model("task", taskSchema); //Will construct object with all features and functionality we need to interact 
                                                          // with a snippet in the database

module.exports= Task;