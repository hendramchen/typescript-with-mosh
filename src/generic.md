# Summary

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
