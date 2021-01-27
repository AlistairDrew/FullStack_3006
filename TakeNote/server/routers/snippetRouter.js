const router = require("express").Router();
const Snippet = require("../models/snippetModel");

router.post("/", (req,res) =>{
    const {title, description, code} = req.body; //Send title desc and code
    
    const newSnippet = new Snippet({
        title, description, code      //create new snippet using model created from mongoose
    });

    newSnippet.save(); //save snippet to database
});

module.exports = router;