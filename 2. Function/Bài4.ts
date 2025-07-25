function filterArray<T>(arr: T[], condition: (item: T) => boolean): T[] {
    const ans :T[]= [];
    arr.forEach( x => {
        if (condition(x)){
            ans.push(x);
        }
    });
    return ans;
}
const array1 = [1, 2, 3, 4, 99, 12, 234, 235,12];
const newarray = filterArray(array1, x => x>10);
console.log(newarray);

const array2 = ["Hung", "Nam", "Manh"];
const newArray2 = filterArray(array2, x => x ==="Hung");
console.log(newArray2.toString());
