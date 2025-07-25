import Animal from './Bài1';
class Cat extends Animal {
    constructor(name: string) {
        super(name);
    }

    speak(): void {
        console.log("Meow!");
    }
}

const myCat = new Cat("Whiskers");
myCat.speak();