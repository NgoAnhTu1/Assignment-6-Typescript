var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function addString() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    var text = "";
    if (rest.length === 0) {
        return text;
    }
    else {
        text += rest.join("+");
    }
    return text;
}
var strings = ["Hello", "Hi", "Bye"];
console.log(addString.apply(void 0, __spreadArray(__spreadArray([], strings, false), ["I need to work"], false)));
