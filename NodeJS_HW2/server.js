const express = require("express");
const bodyParser = require("body-parser");

const users = require("./routes/users");

const app = express();

// Body Parser
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());

// Routes
app.use("/users", users);

app.get("/", function(req, res) {
    res.send("NodeJS + nedb");
});

// Server
app.listen(3000, function() {
    console.log("Server listening on port 3000!");
});
