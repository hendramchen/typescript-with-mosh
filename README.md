# TypeScript with Mosh

## Fundamentals

## Advanced Types

- Using a type alias we can create a new name (alias) for a type. We often use type aliases to create custom types.
- With union types, we can allow a variable to take one of many types (eg number | string).
- With intersection types, we can combine multiple types into one (eg Draggable & Resizable).
- Using optional chaining (?.) we can simplify our code and remove the need for null checks.
- Using the Nullish Coalescing Operator we can fallback to a default value when dealing with null/undefined objects.
- Sometimes we know more about the type of a variable than the TypeScript compiler. In those situations, we can use the as keyword to specify a different type than the one inferred by the compiler. This is called type assertion.
- The unknown type is the type-safe version of any. Similar to any, it can represent any value but we cannot perform any operations on an unknown type without first narrowing to a more specific type.
- The never type represents values that never occur. We often use them to annotate functions that never return or always throw an error.

## OOP

## Generic

- Generics allow us to create reusable classes, interfaces and functions.
- A generic type has one or more generic type parameters specified in angle brackets.
- When using generic types, we should supply arguments for generic type parameters or let the compiler infer them (if possible).
- We can constrain generic type arguments by using the extends keyword after generic type parameters.
- When extending generic classes, we have three options: can pass on generic type parameters, so the derived classes will have the same generic type parameters. Alternatively, we can restrict or fix them.
- The keyof operator produces a union of the keys of the given object
- Using type mapping we can create new types based off of existing types. For example, we can create a new type with all the properties of another type where these properties are readonly, optional, etc
- TypeScript comes with several utility types that perform type mapping for us. Examples are: Partial<T>, Required<T>, Readonly<T>, etc.
- See the complete list of utility types:
  https://www.typescriptlang.org/docs/handbook/utility-types.html
