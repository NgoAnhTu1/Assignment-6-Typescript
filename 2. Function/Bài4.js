function filterArray(arr, condition) {
    var ans = [];
    arr.forEach(function (x) {
        if (condition(x)) {
            ans.push(x);
        }
    });
    return ans;
}
var array1 = [1, 2, 3, 4, 99, 12, 234, 235, 12];
var newarray = filterArray(array1, function (x) { return x > 10; });
console.log(newarray);
var array2 = ["Hung", "Nam", "Manh"];
var newArray2 = filterArray(array2, function (x) { return x === "Hung"; });
console.log(newArray2.toString());
