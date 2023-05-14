"use strict";
var _a, _b;
class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
let pair = new KeyValuePair("1", "test");
pair.key.toUpperCase();
let pair2 = new KeyValuePair(1, "tost");
pair2.key.toFixed(2);
function wrapInArray(value) {
    return [value];
}
let arrNumber = wrapInArray(1);
let arrString = wrapInArray("abc");
class ArrayUtils {
    static wrapInArray(value) {
        return [value];
    }
}
let arrUtilNum = ArrayUtils.wrapInArray(1);
function fetch(url) {
    console.log(url);
    return { data: null, error: null };
}
let dataUser = fetch("url");
(_a = dataUser.data) === null || _a === void 0 ? void 0 : _a.username;
let dataProduct = fetch("url");
(_b = dataProduct.data) === null || _b === void 0 ? void 0 : _b.title;
function echo(value) {
    return value;
}
echo({ name: "a" });
function echo2(value) {
    return value;
}
class Person3 {
    constructor(name) {
        this.name = name;
    }
}
class Customer1 extends Person3 {
}
function echo3(value) {
    return value;
}
echo(new Person3("abc"));
class Store {
    constructor() {
        this._objects = [];
    }
    add(obj) {
        this._objects.push(obj);
    }
    find(property, value) {
        return this._objects.find((obj) => obj[property] === value);
    }
}
let store = new Store();
store.add({ title: "a", price: 1 });
store.find("title", "b");
store.find("price", 1);
let productItem = {
    name: "test",
    price: 10,
};
let product = {
    title: "product",
    price: 1,
};
