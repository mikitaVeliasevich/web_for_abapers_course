function Worker(name, surname) {
    this.name = name;
    this.surname = surname;
    this.getName = function() {
        return this.name;
    };
    this.setName = function(newName) {
        this.name = newName;
    };
    this.getSurname = function() {
        return this.surname;
    };
    this.setSurname = function(newSurname) {
        this.surname = newSurname;
    };
}

Worker.prototype.getInfoAboutWorker = function() {
    return (
        "Worker name: " +
        this.getName() +
        "\n" +
        "Worker surname: " +
        this.getSurname() +
        "\n"
    );
};

module.exports = Worker;
