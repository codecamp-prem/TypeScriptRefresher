/* Ok
let userName;  // :any
userName = 36;
userName = "Prem";
*/

let userName: string;
//userName = 24; // error Type 'number' is not assignable to type 'string'.
userName = "Prem"; // or let userName = "Prem" is same

// For Constant;
const AI_API_KEY = "DeaTH_OF_Google_SEarCH_FInally";
// No need to type annoted the constant, because constant always have initial type
// and from that type can be infered
