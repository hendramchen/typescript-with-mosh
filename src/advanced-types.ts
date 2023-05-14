// ===== type aliases
type Employee = {
  readonly id: number; // readonly make id can not be changed
  name: string;
  retire: (date: Date) => void;
};

let employee1: Employee = {
  id: 1,
  name: "Hendra",
  retire: (date) => console.log(date),
};

// ===== union types ( | )
// we combine type with | sign, to create union type
function kgToLgs(weight: number | string): number {
  // Narrowing
  if (typeof weight === "number") return weight * 2.2;
  else return parseInt(weight) * 2.2;
}

kgToLgs(10);
kgToLgs("10");

// ===== intersection type ( & )
// we combine type with (&), to create intersection type
type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

// ===== Literal (exact, specific)
let quantity: 100 = 100;

type Rating = 4 | 5;
type Metric = "cm" | "inch";

let rating: Rating = 5;

// ===== Nullable types
function greet(name: string | null | undefined) {
  if (name) console.log(name.toUpperCase());
  else console.log("Hola!");
}

greet(null);

// ===== Optional Chaining
type Customer = {
  birthday: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
// if (customer !== null)
//   console.log(customer.birthday);

// Optional property access operator
console.log(customer?.birthday);

// ===== The Nullish Coaelscing Operator
let speed: number | null = null;
let ride = {
  // Falsy (undefined, null, '', 0, false)
  // Nullish coalescing operator
  speed: speed ?? 30, // if speed is null then choose 30 otherwise choose speed
};

// Type Assertions
let phone = document.getElementById("phone");
// HTMLElement
// HTMLInputElement
// phone.value will be error because when we do mouse hover on phone variable
// it will has HTMLElement and HTMLElement has many type
// so we should assert this type
let phone1 = document.getElementById("phone") as HTMLInputElement;
phone1.value;
// or
let phone2 = <HTMLInputElement>document.getElementById("phone");
phone2.value;

// The unknown Type
function render(document: unknown) {
  // the calling method below will be error
  // document.toUpperCase();
  // document.move();
  // so we use Narrowing
  if (typeof document === "string") {
    document.toUpperCase();
  }
  if (typeof document === "number") {
    document.toFixed(2);
  }
}

// The never Type
// value that never occur
function processEvents(): never {
  while (true) {
    // infinite loop
    // read a message from queue
  }
}

processEvents();
console.log("hello world"); // never executed

function reject(message: string): never {
  throw new Error(message);
}

reject("...");
console.log("never executed because the reject throw an error");
