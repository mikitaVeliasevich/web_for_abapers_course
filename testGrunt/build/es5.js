"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

"use strict";

var R = require("ramda");

var square = function square(x) {
  return x * x;
};

var squares = R.chain(square, [1, 2, 3, 4, 5, 6, 7]);
document.getElementById("response").innerHTML = squares;

var User = function User(name, pass, email) {
  _classCallCheck(this, User);

  this.id = uuidv4();
  this.name = name;
  this.pass = pass;
  this.email = email;
};
//# sourceMappingURL=es5.js.map
