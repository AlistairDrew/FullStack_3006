const router = require("express").Router();

Router.get("/test", (req, res) => { //configure router with end point, request and response object 
res.send("Router test");
})

module.exports = router;