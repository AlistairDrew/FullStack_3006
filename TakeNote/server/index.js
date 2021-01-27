const express = require("express"); //import whatever is exported from express files 
const mongoose = require("mongoose");

// setup express server

const app = express(); // function that constricts app object

app.listen(5000, () => console.log("server started on port 5000")); //deciding the port what to run the express server on with error function

app.get("/test", (req, res) => {
    res.send("some more data");
});
