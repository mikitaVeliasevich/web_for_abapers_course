const User = require("./classes/UserES6");
const Worker = require("./classes/WorkerES5");
const express = require("express");
const crypto = require("crypto");

const users = [];
const workers = [];

users.push(
    new User(
        "Nikita",
        crypto
            .createHash("md5")
            .update("MyStRoNgPaSsWoRd2019!")
            .digest("hex"),
        "mikita.veliasevich@leverx.com"
    )
);
users.push(
    new User(
        "Danik",
        crypto
            .createHash("md5")
            .update("MyStRoNgPaSsWoRd2018!")
            .digest("hex"),
        "daniil.veliasevich@leverx.com"
    )
);
users.push(
    new User(
        "Anya",
        crypto
            .createHash("md5")
            .update("MyStRoNgPaSsWoRd2017!")
            .digest("hex"),
        "hanna.moiseichik@leverx.com"
    )
);

workers.push(new Worker("Никита", "Велесевич"));
workers.push(new Worker("Даник", "Велесевич"));
workers.push(new Worker("Анна", "Мойсейчик"));

const app = express();

app.get("/Users", function(req, res) {
    res.send(JSON.stringify(users));
});

app.get("/Workers", function(req, res) {
    res.send(JSON.stringify(workers));
});

app.get("/", function(req, res) {
    res.send("Use /Users and /Workers routes to read information");
});

app.listen(3000, function() {
    console.log("Server listening on port 3000!");
});
