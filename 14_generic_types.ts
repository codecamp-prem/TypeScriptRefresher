type Currency = "Euro" | "Pound" | "NPR";

let bankNote: Array<Currency> = ["Euro", "NPR"]; // Generic type
let bankNote1: Currency[] = ["NPR", "Pound"];

// Generic type are types that works together with another type
/*
"works together" simply means that a type (like 'Array') needs extra info.
(eg. the type of values that should be stored in the array)
 */
// so we can create our own generic types apart from built in generic type like Array

type DataStorage<T> = {
  storage: T[];
  add: (data: T) => void;
};

const textStorage: DataStorage<string> = {
  storage: [],
  add(data) {
    this.storage.push(data);
  },
};

// Also we can define Generic functions
function merge<T, U>(a: T, b: U) {
  return {
    ...a,
    ...b,
  };
}

const user = merge<{ name: string }, { age: number }>(
  { name: "Prem" },
  { age: 36 }
);
// user = {name:"Prem", age: 36}
// user.name is Prem
// user.age is 36

/* 
const user = merge<{ name: string }, { age: number }>(
  { name: "Prem" },
  { age: 36 }
);

can be written as

const user = merge(
  { name: "Prem" },
  { age: 36 }
);
*/
