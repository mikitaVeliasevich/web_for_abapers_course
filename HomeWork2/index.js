nameField = document.getElementById("name");
changedName = document.getElementById("changedName");
changedNameHeader = document.getElementById("changedNameHeader");

var userName = prompt("Enter the name, plz");
nameField.innerHTML = userName;
if (hasNumber(userName) == true) {
    changedNameHeader.innerHTML = "Reversed Name";
    changedName.innerHTML = reverseString(userName);
} 
else {
    changedNameHeader.innerHTML = "UpperLowerCased Name";
    changedName.innerHTML = upperLowerCase(userName);
};

function hasNumber(myString) {
    return /[0-9]/.test(myString);
};

function reverseString(str) {
    return str
        .split("")
        .reverse()
        .join("");
};

function upperLowerCase(str) {
    str = str.split("");
    console.log(str);
    for (i = 0; i < str.length; i++) {
        if (i % 2 == 0) {
            str[i] = str[i].toUpperCase();
        } else {
            str[i] = str[i].toLowerCase();
        }
    };
    str = str.join("");
    return str;
};
