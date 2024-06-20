// Assigning type to variable is extremly common

// Assigning function parameter type have some rules
//1.return type of this function will this infered type returned by return keyword
function add(a: number, b: number) {
  return a + b;
}

// 2. We also can define/explicitly set return type by fun() : return type
function adding(a: { val: number }, b: string): number {
  return a.val + parseInt(b);
}
// 3. if it doesn't return anything , return type is void by default
function adder(a: number, b: string) {
  console.log(`${a.toString()} with ${b}`);
}
