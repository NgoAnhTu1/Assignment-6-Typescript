type User = {
    name: String;
    age ?: number;
    role: [string, number];
}

let user: User ={
    name: "Alice",
    age: 20,
    role: ["Alice", 20]
}

console.log(user);