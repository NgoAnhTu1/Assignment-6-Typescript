class PersonNew {
    private _name: string;
    private _age: number;
    constructor(name: string, age: number = 0) {
        this._name = name;
        this._age = age; 
    }

    get name(): string {
        return this._name;
    }

    set name(newName: string) {
        if (newName.trim() === "") {
            console.error("Name cannot be empty.");
            return;
        }
        this._name = newName;
    }

    get age(): number {
        return this._age;
    }

    set age(newAge: number) {
        if (newAge > 0 && newAge < 120) {
            this._age = newAge;
        } else {
            console.error(`Invalid age: ${newAge}. Age must be between 1 and 119.`);
        }
    }

    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

const validPerson = new PersonNew("Alice", 30);
console.log(validPerson.getDetails());

validPerson.age = 45;
console.log(validPerson.getDetails());

validPerson.age = -5;
validPerson.age = 150;

const anotherPerson = new PersonNew("Bob", 125); 
console.log(anotherPerson.getDetails());