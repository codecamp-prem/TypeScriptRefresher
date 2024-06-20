//let user: any; // BAD PRACTICE
// let user: object; // BAD PRACTICE : object type doesn't give any
// hints regarding the structure of the object
// let user: object; DO Help to initiate empty object like
// user = {}

let user: {
  name: string;
  age: number;
  isMale: boolean;
  id: string | number; // union type feature
};
// After type annotation like this, user = {} is error now
// because use must have all the object key and type
//user ={name:'', age: 0, isMale: true, id: ''}; // Default like this are OK

user = {
  name: "Prem",
  age: 36,
  isMale: true,
  id: 666, // number OR String
};
