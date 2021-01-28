const router = require("express").Router();
const Task = require("../models/taskModel");

router.get("/", async (req, res) =>{ //Reading from database
    try{

    const tasks = await Task.find();
    res.json(tasks);
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

        const newTask = new Task({
            title, description, code      //create new snippet using model created from mongoose
        });

        const savedTask = await newTask.save(); //save snippet to database but also waits for promise to be resolved and returns document 

        res.json(savedTask);
    }
    catch (err) {
        res.status(500).send();
    }
});

router.put("/:id", async (req, res) =>{ //Update database 
    try {
        const{title,description,code} = req.body;
        const taskID = req.params.id;

        //validation

        if (!description && !code) {
            return res.status(400).json({ errorMessage: "You need to enter at least a discription or some code" });
        }

        if (!taskID)
            return res.status(400).json({ errorMessage: "Task ID not given" });

        const originalTask = await Task.findById(taskID);
        if (!originalTask)
            return res.status(400).json({ errorMessage: "No Task ID found" });

        originalTask.title = title;
        originalTask.description = description;
        originalTask.code = code;

        const savedTask = await originalTask.save();
        res.json(savedTask);
    }
    catch (err) {
        res.status(500).send();
    }


})







router.delete("/:id", async (req, res) => { //colon means its a parameter and express put it into req object / Delete item from database
    try {

        const taskID = req.params.id;

        //validation

        if (!taskID)
            return res.status(400).json({ errorMessage: "Task ID not given" });

        const existingTask = await Task.findById(taskID);
        if (!existingTask)
            return res.status(400).json({ errorMessage: "No Task ID found" });

        await existingTask.delete();

        res.json(existingTask);
    }
    catch (err) {
        res.status(500).send();
    }

});

module.exports = router;