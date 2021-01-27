const express = require("express"); //import whatever is exported from express files 
const mongoose = require("mongoose");

// setup express server

const app = express(); // function that constricts app object

app.use(express.json());

app.listen(5000, () => console.log("server started on port 5000")); //deciding the port what to run the express server on with error function

//set up routers

app.use("/snippet", require("./routers/snippetRouter")); //whenever request comes in with /snippet use this (snippetRouter) as the middleware
