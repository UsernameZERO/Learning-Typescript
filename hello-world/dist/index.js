"use strict";
// const small = 1;
// const medium = 2;
// const large = 3;
//Pascal scale
// initially starting value starts with 0
var Size;
(function (Size) {
    Size[Size["Small"] = 0] = "Small";
    Size[Size["Medium"] = 1] = "Medium";
    Size[Size["Large"] = 2] = "Large";
})(Size || (Size = {}));
let mySize = Size.Medium;
console.log(mySize);
// if we providing value starting then automatically it would increase
// next element with 1 increment
var Size1;
(function (Size1) {
    Size1[Size1["Small"] = 10] = "Small";
    Size1[Size1["Medium"] = 11] = "Medium";
    Size1[Size1["Large"] = 12] = "Large";
})(Size1 || (Size1 = {}));
let mySize1 = Size1.Large;
console.log(mySize1);
// if its string then we have to provide value to all
var Size2;
(function (Size2) {
    Size2["Small"] = "a";
    Size2["Medium"] = "b";
    Size2["Large"] = "c";
})(Size2 || (Size2 = {}));
let mySize2 = Size2.Small;
console.log(mySize2);
//# sourceMappingURL=index.js.map