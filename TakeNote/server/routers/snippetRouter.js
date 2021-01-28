const router = require("express").Router();
const Snippet = require("../models/snippetModel");

router.get("/", async (req, res) =>{ //Reading from database
    try{

    const snippets = await Snippet.find();
    res.json(snippets);
        console.log("Is this working");
    }
    catch(err){
        res.status(500).send();
    }
});


router.post("/", async (req,res) =>{ //Updating the database
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

router.put("/:id", async (req, res) =>{ //Update database 
    try {
        const{title,description,code} = req.body;
        const snippetID = req.params.id;

        //validation

        if (!description && !code) {
            return res.status(400).json({ errorMessage: "You need to enter at least a discription or some code" });
        }

        if (!snippetID)
            return res.status(400).json({ errorMessage: "Snippet ID not given" });

        const originalSnippet = await Snippet.findById(snippetID);
        if (!originalSnippet)
            return res.status(400).json({ errorMessage: "No Snippet ID found" });

        originalSnippet.title = title;
        originalSnippet.description = description;
        originalSnippet.code = code;

        const savedSnippet = await originalSnippet.save();
        res.json(savedSnippet);
    }
    catch (err) {
        res.status(500).send();
    }


})







router.delete("/:id", async (req, res) => { //colon means its a parameter and express put it into req object / Delete item from database
    try {

        const snippetID = req.params.id;

        //validation

        if (!snippetID)
            return res.status(400).json({ errorMessage: "Snippet ID not given" });

        const existingSnippet = await Snippet.findById(snippetID);
        if (!existingSnippet)
            return res.status(400).json({ errorMessage: "No Snippet ID found" });

        await existingSnippet.delete();

        res.json(existingSnippet);
    }
    catch (err) {
        res.status(500).send();
    }

});

module.exports = router;