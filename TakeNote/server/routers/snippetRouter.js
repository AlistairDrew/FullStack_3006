const router = require("express").Router();
const Snippet = require("../models/snippetModel");

router.post("/", async (req,res) =>{ //also 
    try {
        const { title, description, code } = req.body; //Send title desc and code

        //Validation
        if (!description && !code) {
            return res.status(400).json({ errorMessage: "You need to enter at least a discription or some code" });
        }

        const newSnippet = new Snippet({
            title, description, code      //create new snippet using model created from mongoose
        });

        const savedSnippet = await newSnippet.save(); //save snippet to database but also waits for promise to be resolved and returns document 

        res.json(savedSnippet);
    }
    catch (err) {
        res.status(500).send();
    }
});

module.exports = router;