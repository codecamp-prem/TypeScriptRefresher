// having type gaurds with union types is common
type Role = "admin" | "user" | "editor";

function performAction(action: string | number, role: Role) {
  if (role === "admin") {
    //...
  }
  if (role === "editor" && typeof action === "number") {
    //...
  }
}
