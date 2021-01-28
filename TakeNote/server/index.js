const express = require("express"); //import whatever is exported from express files 
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

// setup express server

const app = express(); // function that constricts app object

app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000",
})
); //automatically sets up response for incoming requests to have header on it


app.listen(5000, () => console.log("server started on port 5000")); //deciding the port what to run the express server on with error function

//set up routers

app.use("/snippet", require("./routers/snippetRouter")); //whenever request comes in with /snippet use this (snippetRouter) as the middleware

//Connect to mongoDB

mongoose.connect(process.env.MDB_CONNECT_STRING, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}, (err) =>{
    if (err) return console.error(err);
    console.log("Connected to MongoDB");
});

//csvOV4pOSidwSeJN
//mongodb+srv://takenote:<password>@take-note.j23uw.mongodb.net/<dbname>?retryWrites=true&w=majority
//test