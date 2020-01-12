const uuidv4 = require("uuid/v4");
class User {
    constructor(name, pass, email) {
        this.id = uuidv4();
        this.name = name;
        this.pass = pass;
        this.email = email;
    }
}

module.exports = User;
