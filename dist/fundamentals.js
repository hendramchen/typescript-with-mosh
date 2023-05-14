"use strict";
let numbers = [1.6, 2.4, 3.3];
numbers.forEach((num) => num.toFixed(2));
let user = [1, "Hendra"];
user[0].toFixed(2);
user[1].toUpperCase();
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
let mySize = Size.Medium;
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
let employee = {
    id: 1,
    name: "Hendra",
    retire: (date) => console.log(date),
};
