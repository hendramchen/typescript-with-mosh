"use strict";
let employee1 = {
    id: 1,
    name: "Hendra",
    retire: (date) => console.log(date),
};
function kgToLgs(weight) {
    if (typeof weight === "number")
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
kgToLgs(10);
kgToLgs("10");
let textBox = {
    drag: () => { },
    resize: () => { },
};
let quantity = 100;
let rating = 5;
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log("Hola!");
}
greet(null);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
let speed = null;
let ride = {
    speed: speed !== null && speed !== void 0 ? speed : 30,
};
let phone = document.getElementById("phone");
let phone1 = document.getElementById("phone");
phone1.value;
let phone2 = document.getElementById("phone");
phone2.value;
function render(document) {
    if (typeof document === "string") {
        document.toUpperCase();
    }
    if (typeof document === "number") {
        document.toFixed(2);
    }
}
function processEvents() {
    while (true) {
    }
}
processEvents();
console.log("hello world");
function reject(message) {
    throw new Error(message);
}
reject("...");
console.log("never executed because the reject throw an error");
