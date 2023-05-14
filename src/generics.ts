// ===== Generic Classes =====
// Generic is about define template of type that
// we can assign type whatever we want
class KeyValuePair<K, V> {
  constructor(public key: K, public value: V) {}
}

let pair = new KeyValuePair<string, string>("1", "test");
pair.key.toUpperCase(); // pair can access methods of string

let pair2 = new KeyValuePair<number, string>(1, "tost");
pair2.key.toFixed(2); // pair2 can access methods of number

// ===== Generic Functions =====
function wrapInArray<T>(value: T) {
  return [value];
}

let arrNumber = wrapInArray(1);
let arrString = wrapInArray("abc");
// OR
class ArrayUtils {
  static wrapInArray<T>(value: T) {
    return [value];
  }
}

let arrUtilNum = ArrayUtils.wrapInArray(1);

// ===== Generic Interfaces =====
interface Result<T> {
  data: T | null;
  error: string | null;
}
// fetch<Template>(params: string): ReturnType<Template>
function fetch<T>(url: string): Result<T> {
  console.log(url);
  return { data: null, error: null };
}

interface User {
  username: string;
}

interface Product {
  title: string;
  price: number;
}

let dataUser = fetch<User>("url");
dataUser.data?.username;

let dataProduct = fetch<Product>("url");
dataProduct.data?.title;

// ===== Generic Constraints =====
function echo<T extends { name: string }>(value: T): T {
  return value;
}

echo({ name: "a" });
interface Person2 {
  name: string;
}

function echo2<T extends Person2>(value: T): T {
  return value;
}

class Person3 {
  constructor(public name: string) {}
}

class Customer1 extends Person3 {}

function echo3<T extends Person3>(value: T): T {
  return value;
}

echo(new Person3("abc"));

// ===== Keyof Operator =====
class Store<T> {
  protected _objects: T[] = [];

  add(obj: T): void {
    this._objects.push(obj);
  }

  // this will showing error or property not found
  // find(property: string, value: unknown): T | undefined {
  //   return this._objects.find(obj => obj[property] === value);
  // }

  // T is Product
  // keyof T => 'name' | 'price'
  find(property: keyof T, value: unknown): T | undefined {
    return this._objects.find((obj) => obj[property] === value);
  }
}

let store = new Store<Product>();
store.add({ title: "a", price: 1 });
store.find("title", "b");
store.find("price", 1);
// store.find('nonExistingProperty', 1); // this will catch bug because property doesn't exist

// ===== Type Mapping =====
// in this case we want to make Product item
// can be assign or can be read only
// the simple solution we just duplicate the interface property
// but that's not best practice, so we use type mapping
interface ProductItem {
  name: string;
  price: number;
}

type ReadOnlyProduct = {
  // index signature, keyof
  // this kind of looping
  // [Property in keyof ProductItem]: ProductItem[Property]
  readonly [K in keyof ProductItem]: ProductItem[K];
};

let productItem: ReadOnlyProduct = {
  name: "test",
  price: 10,
};

// productItem.name = 'abc'; can not assign to name property because readonly

// generic readonly
type ReadOnly<T> = {
  readonly [K in keyof T]: T[K];
};

let product: ReadOnly<Product> = {
  title: "product",
  price: 1,
};

// product.title = 'abc'; cannot assign, read-only

// generic optional
type Optional<T> = {
  [K in keyof T]?: T[K];
};
// nullable
type Nullable<T> = {
  [K in keyof T]?: T[K] | null;
};
