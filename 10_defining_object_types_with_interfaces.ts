// Another option we have to create custom type or type aliase is 'interface'
// Same as 'type' : Not standard JavaScript keyword, keyword made available by TypeScript

// like 'type' name start with Capital letter. Not a Rule but universal rule
// many people follows.

// 'interface' type essentially for creating objects. Most commonly use to define
// object type

interface Credentials {
  username: string;
  password: string;
}
let cred: Credentials = {
  username: "password",
  password: "username",
};
