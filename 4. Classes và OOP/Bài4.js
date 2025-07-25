var PersonNew = /** @class */ (function () {
    function PersonNew(name, age) {
        if (age === void 0) { age = 0; }
        this._name = name;
        this._age = age;
    }
    Object.defineProperty(PersonNew.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (newName) {
            if (newName.trim() === "") {
                console.error("Name cannot be empty.");
                return;
            }
            this._name = newName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PersonNew.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (newAge) {
            if (newAge > 0 && newAge < 120) {
                this._age = newAge;
            }
            else {
                console.error("Invalid age: ".concat(newAge, ". Age must be between 1 and 119."));
            }
        },
        enumerable: false,
        configurable: true
    });
    PersonNew.prototype.getDetails = function () {
        return "Name: ".concat(this.name, ", Age: ").concat(this.age);
    };
    return PersonNew;
}());
var validPerson = new PersonNew("Alice", 30);
console.log(validPerson.getDetails());
validPerson.age = 45;
console.log(validPerson.getDetails());
validPerson.age = -5;
validPerson.age = 150;
var anotherPerson = new PersonNew("Bob", 125);
console.log(anotherPerson.getDetails());
