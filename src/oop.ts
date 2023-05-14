class Account {
  readonly id: number; // we should never change value of id, only for constructor
  owner: string;
  private _balance: number; // private member can not inheritance
  nickname?: string; // optional
  /**
   * typescript has 3 access control keywords
   * public, private, protected
   * the members is public by default
   */

  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this._balance = balance;
  }

  // other way to make constructor and we no need to declare member above
  // constructor(
  //   public readonly id: number,
  //   public owner: string,
  //   private _balance: number
  // ){}

  deposit(amount: number) {
    if (amount <= 0) throw new Error("Invalid amount");
    this._balance += amount;
  }

  // private calculateTax() {
  //   //
  // }

  // how to make setter and getter in typescript
  get balance(): number {
    return this._balance;
  }

  set balance(value: number) {
    if (value < 0) throw new Error("Invalid value");
    this._balance = value;
  }
}

let account = new Account(1, "Hendra", 0);
account.deposit(100);
console.log(typeof account); // it will return object
// so if we want check that type is true, we use instanceof
console.log(account instanceof Account);
// how to use it
// Union condition we can use narrowing
// if (typeof balance === 'number')
// but for class we use instanceof
// if (account instanceof Account) {}

//===== index signatures =====
class SeatAssignment {
  // A1, A2, ...
  // Mosh, John, ...
  // index signature property
  [seatNumber: string]: string;
}

let seats = new SeatAssignment();
seats.A1 = "Hendra";
seats["A2"] = "Manika";

//===== static members =====
class Ride {
  private static _activeRides: number = 0;

  start() {
    Ride._activeRides++;
  }
  stop() {
    Ride._activeRides--;
  }

  static get activeRides(): number {
    return Ride._activeRides;
  }
}

// create 2 instance
let ride1 = new Ride();
ride1.start();

let ride2 = new Ride();
ride2.start();
// single instance in memory
console.log(Ride.activeRides); // 2

//===== Inheritance =====
class Person {
  // short way to create construct and init the member properties
  constructor(public firstName: string, public lastName: string) {}
  // getter
  get fullName() {
    return this.firstName + " " + this.lastName;
  }

  walk() {
    console.log("Walking");
  }
}

class Student extends Person {
  // we no need to add access modifier for firstName and lastName
  constructor(public studentId: number, firstName: string, lastName: string) {
    // we have to use super keyword when use parent properties
    super(firstName, lastName);
  }

  takeTest() {
    console.log("Taking a test");
  }
}

let student = new Student(1, "Hendra", "Eka");

//===== Method Overriding
class Teacher extends Person {
  // override keyword should be explicit to modify the parent method
  override get fullName() {
    // we can do like this, but we just repeat the code
    // return 'Professor' + this.firstName + this.lastName;
    // we can reuse by using super
    return "Professor" + super.fullName;
  }
}

class Principal extends Person {
  override get fullName() {
    return "Principal" + super.fullName;
  }
}

// ===== Polymorphism =====
printNames([
  new Student(1, "John", "Smith"),
  new Teacher("Mosh", "Hamedani"),
  new Principal("Mary", "Smith"),
]);

function printNames(people: Person[]) {
  for (let person of people) console.log(person.fullName);
}

// ===== Abstract Classes and Methods =====
abstract class Shape {
  constructor(public color: string) {}

  abstract render(): void;
}

class Circle extends Shape {
  constructor(public radius: number, color: string) {
    super(color);
  }

  override render(): void {
    console.log("Rendering circle");
  }
}

// === abstract calendar example
// abstract class Calendar {
//   constructor(public name: string){}

//   abstract addEvent(): void;
//   abstract removeEvent(): void;
// }
//===== Interface =====
// abstract vs interface
// which on is better? it's depend
// if we just have properties and method without logic
// then it's better to use interface
// but if we have more logic inside abstract class
// then we can choose abstract class
interface Calendar {
  name: string;
  addEvent(): void;
  removeEvent(): void; // interface cannot have method implementation
}

interface CloudCalendar extends Calendar {
  sync(): void;
}

class GoogleCalendar implements Calendar {
  constructor(public name: string) {}

  addEvent(): void {
    // this logic is able to change
    throw new Error("Method not implemented.");
  }
  removeEvent(): void {
    throw new Error("Method not implemented.");
  }
}
