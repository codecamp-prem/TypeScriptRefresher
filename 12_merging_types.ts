type Admin = {
  permissions: string[];
};
type User = {
  userName: string;
};

// type AppAdmin = Admin | User;
// will have either Admin OR User type, not a merge object

// To have merge object use AND operator
type AppAdmin = Admin & User;

let unoAdmin: AppAdmin = {
  permissions: ["create"],
  userName: "uno",
}; // should have both properties of Admin and User type

// With Interface too
interface Admin1 {
  permissions: string[];
}
interface User1 {
  userName: string;
}

interface AppAdmin1 extends Admin1, User1 {}
// or additional properties, method
/*interface AppAdmin1 extends Admin1, User1{
    star: string;
}*/
let tresAdmin: AppAdmin1 = {
  permissions: ["delete"],
  userName: "tres",
}; // should have both properties of Admin and User type. Same as unoAdmin

// literal types

//  either of this 'admin', 'user', 'editor' ONLY for role variable
let role: "admin" | "user" | "editor"; // error if role = 'any other value'

// let unoRole : 'admin'; //unoRole variable value can be only 'admin'
