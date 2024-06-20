function addition(a: number, b: number) {
  return a + b;
}

// We can outsource type defination
// We can create custome type or type aliase
// by using 'type' keyword which is not standard JavaScript keyword
// but instead a keyword made available by TypeScript
// 'type' keyword helps us to alias to other type
type AddFn = (a: number, b: number) => number; // we can reuse this in other place.

function calculateMe(
  a: number,
  b: number,
  calcFn: AddFn // instead of (a: number, b: number) => number
) {
  calcFn(a, b);
}

// for any other long type like union, object, array types
type NumOrStr = string | number; // use Alias NumOrStr instead of this union type
let adminId: NumOrStr = "admin123";

type Admin = {
  id: number;
  isSuperAdmin: boolean;
};

let admin: Admin = {
  id: 666,
  isSuperAdmin: false,
};
