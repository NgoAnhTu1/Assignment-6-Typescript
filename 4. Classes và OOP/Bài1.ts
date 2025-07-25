class Animal {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    speak(): void {
        console.log(`${this.name} makes a sound.`);
    }
}
export default Animal;
const genericAnimal = new Animal("Generic Animal");
genericAnimal.speak();