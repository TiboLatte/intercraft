const express = require("express");

const app = express();
const port = 3000;

app.use("/", (req,res,next) => {
    console.log("New request at : " + Date.now());
    next();
})

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/code.lua");
})




app.listen(port, () => {
    console.log("Listening on port : ", port);
})