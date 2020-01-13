("use strict");

var R = require("ramda");

var square = function square(x) {
    return x * x;
};
var squares = R.chain(square, [1, 2, 3, 4, 5, 6, 7]);

document.getElementById("response").innerHTML = squares;

class User {
    constructor(name, pass, email) {
        this.id = uuidv4();
        this.name = name;
        this.pass = pass;
        this.email = email;
    }
}
