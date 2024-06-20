function addTwoNum(a: number, b: number) {
  return a + b;
}

function calculate(
  a: number,
  b: number,
  calcFn: (a: number, b: number) => number
) {
  calcFn(a, b);
}

// calcFn: (a: number, b: number) => number
// calcFn should be of this signature function (a: number, b: number) => number

calculate(6, 9, addTwoNum);
// calculate function have 3 parameter, a:number, b: number and calcFn which is
// function and calcFn should be of this function signature
// Fn(a: number, b: number) => number
