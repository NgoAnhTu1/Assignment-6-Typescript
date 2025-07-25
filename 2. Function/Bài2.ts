function addString(...rest: string[]): string{
    let text: string = ""
    if (rest.length === 0) {
        return text;
    } else {
        text += rest.join("+");
    }
    return text;
}

const strings = ["Hello", "Hi", "Bye"];
console.log(addString(...strings, "I need to work"));
