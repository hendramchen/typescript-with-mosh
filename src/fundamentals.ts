//===== Array
let numbers: number[] = [1.6, 2.4, 3.3];
numbers.forEach((num) => num.toFixed(2));

//===== Tuples
// type that has specific type and effective to use for 2 member of type
let user: [number, string] = [1, "Hendra"];
// every type return different autocomplete
user[0].toFixed(2);
user[1].toUpperCase();

//===== Enums
// const small = 1;
// const medium = 2;
// const large = 3;
// we can define value of the first type
// and the rest will follow base on the first value
enum Size {
  Small = 1,
  Medium,
  Large,
}
let mySize: Size = Size.Medium;

//===== Functions
// "noUnusedLocals": true, it will detect unuse variable in function
// "noUnusedParameters": true, // it will detect unuse parameter
// "noImplicitReturns": true, // we should explicitly anotate return type
function calculateTax(income: number, taxYear = 2022): number {
  if (taxYear < 2022) return income * 1.2;
  return income * 1.3;
}

//===== Objects
let employee: {
  readonly id: number; // readonly make id can not be changed
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "Hendra",
  retire: (date) => console.log(date),
};
/** === Summary ===
 * - Since TypeScript is a superset of JavaScript, it includes all the built-in types in JavaScript (eg number, string, boolean, object, etc) as well as additional types (eg any, unknown, never, enum, tuple, etc).
 * - In TypeScript, we set the type of our variables by annotating them.
 * - The any type can represent any kind of value. It’s something we should avoid as much as possible because it defeats the purpose of using TypeScript in the first place. A variable of type any can take any kind of value!
 * - Tuples are fixed-length arrays where each element has a specific type. We often use them for representing two or three related values.
 * - Enums represent a list of related constants. **/
//==================================================//
